import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0ece4' }}>
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-black">CLIVE CHRISTIAN</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-black hover:text-gray-600">Үнэртэн</a>
              <a href="#" className="text-black hover:text-gray-600">Цуглуулга</a>
              <a href="#" className="text-black hover:text-gray-600">Бэлэг</a>
              <a href="#" className="text-black hover:text-gray-600">Түүх</a>
              <a href="#" className="text-black hover:text-gray-600">Бидний тухай</a>
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
              <li><a href="#" className="text-gray-500 hover:text-gray-700">Нүүр</a></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900">Бидний тухай</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16" style={{ backgroundColor: '#f0ece4' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-sm text-gray-600 tracking-widest">1872 оноос хойш</span>
            </div>
            <h1 
              className="text-black mb-16"
              style={{ 
                fontSize: '72px', 
                fontWeight: '300', 
                fontFamily: '"Glossy Display", sans-serif',
                textAlign: 'start'
              }}
            >
              Бидний тухай
            </h1>
          </div>

          {/* About our Brand Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 
                className="text-black mb-2"
                style={{ 
                  fontSize: '18px', 
                  fontWeight: '700', 
                  fontFamily: '"Sofia Pro", sans-serif'
                }}
              >
                Бидний брэнд
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                clive christian дэлхийн хамгийн сайхан үнэртэн үйлдвэрлэдэг.
              </p>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mt-4">
                Зөвхөн тэрхүү, гоо сайхны итгэлтэй.
              </p>
            </div>
            
            {/* Hero Image */}
            <div className="max-w-2xl mx-auto mb-12">
              <Image
                src="https://cdn.shopify.com/s/files/1/0658/6433/5618/files/about-intro-img_480x480.png?v=1667396732"
                alt="Clive Christian Perfume"
                width={480}
                height={480}
                className="w-full h-auto max-w-md mx-auto"
                priority
              />
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 
                className="text-black mb-6 text-center"
                style={{ 
                  fontSize: '18px', 
                  fontWeight: '700', 
                  fontFamily: '"Sofia Pro", sans-serif'
                }}
              >
                Бидний брэнд
              </h3>
              <div className="text-center mb-8">
                <h4 
                  className="text-gray-800 mb-4"
                  style={{ 
                    fontSize: '24px', 
                    fontWeight: '300', 
                    fontFamily: '"Glossy Display", sans-serif',
                    fontStyle: 'italic'
                  }}
                >
                  цаг хугацаанаас үл хамаарах сонгодог.
                </h4>
                <p 
                  className="text-gray-600"
                  style={{ fontSize: '14px' }}
                >
                  урьдчилан төлөвлөлтгүй хийсэн.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                Гоо сайхны орц ашиглан, хүчтэй болон цогц найрлагатай, дээд зэргийн урлагийн чанартай - баян, цэвэр үнэртний таашаалд зориулсан. Хааны Их Британий түүхийг ирээдүйн хараатай хослуулан цаг хугацаанаас гадуур зогсох. Өндөр илэрхийлэлтэй, өвөрмөц хувийн үнэртэн - өөрийгөө илэрхийлэх хамгийн дээд хэлбэр.
              </p>
            </div>
          </section>

          {/* Where Our Story Began Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h3 
                className="text-black mb-6 text-center"
                style={{ 
                  fontSize: '18px', 
                  fontWeight: '700', 
                  fontFamily: '"Sofia Pro", sans-serif'
                }}
              >
                Бидний түүх эхэлсэн газар
              </h3>
              <div className="text-center mb-8">
                <h4 
                  className="text-gray-800 mb-4"
                  style={{ 
                    fontSize: '24px', 
                    fontWeight: '300', 
                    fontFamily: '"Glossy Display", sans-serif',
                    fontStyle: 'italic'
                  }}
                >
                  1999 онд Clive Christian OBE - 1872 онд үүссэн алдартай Crown Perfumery компанийг худалдаж авсан.
                </h4>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Clive Christian-ийн алдартай цуглуулгууд нь компанийн үнэртний баян түүхийг ирээдүйн хараатай бүтээлчээр хослуулдаг. Манай өвөг дээдсийн өв нь манай алдартай титэмдээр илэрхийлэгддэг бөгөөд энэ эрхийг анх 1872 онд Queen Victoria өөрөө Crown Perfumery компанид олгосон.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Одоо ч Clive Christian үнэртний бүх савныг тодорхойлдог дүрс болох Queen Victoria-гийн титэмийг үнэртний бүх таг дээр бахархалтайгаар зогсож байгааг харж болно. Энэ бол талархлын илэрхийлэл болгон өгсөн байнгын дурсгал бөгөөд Их Британий хамгийн агуу хаант засаглалын нэгтэй байсан маш онцгой хувийн харилцааг тэмдэглэдэг.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0658/6433/5618/files/left_480x480.jpg?v=1667396926"
                    alt="Crown Perfumery өвөг дээдсийн өв"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Features Of Our Perfumes Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h3 
                className="text-black mb-6 text-center"
                style={{ 
                  fontSize: '18px', 
                  fontWeight: '700', 
                  fontFamily: '"Sofia Pro", sans-serif'
                }}
              >
                Манай үнэртний онцлог
              </h3>
              <div className="text-center mb-8">
                <h4 
                  className="text-gray-800 mb-4"
                  style={{ 
                    fontSize: '24px', 
                    fontWeight: '300', 
                    fontFamily: '"Glossy Display", sans-serif',
                    fontStyle: 'italic'
                  }}
                >
                  Clive Christian зөвхөн онцгой концентрацитай үнэртэн үйлдвэрлэдэг.
                </h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-center mb-6">
                Урт хугацааны сэтгэгдэл болон хэрэглэгчид гүнзгий туршлага өгөхөд зориулж сав бүрт 20% эсвэл түүнээс дээш үнэртний тос агуулдаг. Манай холимог нь үнэртний ертөнцөд өвөрмөц цогц чанартай. Clive Christian үнэртэн бүрт 120-аас 300 хүртэл өөр орц олддог.
              </p>
              <p className="text-gray-700 leading-relaxed text-center mb-12">
                Энэ цогц чанар нь хэрэглэгч бүрт өвөрмөц туршлага үүсгэдэг, хэрэглэгчийн арьсанд хөгжиж буй үнэр - жинхэнэ өөрийгөө илэрхийлэх. Зөвхөн хамгийн сайхан орцуудыг ашигладаг, энэ нь төгс хөгжүүлсэн 50 жилийн Энэтхэгийн сандал мод, хамгийн төгс дамаск сарнай, хамгийн ховор шафран эсвэл хамгийн сүүлийн үеийн үнэртний технологи байх эсэхээс үл хамааран.
              </p>
              
              {/* Perfume Images Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="relative">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0658/6433/5618/files/00_e73dda32-06c2-4a02-b4cf-e70c8ba27933_480x480.jpg?v=1667396947"
                    alt="Clive Christian үнэртний цуглуулга"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0658/6433/5618/files/03_2048x2048.jpg?v=1667397125"
                    alt="Дээд зэргийн үнэртний орц"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0658/6433/5618/files/05_480x480.jpg?v=1667397136"
                    alt="Люкс үнэртний сав"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0658/6433/5618/files/06_480x480.jpg?v=1667397146"
                    alt="Гоо сайхны урлагийн чанар"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Unique classic Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h3 
                className="text-black mb-6 text-center"
                style={{ 
                  fontSize: '18px', 
                  fontWeight: '700', 
                  fontFamily: '"Sofia Pro", sans-serif'
                }}
              >
                Өвөрмөц сонгодог
              </h3>
              <div className="text-center mb-8">
                <h4 
                  className="text-gray-800 mb-4"
                  style={{ 
                    fontSize: '24px', 
                    fontWeight: '300', 
                    fontFamily: '"Glossy Display", sans-serif',
                    fontStyle: 'italic'
                  }}
                >
                  Clive Christian дэлхийн хамгийн сайхан үнэртэн үйлдвэрлэдэг
                </h4>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Манай анхны цуглуулга зэрэг бүтээлч сонгодогуудыг Addictive Arts цувралынхаа шинэлэг шийдлүүдтэй хослуулсан баян нюанстай портфолио бүхий Clive Christian нь жинхэнэ, цаг хугацаанаас үл хамаарах урлагийн болон баян, цогц үнэртнийг үнэлдэг хүмүүст зориулсан.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Гоо сайхны орц ашиглан, хүчтэй болон цогц найрлагатай, дээд зэргийн урлагийн чанартай - баян, цэвэр үнэртний таашаалд зориулсан. Хааны Их Британий түүхийг ирээдүйн хараатай хослуулан цаг хугацаанаас гадуур зогсох. Өндөр илэрхийлэлтэй, өвөрмөц хувийн үнэртэн - өөрийгөө илэрхийлэх хамгийн дээд хэлбэр.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0680/9514/8334/files/02_0fcb4aaf-778a-4a83-9ab6-9c73042e6a41.jpg?v=1673874033"
                    alt="Clive Christian цуглуулга"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Subscribe Section */}
          <section className="bg-white py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h3 
                className="text-black mb-4"
                style={{ 
                  fontSize: '24px', 
                  fontWeight: '300', 
                  fontFamily: '"Glossy Display", sans-serif'
                }}
              >
                Бүртгүүлэх
              </h3>
              <h4 
                className="text-gray-700 mb-8"
                style={{ 
                  fontSize: '18px', 
                  fontWeight: '700', 
                  fontFamily: '"Sofia Pro", sans-serif'
                }}
              >
                Мэдээ болон онцгой саналын талаар анх мэдэх
              </h4>
              <div className="max-w-md mx-auto">
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="И-мэйл хаягаа оруулна уу" 
                    className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors">
                    Бүртгүүлэх
                  </button>
                </div>
                <p className="text-xs text-gray-600 mt-4 text-left">
                  Хайрцаг сонгосноор би Clive Christian-аас хувийн сурталчилгааны мессеж болон саналыг хүлээн авахыг зөвшөөрч байна. Энэ мэдээллийг и-мэйл, SMS, утас эсвэл шуудангаар илгээж болно. Хэзээ ч биднээс сурталчилгааны үйл ажиллагааг зогсоохыг хүсэж болно.
                  <br />
                  Дэлгэрэнгүй мэдээллийг манай <a href="#" className="underline">нууцлалын бодлогоос</a> үзнэ үү
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-semibold mb-4">Үнэртэн</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-300">Эрэгтэйчүүдэд зориулсан үнэртэн</a></li>
                <li><a href="#" className="hover:text-gray-300">Эмэгтэйчүүдэд зориулсан үнэртэн</a></li>
                <li><a href="#" className="hover:text-gray-300">Үнэртэн</a></li>
                <li><a href="#" className="hover:text-gray-300">Цуглуулга</a></li>
                <li><a href="#" className="hover:text-gray-300">Түүх</a></li>
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
                <li><a href="#" className="hover:text-gray-300">Бидний тухай</a></li>
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
    </div>
  );
}