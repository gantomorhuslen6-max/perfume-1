# Admin Panel Setup Guide

This guide explains how to set up and use the admin panel for managing the about page content.

## Prerequisites

1. Backend server running on port 3001
2. Frontend server running on port 3000
3. MongoDB database connected
4. User with admin role

## Setup Instructions

### 1. Create Admin User

First, you need to create a user with admin role. You can do this by:

1. Register a new user through the signup page
2. Manually update the user's role in MongoDB:

```javascript
// Connect to MongoDB and update user role
db.users.updateOne(
  { email: "your-admin-email@example.com" },
  { $set: { role: "admin" } }
)
```

### 2. Seed Initial Content

Run the seed script to populate the database with initial about page content:

```bash
cd backend
npm run seed
```

This will create initial content for all sections of the about page.

### 3. Access Admin Panel

1. Login with your admin account
2. Click on your profile dropdown in the header
3. Select "Админ панел" (Admin Panel)
4. You'll be redirected to `/admin`

## Admin Panel Features

### Content Management

The admin panel allows you to:

- **View all content**: See all about page content organized by sections
- **Add new content**: Create new content blocks for any section
- **Edit content**: Modify existing content including title, subtitle, content, and images
- **Delete content**: Remove content blocks permanently
- **Toggle visibility**: Activate/deactivate content without deleting it
- **Reorder content**: Set the order of content within sections

### Content Sections

The about page is organized into the following sections:

- **hero**: Main hero section
- **brand**: Brand information section
- **story**: Company history section
- **features**: Product features section
- **unique**: Unique selling points section
- **subscribe**: Newsletter subscription section

### Content Structure

Each content item has the following fields:

- **Section**: Which section the content belongs to
- **Title**: Main heading for the content
- **Subtitle**: Optional subtitle (displayed in italic)
- **Content**: Main text content
- **Image URL**: Optional image to display with the content
- **Order**: Display order within the section (lower numbers appear first)
- **Active Status**: Whether the content is visible on the website

## API Endpoints

The admin system uses the following API endpoints:

### Public Endpoints
- `GET /api/about` - Get all active content
- `GET /api/about/section/:section` - Get content for specific section

### Admin Endpoints (Require Authentication)
- `GET /api/about/admin/all` - Get all content (including inactive)
- `POST /api/about/admin` - Create new content
- `PUT /api/about/admin/:id` - Update existing content
- `DELETE /api/about/admin/:id` - Delete content
- `PATCH /api/about/admin/:id/toggle` - Toggle content active status

## Security

- All admin endpoints require authentication
- Only users with `admin` role can access admin functions
- JWT tokens are used for authentication
- Tokens expire after 7 days

## Troubleshooting

### Common Issues

1. **Cannot access admin panel**: Ensure your user has admin role
2. **Content not showing**: Check if content is marked as active
3. **Images not loading**: Verify image URLs are correct and accessible
4. **API errors**: Check backend server logs for detailed error messages

### Environment Variables

Make sure these environment variables are set:

```env
MONGODB_URI=mongodb://localhost:27017/perfume
JWT_SECRET=your-secret-key
FRONTEND_URL=http://localhost:3000
```

## Development

To add new features to the admin panel:

1. Update the `AboutContent` model if needed
2. Add new API routes in `backend/src/routes/about.ts`
3. Update the admin dashboard UI in `front-end/app/admin/page.tsx`
4. Test thoroughly before deploying

## Support

For issues or questions about the admin panel, check:

1. Backend server logs
2. Browser console for frontend errors
3. Network tab for API request/response details
