# 🚀 Simple Deployment Guide - Backend & Frontend on Render

## ✅ What Was Fixed

1. **Backend Build Command** - Changed to `npm install && npm run build`
2. **Simplified Login/Signup** - Now calls backend API directly
3. **Removed complex proxy** - Direct connection is simpler

---

## 📦 Step 1: Deploy Backend (Already Done!)

Your backend is already deployed at:
**https://perfume-900a.onrender.com**

### Verify Backend is Working:
Open in browser: https://perfume-900a.onrender.com/health

Should show:
```json
{
  "status": "healthy",
  "database": "connected"
}
```

---

## 🎨 Step 2: Deploy Frontend to Render

### Create New Web Service:

1. Go to **Render Dashboard** → Click **"New +"** → **"Web Service"**

2. **Connect Repository**: `osohbayr1016/perfume-1`

3. **Configure Service**:
   - **Name**: `perfume-frontend`
   - **Root Directory**: `front-end`
   - **Environment**: `Node`
   - **Region**: `Singapore` (same as backend)
   - **Branch**: `master`

4. **Build & Deploy Settings**:
   - **Build Command**: `npm install --legacy-peer-deps && npm run build`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

5. **Environment Variable** (IMPORTANT!):
   Click "Add Environment Variable":
   - **Key**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://perfume-900a.onrender.com`

6. Click **"Create Web Service"**

7. Wait 5-10 minutes for deployment

---

## 🔧 Step 3: Update Backend CORS

After frontend deploys, you'll get a URL like:
`https://perfume-frontend.onrender.com`

Update backend environment variable:

1. Go to **Backend Service** on Render
2. Click **Environment** tab
3. Update **FRONTEND_URL** to: `https://perfume-frontend.onrender.com`
4. Save and wait for redeploy

---

## ✅ Step 4: Test Everything

### Test Signup:
1. Go to `https://perfume-frontend.onrender.com/signup`
2. Fill in the form:
   - First Name: Test
   - Last Name: User
   - Email: test@example.com
   - Password: Test123!
   - Confirm Password: Test123!
3. Click "Бүртгүүлэх"
4. Should show alert: "Бүртгэл амжилттай!"
5. Redirects to login page

### Test Login:
1. Enter email: test@example.com
2. Enter password: Test123!
3. Click "Нэвтрэх"
4. Should show alert: "Амжилттай нэвтэрлээ!"
5. Redirects to home page

---

## 🐛 Troubleshooting

### Signup/Login Not Working?

**Check 1**: Backend is running
```
Visit: https://perfume-900a.onrender.com/health
Should return: {"status": "healthy"}
```

**Check 2**: Frontend has correct API URL
- Go to Render → Frontend Service → Environment
- Verify `NEXT_PUBLIC_API_URL` = `https://perfume-900a.onrender.com`

**Check 3**: Backend has correct FRONTEND_URL
- Go to Render → Backend Service → Environment
- Verify `FRONTEND_URL` matches your frontend URL

**Check 4**: Check Browser Console
- Open Developer Tools (F12)
- Go to Console tab
- Look for error messages
- Common error: "CORS policy" means FRONTEND_URL is wrong

### CORS Error?

If you see:
```
Access to fetch at 'https://perfume-900a.onrender.com/api/auth/signup' 
from origin 'https://perfume-frontend.onrender.com' has been blocked by CORS policy
```

**Fix**:
1. Go to Backend Service → Environment
2. Update `FRONTEND_URL` to **exact** frontend URL
3. Save (backend will redeploy)
4. Wait 2-3 minutes
5. Try again

---

## 📋 Environment Variables Summary

### Backend Environment Variables:
```
NODE_ENV=production
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
FRONTEND_URL=https://perfume-frontend.onrender.com
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

### Frontend Environment Variables:
```
NEXT_PUBLIC_API_URL=https://perfume-900a.onrender.com
```

---

## ⚡ Important Notes

1. **First Request is Slow**: Free tier services sleep after 15 minutes. First request may take 50 seconds.

2. **Both Services Must Be Awake**: If signup doesn't work, wait a moment - backend might be waking up.

3. **HTTPS Only**: Both services use HTTPS automatically.

4. **Database Required**: Make sure MongoDB Atlas is set up and MONGODB_URI is correct.

---

## 🎉 Success!

Once both services are deployed:
- **Backend**: https://perfume-900a.onrender.com
- **Frontend**: https://perfume-frontend.onrender.com (your URL)

Users can:
✅ Sign up
✅ Log in  
✅ Browse perfumes
✅ View collections
✅ View about page

---

## 📞 Need Help?

Common issues and solutions:

| Issue | Solution |
|-------|----------|
| Signup shows error | Check backend /health endpoint |
| CORS error | Update FRONTEND_URL in backend |
| Page doesn't load | Check build logs in Render |
| Database error | Verify MONGODB_URI in backend |

Your perfume store is now live! 🎊

