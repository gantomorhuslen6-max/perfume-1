# Admin Page Access Troubleshooting Guide

## Quick Debug Steps

1. **Visit the debug page**: Go to `http://localhost:3000/admin-debug` to see detailed error information

2. **Check if backend is running**: Make sure your backend server is running on port 3001

3. **Check your user role**: You need to have admin role to access the admin panel

## Common Issues and Solutions

### Issue 1: "Cannot access admin page" - No specific error

**Possible Causes:**
- Backend server not running
- User doesn't have admin role
- Authentication token expired
- API endpoint not accessible

**Solutions:**

1. **Start the backend server:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Check if you're logged in:**
   - Go to `/login` and login with your account
   - Check browser console for any errors

3. **Update your user role to admin:**
   - Connect to your MongoDB database
   - Run this command:
   ```javascript
   db.users.updateOne(
     { email: "your-email@example.com" },
     { $set: { role: "admin" } }
   )
   ```

### Issue 2: Backend server not responding

**Check:**
- Is the backend server running on port 3001?
- Are there any compilation errors?
- Check backend console for errors

**Solution:**
```bash
cd backend
npm run build
npm run dev
```

### Issue 3: Authentication errors

**Check:**
- Is your token valid?
- Has your token expired?
- Is the JWT_SECRET configured?

**Solution:**
- Logout and login again
- Check if JWT_SECRET is set in backend/.env

### Issue 4: User role not admin

**Check:**
- What is your current user role?
- Visit `/admin-debug` to see your current role

**Solution:**
Update your role in MongoDB:
```javascript
// Connect to MongoDB
use your-database-name

// Update user role
db.users.updateOne(
  { email: "your-email@example.com" },
  { $set: { role: "admin" } }
)

// Verify the update
db.users.findOne({ email: "your-email@example.com" })
```

## Step-by-Step Setup

### 1. Ensure Backend is Running
```bash
cd backend
npm run build
npm run dev
```

### 2. Create Admin User
- Register a new user at `/signup`
- Update the user's role to 'admin' in MongoDB

### 3. Seed Initial Data
```bash
cd backend
npm run seed
```

### 4. Test Access
- Login with your admin account
- Visit `/admin-debug` to check everything is working
- If all checks pass, visit `/admin`

## Environment Variables

Make sure these are set in your backend/.env file:
```env
MONGODB_URI=mongodb://localhost:27017/perfume
JWT_SECRET=your-secret-key
FRONTEND_URL=http://localhost:3000
```

And in your frontend/.env.local file:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Debug Tools

1. **Admin Debug Page**: Visit `/admin-debug` for detailed diagnostics
2. **Browser Console**: Check for JavaScript errors
3. **Network Tab**: Check API requests/responses
4. **Backend Logs**: Check backend console for errors

## Still Having Issues?

1. Check the browser console for any JavaScript errors
2. Check the Network tab to see if API calls are failing
3. Verify your MongoDB connection
4. Make sure all dependencies are installed
5. Try clearing browser cache and localStorage

## Quick Test Commands

```bash
# Test backend health
curl http://localhost:3001/health

# Test API endpoints
curl http://localhost:3001/api

# Check if about routes are working
curl http://localhost:3001/api/about
```
