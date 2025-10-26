import CollectionSection from '../components/CollectionSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Цуглуулга - Clive Christian",
  description: "Clive Christian үнэртний цуглуулгууд",
};

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-[#f0ece4] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-600 tracking-widest mb-4">Цуглуулгууд</p>
          <h1 className="text-6xl font-light text-black mb-6" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Цуглуулга
          </h1>
        </div>

        {/* Original Collection Section */}
        <section id="original" className="mb-20">
          <CollectionSection collectionId="original" />
        </section>

        {/* Noble Collection Section */}
        <section id="noble" className="mb-20">
          <CollectionSection collectionId="noble" />
        </section>

        {/* Addictive Arts Collection Section */}
        <section id="addictive-arts" className="mb-20">
          <CollectionSection collectionId="addictive-arts" />
        </section>

        {/* Private Collection Section */}
        <section id="private" className="mb-20">
          <CollectionSection collectionId="private" />
        </section>

        {/* Crown Collection Section */}
        <section id="crown" className="mb-20">
          <CollectionSection collectionId="crown" />
        </section>
      </div>
    </div>
  );
}
