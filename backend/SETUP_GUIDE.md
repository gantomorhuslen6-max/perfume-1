# Complete Authentication Setup Guide

## 🚨 Current Issue: Backend Server Not Starting

The backend server is not starting because MongoDB is not running locally. Here are the solutions:

## Solution 1: Use MongoDB Atlas (Cloud - Recommended)

1. **Go to MongoDB Atlas**: https://www.mongodb.com/atlas
2. **Create Free Account**: Sign up for free
3. **Create Cluster**: Choose free tier (M0)
4. **Get Connection String**: Copy the connection string
5. **Update .env file**:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/perfume_db?retryWrites=true&w=majority
   ```

## Solution 2: Install MongoDB Locally

### Windows:
1. **Download MongoDB**: https://www.mongodb.com/try/download/community
2. **Install MongoDB**: Run the installer
3. **Start MongoDB Service**:
   ```bash
   net start MongoDB
   ```
4. **Or start manually**:
   ```bash
   mongod --dbpath C:\data\db
   ```

### Using Docker:
```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## Solution 3: Quick Test Without MongoDB

Let me create a version that works without MongoDB for testing:

### Test Backend (No Database):
```bash
cd backend
node -e "
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running!' });
});

app.post('/api/auth/signup', (req, res) => {
  console.log('Signup request:', req.body);
  res.json({ 
    message: 'Test signup successful', 
    token: 'test-token',
    user: { id: '1', email: req.body.email }
  });
});

app.post('/api/auth/login', (req, res) => {
  console.log('Login request:', req.body);
  res.json({ 
    message: 'Test login successful', 
    token: 'test-token',
    user: { id: '1', email: req.body.email }
  });
});

app.listen(3001, () => {
  console.log('🚀 Test server running on port 3001');
});
"
```

## 🔧 Steps to Fix Your Authentication:

### 1. Choose MongoDB Solution:
- **Easiest**: Use MongoDB Atlas (cloud)
- **Local**: Install MongoDB locally
- **Test**: Use the test backend above

### 2. Update Environment:
```bash
cd backend
# Edit .env file with correct MONGODB_URI
```

### 3. Start Backend:
```bash
cd backend
npm run dev
```

### 4. Start Frontend:
```bash
cd front-end
npm run dev
```

### 5. Test Authentication:
- Go to: http://localhost:3000/signup
- Fill form and submit
- Check browser console for errors
- Check backend console for logs

## 🐛 Debugging Steps:

1. **Check if backend is running**:
   ```bash
   curl http://localhost:3001/health
   ```

2. **Check MongoDB connection**:
   ```bash
   mongosh "mongodb://localhost:27017/perfume_db"
   ```

3. **Check browser console**:
   - Open Developer Tools (F12)
   - Look for network errors
   - Check console logs

4. **Check backend logs**:
   - Look for MongoDB connection errors
   - Check for TypeScript compilation errors

## 📋 Current Status:

✅ **Frontend**: Login/Signup pages created
✅ **Backend**: Authentication routes created  
✅ **API Integration**: Proxy routes created
❌ **MongoDB**: Not running/connected
❌ **Backend Server**: Not starting due to MongoDB

## 🎯 Next Steps:

1. **Set up MongoDB** (choose one solution above)
2. **Start backend server**
3. **Test authentication flow**
4. **Fix any remaining issues**

Your authentication system is properly built - it just needs MongoDB to be running!
