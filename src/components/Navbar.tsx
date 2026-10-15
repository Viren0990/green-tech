'use client'

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from "@/src/images/logo.png"
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type MenuItem = { href: string; label: string };

const PARTNER_LINKS: MenuItem[] = [
  { href: '/our-partners', label: 'Our Partners' },
  { href: '/community-partners', label: 'Community Partners' },
  { href: '/educational-partners', label: 'Educational Partners' },
];

// Gallery and Guides share one desktop menu to keep the bar short on laptop screens.
const RESOURCE_LINKS: MenuItem[] = [
  { href: '/posts', label: 'Gallery' },
  { href: '/guides', label: 'Guides' },
];

// Sections whose detail pages (/posts/<id>, /guides/<slug>) keep the parent link highlighted
const SECTIONS = ['/posts', '/guides'];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<'partners' | 'resources' | null>(null);
  const [mobilePartnersOpen, setMobilePartnersOpen] = useState(false);
  const desktopNavRef = useRef<HTMLDivElement>(null);

  // Close any open dropdown when clicking outside the desktop nav
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) =>
    pathname === path || (SECTIONS.includes(path) && !!pathname?.startsWith(`${path}/`));
  const isPartnersActive = PARTNER_LINKS.some((l) => isActive(l.href));

  const desktopLinkClass = (path: string) => 
    `relative whitespace-nowrap transition ${isActive(path) ? 'text-emerald-400 font-semibold after:absolute after:-bottom-2 after:-left-1.5 after:-right-1.5 after:h-[3px] after:bg-emerald-400 after:rounded-full' : 'text-white/80 hover:text-emerald-400'}`;

  const dropdown = (id: 'partners' | 'resources', label: string, items: MenuItem[]) => {
    const open = openMenu === id;
    const active = items.some((l) => isActive(l.href));
    return (
      <div className="relative">
        <button
          onClick={() => setOpenMenu(open ? null : id)}
          aria-expanded={open}
          className={`relative flex items-center gap-1 whitespace-nowrap transition ${active ? 'text-emerald-400 font-semibold after:absolute after:-bottom-2 after:-left-1.5 after:w-[calc(100%+12px)] after:h-[3px] after:bg-emerald-400 after:rounded-full' : 'text-white/80 hover:text-emerald-400'}`}
        >
          {label}
          <ChevronDown size={16} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>

        {open && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-[#142814] rounded-xl shadow-lg border border-emerald-800/40 py-2 overflow-hidden">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2.5 text-sm transition ${isActive(item.href) ? 'bg-emerald-500/15 text-emerald-400 font-medium' : 'text-white/70 hover:bg-emerald-500/10 hover:text-emerald-400'}`}
                onClick={() => setOpenMenu(null)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  const mobileLinkClass = (path: string) =>
    `block rounded-lg px-3 py-3 text-base transition ${isActive(path) ? 'bg-emerald-500/15 text-emerald-400 font-semibold' : 'text-white/85 active:bg-white/10'}`;

  const mobileSubLinkClass = (path: string) =>
    `block rounded-lg px-3 py-2.5 text-[15px] transition ${isActive(path) ? 'bg-emerald-500/15 text-emerald-400 font-semibold' : 'text-white/70 active:bg-white/10'}`;

  return (
    <nav className="fixed top-0 w-full bg-[#0d1f0d]/95 backdrop-blur-sm z-50 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-6 h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-14 h-12 md:w-16 md:h-14 bg-white rounded-lg flex items-center justify-center p-1 shrink-0">
              <Image src={logo} alt="DMD GreenTech Revive logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-semibold text-white text-lg md:text-xl lg:text-lg xl:text-xl leading-tight whitespace-nowrap">DMD <span className="text-emerald-400 font-bold">GreenTech</span> Revive</span>
              <p className="text-xs text-gray-400">Unit Of DMD Gold Prosperity</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div ref={desktopNavRef} className="hidden lg:flex items-center gap-4 xl:gap-8 lg:text-[15px] xl:text-base">
            <Link href="/" className={desktopLinkClass('/')}>
              Home
            </Link>
            <Link href="/about-us" className={desktopLinkClass('/about-us')}>
              About Us
            </Link>
            <Link href="/what-we-do" className={desktopLinkClass('/what-we-do')}>
              What We Do
            </Link>
            <Link href="/e-waste-categories" className={desktopLinkClass('/e-waste-categories')}>
              We Accept
            </Link>

            {dropdown('partners', 'Partners', PARTNER_LINKS)}
            {dropdown('resources', 'Resources', RESOURCE_LINKS)}

            <Link
              href="/contact"
              className="bg-emerald-600 text-white px-5 xl:px-6 py-2 rounded-full hover:bg-emerald-700 transition whitespace-nowrap"
            >
              Schedule Pickup
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden -mr-2 w-11 h-11 flex items-center justify-center text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 pt-1 space-y-1 border-t border-white/10 max-h-[calc(100dvh-72px)] overflow-y-auto">
            <Link href="/" className={mobileLinkClass('/')}>
              Home
            </Link>
            <Link href="/about-us" className={mobileLinkClass('/about-us')}>
              About Us
            </Link>
            <Link href="/what-we-do" className={mobileLinkClass('/what-we-do')}>
              What We Do
            </Link>
            <Link href="/e-waste-categories" className={mobileLinkClass('/e-waste-categories')}>
              Our Categories
            </Link>

            {/* Mobile Partners Accordion */}
            <div>
              <button
                onClick={() => setMobilePartnersOpen(!mobilePartnersOpen)}
                className={`flex items-center justify-between w-full rounded-lg px-3 py-3 text-base transition ${isPartnersActive ? 'text-emerald-400 font-semibold' : 'text-white/85 active:bg-white/10'}`}
                aria-expanded={mobilePartnersOpen}
              >
                <span>Partners</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobilePartnersOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobilePartnersOpen && (
                <div className="pl-3 space-y-0.5">
                  <Link href="/our-partners" className={mobileSubLinkClass('/our-partners')}>
                    Our Partners
                  </Link>
                  <Link href="/community-partners" className={mobileSubLinkClass('/community-partners')}>
                    Community Partners
                  </Link>
                  <Link href="/educational-partners" className={mobileSubLinkClass('/educational-partners')}>
                    Educational Partners
                  </Link>
                </div>
              )}
            </div>

            <Link href="/posts" className={mobileLinkClass('/posts')}>
              Gallery
            </Link>
            <Link href="/guides" className={mobileLinkClass('/guides')}>
              Guides
            </Link>
            <Link
              href="/contact"
              className="block mt-3 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition text-center"
            >
              Schedule Pickup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
