import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clive Christian - Дэлхийн хамгийн сайхан үнэртэн",
  description: "Clive Christian дэлхийн хамгийн сайхан үнэртэн үйлдвэрлэдэг. Зөвхөн тэрхүү, гоо сайхны итгэлтэй.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
        <header className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-black">PERFUME</h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="/perfumes" className="text-black hover:text-gray-600">Үнэртэн</a>
                <a href="/collections" className="text-black hover:text-gray-600">Цуглуулга</a>  
                <a href="/about" className="text-black hover:text-gray-600">Бидний тухай</a>
              </nav>
              <div className="flex items-center space-x-4">
                <button className="text-black hover:text-gray-600">Нэвтрэх</button>
              </div>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="bg-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li><a href="/" className="text-gray-500 hover:text-gray-700">Нүүр</a></li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900">Бидний тухай</li>
              </ol>
            </nav>
          </div>
        </div>

        {children}

        {/* Footer */}
        <footer className="bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h5 className="font-semibold mb-4">Үнэртэн</h5>
                <ul className="space-y-2 text-sm">
                  <li><a href="/perfumes" className="hover:text-gray-300">Эрэгтэйчүүдэд зориулсан үнэртэн</a></li>
                  <li><a href="/perfumes" className="hover:text-gray-300">Эмэгтэйчүүдэд зориулсан үнэртэн</a></li>
                  <li><a href="/perfumes" className="hover:text-gray-300">Үнэртэн</a></li>
                  <li><a href="/collections" className="hover:text-gray-300">Цуглуулга</a></li>
                  <li><a href="/about" className="hover:text-gray-300">Түүх</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4">үйлчлүүлэгчийн тусламж</h5>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-gray-300">Дэлгүүр олох</a></li>
                  <li><a href="#" className="hover:text-gray-300">Бэлэг</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Нууцлал болон нөхцөл</h5>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-gray-300">Худалдааны нөхцөл</a></li>
                  <li><a href="#" className="hover:text-gray-300">Хэрэглээний нөхцөл</a></li>
                  <li><a href="#" className="hover:text-gray-300">Нууцлалын бодлого</a></li>
                  <li><a href="#" className="hover:text-gray-300">Cookie бодлого</a></li>
                  <li><a href="#" className="hover:text-gray-300">Хүргэлт болон төлбөр</a></li>
                  <li><a href="#" className="hover:text-gray-300">Хүргэлт болон буцаах</a></li>
                  <li><a href="#" className="hover:text-gray-300">Маргааны шийдвэрлэлт</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Тусламж</h5>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about" className="hover:text-gray-300">Бидний тухай</a></li>
                  <li><a href="#" className="hover:text-gray-300">Холбоо барих</a></li>
                  <li><a href="#" className="hover:text-gray-300">Түгээмэл асуулт</a></li>
                </ul>
                <div className="mt-6">
                  <h5 className="font-semibold mb-4">Олон нийтийн сүлжээ</h5>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-300">X</a>
                    <a href="#" className="hover:text-gray-300">YouTube</a>
                    <a href="#" className="hover:text-gray-300">Facebook</a>
                    <a href="#" className="hover:text-gray-300">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 Clive Christian Perfume Limited 3rd Floor, 32 Brook Street, Mayfair, London, W1K 5DH, United Kingdom, registration number 03538453</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
