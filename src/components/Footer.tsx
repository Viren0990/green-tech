import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';
import logo from "@/src/images/logo.png"
import { BUSINESS } from '@/src/lib/business';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4 p-4 rounded-lg">
              <div className="w-32 bg-white p-2 rounded-xl">
                <Image
                  src={logo}
                  alt="DMD Green Tech Revive logo"
                  className="w-full h-auto"
                />
              </div>
              <span className="font-semibold text-white">{BUSINESS.name}</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Empowering circular economy through responsible e-waste recycling and refurbishment.
            </p>
            <div className="flex gap-4">
              <a href={BUSINESS.social.facebook} aria-label="DMD Green Tech Revive on Facebook" className="hover:text-green-500 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={BUSINESS.social.linkedin} aria-label="DMD Green Tech Revive on LinkedIn" className="hover:text-green-500 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={BUSINESS.social.instagram} aria-label="DMD Green Tech Revive on Instagram" className="hover:text-green-500 transition">
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
              <li><Link href="/our-partners" className="hover:text-green-500 transition">Our Partners</Link></li>
              <li><Link href="/community-partners" className="hover:text-green-500 transition">Community Partners</Link></li>
              <li><Link href="/e-waste-categories" className="hover:text-green-500 transition">Items We Accept</Link></li>
              <li><Link href="/posts" className="hover:text-green-500 transition">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-green-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/what-we-do#e-waste-collection" className="hover:text-green-500 transition">E-Waste Collection</Link></li>
              <li><Link href="/what-we-do#data-sanitization" className="hover:text-green-500 transition">Data Sanitization</Link></li>
              <li><Link href="/what-we-do#refurbishment" className="hover:text-green-500 transition">Refurbishment</Link></li>
              <li><Link href="/what-we-do#recycling" className="hover:text-green-500 transition">Recycling</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-green-500 flex-shrink-0 mt-1" />
                <span>{BUSINESS.addressDisplay}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-green-500" />
                <a href={BUSINESS.phoneHref} className="hover:text-green-500 transition">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-green-500" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-green-500 transition">
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-green-500 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-green-500 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
