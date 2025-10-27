import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/database';
import authRoutes from './routes/auth';
import aboutRoutes from './routes/about';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// Logging middleware
app.use(morgan('combined'));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// API routes
app.get('/api', (req: Request, res: Response) => {
  res.json({
    message: 'Perfume API Server',
    version: '1.0.0',
      endpoints: {
        health: '/health',
        api: '/api',
        upload: '/api/upload',
        auth: '/api/auth',
        about: '/api/about'
      }
  });
});

// Authentication routes
app.use('/api/auth', authRoutes);

// About content routes
app.use('/api/about', aboutRoutes);

// Image upload endpoint (temporarily disabled)
// app.post('/api/upload', upload.single('image'), (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No image file provided' });
//     }
//     
//     return res.json({
//       message: 'Image uploaded successfully',
//       imageUrl: req.file.path,
//       publicId: req.file.filename
//     });
//   } catch (error) {
//     console.error('Upload error:', error);
//     return res.status(500).json({ error: 'Failed to upload image' });
//   }
// });

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl
  });
});

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    // Connect to MongoDB (only if MONGODB_URI is provided)
    if (process.env.MONGODB_URI) {
      await connectDB();
    } else {
      console.log('⚠️  MONGODB_URI not provided, running without database connection');
    }
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📊 Health check: http://localhost:${PORT}/health`);
      console.log(`🔗 API endpoint: http://localhost:${PORT}/api`);
      console.log(`📤 Upload endpoint: http://localhost:${PORT}/api/upload`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;

