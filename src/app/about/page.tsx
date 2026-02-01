import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { businessInfo } from '@/data/business';
import FeatureCard from '@/components/FeatureCard';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'About Us - Our Story',
  description: 'Learn about Spice N Curry Miami - our story, mission, and commitment to bringing authentic Indian flavors to the Miami community. Family-owned Indian grocery and restaurant.',
  keywords: ['about Spice N Curry', 'Indian grocery Miami', 'Indian restaurant story', 'family owned Indian store'],
  openGraph: {
    title: 'About Us | Spice N Curry Miami',
    description: 'Learn about our story and commitment to authentic Indian flavors.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#3D2314] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF9933] mb-4">
            About Spice N Curry
          </h1>
          <p className="text-[#FFF8E7]/80 max-w-2xl mx-auto">
            Your home for authentic Indian flavors in Miami
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#FF9933] font-semibold mb-2 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3D2314] mb-6">
                A Taste of India in Miami
              </h2>
              <div className="prose prose-lg text-[#3D2314]/80 space-y-4">
                {businessInfo.about.story.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/store-interior.jpg"
                alt="Spice N Curry Store Interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2314]/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-[#FF9933] text-[#3D2314] px-4 py-2 rounded-full font-semibold">
                  Serving Miami Since Day One
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#FF9933] font-semibold mb-2 block">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D2314] mb-6">
              Bringing Authentic Flavors to You
            </h2>
            <p className="text-xl text-[#3D2314]/80 italic">
              &ldquo;{businessInfo.about.mission}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="What We Stand For"
            subtitle="Our core values guide everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessInfo.about.values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md text-center"
              >
                <div className="w-16 h-16 bg-[#FF9933]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">
                    {index === 0 && '🎯'}
                    {index === 1 && '⭐'}
                    {index === 2 && '🤝'}
                    {index === 3 && '❤️'}
                  </span>
                </div>
                <p className="text-[#3D2314] font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="What We Offer"
            subtitle="A complete Indian experience under one roof"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Grocery Store */}
            <div className="bg-[#FFF8E7] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold text-[#3D2314] mb-4">Indian Grocery Store</h3>
              <ul className="space-y-3 text-[#3D2314]/80">
                <li className="flex items-center gap-2">
                  <span className="text-[#FF9933]">✓</span>
                  Authentic Indian spices and masalas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FF9933]">✓</span>
                  Fresh produce and herbs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FF9933]">✓</span>
                  Lentils, rice, and grains
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FF9933]">✓</span>
                  Frozen foods and snacks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FF9933]">✓</span>
                  SNAP/EBT accepted
                </li>
              </ul>
              <Link
                href="/grocery"
                className="inline-block mt-6 bg-[#FF9933] text-[#3D2314] px-6 py-2 rounded-full font-semibold hover:bg-[#D4AF37] transition-colors"
              >
                Browse Grocery
              </Link>
            </div>

            {/* Cafeteria */}
            <div className="bg-[#FFF8E7] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🍛</div>
              <h3 className="text-2xl font-bold text-[#3D2314] mb-4">Fresh Cafeteria</h3>
              <ul className="space-y-3 text-[#3D2314]/80">
                <li className="flex items-center gap-2">
                  <span className="text-[#FF9933]">✓</span>
                  Homemade curries and biryanis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FF9933]">✓</span>
                  Fresh samosas and snacks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FF9933]">✓</span>
                  Vegetarian and vegan options
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FF9933]">✓</span>
                  All halal certified
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FF9933]">✓</span>
                  Delivery available
                </li>
              </ul>
              <Link
                href="/menu"
                className="inline-block mt-6 bg-[#C41E3A] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#3D2314] transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#3D2314]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FF9933] mb-2">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF9933] to-[#D4AF37] rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {businessInfo.features.map((feature, index) => (
              <div key={index} className="bg-[#3D2314] border border-[#FF9933]/20 rounded-xl p-4 text-center hover:border-[#FF9933] transition-colors">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h4 className="text-[#FF9933] font-semibold text-sm mb-1">{feature.title}</h4>
                <p className="text-[#FFF8E7]/60 text-xs">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Summary */}
      <section className="py-16 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionTitle
            title="Our Customers Love Us"
            subtitle="Join hundreds of satisfied customers"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl font-bold text-[#FF9933] mb-2">{businessInfo.reviews.google.rating}</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#FF9933]">★</span>
                ))}
              </div>
              <p className="text-[#3D2314]/70 text-sm">{businessInfo.reviews.google.count} Google Reviews</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl font-bold text-[#C41E3A] mb-2">{businessInfo.reviews.yelp.rating}</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#C41E3A]">★</span>
                ))}
              </div>
              <p className="text-[#3D2314]/70 text-sm">{businessInfo.reviews.yelp.count} Yelp Reviews</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">{businessInfo.reviews.facebook.rating}</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-blue-600">★</span>
                ))}
              </div>
              <p className="text-[#3D2314]/70 text-sm">{businessInfo.reviews.facebook.count} Facebook Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#FF9933] to-[#C41E3A]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Come Experience the Difference
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Visit us today and discover why Spice N Curry is Miami&apos;s favorite destination for authentic Indian groceries and food.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#C41E3A] px-8 py-4 rounded-full font-semibold hover:bg-[#FFF8E7] transition-colors"
            >
              Contact Us
            </Link>
            <a
              href={businessInfo.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3D2314] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#3D2314]/80 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
