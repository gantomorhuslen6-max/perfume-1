// Test script to check admin access
const API_BASE = 'http://localhost:3001';

async function testAdminAccess() {
  console.log('Testing admin access...');
  
  // Check if backend is running
  try {
    const healthResponse = await fetch(`${API_BASE}/health`);
    if (healthResponse.ok) {
      console.log('✅ Backend server is running');
    } else {
      console.log('❌ Backend server is not responding');
      return;
    }
  } catch (error) {
    console.log('❌ Cannot connect to backend server:', error.message);
    return;
  }

  // Check if user is logged in
  const token = localStorage.getItem('token');
  if (!token) {
    console.log('❌ No token found in localStorage');
    console.log('Please login first');
    return;
  }
  console.log('✅ Token found in localStorage');

  // Test auth endpoint
  try {
    const authResponse = await fetch(`${API_BASE}/api/auth/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (authResponse.ok) {
      const userData = await authResponse.json();
      console.log('✅ User authenticated:', userData.user);
      
      if (userData.user.role === 'admin') {
        console.log('✅ User has admin role');
      } else {
        console.log('❌ User does not have admin role. Current role:', userData.user.role);
        console.log('Please update user role to "admin" in the database');
      }
    } else {
      const error = await authResponse.json();
      console.log('❌ Authentication failed:', error.message);
    }
  } catch (error) {
    console.log('❌ Auth test failed:', error.message);
  }

  // Test admin endpoint
  try {
    const adminResponse = await fetch(`${API_BASE}/api/about/admin/all`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (adminResponse.ok) {
      console.log('✅ Admin endpoint accessible');
    } else {
      const error = await adminResponse.json();
      console.log('❌ Admin endpoint failed:', error.message);
    }
  } catch (error) {
    console.log('❌ Admin endpoint test failed:', error.message);
  }
}

// Run the test
testAdminAccess();
