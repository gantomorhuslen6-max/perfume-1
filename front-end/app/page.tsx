'use client';

import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './components/ProductCard';
import BannerCarousel from './components/BannerCarousel';
import { perfumes } from './data/perfumes';

export default function Home() {
  // Get featured perfumes
  const featuredPerfumes = perfumes.filter(p => p.badges.includes('шилдэг борлуулалт')).slice(0, 4);
  const newPerfumes = perfumes.filter(p => p.badges.includes('шинэ')).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f0ece4]">
      {/* Hero Banner Carousel */}
      <BannerCarousel />

      {/* Featured Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Шилдэг борлуулалт
            </h2>
            <p className="text-gray-700">Хамгийн ихээр худалдаалдаг үнэртэн</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPerfumes.map((perfume) => (
              <ProductCard key={perfume.id} perfume={perfume} />
            ))}
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Цуглуулгууд
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-4xl mx-auto">
            {/* Original Collection */}
            <Link 
              href="/collections#original" 
              className="border border-black text-black px-12 py-6 hover:bg-black hover:text-white transition-colors font-semibold text-sm uppercase tracking-wider text-center"
            >
              Анхны цуглуулга
            </Link>

            {/* Noble Collection */}
            <Link 
              href="/collections#noble" 
              className="border border-black text-black px-12 py-6 hover:bg-black hover:text-white transition-colors font-semibold text-sm uppercase tracking-wider text-center"
            >
              Эрхэмсэг цуглуулга
            </Link>

            {/* Crown Collection */}
            <Link 
              href="/collections#crown" 
              className="border border-black text-black px-12 py-6 hover:bg-black hover:text-white transition-colors font-semibold text-sm uppercase tracking-wider text-center"
            >
              Титэм цуглуулга
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      {newPerfumes.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Шинэ бүтээгдэхүүн
              </h2>
              <p className="text-gray-700">Шинэ нэмэгдсэн үнэртэн</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newPerfumes.map((perfume) => (
                <ProductCard key={perfume.id} perfume={perfume} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Brand Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-gray-600 tracking-widest mb-4">1872 оноос хойш</p>
              <h2 className="text-5xl font-light mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Манай түүх
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                Clive Christian дэлхийн хамгийн сайхан үнэртэн үйлдвэрлэдэг. Зөвхөн тэрхүү, гоо сайхны итгэлтэй.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                1999 онд Clive Christian OBE - 1872 онд үүссэн алдартай Crown Perfumery компанийг худалдаж авсан.
              </p>
              <Link 
                href="/about"
                className="inline-block border border-black text-black px-8 py-3 hover:bg-black hover:text-white transition-colors uppercase text-sm tracking-wider"
              >
                Дэлгэрэнгүй үзэх
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://www.clivechristian.com/cdn/shop/articles/blog-list-image-worlds-most-exp-perfume_1000X1000.jpg?v=1725605317"
                alt="Clive Christian цуглуулга"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Бүртгүүлэх
          </h3>
          <h4 className="text-lg font-semibold mb-8">
            Мэдээ болон онцгой саналын талаар анх мэдэх
          </h4>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="И-мэйл хаягаа оруулна уу" 
                className="flex-1 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-black px-6 py-3 hover:bg-gray-200 transition-colors uppercase tracking-wide">
                Бүртгүүлэх
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-left">
              Хайрцаг сонгосноор би Clive Christian-аас хувийн сурталчилгааны мессеж болон саналыг хүлээн авахыг зөвшөөрч байна. Энэ мэдээллийг и-мэйл, SMS, утас эсвэл шуудангаар илгээж болно. Хэзээ ч биднээс сурталчилгааны үйл ажиллагааг зогсоохыг хүсэж болно.
              <br />
              Дэлгэрэнгүй мэдээллийг манай <a href="#" className="underline">нууцлалын бодлогоос</a> үзнэ үү
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
