'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-[#f0ece4] flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-8">
            <h1 className="text-6xl font-light mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Алдаа гарлаа
            </h1>
            <h2 className="text-2xl font-light mb-8" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Уучлаарай
            </h2>
            <p className="text-gray-700 mb-8">
              Ямар нэгэн алдаа гарлаа. Дахин оролдоно уу.
            </p>
            <button
              onClick={reset}
              className="border border-black text-black px-8 py-3 hover:bg-black hover:text-white transition-colors uppercase text-sm tracking-wider"
            >
              Дахин оролдох
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

