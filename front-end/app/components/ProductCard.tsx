import Image from 'next/image';
import Link from 'next/link';
import { Perfume, formatPrice } from '../data/perfumes';

interface ProductCardProps {
  perfume: Perfume;
}

export default function ProductCard({ perfume }: ProductCardProps) {
  return (
    <Link href={`/perfumes/${perfume.id}`} className="group relative flex flex-col rounded-lg overflow-hidden">
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex gap-2">
        {perfume.badges.includes('шилдэг борлуулалт') && (
          <span className="bg-black text-white text-xs px-2 py-1 uppercase tracking-wide">
            шилдэг борлуулалт
          </span>
        )}
        {perfume.badges.includes('шинэ') && (
          <span className="bg-white text-black text-xs px-2 py-1 uppercase tracking-wide border border-black">
            шинэ
          </span>
        )}
      </div>

      {/* Image */}
      <div className="relative aspect-3/4 bg-gray-100 mb-4 overflow-hidden rounded-lg">
        {perfume.imageUrl ? (
          <Image
            src={perfume.imageUrl}
            alt={perfume.nameMN}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 rounded-lg"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Scent notes */}
        <p className="text-xs text-gray-600 mb-2 font-realist" style={{ fontFamily: "'Roboto', sans-serif" }}>
          {perfume.scentNotes.top.join(', ')}
        </p>

        {/* Name */}
        <h3 className="text-base font-normal mb-3 text-black">
          {perfume.nameMN}
        </h3>

        {/* Sizes */}
        {perfume.sizes && perfume.sizes.length > 0 && (
          <div className="text-xs text-gray-500 mb-3 font-realist" style={{ fontFamily: "'Roboto', sans-serif" }}>
            {perfume.sizes.join(' / ')}
          </div>
        )}

        {/* Price */}
        <p className="text-sm font-normal text-black mb-4 font-realist" style={{ fontFamily: "'Roboto', sans-serif" }}>
          {formatPrice(perfume.price)}
        </p>

        {/* CTA Button */}
        <button className="border border-black text-black px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors duration-200 uppercase tracking-wide">
          Сагсанд нэмэх
        </button>
      </div>
    </Link>
  );
}
