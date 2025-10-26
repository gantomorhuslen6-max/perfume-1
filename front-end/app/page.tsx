import Image from 'next/image';
import Link from 'next/link';
import CollectionSection from './components/CollectionSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0ece4]">
      {/* Hero Section */}
      <section className="hero-section relative h-[70vh] flex items-center justify-center">
        <Image
          src="https://cdn.shopify.com/s/files/1/0658/6433/5618/files/about-intro-img.png"
          alt="Clive Christian"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light mb-8" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Дэлхийн хамгийн сайхан үнэртэн
          </h1>
          <p className="text-xl md:text-2xl mb-12">
            1872 оноос хойшх үнэртний урлаг
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/perfumes"
              className="bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors"
            >
              Үнэртэн үзэх
            </Link>
            <Link 
              href="/collections"
              className="border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors"
            >
              Цуглуулга
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Онцлох цуглуулгууд
            </h2>
            <p className="text-gray-700 text-lg">Манай алдартай цуглуулгууд</p>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Original Collection */}
            <Link href="/collections#original" className="group">
              <div className="relative h-96 overflow-hidden">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0658/6433/5618/files/1872-mas.png"
                  alt="Анхны цуглуулга"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-light mb-2">Анхны цуглуулга</h3>
                  <p className="text-sm opacity-90">1999 оноос хойш дурсагдах</p>
                </div>
              </div>
            </Link>

            {/* Noble Collection */}
            <Link href="/collections#noble" className="group">
              <div className="relative h-96 overflow-hidden">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0658/6433/5618/files/noble1.png"
                  alt="Эрхэмсэг цуглуулга"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-light mb-2">Эрхэмсэг цуглуулга</h3>
                  <p className="text-sm opacity-90">2016 оноос хойш</p>
                </div>
              </div>
            </Link>

            {/* Crown Collection */}
            <Link href="/collections#crown" className="group">
              <div className="relative h-96 overflow-hidden">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0658/6433/5618/files/crown1.png"
                  alt="Титэм цуглуулга"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-light mb-2">Титэм цуглуулга</h3>
                  <p className="text-sm opacity-90">2020 оноос хойш</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Шилдэг борлуулалт
            </h2>
            <p className="text-gray-700 text-lg">Хамгийн ихээр худалдаалдаг үнэртэн</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Sample featured products */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group">
                <div className="relative aspect-3/4 bg-gray-100 mb-4 overflow-hidden">
                  <Image
                    src={`https://cdn.shopify.com/s/files/1/0658/6433/5618/files/${item === 1 ? '1872-fem' : item === 2 ? 'no1-mas' : item === 3 ? 'jump-kiss-hedonistic' : 'crab-apple-blossom'}.png`}
                    alt="Үнэртэн"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 uppercase tracking-wide">
                    шилдэг борлуулалт
                  </span>
                </div>
                <h3 className="text-sm font-normal text-black mb-2">
                  {item === 1 ? '1872 Эмэгтэй' : item === 2 ? 'No.1 Эрэгтэй' : item === 3 ? 'Үсэрч гараад намайг үнс' : 'Личиний модны цэцэг'}
                </h3>
                <p className="text-xs text-gray-600 mb-2">
                  {item === 1 ? 'бергамот, пачули' : item === 2 ? 'нуцлагас, сантала мод' : item === 3 ? 'матэтэ цай, лабданум' : 'алимны цэцэг, сантала мод'}
                </p>
                <p className="text-sm text-black">
                  {item === 1 ? '1,150,000 ₮' : item === 2 ? '2,420,000 ₮' : item === 3 ? '1,820,000 ₮' : '1,490,000 ₮'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                1999 онд Clive Christian OBE - 1872 онд үүссэн алдартай Crown Perfumery компанийг худалдаж авсан. Манай өвөг дээдсийн өв нь Queen Victoria-гийн титэмийг үнэртний бүх таг дээр бахархалтайгаар зогсоож байгааг харж болно.
              </p>
              <Link 
                href="/about"
                className="inline-block border border-black text-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
              >
                Дэлгэрэнгүй үзэх
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://cdn.shopify.com/s/files/1/0680/9514/8334/files/02_0fcb4aaf-778a-4a83-9ab6-9c73042e6a41.jpg?v=1673874033"
                alt="Clive Christian цуглуулга"
                width={600}
                height={600}
                className="w-full h-auto"
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