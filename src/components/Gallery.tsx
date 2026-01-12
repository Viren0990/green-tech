import Link from 'next/link';

export default function Gallery() {
  return (
    <section id="gallery" className="bg-gray-100">
        <div className="container mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Transformation Gallery</h2>
          <p className="text-gray-600">See how we give technology a second life</p>
        </div>
        <Link href="#" className="text-green-600 font-semibold hover:text-green-700">
          View All →
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Large featured image - left */}
        <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl overflow-hidden h-[500px] relative group">
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-6xl mb-4">🔧</div>
              <p className="text-sm">Person repairing circuit board</p>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 bg-green-500 text-white px-4 py-1 rounded-full text-sm">
            WORKSHOP
          </div>
          
        </div>

        {/* Top right image */}
        <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl overflow-hidden h-[242px] flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-5xl mb-3">💻</div>
            <p className="text-xs">Circuit boards stacked</p>
          </div>
        </div>

        {/* Bottom right image */}
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl overflow-hidden h-[242px] flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-5xl mb-3">📱</div>
            <p className="text-xs">Refurbished devices</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
