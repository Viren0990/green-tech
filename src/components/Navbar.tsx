'use client'

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from "@/src/images/logo.png"
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
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

  const isActive = (path: string) => pathname === path;
  const isPartnersActive = isActive('/our-partners') || isActive('/community-partners');

  const desktopLinkClass = (path: string) => 
    `relative transition ${isActive(path) ? 'text-green-600 font-semibold after:absolute after:-bottom-2 after:-left-1.5 after:-right-1.5 after:h-[3px] after:bg-green-600 after:rounded-full' : 'text-gray-700 hover:text-green-500'}`;
  
  const mobileLinkClass = (path: string) => 
    `block w-max relative transition py-2 ${isActive(path) ? 'text-green-600 font-semibold after:absolute after:bottom-0 after:-left-1.5 after:-right-1.5 after:h-[3px] after:bg-green-600 after:rounded-full' : 'text-gray-700 hover:text-green-500'}`;

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
            <Link href="/" className={desktopLinkClass('/')}>
              Home
            </Link>
            <Link href="/about-us" className={desktopLinkClass('/about-us')}>
              About Us
            </Link>
            <Link href="/what-we-do" className={desktopLinkClass('/what-we-do')}>
              What We Do
            </Link>

            {/* Partners Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setPartnersOpen(!partnersOpen)}
                className={`relative flex items-center gap-1 transition ${isPartnersActive ? 'text-green-600 font-semibold after:absolute after:-bottom-2 after:-left-1.5 after:w-[calc(100%+12px)] after:h-[3px] after:bg-green-600 after:rounded-full' : 'text-gray-700 hover:text-green-500'}`}
              >
                Partners
                <ChevronDown size={16} className={`transition-transform duration-200 ${partnersOpen ? 'rotate-180' : ''}`} />
              </button>

              {partnersOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden">
                  <Link
                    href="/our-partners"
                    className={`block px-4 py-2.5 text-sm transition ${isActive('/our-partners') ? 'bg-emerald-50 text-emerald-600 font-medium' : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'}`}
                    onClick={() => setPartnersOpen(false)}
                  >
                    Our Partners
                  </Link>
                  <Link
                    href="/community-partners"
                    className={`block px-4 py-2.5 text-sm transition ${isActive('/community-partners') ? 'bg-emerald-50 text-emerald-600 font-medium' : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'}`}
                    onClick={() => setPartnersOpen(false)}
                  >
                    Community Partners
                  </Link>
                </div>
              )}
            </div>

            <Link href="/posts" className={desktopLinkClass('/posts')}>
              Gallery
            </Link>
            <Link href="/contact" className={desktopLinkClass('/contact')}>
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
            <Link href="/" className={mobileLinkClass('/')}>
              Home
            </Link>
            <Link href="/about-us" className={mobileLinkClass('/about-us')}>
              About Us
            </Link>
            <Link href="/what-we-do" className={mobileLinkClass('/what-we-do')}>
              What We Do
            </Link>

            {/* Mobile Partners Accordion */}
            <div>
              <button
                onClick={() => setMobilePartnersOpen(!mobilePartnersOpen)}
                className={`flex items-center justify-between w-full transition py-2 ${isPartnersActive ? 'text-green-600 font-semibold' : 'text-gray-700 hover:text-green-500'}`}
              >
                <span className={`relative ${isPartnersActive ? 'after:absolute after:-bottom-1.5 after:-left-1.5 after:-right-1.5 after:h-[3px] after:bg-green-600 after:rounded-full' : ''}`}>Partners</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobilePartnersOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobilePartnersOpen && (
                <div className="pl-4 space-y-1">
                  <Link href="/our-partners" className={`block w-max relative transition py-1.5 text-sm ${isActive('/our-partners') ? 'text-green-600 font-semibold after:absolute after:bottom-0 after:-left-1.5 after:-right-1.5 after:h-[3px] after:bg-green-600 after:rounded-full' : 'text-gray-600 hover:text-green-500'}`}>
                    Our Partners
                  </Link>
                  <Link href="/community-partners" className={`block w-max relative transition py-1.5 text-sm ${isActive('/community-partners') ? 'text-green-600 font-semibold after:absolute after:bottom-0 after:-left-1.5 after:-right-1.5 after:h-[3px] after:bg-green-600 after:rounded-full' : 'text-gray-600 hover:text-green-500'}`}>
                    Community Partners
                  </Link>
                </div>
              )}
            </div>

            <Link href="/posts" className={mobileLinkClass('/posts')}>
              Gallery
            </Link>
            <Link href="/contact" className={mobileLinkClass('/contact')}>
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
