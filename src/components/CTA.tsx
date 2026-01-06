import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 to-green-900 rounded-3xl p-12 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to clear your clutter responsibly?
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of responsible citizens and companies in India. Schedule a 
            pickup today and get a certificate of recycling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition"
            >
              Schedule Free Pickup
            </Link>
            <Link 
              href="/contact"
              className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
