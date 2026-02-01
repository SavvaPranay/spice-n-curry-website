import type { Metadata } from 'next';
import Link from 'next/link';
import { businessInfo } from '@/data/business';
import { getPopularItems } from '@/data/menu';
import MenuCard from '@/components/MenuCard';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Order Online - Delivery & Pickup',
  description: 'Order Indian food online from Spice N Curry Miami. Choose delivery through DoorDash or Uber Eats, or call for pickup. Fresh, authentic Indian cuisine.',
  keywords: ['order Indian food online', 'Indian food delivery Miami', 'Spice N Curry delivery', 'Indian takeout Miami'],
  openGraph: {
    title: 'Order Online | Spice N Curry Miami',
    description: 'Order authentic Indian food for delivery or pickup.',
    url: '/order',
  },
};

export default function OrderPage() {
  const popularItems = getPopularItems().slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#3D2314] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF9933] mb-4">
            Order Online
          </h1>
          <p className="text-[#FFF8E7]/80 max-w-2xl mx-auto">
            Get your favorite Indian dishes delivered to your door or pick them up fresh from our store.
          </p>
        </div>
      </section>

      {/* Ordering Options */}
      <section className="py-16 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Choose Your Ordering Method"
            subtitle="Multiple ways to enjoy our delicious food"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* DoorDash */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">DD</span>
              </div>
              <h3 className="text-2xl font-bold text-[#3D2314] mb-4">DoorDash</h3>
              <p className="text-[#3D2314]/70 mb-6">
                Order through DoorDash for fast delivery to your location.
              </p>
              <a
                href={businessInfo.delivery.doordash}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-red-500 text-white py-3 rounded-full font-semibold hover:bg-red-600 transition-colors"
              >
                Order on DoorDash
              </a>
            </div>

            {/* Uber Eats */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">UE</span>
              </div>
              <h3 className="text-2xl font-bold text-[#3D2314] mb-4">Uber Eats</h3>
              <p className="text-[#3D2314]/70 mb-6">
                Use your Uber account to order delivery from our restaurant.
              </p>
              <a
                href={businessInfo.delivery.ubereats}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
              >
                Order on Uber Eats
              </a>
            </div>

            {/* Phone Order */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-[#FF9933] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-2xl font-bold text-[#3D2314] mb-4">Call & Pickup</h3>
              <p className="text-[#3D2314]/70 mb-6">
                Call us to place your order and pick it up fresh from the store.
              </p>
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="block w-full bg-[#FF9933] text-[#3D2314] py-3 rounded-full font-semibold hover:bg-[#D4AF37] transition-colors"
              >
                {businessInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Popular Choices"
            subtitle="Not sure what to order? Try our customer favorites"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-[#C41E3A] font-semibold hover:underline"
            >
              View Full Menu
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Delivery Info */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-[#3D2314] mb-4">Delivery Information</h3>
              <ul className="space-y-3 text-[#3D2314]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9933]">✓</span>
                  Delivery available through DoorDash and Uber Eats
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9933]">✓</span>
                  Delivery radius varies by platform
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9933]">✓</span>
                  Delivery fees set by delivery partners
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9933]">✓</span>
                  Track your order in real-time
                </li>
              </ul>
            </div>

            {/* Pickup Info */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-[#3D2314] mb-4">Pickup Information</h3>
              <ul className="space-y-3 text-[#3D2314]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9933]">✓</span>
                  Call ahead for faster service: {businessInfo.phone}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9933]">✓</span>
                  Cafeteria hours: Mon-Sat {businessInfo.hours.cafeteria.weekdays}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9933]">✓</span>
                  Last order at {businessInfo.hours.cafeteria.lastOrder}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9933]">✓</span>
                  Free parking available in Holiday Plaza
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-gradient-to-r from-[#FF9933] to-[#C41E3A]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Coming Soon
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">
            Direct Online Ordering
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            We&apos;re working on our own online ordering system so you can order directly from us. Stay tuned!
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#C41E3A] px-8 py-4 rounded-full font-semibold hover:bg-[#FFF8E7] transition-colors"
          >
            Get Notified
          </Link>
        </div>
      </section>
    </>
  );
}
