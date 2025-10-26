'use client';

import { useState } from 'react';
import Image from 'next/image';
import { perfumes, Perfume, formatPrice, collections } from '../data/perfumes';
import ProductCard from '../components/ProductCard';

export default function PerfumesPage() {
  const [selectedCollection, setSelectedCollection] = useState<string>('all');
  const [selectedGender, setSelectedGender] = useState<string>('all');

  // Filter perfumes based on selections
  const filteredPerfumes = perfumes.filter(perfume => {
    const collectionMatch = selectedCollection === 'all' || perfume.collection === selectedCollection;
    const genderMatch = selectedGender === 'all' || perfume.gender === selectedGender || perfume.gender === 'Хоёулаа';
    return collectionMatch && genderMatch;
  });

  return (
    <div className="min-h-screen bg-[#f0ece4] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-600 tracking-widest mb-4">Үнэртэн</p>
          <h1 className="text-6xl font-light text-black mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Үнэртэн
          </h1>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Манай цогц үнэртний цуглуулга
          </p>
        </div>

        {/* Filters and Products */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white p-6 space-y-8">
              {/* By Collection */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
                  Цуглуулгаар
                </h3>
                <button
                  onClick={() => setSelectedCollection('all')}
                  className={`block text-left py-2 ${selectedCollection === 'all' ? 'font-semibold' : 'text-gray-600 hover:text-black'}`}
                >
                  Бүгд
                </button>
                {collections.map(collection => (
                  <button
                    key={collection.id}
                    onClick={() => setSelectedCollection(collection.id)}
                    className={`block text-left py-2 ${selectedCollection === collection.id ? 'font-semibold' : 'text-gray-600 hover:text-black'}`}
                  >
                    {collection.nameMN}
                  </button>
                ))}
              </div>

              {/* By Gender */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
                  Хэний төлөө
                </h3>
                <button
                  onClick={() => setSelectedGender('all')}
                  className={`block text-left py-2 ${selectedGender === 'all' ? 'font-semibold' : 'text-gray-600 hover:text-black'}`}
                >
                  Бүгд
                </button>
                <button
                  onClick={() => setSelectedGender('Эрэгтэй')}
                  className={`block text-left py-2 ${selectedGender === 'Эрэгтэй' ? 'font-semibold' : 'text-gray-600 hover:text-black'}`}
                >
                  Эрэгтэй
                </button>
                <button
                  onClick={() => setSelectedGender('Эмэгтэй')}
                  className={`block text-left py-2 ${selectedGender === 'Эмэгтэй' ? 'font-semibold' : 'text-gray-600 hover:text-black'}`}
                >
                  Эмэгтэй
                </button>
              </div>

              {/* Clear Filters */}
              {(selectedCollection !== 'all' || selectedGender !== 'all') && (
                <button
                  onClick={() => {
                    setSelectedCollection('all');
                    setSelectedGender('all');
                  }}
                  className="w-full border border-black text-black px-4 py-2 hover:bg-black hover:text-white transition-colors text-sm uppercase tracking-wide"
                >
                  Шүүлтийг арилгах
                </button>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-sm text-gray-600">
                {filteredPerfumes.length} үр дүн олдлоо
              </p>
            </div>

            {/* Product Grid */}
            {filteredPerfumes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPerfumes.map((perfume: Perfume) => (
                  <ProductCard key={perfume.id} perfume={perfume} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-gray-600 mb-4">Үнэртэн олдсонгүй</p>
                <button
                  onClick={() => {
                    setSelectedCollection('all');
                    setSelectedGender('all');
                  }}
                  className="border border-black text-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
                >
                  Бүгдийг харуулах
                </button>
              </div>
            )}
          </div>
        </div>

        {/* All Collections Link */}
        <div className="text-center mt-16">
          <p className="text-sm text-gray-600 mb-4">
            Тодорхой цуглуулгыг харах уу?
          </p>
          <a 
            href="/collections"
            className="text-base text-black hover:underline tracking-wide"
          >
            Цуглуулга үзэх →
          </a>
        </div>
      </div>
    </div>
  );
}
