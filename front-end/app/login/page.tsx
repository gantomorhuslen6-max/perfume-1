"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simple validation - if user fills in email and password, they're logged in
    if (!formData.email || !formData.password) {
      setError("И-мэйл болон нууц үг оруулна уу");
      setIsLoading(false);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Зөв и-мэйл хаяг оруулна уу");
      setIsLoading(false);
      return;
    }

    // Simulate login process
    setTimeout(() => {
      // Create a mock user object
      const mockUser = {
        id: "1",
        firstName: "Хэрэглэгч",
        lastName: "Нэр",
        email: formData.email,
        role: formData.email.includes('admin') ? 'admin' : 'user'
      };

      // Create a mock token
      const mockToken = "mock-token-" + Date.now();

      // Store in localStorage
      localStorage.setItem("token", mockToken);
      localStorage.setItem("user", JSON.stringify(mockUser));
      
      alert("Амжилттай нэвтэрлээ!");
      router.push("/");
      setIsLoading(false);
    }, 1000); // Simulate network delay
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0ece4' }}>
      <main className="py-16" style={{ backgroundColor: '#f0ece4' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <h1 
                className="text-black"
                style={{ 
                  fontSize: '48px', 
                  fontWeight: '300', 
                  fontFamily: '"Glossy Display", sans-serif',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}
              >
                PERFUME
              </h1>
            </div>
          </div>

          {/* Login Form Section */}
          <section className="mb-20">
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 
                  className="text-black mb-8 text-center"
                  style={{ 
                    fontSize: '24px', 
                    fontWeight: '300', 
                    fontFamily: '"Glossy Display", sans-serif'
                  }}
                >
                  Тавтай морил
                </h2>
                
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ 
                        fontSize: '14px', 
                        fontWeight: '700', 
                        fontFamily: '"Sofia Pro", sans-serif'
                      }}
                    >
                      И-мэйл хаяг
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="И-мэйл хаягаа оруулна уу"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="password" 
                      className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ 
                        fontSize: '14px', 
                        fontWeight: '700', 
                        fontFamily: '"Sofia Pro", sans-serif'
                      }}
                    >
                      Нууц үг
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Нууц үгээ оруулна уу"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ 
                      fontSize: '16px', 
                      fontWeight: '700', 
                      fontFamily: '"Sofia Pro", sans-serif'
                    }}
                  >
                    {isLoading ? "Нэвтэрч байна..." : "Нэвтрэх"}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-600 text-sm">
                    Бүртгэл байхгүй юу?{" "}
                    <a 
                      href="/signup" 
                      className="text-black hover:text-gray-600 underline font-semibold"
                    >
                      Энд дарж бүртгүүлнэ үү
                    </a>
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    Админ эрх авахын тулд и-мэйл хаягт "admin" гэсэн үг агуулсан хаяг ашиглана уу
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
