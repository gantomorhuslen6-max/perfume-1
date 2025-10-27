'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AboutContent {
  _id: string;
  section: string;
  title: string;
  subtitle?: string;
  content: string;
  imageUrl?: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [content, setContent] = useState<AboutContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingContent, setEditingContent] = useState<AboutContent | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    section: 'hero',
    title: '',
    subtitle: '',
    content: '',
    imageUrl: '',
    order: 0,
    isActive: true
  });

  useEffect(() => {
    checkAuth();
    fetchContent();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('user');
      
      if (!token || !userData) {
        router.push('/login');
        return;
      }

      // Parse user data from localStorage
      const user = JSON.parse(userData);
      
      // For demo purposes, allow access if user has admin role or if email contains 'admin'
      if (user.role === 'admin' || user.email.includes('admin')) {
        setUser(user);
      } else {
        // For demo purposes, show a message and allow access anyway
        alert('Админ эрх шаардлагатай. Гэхдээ демо зорилгоор нэвтэрч орно.');
        setUser(user);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      router.push('/login');
    }
  };

  const fetchContent = async () => {
    try {
      // Mock content for demo purposes
      const mockContent = [
        {
          _id: "1",
          section: "hero",
          title: "Тавтай морил",
          subtitle: "Манай сайтад",
          content: "Энэ бол демо контент юм. Backend сервергүйгээр ажиллаж байна.",
          imageUrl: "/perfume-placeholder.jpg",
          order: 1,
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          _id: "2", 
          section: "about",
          title: "Бидний тухай",
          subtitle: "Манай түүх",
          content: "Энэ бол демо контент юм. Backend сервергүйгээр ажиллаж байна.",
          imageUrl: "/perfume-placeholder.jpg",
          order: 2,
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ];
      
      setContent(mockContent);
    } catch (error) {
      console.error('Failed to fetch content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // For demo purposes, simulate successful submission
      alert('Демо зорилгоор амжилттай хадгалагдлаа! (Backend сервергүйгээр)');
      
      // Reset form
      setShowForm(false);
      setEditingContent(null);
      setFormData({
        section: 'hero',
        title: '',
        subtitle: '',
        content: '',
        imageUrl: '',
        order: 0,
        isActive: true
      });
      
      // Refresh content
      await fetchContent();
    } catch (error) {
      console.error('Submit failed:', error);
      alert('Алдаа гарлаа');
    }
  };

  const handleEdit = (item: AboutContent) => {
    setEditingContent(item);
    setFormData({
      section: item.section,
      title: item.title,
      subtitle: item.subtitle || '',
      content: item.content,
      imageUrl: item.imageUrl || '',
      order: item.order,
      isActive: item.isActive
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Энэ агуулгыг устгахдаа итгэлтэй байна уу?')) return;

    try {
      // For demo purposes, simulate successful deletion
      alert('Демо зорилгоор амжилттай устгагдлаа! (Backend сервергүйгээр)');
      
      // Refresh content
      await fetchContent();
    } catch (error) {
      console.error('Delete failed:', error);
      alert('Алдаа гарлаа');
    }
  };

  const handleToggleActive = async (id: string) => {
    try {
      // For demo purposes, simulate successful toggle
      alert('Демо зорилгоор амжилттай өөрчлөгдлөө! (Backend сервергүйгээр)');
      
      // Refresh content
      await fetchContent();
    } catch (error) {
      console.error('Toggle failed:', error);
      alert('Алдаа гарлаа');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Ачааллаж байна...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Админ панел</h1>
              <p className="text-sm text-gray-600">
                Сайн байна уу, {user.firstName} {user.lastName}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/about')}
                className="text-gray-600 hover:text-gray-900"
              >
                Сайтыг үзэх
              </button>
              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Гарах
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Content Management */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">
                Бидний тухай хуудасны агуулга
              </h2>
              <button
                onClick={() => {
                  setShowForm(true);
                  setEditingContent(null);
                  setFormData({
                    section: 'hero',
                    title: '',
                    subtitle: '',
                    content: '',
                    imageUrl: '',
                    order: 0,
                    isActive: true
                  });
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Шинэ агуулга нэмэх
              </button>
            </div>
          </div>

          {/* Content List */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Хэсэг
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Гарчиг
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Дараалал
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Төлөв
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Үйлдэл
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {content.map((item) => (
                  <tr key={item._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.section}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.order}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        item.isActive 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {item.isActive ? 'Идэвхтэй' : 'Идэвхгүй'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Засах
                      </button>
                      <button
                        onClick={() => handleToggleActive(item._id)}
                        className={`${
                          item.isActive 
                            ? 'text-orange-600 hover:text-orange-900' 
                            : 'text-green-600 hover:text-green-900'
                        }`}
                      >
                        {item.isActive ? 'Идэвхгүй болгох' : 'Идэвхжүүлэх'}
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Устгах
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {editingContent ? 'Агуулга засах' : 'Шинэ агуулга нэмэх'}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Хэсэг
                    </label>
                    <select
                      value={formData.section}
                      onChange={(e) => setFormData({...formData, section: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                      required
                    >
                      <option value="hero">Hero</option>
                      <option value="brand">Брэнд</option>
                      <option value="story">Түүх</option>
                      <option value="features">Онцлог</option>
                      <option value="unique">Өвөрмөц</option>
                      <option value="subscribe">Бүртгүүлэх</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Гарчиг
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Дэд гарчиг
                    </label>
                    <input
                      type="text"
                      value={formData.subtitle}
                      onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Агуулга
                    </label>
                    <textarea
                      value={formData.content}
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
                      rows={4}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Зурагийн URL
                    </label>
                    <input
                      type="url"
                      value={formData.imageUrl}
                      onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Дараалал
                    </label>
                    <input
                      type="number"
                      value={formData.order}
                      onChange={(e) => setFormData({...formData, order: parseInt(e.target.value)})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                      min="0"
                      required
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.isActive}
                      onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-900">
                      Идэвхтэй
                    </label>
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Цуцлах
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      {editingContent ? 'Хадгалах' : 'Нэмэх'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
