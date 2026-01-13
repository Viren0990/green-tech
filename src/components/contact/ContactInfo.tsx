import { Bodoni_Moda } from 'next/font/google';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function ContactInfo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`${bodoni.className} text-3xl font-bold text-gray-900 mb-4`}>
            Why Choose DMD Green Tech?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to making e-waste recycling easy, secure, and environmentally responsible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🚚</span>
            </div>
            <h3 className={`${bodoni.className} text-xl font-bold text-gray-900 mb-3`}>
              Free Pickup Service
            </h3>
            <p className="text-gray-600 text-sm">
              We collect e-waste from your doorstep at no extra cost for bulk quantities.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🔒</span>
            </div>
            <h3 className={`${bodoni.className} text-xl font-bold text-gray-900 mb-3`}>
              Data Security Guaranteed
            </h3>
            <p className="text-gray-600 text-sm">
              Certified data destruction with DoD-standard wiping and physical shredding.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📜</span>
            </div>
            <h3 className={`${bodoni.className} text-xl font-bold text-gray-900 mb-3`}>
              Strong Compliances
            </h3>
            <p className="text-gray-600 text-sm">
              We adhere to strict compliance standards to ensure safe and responsible e-waste management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
