import Link from 'next/link';
import Image from 'next/image';
import { businessInfo } from '@/data/business';
import { getPopularItems } from '@/data/menu';
import { groceryCategories } from '@/data/grocery';
import MenuCard from '@/components/MenuCard';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import SectionTitle from '@/components/SectionTitle';

export default function Home() {
  const popularItems = getPopularItems().slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center indian-pattern">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D2314] via-[#3D2314]/90 to-transparent z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Indian cuisine background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#FF9933] text-[#3D2314] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              {businessInfo.tagline}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {businessInfo.slogan}
            </h1>
            <p className="text-xl text-[#FFF8E7]/90 mb-8">
              Your one-stop destination for authentic Indian groceries and delicious homemade food in Miami. Fresh daily, prepared with love.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="bg-[#FF9933] text-[#3D2314] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#D4AF37] transition-colors inline-flex items-center gap-2"
              >
                View Menu
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href={businessInfo.delivery.doordash}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-[#FF9933] text-[#FF9933] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#FF9933] hover:text-[#3D2314] transition-colors"
              >
                Order Online
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-[#FFF8E7]/80">
              <div className="flex items-center gap-2">
                <span className="text-[#FF9933] text-2xl">★</span>
                <span className="font-semibold">{businessInfo.reviews.google.rating}</span>
                <span className="text-sm">({businessInfo.reviews.google.count} reviews)</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <span>📍</span>
                <span>Near FIU</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Why Choose Us"
            subtitle="Experience the authentic taste of India with our fresh ingredients and traditional recipes"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {businessInfo.features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-16 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Popular Dishes"
            subtitle="Our customers' favorites, prepared fresh daily with authentic Indian spices"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-[#C41E3A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3D2314] transition-colors"
            >
              View Full Menu
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Grocery Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Indian Grocery Store"
            subtitle="Find all your favorite Indian ingredients, spices, and specialty items"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {groceryCategories.map((category) => (
              <Link
                key={category.id}
                href={`/grocery?category=${category.id}`}
                className="bg-[#FFF8E7] rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-[#3D2314] group-hover:text-[#C41E3A] transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/grocery"
              className="inline-flex items-center gap-2 bg-[#FF9933] text-[#3D2314] px-8 py-3 rounded-full font-semibold hover:bg-[#D4AF37] transition-colors"
            >
              Browse Grocery
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section className="py-16 bg-[#3D2314] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FF9933]">
                Visit Us Today
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#D4AF37]">Store Hours</h3>
                  <p className="text-[#FFF8E7]/80">Daily: {businessInfo.hours.store.weekdays}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#D4AF37]">Cafeteria Hours</h3>
                  <p className="text-[#FFF8E7]/80">Monday - Saturday: {businessInfo.hours.cafeteria.weekdays}</p>
                  <p className="text-[#FFF8E7]/80">Sunday: {businessInfo.hours.cafeteria.sunday}</p>
                  <p className="text-sm text-[#FF9933] mt-1">Last order at {businessInfo.hours.cafeteria.lastOrder}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#D4AF37]">Location</h3>
                  <p className="text-[#FFF8E7]/80">{businessInfo.address.street}</p>
                  <p className="text-[#FFF8E7]/80">{businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}</p>
                  <p className="text-sm text-[#FF9933] mt-1">Located in {businessInfo.address.plaza}</p>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={`tel:${businessInfo.phoneRaw}`}
                    className="bg-[#FF9933] text-[#3D2314] px-6 py-3 rounded-full font-semibold hover:bg-[#D4AF37] transition-colors inline-flex items-center gap-2"
                  >
                    <span>📞</span> Call Now
                  </a>
                  <a
                    href={businessInfo.maps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-[#FF9933] text-[#FF9933] px-6 py-3 rounded-full font-semibold hover:bg-[#FF9933] hover:text-[#3D2314] transition-colors inline-flex items-center gap-2"
                  >
                    <span>📍</span> Get Directions
                  </a>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={businessInfo.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Spice N Curry Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="What Our Customers Say"
            subtitle="Don't just take our word for it - hear from our happy customers"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessInfo.testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Order Online CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#FF9933] to-[#C41E3A]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Craving Indian Food?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Order now for pickup or delivery. Fresh, authentic Indian cuisine delivered straight to your door.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={businessInfo.delivery.doordash}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#C41E3A] px-8 py-4 rounded-full font-semibold hover:bg-[#FFF8E7] transition-colors"
            >
              Order on DoorDash
            </a>
            <a
              href={businessInfo.delivery.ubereats}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3D2314] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#3D2314]/80 transition-colors"
            >
              Order on Uber Eats
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
