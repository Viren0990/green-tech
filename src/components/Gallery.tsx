import Link from 'next/link';
import Image from 'next/image';
import galleryImage from '@/src/images/w2.jpg';
import galleryImage2 from '@/src/images/w33.webp';
import galleryImage3 from '@/src/images/ppp.webp';


export default function Gallery() {
  return (
    <section id="gallery" className="bg-gray-100">
      <div className="container mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Collections & Campaigns</h2>
            <p className="text-gray-600">Highlights from our e-waste collection drives and awareness initiatives</p>
          </div>
          <Link href="/posts" className="text-green-600 font-semibold hover:text-green-700 transition flex items-center gap-2">
            View All →
          </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Large featured image - left */}
          <div className="md:col-span-2 md:row-span-2 bg-linear-to-br from-gray-700 to-gray-900 rounded-2xl overflow-hidden h-125 relative group">
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <Image src={galleryImage2} alt="About" fill className="object-cover" />
            </div>
          </div>

          {/* Top right image */}
          <div className="bg-linear-to-br from-green-700 to-green-900 rounded-2xl overflow-hidden h-60.5 flex items-center justify-center relative">
            <Image src={galleryImage} alt="About" fill className="object-cover" />
          </div>

          {/* Bottom right image */}
          <div className="bg-linear-to-br from-blue-700 to-blue-900 rounded-2xl overflow-hidden h-60.5 flex items-center justify-center relative">
            <Image src={galleryImage3} alt="About" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
