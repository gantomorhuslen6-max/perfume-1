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
        <Header />

        {children}

        {/* Footer */}
        <footer className="bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h5 className="font-semibold mb-4">Үнэртэн</h5>
                <ul className="space-y-2 text-sm">
                  <li key="men"><a href="/perfumes" className="hover:text-gray-300">Эрэгтэйчүүдэд зориулсан үнэртэн</a></li>
                  <li key="women"><a href="/perfumes" className="hover:text-gray-300">Эмэгтэйчүүдэд зориулсан үнэртэн</a></li>
                  <li key="all"><a href="/perfumes" className="hover:text-gray-300">Үнэртэн</a></li>
                  <li key="collections"><a href="/collections" className="hover:text-gray-300">Цуглуулга</a></li>
                  <li key="history"><a href="/about" className="hover:text-gray-300">Түүх</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4">үйлчлүүлэгчийн тусламж</h5>
                <ul className="space-y-2 text-sm">
                  <li key="store"><a href="#" className="hover:text-gray-300">Дэлгүүр олох</a></li>
                  <li key="gift"><a href="#" className="hover:text-gray-300">Бэлэг</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Нууцлал болон нөхцөл</h5>
                <ul className="space-y-2 text-sm">
                  <li key="terms"><a href="#" className="hover:text-gray-300">Худалдааны нөхцөл</a></li>
                  <li key="usage"><a href="#" className="hover:text-gray-300">Хэрэглээний нөхцөл</a></li>
                  <li key="privacy"><a href="#" className="hover:text-gray-300">Нууцлалын бодлого</a></li>
                  <li key="cookies"><a href="#" className="hover:text-gray-300">Cookie бодлого</a></li>
                  <li key="delivery"><a href="#" className="hover:text-gray-300">Хүргэлт болон төлбөр</a></li>
                  <li key="returns"><a href="#" className="hover:text-gray-300">Хүргэлт болон буцаах</a></li>
                  <li key="disputes"><a href="#" className="hover:text-gray-300">Маргааны шийдвэрлэлт</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Тусламж</h5>
                <ul className="space-y-2 text-sm">
                  <li key="about"><a href="/about" className="hover:text-gray-300">Бидний тухай</a></li>
                  <li key="contact"><a href="#" className="hover:text-gray-300">Холбоо барих</a></li>
                  <li key="faq"><a href="#" className="hover:text-gray-300">Түгээмэл асуулт</a></li>
                </ul>
                <div className="mt-6">
                  <h5 className="font-semibold mb-4">Олон нийтийн сүлжээ</h5>
                  <div className="flex space-x-4">
                    <a key="twitter" href="#" className="hover:text-gray-300">X</a>
                    <a key="youtube" href="#" className="hover:text-gray-300">YouTube</a>
                    <a key="facebook" href="#" className="hover:text-gray-300">Facebook</a>
                    <a key="instagram" href="#" className="hover:text-gray-300">Instagram</a>
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
