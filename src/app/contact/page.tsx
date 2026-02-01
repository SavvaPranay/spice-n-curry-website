import type { Metadata } from 'next';
import { businessInfo } from '@/data/business';
import ContactForm from '@/components/ContactForm';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Contact Us - Location, Hours & Phone',
  description: 'Contact Spice N Curry Miami. Find our location, store hours, phone number, and get directions. Located at 123 SW 107th Ave in Holiday Plaza, near FIU.',
  keywords: ['Spice N Curry contact', 'Indian grocery Miami location', 'Indian restaurant Miami address', 'Spice N Curry phone'],
  openGraph: {
    title: 'Contact Us | Spice N Curry Miami',
    description: 'Find our location, hours, and contact information.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#3D2314] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF9933] mb-4">
            Contact Us
          </h1>
          <p className="text-[#FFF8E7]/80 max-w-2xl mx-auto">
            We&apos;d love to hear from you! Visit us in store, give us a call, or send us a message.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 bg-[#FFF8E7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-[#3D2314] mb-8">Get In Touch</h2>

              {/* Phone */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FF9933] rounded-full flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3D2314]">Phone</h3>
                    <a
                      href={`tel:${businessInfo.phoneRaw}`}
                      className="text-[#C41E3A] hover:underline text-lg"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FF9933] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3D2314]">Address</h3>
                    <p className="text-[#3D2314]/80">
                      {businessInfo.address.street}<br />
                      {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                    </p>
                    <p className="text-sm text-[#FF9933] mt-1">
                      Located in {businessInfo.address.plaza}
                    </p>
                    <a
                      href={businessInfo.maps.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-[#C41E3A] hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF9933] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🕐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3D2314] mb-3">Hours</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-[#FF9933] uppercase tracking-wide">Store Hours</h4>
                        <table className="mt-2 text-[#3D2314]/80">
                          <tbody>
                            <tr>
                              <td className="pr-4">Monday - Sunday</td>
                              <td>{businessInfo.hours.store.weekdays}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#FF9933] uppercase tracking-wide">Cafeteria Hours</h4>
                        <table className="mt-2 text-[#3D2314]/80">
                          <tbody>
                            <tr>
                              <td className="pr-4">Monday - Saturday</td>
                              <td>{businessInfo.hours.cafeteria.weekdays}</td>
                            </tr>
                            <tr>
                              <td className="pr-4">Sunday</td>
                              <td>{businessInfo.hours.cafeteria.sunday}</td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="text-sm text-[#C41E3A] mt-2">
                          Last order at {businessInfo.hours.cafeteria.lastOrder}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF9933] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3D2314] mb-3">Follow Us</h3>
                    <div className="flex gap-4">
                      <a
                        href={businessInfo.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-[#3D2314] rounded-full flex items-center justify-center hover:bg-[#C41E3A] transition-colors"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a
                        href={businessInfo.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-[#3D2314] rounded-full flex items-center justify-center hover:bg-[#C41E3A] transition-colors"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#3D2314] mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Find Us"
            subtitle="Located in Holiday Plaza, near Florida International University"
          />
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src={businessInfo.maps.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Spice N Curry Location Map"
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href={businessInfo.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF9933] text-[#3D2314] px-8 py-3 rounded-full font-semibold hover:bg-[#D4AF37] transition-colors"
            >
              <span>📍</span> Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Order Online Section */}
      <section className="py-16 bg-[#3D2314]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#FF9933] mb-4">
            Order Online for Delivery
          </h2>
          <p className="text-[#FFF8E7]/80 mb-8 max-w-xl mx-auto">
            Can&apos;t make it to the store? Order your favorite dishes for delivery!
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
          </div>
        </div>
      </section>
    </>
  );
}
