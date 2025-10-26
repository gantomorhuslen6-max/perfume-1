# Backend Deployment Guide

## Render.com Configuration

### Service Settings:
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Root Directory**: Leave empty (should deploy from backend root)
- **Node Version**: 18.x or 20.x

### Environment Variables:
Make sure to set these in your Render dashboard:
- `NODE_ENV=production`
- `MONGODB_URI=your_mongodb_connection_string`
- `JWT_SECRET=your_jwt_secret_key`
- `FRONTEND_URL=your_frontend_url`

### Important Notes:
1. The `package.json` is configured to use `server.cjs` as the main entry point
2. The start script runs `node server.cjs`
3. Make sure Render is deploying from the backend directory, not the src directory
4. If you're still getting the ENOENT error, check that Render's "Root Directory" setting is empty or set to "." (current directory)

### Troubleshooting:
- If you get "Could not read package.json" error, verify that Render is looking in the correct directory
- The error `/opt/render/project/src/package.json` suggests Render is looking in the `src` folder instead of the root
- Make sure your Render service is configured to deploy from the backend root directory
