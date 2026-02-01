import type { Metadata } from 'next';
import { groceryItems, groceryCategories, getGroceryByCategory } from '@/data/grocery';
import { businessInfo } from '@/data/business';
import GroceryCard from '@/components/GroceryCard';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Indian Grocery Store - Spices, Lentils & More',
  description: 'Shop authentic Indian groceries at Spice N Curry Miami. Find spices, masalas, lentils, fresh produce, frozen foods, and specialty items. SNAP/EBT accepted.',
  keywords: ['Indian grocery store Miami', 'Indian spices', 'Indian ingredients', 'halal grocery', 'Indian market', 'desi grocery'],
  openGraph: {
    title: 'Indian Grocery Store | Spice N Curry Miami',
    description: 'Shop authentic Indian groceries - spices, lentils, fresh produce, and more.',
    url: '/grocery',
  },
};

export default function GroceryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#3D2314] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF9933] mb-4">
            Indian Grocery Store
          </h1>
          <p className="text-[#FFF8E7]/80 max-w-2xl mx-auto">
            Your one-stop shop for authentic Indian groceries. From spices to fresh produce, we have everything you need to create delicious Indian dishes at home.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">💳 SNAP/EBT Accepted</span>
            <span className="bg-[#FF9933]/20 text-[#FF9933] px-3 py-1 rounded-full">🌿 Fresh Produce Daily</span>
            <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1 rounded-full">🇮🇳 Imported from India</span>
          </div>
        </div>
      </section>

      {/* Store Hours */}
      <section className="bg-[#FF9933] py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#3D2314] font-medium">
            <strong>Store Hours:</strong> Open Daily: {businessInfo.hours.store.weekdays}
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white sticky top-[72px] z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {groceryCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="flex items-center gap-2 bg-[#FFF8E7] px-4 py-2 rounded-full text-sm font-medium text-[#3D2314] hover:bg-[#FF9933] hover:text-white transition-colors"
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Grocery Categories */}
      <section className="py-16 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4">
          {groceryCategories.map((category) => {
            const categoryItems = getGroceryByCategory(category.id);
            if (categoryItems.length === 0) return null;

            return (
              <div key={category.id} id={category.id} className="mb-16 last:mb-0 scroll-mt-40">
                <div className="mb-8 flex items-center gap-4">
                  <span className="text-4xl">{category.icon}</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#3D2314]">
                      {category.name}
                    </h2>
                    <p className="text-[#3D2314]/70">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categoryItems.map((item) => (
                    <GroceryCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Can't Find What You Need */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#3D2314] mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-[#3D2314]/70 mb-8 max-w-xl mx-auto">
            Our inventory is constantly growing. If you don&apos;t see something you need, just ask! We&apos;re happy to help source specific Indian products for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="bg-[#FF9933] text-[#3D2314] px-8 py-3 rounded-full font-semibold hover:bg-[#D4AF37] transition-colors inline-flex items-center gap-2"
            >
              <span>📞</span> Call Us
            </a>
            <a
              href={businessInfo.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3D2314] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#C41E3A] transition-colors inline-flex items-center gap-2"
            >
              <span>📍</span> Visit Our Store
            </a>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 bg-[#3D2314]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">💳</div>
              <h3 className="text-[#FF9933] font-semibold mb-2">SNAP/EBT Accepted</h3>
              <p className="text-[#FFF8E7]/70 text-sm">We accept SNAP/EBT for eligible grocery purchases</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="text-[#FF9933] font-semibold mb-2">Fresh Daily</h3>
              <p className="text-[#FFF8E7]/70 text-sm">Fresh produce and specialty items restocked regularly</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🇮🇳</div>
              <h3 className="text-[#FF9933] font-semibold mb-2">Authentic Products</h3>
              <p className="text-[#FFF8E7]/70 text-sm">Imported directly from India for authentic quality</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
