'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { perfumes } from '../../data/perfumes';
import { useCart } from '../../contexts/CartContext';
import ProductCard from '../../components/ProductCard';

export default function PerfumeDetail() {
  const params = useParams();
  const perfumeId = params.id as string;
  const perfume = perfumes.find(p => p.id === perfumeId);
  const { addToCart, getItemQuantity } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');

  if (!perfume) {
    return (
      <div className="min-h-screen bg-[#f0ece4] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Үнэртэн олдсонгүй
          </h1>
          <Link href="/perfumes" className="text-black hover:underline">
            ← Үнэртэн руу буцах
          </Link>
        </div>
      </div>
    );
  }

  // Get related perfumes (same collection, excluding current)
  const relatedPerfumes = perfumes
    .filter(p => p.collection === perfume.collection && p.id !== perfume.id)
    .slice(0, 3);

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' ₮';
  };

  return (
    <div className="min-h-screen bg-[#f0ece4]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-black">Нүүр</Link>
          <span>/</span>
          <Link href="/perfumes" className="hover:text-black">Үнэртэн</Link>
          <span>/</span>
          <span className="text-black">{perfume.nameMN}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative">
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              {perfume.imageUrl ? (
                <Image
                  src={perfume.imageUrl}
                  alt={perfume.nameMN}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gray-200"></div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {perfume.badges.includes('шилдэг борлуулалт') && (
                <span className="bg-black text-white text-xs px-3 py-1 uppercase tracking-wide">
                  шилдэг борлуулалт
                </span>
              )}
              {perfume.badges.includes('шинэ') && (
                <span className="bg-white text-black text-xs px-3 py-1 uppercase tracking-wide border border-black">
                  шинэ
                </span>
              )}
            </div>

            {/* Title */}
            <div>
              <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">
                {perfume.collection.toUpperCase()} ЦУГЛУУЛГА
              </p>
              <h1 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                {perfume.nameMN}
              </h1>

              {/* Scent Notes Preview */}
              <div className="flex flex-wrap gap-2 mb-6">
                {perfume.scentNotes.top.map((note, idx) => (
                  <span key={idx} className="text-sm text-gray-600">
                    {note}
                    {idx < perfume.scentNotes.top.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>

              {/* Price */}
              <p className="text-3xl font-light mb-6">
                {formatPrice(perfume.price)}
              </p>

              {/* Size Selection */}
              {perfume.sizes && perfume.sizes.length > 0 && (
                <div className="mb-6">
                  <p className="text-sm font-semibold mb-3 uppercase tracking-wide">Хэмжээ</p>
                  <div className="flex gap-3">
                    {perfume.sizes.map((size, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedSize(size)}
                        className={`border px-6 py-3 transition-colors text-sm uppercase tracking-wide ${
                          selectedSize === size
                            ? 'bg-black text-white border-black'
                            : 'border-black hover:bg-black hover:text-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Cart Button */}
              <button 
                onClick={() => addToCart(perfume, selectedSize || undefined)}
                className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors uppercase tracking-wide font-semibold mb-8 w-full"
              >
                Сагсанд нэмэх {getItemQuantity(perfume.id, selectedSize || undefined) > 0 && `(${getItemQuantity(perfume.id, selectedSize || undefined)})`}
              </button>

              {/* Info Sections */}
              <div className="border-t border-gray-300 pt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">Үнэртний хурмс</h3>
                  <div className="grid grid-cols-3 gap-6 text-sm">
                    <div>
                      <p className="text-gray-600 mb-2">TOP NOTE</p>
                      <p>{perfume.scentNotes.top.join(', ')}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-2">HEART NOTE</p>
                      <p>{perfume.scentNotes.middle.join(', ')}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-2">BASE NOTE</p>
                      <p>{perfume.scentNotes.base.join(', ')}</p>
                    </div>
                  </div>
                </div>

                {perfume.description && (
                  <div className="border-t border-gray-300 pt-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">Дэлгэрэнгүй</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{perfume.description}</p>
                  </div>
                )}

                {perfume.gender && (
                  <div className="border-t border-gray-300 pt-4">
                    <p className="text-sm">
                      <span className="font-semibold">Зориулга:</span> {perfume.gender}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedPerfumes.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Таалагдаж магадгүй
              </h2>
              <p className="text-gray-700">Бас энэ үнэртний мэдрэм</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPerfumes.map((related) => (
                <ProductCard key={related.id} perfume={related} />
              ))}
            </div>
          </div>
        </section>
      )}

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
          </div>
        </div>
      </section>
    </div>
  );
}

