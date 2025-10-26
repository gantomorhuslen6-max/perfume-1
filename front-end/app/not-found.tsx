import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f0ece4] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-light mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
          404
        </h1>
        <h2 className="text-2xl font-light mb-8" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
          Хуудас олдсонгүй
        </h2>
        <p className="text-gray-700 mb-8 max-w-md mx-auto">
          Уучлаарай, таны хайж буй хуудас олдсонгүй. Энэ хуудас шилжүүлэгдсэн эсвэл устгасан байж болно.
        </p>
        <Link 
          href="/"
          className="inline-block border border-black text-black px-8 py-3 hover:bg-black hover:text-white transition-colors uppercase text-sm tracking-wider"
        >
          Нүүр хуудас руу буцах
        </Link>
      </div>
    </div>
  );
}
