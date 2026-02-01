export const businessInfo = {
  name: 'Spice N Curry',
  tagline: 'Authentic Indian Mart',
  slogan: 'Best Indian Products in Miami',
  description: 'Your one-stop destination for authentic Indian groceries and delicious homemade food in Miami. We offer a wide selection of spices, lentils, fresh produce, and traditional Indian cuisine.',

  // Contact Information
  phone: '(305) 456-6280',
  phoneRaw: '+13054566280',
  email: 'info@spicencurrymiami.com',

  // Address
  address: {
    street: '123 SW 107th Ave',
    city: 'Miami',
    state: 'FL',
    zip: '33174',
    country: 'USA',
    plaza: 'Holiday Plaza',
    full: '123 SW 107th Ave, Miami, FL 33174',
  },

  // Hours
  hours: {
    store: {
      weekdays: '11:00 AM - 9:00 PM',
      saturday: '11:00 AM - 9:00 PM',
      sunday: '11:00 AM - 9:00 PM',
    },
    cafeteria: {
      weekdays: '11:00 AM - 3:30 PM',
      saturday: '11:00 AM - 3:30 PM',
      sunday: 'Closed',
      lastOrder: '3:00 PM',
    },
  },

  // Social Media
  social: {
    instagram: 'https://instagram.com/spice.n.curry',
    facebook: 'https://facebook.com/SpiceNCurry',
    instagramHandle: '@spice.n.curry',
  },

  // Delivery Partners
  delivery: {
    doordash: 'https://www.doordash.com/store/spice-n-curry-miami-622834/',
    ubereats: 'https://www.ubereats.com/store/spice-n-curry-university-park/BUpQm4XUTAWZJmSTqSjSBw',
    clover: 'https://www.clover.com/online-ordering/BHY9HP96E4131',
  },

  // Google Maps
  maps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.0176!2d-80.3679!3d25.7617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bf2a8ccddd77%3A0x9458edf44de28167!2sSpice%20N%20Curry!5e0!3m2!1sen!2sus!4v1234567890',
    directionsUrl: 'https://maps.google.com/?q=Spice+N+Curry+123+SW+107th+Ave+Miami+FL+33174',
    placeId: 'ChIJd93NjCoSv4gRZwZJ-oe4O2g',
  },

  // Features
  features: [
    { icon: '🌿', title: 'Fresh Daily', description: 'Fresh produce and homemade food prepared daily' },
    { icon: '🕌', title: 'Halal Certified', description: 'All meat products are halal certified' },
    { icon: '🥬', title: 'Vegan Options', description: 'Wide variety of vegan and vegetarian dishes' },
    { icon: '💳', title: 'EBT Accepted', description: 'We accept SNAP/EBT for grocery purchases' },
    { icon: '🚗', title: 'Delivery Available', description: 'Order through DoorDash or Uber Eats' },
    { icon: '🎓', title: 'Near FIU', description: 'Conveniently located near Florida International University' },
  ],

  // Reviews Summary
  reviews: {
    google: { rating: 4.0, count: 399 },
    yelp: { rating: 4.3, count: 148 },
    facebook: { rating: 4.6, count: 14 },
  },

  // Testimonials
  testimonials: [
    {
      name: 'Mario C.',
      rating: 5,
      text: 'There is a small cafeteria inside, the staff is friendly, and prices are good.',
      source: 'Google',
    },
    {
      name: 'Daniel R.',
      rating: 5,
      text: 'If you need Indian spices, ingredients, snacks or produce, this is the place.',
      source: 'Google',
    },
    {
      name: 'Priya S.',
      rating: 5,
      text: 'Best Indian food in Miami! The chicken biryani is authentic and delicious.',
      source: 'Yelp',
    },
    {
      name: 'Ahmed K.',
      rating: 5,
      text: 'Finally found a place with proper halal meat and amazing curry. Highly recommend!',
      source: 'Yelp',
    },
  ],

  // About
  about: {
    story: `Spice N Curry has been serving the Miami community with authentic Indian flavors since our establishment. What started as a small grocery store has grown into a beloved destination for both grocery shopping and delicious homemade Indian cuisine.

Located in the heart of Holiday Plaza, just minutes from Florida International University, we have become a home away from home for students, families, and anyone craving genuine Indian flavors.

Our grocery section offers a comprehensive selection of spices, lentils, grains, fresh produce, and specialty items imported directly from India. Our cafeteria serves fresh, homemade meals prepared daily using traditional recipes passed down through generations.`,
    mission: 'To bring the authentic taste of India to Miami, providing quality groceries and delicious food that reminds our customers of home.',
    values: [
      'Authenticity in every product and dish',
      'Quality ingredients, no compromises',
      'Warm hospitality and friendly service',
      'Supporting our local community',
    ],
  },
};

// SEO Data
export const seoData = {
  siteName: 'Spice N Curry',
  siteUrl: 'https://spicencurrymiami.com',
  defaultTitle: 'Spice N Curry - Authentic Indian Grocery & Restaurant in Miami, FL',
  defaultDescription: 'Visit Spice N Curry for authentic Indian groceries, spices, and delicious homemade food in Miami. Fresh daily, halal certified, vegan options available. Near FIU. Call (305) 456-6280.',
  keywords: [
    'Indian grocery store Miami',
    'Indian restaurant Miami',
    'Indian food near FIU',
    'halal food Miami',
    'Indian spices Miami',
    'biryani Miami',
    'curry Miami',
    'samosa Miami',
    'Indian market Miami',
    'authentic Indian food Florida',
    'Indian grocery near me',
    'Spice N Curry Miami',
  ],
  ogImage: '/images/og-image.jpg',
};

// JSON-LD Schema Data
export const schemaData = {
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'IndianRestaurant',
    '@id': 'https://spicencurrymiami.com',
    name: 'Spice N Curry',
    alternateName: 'Spice and Curry Miami',
    description: businessInfo.description,
    url: 'https://spicencurrymiami.com',
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.zip,
      addressCountry: businessInfo.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.7617,
      longitude: -80.3679,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '11:00',
        closes: '21:00',
      },
    ],
    priceRange: '$',
    servesCuisine: 'Indian',
    acceptsReservations: true,
    paymentAccepted: 'Cash, Credit Card, EBT',
    currenciesAccepted: 'USD',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.3,
      reviewCount: businessInfo.reviews.google.count + businessInfo.reviews.yelp.count,
    },
    image: '/images/storefront.jpg',
    sameAs: [
      businessInfo.social.instagram,
      businessInfo.social.facebook,
    ],
  },
  groceryStore: {
    '@context': 'https://schema.org',
    '@type': 'GroceryStore',
    name: 'Spice N Curry Indian Grocery',
    description: 'Authentic Indian grocery store offering spices, lentils, fresh produce, and specialty items.',
    url: 'https://spicencurrymiami.com/grocery',
    telephone: businessInfo.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.zip,
      addressCountry: businessInfo.address.country,
    },
    priceRange: '$',
    paymentAccepted: 'Cash, Credit Card, EBT',
  },
};
