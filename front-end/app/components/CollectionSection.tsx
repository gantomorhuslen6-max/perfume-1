import ProductCard from './ProductCard';
import { Perfume, getPerfumesByCollection, getCollectionById } from '../data/perfumes';

interface CollectionSectionProps {
  collectionId: string;
}

export default function CollectionSection({ collectionId }: CollectionSectionProps) {
  const collection = getCollectionById(collectionId);
  const collectionPerfumes = getPerfumesByCollection(collectionId);

  if (!collection) return null;

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <p className="text-sm text-gray-600 tracking-widest mb-4">
          {collection.tagline}
        </p>
        <h2 className="text-4xl font-light text-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
          {collection.nameMN}
        </h2>
        <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
          {collection.description}
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {collectionPerfumes.map((perfume: Perfume) => (
          <ProductCard key={perfume.id} perfume={perfume} />
        ))}
      </div>

      {/* Explore Link */}
      <div className="text-center mt-12">
        <a 
          href={`/collections/${collectionId}`}
          className="text-sm text-black hover:underline tracking-wide"
        >
          Дэлгэрэнгүй
        </a>
      </div>
    </section>
  );
}
