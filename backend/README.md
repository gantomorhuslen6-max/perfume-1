# Perfume Backend API

A modern Node.js backend API server built with TypeScript and Express.js.

## Features

- 🚀 **Express.js 5** - Latest version with enhanced performance
- 🔒 **Security** - Helmet, CORS, Rate limiting
- 📝 **TypeScript** - Full type safety and modern ES2022 features
- 🔄 **Hot Reload** - Nodemon for development
- 📊 **Logging** - Morgan for request logging
- 🛡️ **Validation** - Express-validator for input validation
- 🔐 **Authentication** - JWT support with bcryptjs

## Getting Started

### Prerequisites

- Node.js 18+ (latest LTS recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy environment configuration:
```bash
cp env.example .env
```

3. Update the `.env` file with your configuration

### Development

Start the development server with hot reload:
```bash
npm run dev
```

### Production

Build and start the production server:
```bash
npm run build
npm start
```

## Project Structure

```
src/
├── controllers/     # Route controllers
├── middleware/      # Custom middleware
├── models/         # Data models
├── routes/         # API routes
├── utils/          # Utility functions
└── index.ts        # Main server file
```

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api` - API information

## Environment Variables

- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Environment (development/production)
- `FRONTEND_URL` - Frontend URL for CORS
- `JWT_SECRET` - JWT secret key
- `JWT_EXPIRES_IN` - JWT expiration time

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm test` - Run tests

## Security Features

- Helmet for security headers
- CORS configuration
- Rate limiting (100 requests per 15 minutes)
- Input validation
- JWT authentication ready
- Password hashing with bcryptjs

## License

ISC
