'use client';

import { useCart } from '../contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '../data/perfumes';

export default function CartPage() {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-[#f0ece4] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light mb-8 text-center" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Сагс
          </h1>
          <div className="text-center py-20">
            <p className="text-lg text-gray-600 mb-8">Таны сагс хоосон байна</p>
            <Link 
              href="/perfumes"
              className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors uppercase tracking-wide"
            >
              Үнэртэн үзэх
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0ece4] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light mb-8" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
          Сагс
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {state.items.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    {item.perfume.imageUrl ? (
                      <Image
                        src={item.perfume.imageUrl}
                        alt={item.perfume.nameMN}
                        width={96}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200"></div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2">{item.perfume.nameMN}</h3>
                    {item.selectedSize && (
                      <p className="text-sm text-gray-600 mb-2">Хэмжээ: {item.selectedSize}</p>
                    )}
                    <p className="text-lg font-semibold mb-4">
                      {formatPrice(item.perfume.price)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-300 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 border-x border-gray-300">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Устгах
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-8">
              <h2 className="text-xl font-semibold mb-6">Захиалгын хураангуй</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Бүтээгдэхүүн ({state.totalItems})</span>
                  <span>{formatPrice(state.totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Хүргэлт</span>
                  <span className="text-green-600">Үнэгүй</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Нийт</span>
                    <span>{formatPrice(state.totalPrice)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors uppercase tracking-wide font-semibold mb-4">
                Захиалах
              </button>
              
              <button
                onClick={clearCart}
                className="w-full border border-gray-300 text-gray-700 py-3 hover:bg-gray-50 transition-colors uppercase tracking-wide"
              >
                Сагс цэвэрлэх
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

