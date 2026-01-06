import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="text-8xl mb-4">🔍</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Post Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link 
          href="/posts"
          className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition font-semibold inline-block"
        >
          Back to Gallery
        </Link>
      </div>
    </div>
  );
}
