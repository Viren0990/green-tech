import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';
import logo from "@/src/images/logo.png"
import { BUSINESS } from '@/src/lib/business';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4 md:p-4 rounded-lg">
              <div className="w-20 md:w-32 bg-white p-1.5 md:p-2 rounded-xl">
                <Image
                  src={logo}
                  alt="DMD GreenTech Revive logo"
                  className="w-full h-auto"
                />
              </div>
              <span className="font-semibold text-white">{BUSINESS.name}</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Empowering circular economy through responsible e-waste recycling and refurbishment.
            </p>
            <div className="flex gap-2 -ml-2">
              <a href={BUSINESS.social.facebook} aria-label="DMD GreenTech Revive on Facebook" className="w-11 h-11 flex items-center justify-center hover:text-green-500 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={BUSINESS.social.linkedin} aria-label="DMD GreenTech Revive on LinkedIn" className="w-11 h-11 flex items-center justify-center hover:text-green-500 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={BUSINESS.social.instagram} aria-label="DMD GreenTech Revive on Instagram" className="w-11 h-11 flex items-center justify-center hover:text-green-500 transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-2 md:mb-4">Quick Links</h3>
            <ul className="text-sm md:space-y-2">
              <li><Link href="/" className="block py-2 md:py-0 hover:text-green-500 transition">Home</Link></li>
              <li><Link href="/about-us" className="block py-2 md:py-0 hover:text-green-500 transition">About Us</Link></li>
              <li><Link href="/what-we-do" className="block py-2 md:py-0 hover:text-green-500 transition">Services</Link></li>
              <li><Link href="/our-partners" className="block py-2 md:py-0 hover:text-green-500 transition">Our Partners</Link></li>
              <li><Link href="/community-partners" className="block py-2 md:py-0 hover:text-green-500 transition">Community Partners</Link></li>
              <li><Link href="/e-waste-categories" className="block py-2 md:py-0 hover:text-green-500 transition">Items We Accept</Link></li>
              <li><Link href="/posts" className="block py-2 md:py-0 hover:text-green-500 transition">Gallery</Link></li>
              <li><Link href="/guides" className="block py-2 md:py-0 hover:text-green-500 transition">Guides</Link></li>
              <li><Link href="/contact" className="block py-2 md:py-0 hover:text-green-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-2 md:mb-4">Services</h3>
            <ul className="text-sm md:space-y-2">
              <li><Link href="/what-we-do#e-waste-collection" className="block py-2 md:py-0 hover:text-green-500 transition">E-Waste Collection</Link></li>
              <li><Link href="/what-we-do#data-sanitization" className="block py-2 md:py-0 hover:text-green-500 transition">Data Sanitization</Link></li>
              <li><Link href="/what-we-do#refurbishment" className="block py-2 md:py-0 hover:text-green-500 transition">Refurbishment</Link></li>
              <li><Link href="/what-we-do#recycling" className="block py-2 md:py-0 hover:text-green-500 transition">Recycling</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white font-semibold mb-3 md:mb-4">Contact Us</h3>
            <ul className="space-y-1 md:space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-green-500 flex-shrink-0 mt-1" />
                <span>{BUSINESS.addressDisplay}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-green-500" />
                <a href={BUSINESS.phoneHref} className="py-2 md:py-0 hover:text-green-500 transition">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-green-500" />
                <a href={`mailto:${BUSINESS.email}`} className="py-2 md:py-0 break-all hover:text-green-500 transition">
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="py-2 md:py-0 hover:text-green-500 transition">Privacy Policy</Link>
            <Link href="/terms" className="py-2 md:py-0 hover:text-green-500 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
