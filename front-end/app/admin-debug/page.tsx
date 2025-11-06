'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '../utils/api';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

interface DebugInfo {
  timestamp: string;
  steps: string[];
  backendRunning?: boolean;
  hasToken?: boolean;
  user?: User;
  isAdmin?: boolean;
  authError?: string | unknown;
  adminEndpointWorking?: boolean;
  adminEndpointError?: string | unknown;
}

export default function AdminDebug() {
  const router = useRouter();
  const [debugInfo, setDebugInfo] = useState<DebugInfo>({
    timestamp: '',
    steps: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    debugAdminAccess();
  }, []);

  const debugAdminAccess = async () => {
    const info: DebugInfo = {
      timestamp: new Date().toISOString(),
      steps: []
    };

    // Step 1: Check if backend is running
    try {
      const healthResponse = await fetch(`${API_BASE}/health`);
      if (healthResponse.ok) {
        info.backendRunning = true;
        info.steps.push('✅ Backend server is running');
      } else {
        info.backendRunning = false;
        info.steps.push('❌ Backend server is not responding');
        setDebugInfo(info);
        setLoading(false);
        return;
      }
    } catch (error) {
      info.backendRunning = false;
      info.steps.push(`❌ Cannot connect to backend server: ${error}`);
      setDebugInfo(info);
      setLoading(false);
      return;
    }

    // Step 2: Check token
    const token = localStorage.getItem('token');
    if (!token) {
      info.hasToken = false;
      info.steps.push('❌ No token found in localStorage');
      info.steps.push('Please login first');
      setDebugInfo(info);
      setLoading(false);
      return;
    }
    info.hasToken = true;
    info.steps.push('✅ Token found in localStorage');

    // Step 3: Test auth endpoint
    try {
      const authResponse = await fetch(`${API_BASE}/api/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (authResponse.ok) {
        const userData = await authResponse.json();
        info.user = userData.user;
        info.steps.push('✅ User authenticated successfully');
        
        if (userData.user.role === 'admin') {
          info.isAdmin = true;
          info.steps.push('✅ User has admin role');
        } else {
          info.isAdmin = false;
          info.steps.push(`❌ User does not have admin role. Current role: ${userData.user.role}`);
          info.steps.push('Please update user role to "admin" in the database');
        }
      } else {
        const error = await authResponse.json();
        info.authError = error.message;
        info.steps.push(`❌ Authentication failed: ${error.message}`);
      }
    } catch (error) {
      info.authError = error;
      info.steps.push(`❌ Auth test failed: ${error}`);
    }

    // Step 4: Test admin endpoint
    if (info.isAdmin) {
      try {
        const adminResponse = await fetch(`${API_BASE}/api/about/admin/all`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (adminResponse.ok) {
          info.adminEndpointWorking = true;
          info.steps.push('✅ Admin endpoint accessible');
        } else {
          const error = await adminResponse.json();
          info.adminEndpointError = error.message;
          info.steps.push(`❌ Admin endpoint failed: ${error.message}`);
        }
      } catch (error) {
        info.adminEndpointError = error;
        info.steps.push(`❌ Admin endpoint test failed: ${error}`);
      }
    }

    setDebugInfo(info);
    setLoading(false);
  };

  const goToLogin = () => {
    router.push('/login');
  };

  const goToAdmin = () => {
    router.push('/admin');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Debugging admin access...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Access Debug</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Debug Results</h2>
          <div className="space-y-2">
            {debugInfo.steps?.map((step: string, index: number) => (
              <div key={index} className="text-sm">{step}</div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Raw Debug Info</h2>
          <pre className="text-xs bg-gray-100 p-4 rounded overflow-auto">
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </div>

        <div className="flex space-x-4">
          {!debugInfo.hasToken && (
            <button
              onClick={goToLogin}
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Go to Login
            </button>
          )}
          
          {debugInfo.isAdmin && debugInfo.adminEndpointWorking && (
            <button
              onClick={goToAdmin}
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
            >
              Go to Admin Panel
            </button>
          )}
          
          <button
            onClick={debugAdminAccess}
            className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700"
          >
            Refresh Debug
          </button>
        </div>

        {debugInfo.user && !debugInfo.isAdmin && (
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-800">To Fix Admin Access:</h3>
            <p className="text-yellow-700 mt-2">
              Your user account needs to be updated to have admin role. 
              Please run this MongoDB command:
            </p>
            <pre className="bg-yellow-100 p-2 rounded mt-2 text-sm">
              {`db.users.updateOne(
  { email: "${debugInfo.user.email}" },
  { $set: { role: "admin" } }
)`}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
