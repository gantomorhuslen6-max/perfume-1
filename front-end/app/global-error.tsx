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
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Алдаа гарлаа
              </h1>
              <p className="text-gray-600 mb-6">
                Уучлаарай, алдаа гарсан байна. Дахин оролдоно уу.
              </p>
              <button
                onClick={reset}
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Дахин оролдох
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
