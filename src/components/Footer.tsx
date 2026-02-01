import Link from 'next/link';
import Image from 'next/image';
import { businessInfo } from '@/data/business';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3D2314] text-[#FFF8E7]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF9933]">
              <Image
                src="/images/logo.jpg"
                alt="Spice N Curry Logo"
                fill
                className="object-cover"
              />
            </div>
              <div>
                <h3 className="text-xl font-bold text-[#FF9933]">Spice N Curry</h3>
                <p className="text-xs text-[#D4AF37]">Authentic Indian Mart</p>
              </div>
            </div>
            <p className="text-sm text-[#FFF8E7]/80 mb-4">
              {businessInfo.slogan}. Your one-stop destination for authentic Indian groceries and delicious homemade food in Miami.
            </p>
            <div className="flex gap-4">
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#FF9933] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-[#3D2314]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#FF9933] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-[#3D2314]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#FF9933] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#FFF8E7]/80 hover:text-[#FF9933] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-[#FFF8E7]/80 hover:text-[#FF9933] transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/grocery" className="text-[#FFF8E7]/80 hover:text-[#FF9933] transition-colors">
                  Grocery
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#FFF8E7]/80 hover:text-[#FF9933] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#FFF8E7]/80 hover:text-[#FF9933] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#FFF8E7]/80 hover:text-[#FF9933] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold text-[#FF9933] mb-4">Hours</h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-[#D4AF37]">Store Hours</h5>
                <p className="text-sm text-[#FFF8E7]/80">Daily: {businessInfo.hours.store.weekdays}</p>
              </div>
              <div>
                <h5 className="font-medium text-[#D4AF37]">Cafeteria Hours</h5>
                <p className="text-sm text-[#FFF8E7]/80">Mon-Sat: {businessInfo.hours.cafeteria.weekdays}</p>
                <p className="text-sm text-[#FFF8E7]/80">Sunday: {businessInfo.hours.cafeteria.sunday}</p>
                <p className="text-xs text-[#FF9933] mt-1">Last order at {businessInfo.hours.cafeteria.lastOrder}</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-[#FF9933] mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="flex items-center gap-2 text-[#FFF8E7]/80 hover:text-[#FF9933] transition-colors"
              >
                <span>📞</span> {businessInfo.phone}
              </a>
              <a
                href={businessInfo.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-[#FFF8E7]/80 hover:text-[#FF9933] transition-colors"
              >
                <span>📍</span>
                <span>
                  {businessInfo.address.street}<br />
                  {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                </span>
              </a>
              <p className="text-sm text-[#D4AF37]">Located in {businessInfo.address.plaza}</p>
            </div>
            <div className="mt-4">
              <h5 className="font-medium text-[#D4AF37] mb-2">Order Online</h5>
              <div className="flex flex-wrap gap-2">
                <a
                  href={businessInfo.delivery.doordash}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-[#FF9933]/20 text-[#FF9933] px-3 py-1 rounded-full hover:bg-[#FF9933]/30 transition-colors"
                >
                  DoorDash
                </a>
                <a
                  href={businessInfo.delivery.ubereats}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-[#FF9933]/20 text-[#FF9933] px-3 py-1 rounded-full hover:bg-[#FF9933]/30 transition-colors"
                >
                  Uber Eats
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#FF9933]/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#FFF8E7]/60">
            <p>&copy; {currentYear} Spice N Curry. All rights reserved.</p>
            <div className="flex gap-4">
              <span>🌿 Fresh Daily</span>
              <span>🕌 Halal Certified</span>
              <span>🥬 Vegan Options</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
