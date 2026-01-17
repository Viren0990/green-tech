'use client'

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "@/src/images/logo.png"
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-16 h-14 rounded-lg items-center justify-center">
              <Image src={logo} alt="dd" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-900 text-xl">DMD <span className="text-green-600 font-bold">Greentech</span> Revive</span>
              <p className="text-sm text-gray-600">Unit Of DMD Gold Prosperity</p>
            </div>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-green-500 transition">
              Home
            </Link>
            <Link href="/what-we-do" className="text-gray-700 hover:text-green-500 transition">
              What We Do
            </Link>
            <Link href="/about-us" className="text-gray-700 hover:text-green-500 transition">
              About us
            </Link>
            <Link href="/posts" className="text-gray-700 hover:text-green-500 transition">
              Gallery
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-500 transition">
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
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
            <Link href="/what-we-do" className="block text-gray-700 hover:text-green-500 transition py-2">
              What We Do
            </Link>
            <Link href="/story" className="block text-gray-700 hover:text-green-500 transition py-2">
              Our Story
            </Link>
            <Link href="/posts" className="block text-gray-700 hover:text-green-500 transition py-2">
              Gallery
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-green-500 transition py-2">
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="block bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition text-center"
            >
              Schedule Pickup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
