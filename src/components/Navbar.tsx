'use client'

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from "@/src/images/logo.png"
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const [mobilePartnersOpen, setMobilePartnersOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPartnersOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-16 h-14 rounded-lg items-center justify-center">
              <Image src={logo} alt="dd" />
            </div>
            <div>
              <span className="font-semibold text-gray-900 text-xl">DMD <span className="text-green-600 font-bold">Greentech</span> Revive</span>
              <p className="text-xs text-gray-600">Unit Of DMD Gold Prosperity</p>
            </div>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-green-500 transition">
              Home
            </Link>
            <Link href="/about-us" className="text-gray-700 hover:text-green-500 transition">
              About Us
            </Link>
            <Link href="/what-we-do" className="text-gray-700 hover:text-green-500 transition">
              What We Do
            </Link>

            {/* Partners Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setPartnersOpen(!partnersOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-green-500 transition"
              >
                Partners
                <ChevronDown size={16} className={`transition-transform duration-200 ${partnersOpen ? 'rotate-180' : ''}`} />
              </button>

              {partnersOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden">
                  <Link
                    href="/our-partners"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition"
                    onClick={() => setPartnersOpen(false)}
                  >
                    Our Partners
                  </Link>
                  <Link
                    href="/community-partners"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition"
                    onClick={() => setPartnersOpen(false)}
                  >
                    Community Partners
                  </Link>
                </div>
              )}
            </div>

            <Link href="/posts" className="text-gray-700 hover:text-green-500 transition">
              Gallery
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-500 transition">
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition"
            >
              Schedule Pickup
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-green-500 transition py-2">
              Home
            </Link>
            <Link href="/about-us" className="block text-gray-700 hover:text-green-500 transition py-2">
              About Us
            </Link>
            <Link href="/what-we-do" className="block text-gray-700 hover:text-green-500 transition py-2">
              What We Do
            </Link>

            {/* Mobile Partners Accordion */}
            <div>
              <button
                onClick={() => setMobilePartnersOpen(!mobilePartnersOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-green-500 transition py-2"
              >
                Partners
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobilePartnersOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobilePartnersOpen && (
                <div className="pl-4 space-y-1">
                  <Link href="/our-partners" className="block text-gray-600 hover:text-green-500 transition py-1.5 text-sm">
                    Our Partners
                  </Link>
                  <Link href="/community-partners" className="block text-gray-600 hover:text-green-500 transition py-1.5 text-sm">
                    Community Partners
                  </Link>
                </div>
              )}
            </div>

            <Link href="/posts" className="block text-gray-700 hover:text-green-500 transition py-2">
              Gallery
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-green-500 transition py-2">
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="block bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition text-center"
            >
              Schedule Pickup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
