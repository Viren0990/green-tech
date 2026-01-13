import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';
import logo from "@/src/images/logo.png"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                <Image src={logo} alt="dmd logo" />
              </div>
              <span className="font-semibold text-white">DMD Green Tech</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Empowering circular economy through responsible e-waste recycling and refurbishment.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/18AgGrVk1u/" className="hover:text-green-500 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/dmd-green-tech-revive-private-limited/" className="hover:text-green-500 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/dmd.greentechrevive" className="hover:text-green-500 transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-green-500 transition">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-green-500 transition">About Us</Link></li>
              <li><Link href="/what-we-do" className="hover:text-green-500 transition">Services</Link></li>
              <li><Link href="/posts" className="hover:text-green-500 transition">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-green-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-green-500 transition">Data Destruction</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition">E-Waste Disposal</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition">IT Asset Recovery</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition">Refurbished Sales</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-green-500 flex-shrink-0 mt-1" />
                <span>Office No-03, Amaryllis Domkhel Rd, Wagholi, Pune, Maharashtra 412207</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-green-500" />
                <a href="tel:+919763123699" className="hover:text-green-500 transition">
                  +91 9763123699
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-green-500" />
                <a href="mailto:info@dmdgreentechrevive.com" className="hover:text-green-500 transition">
                  info@dmdgreentechrevive.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 DMD Green Tech Revive. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-green-500 transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-green-500 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
