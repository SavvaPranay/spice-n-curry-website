import type { Metadata } from 'next';
import Image from 'next/image';
import { businessInfo } from '@/data/business';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Gallery - Photos of Our Food & Store',
  description: 'Browse photos of Spice N Curry Miami - see our delicious Indian food, grocery store, and more. Authentic Indian cuisine and products.',
  keywords: ['Indian food photos', 'Spice N Curry photos', 'Indian restaurant gallery', 'Indian grocery store photos'],
  openGraph: {
    title: 'Photo Gallery | Spice N Curry Miami',
    description: 'Browse photos of our delicious Indian food and grocery store.',
    url: '/gallery',
  },
};

// Gallery images organized by category
const galleryImages = {
  food: [
    { src: '/images/gallery/chicken-curry.jpg', alt: 'Chicken Curry with Basmati Rice' },
    { src: '/images/gallery/goat-biryani.jpg', alt: 'Goat Biryani' },
    { src: '/images/gallery/samosa-plate.jpg', alt: 'Chicken Samosas' },
    { src: '/images/gallery/palak-paneer.jpg', alt: 'Palak Paneer' },
    { src: '/images/gallery/mango-lassi.jpg', alt: 'Refreshing Mango Lassi' },
    { src: '/images/gallery/thali-meal.jpg', alt: 'Indian Thali Meal' },
    { src: '/images/gallery/biryani-closeup.jpg', alt: 'Biryani Close-up' },
    { src: '/images/gallery/chana-masala.jpg', alt: 'Chana Masala' },
  ],
  store: [
    { src: '/images/gallery/storefront.jpg', alt: 'Spice N Curry Storefront' },
    { src: '/images/gallery/spice-aisle.jpg', alt: 'Spice Aisle' },
    { src: '/images/gallery/fresh-produce.jpg', alt: 'Fresh Produce Section' },
    { src: '/images/gallery/cafeteria.jpg', alt: 'Our Cafeteria' },
  ],
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#3D2314] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF9933] mb-4">
            Photo Gallery
          </h1>
          <p className="text-[#FFF8E7]/80 max-w-2xl mx-auto">
            Take a visual tour of Spice N Curry. See our delicious dishes, grocery selection, and welcoming store atmosphere.
          </p>
        </div>
      </section>

      {/* Food Gallery */}
      <section className="py-16 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Our Delicious Food"
            subtitle="Fresh, authentic Indian cuisine prepared daily with traditional recipes"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.food.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D2314]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Our Store"
            subtitle="A welcoming space for all your Indian grocery and food needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.store.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D2314]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-lg font-medium">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed CTA */}
      <section className="py-16 bg-gradient-to-r from-[#FF9933] to-[#C41E3A]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            See more photos, daily specials, and behind-the-scenes content on our Instagram page.
          </p>
          <a
            href={businessInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#C41E3A] px-8 py-4 rounded-full font-semibold hover:bg-[#FFF8E7] transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            {businessInfo.social.instagramHandle}
          </a>
        </div>
      </section>
    </>
  );
}
