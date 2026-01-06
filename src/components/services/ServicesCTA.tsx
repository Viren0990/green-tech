import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg px-8 py-12 md:px-16 md:py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Recycle Responsibly?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of Indian businesses in making a sustainable choice. 
            Schedule your pickup today and get your green certificate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition font-semibold"
            >
              Schedule Pickup
            </Link>
            <Link 
              href="/contact"
              className="bg-white border-2 border-gray-300 px-8 py-3 rounded-lg hover:border-green-500 hover:text-green-500 transition font-semibold"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
