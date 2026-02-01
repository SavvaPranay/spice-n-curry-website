'use client';

import Link from 'next/link';
import { useState } from 'react';
import { businessInfo } from '@/data/business';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/grocery', label: 'Grocery' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#3D2314] text-[#FFF8E7] sticky top-0 z-50 shadow-lg">
      {/* Top bar with contact info */}
      <div className="bg-[#FF9933] text-[#3D2314] py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`tel:${businessInfo.phoneRaw}`} className="flex items-center gap-2 hover:text-[#C41E3A] transition-colors">
              <span>📞</span> {businessInfo.phone}
            </a>
            <span className="flex items-center gap-2">
              <span>📍</span> {businessInfo.address.full}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={businessInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C41E3A] transition-colors"
            >
              Instagram
            </a>
            <a
              href={businessInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C41E3A] transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-[#FF9933] rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              🍛
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#FF9933]">Spice N Curry</h1>
              <p className="text-xs text-[#D4AF37]">Authentic Indian Mart</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#FFF8E7] hover:text-[#FF9933] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={businessInfo.delivery.doordash}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF9933] text-[#3D2314] px-6 py-2 rounded-full font-semibold hover:bg-[#D4AF37] transition-colors"
            >
              Order Online
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#FF9933]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#FF9933]/30 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#FFF8E7] hover:text-[#FF9933] transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={businessInfo.delivery.doordash}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF9933] text-[#3D2314] px-6 py-3 rounded-full font-semibold text-center hover:bg-[#D4AF37] transition-colors mt-2"
              >
                Order Online
              </a>
              <div className="mt-4 pt-4 border-t border-[#FF9933]/30">
                <a href={`tel:${businessInfo.phoneRaw}`} className="flex items-center gap-2 text-[#FF9933]">
                  <span>📞</span> {businessInfo.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
