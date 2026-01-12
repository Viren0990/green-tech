import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">♻</span>
              </div>
              <span className="font-bold text-gray-900">DMD Green Tech Revive</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Leading the way in India's e-waste management and recycling solutions for a cleaner India.
            </p>
            <div className="flex gap-3">
              <a href="/story" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition">
                <span className="text-sm">f</span>
              </a>
              <a href="/story" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition">
                <span className="text-sm">𝕏</span>
              </a>
              <a href="/story" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition">
                <span className="text-sm">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-green-600 transition">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-green-600 transition">About Us</Link></li>
              <li><Link href="/what-we-do#core-services" className="hover:text-green-600 transition">Services</Link></li>
              <li><Link href="/posts" className="hover:text-green-600 transition">CSR Impact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-green-600 transition">Data Destruction</Link></li>
              <li><Link href="#" className="hover:text-green-600 transition">E-Waste Recycling</Link></li>
              <li><Link href="#" className="hover:text-green-600 transition">IT Asset Disposition</Link></li>
              <li><Link href="#" className="hover:text-green-600 transition">Refurbishing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">📍</span>
                <span>info@dmgreentech.in</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">📞</span>
                <a href="tel:+919763123699" className="hover:text-green-600 transition">
                  +91 9763123699
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">📍</span>
                <span>Office No-03, Amaryllis Domkhel Rd, Wagholi, Pune, Maharashtra 412207</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2025 DMD Green Tech Revive. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-green-600 transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-green-600 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
