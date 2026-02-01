import type { Metadata } from 'next';
import Link from 'next/link';
import { menuItems, menuCategories, getMenuByCategory } from '@/data/menu';
import { businessInfo } from '@/data/business';
import MenuCard from '@/components/MenuCard';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Menu - Authentic Indian Food',
  description: 'Explore our menu of authentic Indian dishes including chicken curry, goat curry, biryani, samosas, and more. Fresh, homemade food served daily at Spice N Curry Miami.',
  keywords: ['Indian food menu', 'curry menu', 'biryani menu', 'samosa', 'Indian restaurant Miami menu', 'halal food menu'],
  openGraph: {
    title: 'Menu | Spice N Curry - Authentic Indian Food in Miami',
    description: 'Explore our menu of authentic Indian dishes including curries, biryani, samosas, and more.',
    url: '/menu',
  },
};

export default function MenuPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#3D2314] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF9933] mb-4">
            Our Menu
          </h1>
          <p className="text-[#FFF8E7]/80 max-w-2xl mx-auto">
            Authentic Indian cuisine prepared fresh daily with traditional recipes and premium ingredients. All dishes are halal certified.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full">🥬 Vegan Options</span>
            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">🥗 Vegetarian Options</span>
            <span className="bg-[#FF9933]/20 text-[#FF9933] px-3 py-1 rounded-full">🕌 Halal Certified</span>
          </div>
        </div>
      </section>

      {/* Cafeteria Hours Notice */}
      <section className="bg-[#FF9933] py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#3D2314] font-medium">
            <strong>Cafeteria Hours:</strong> Monday - Saturday: {businessInfo.hours.cafeteria.weekdays} (Last order at {businessInfo.hours.cafeteria.lastOrder}) | Sunday: {businessInfo.hours.cafeteria.sunday}
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4">
          {menuCategories.map((category) => {
            const categoryItems = getMenuByCategory(category.id);
            if (categoryItems.length === 0) return null;

            return (
              <div key={category.id} id={category.id} className="mb-16 last:mb-0">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#3D2314] mb-2">
                    {category.name}
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#FF9933] to-[#C41E3A] rounded-full" />
                  <p className="mt-2 text-[#3D2314]/70">{category.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryItems.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Order Online CTA */}
      <section className="py-16 bg-[#3D2314]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#FF9933] mb-4">
            Ready to Order?
          </h2>
          <p className="text-[#FFF8E7]/80 mb-8 max-w-xl mx-auto">
            Order online for pickup or delivery through our delivery partners
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={businessInfo.delivery.doordash}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF9933] text-[#3D2314] px-8 py-3 rounded-full font-semibold hover:bg-[#D4AF37] transition-colors"
            >
              Order on DoorDash
            </a>
            <a
              href={businessInfo.delivery.ubereats}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#FF9933] text-[#FF9933] px-8 py-3 rounded-full font-semibold hover:bg-[#FF9933] hover:text-[#3D2314] transition-colors"
            >
              Order on Uber Eats
            </a>
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-[#3D2314] transition-colors"
            >
              Call to Order
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
