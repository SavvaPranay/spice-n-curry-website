export interface GroceryItem {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  inStock: boolean;
}

export interface GroceryCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const groceryCategories: GroceryCategory[] = [
  { id: 'spices', name: 'Spices & Masalas', description: 'Authentic Indian spices and spice blends', icon: '🌶️' },
  { id: 'lentils', name: 'Lentils & Grains', description: 'Dal, rice, and other grains', icon: '🌾' },
  { id: 'snacks', name: 'Snacks & Sweets', description: 'Namkeen, biscuits, and traditional sweets', icon: '🍪' },
  { id: 'fresh', name: 'Fresh Produce', description: 'Fresh vegetables, herbs, and fruits', icon: '🥬' },
  { id: 'frozen', name: 'Frozen Foods', description: 'Frozen parathas, samosas, and more', icon: '❄️' },
  { id: 'beverages', name: 'Beverages', description: 'Tea, coffee, juices, and drinks', icon: '🍵' },
  { id: 'dairy', name: 'Dairy & Paneer', description: 'Fresh paneer, ghee, and dairy products', icon: '🧈' },
  { id: 'pickles', name: 'Pickles & Chutneys', description: 'Traditional Indian pickles and condiments', icon: '🫙' },
];

export const groceryItems: GroceryItem[] = [
  // Spices & Masalas
  { id: 'turmeric', name: 'Turmeric Powder (Haldi)', description: 'Premium quality turmeric for cooking and health', category: 'spices', image: '/images/grocery/turmeric.jpg', inStock: true },
  { id: 'cumin', name: 'Cumin Seeds (Jeera)', description: 'Aromatic cumin seeds for tempering', category: 'spices', image: '/images/grocery/cumin.jpg', inStock: true },
  { id: 'coriander', name: 'Coriander Powder (Dhania)', description: 'Freshly ground coriander powder', category: 'spices', image: '/images/grocery/coriander.jpg', inStock: true },
  { id: 'garam-masala', name: 'Garam Masala', description: 'Traditional blend of warming spices', category: 'spices', image: '/images/grocery/garam-masala.jpg', inStock: true },
  { id: 'chili-powder', name: 'Red Chili Powder', description: 'Hot and flavorful red chili powder', category: 'spices', image: '/images/grocery/chili-powder.jpg', inStock: true },
  { id: 'cardamom', name: 'Green Cardamom (Elaichi)', description: 'Premium green cardamom pods', category: 'spices', image: '/images/grocery/cardamom.jpg', inStock: true },
  { id: 'biryani-masala', name: 'Biryani Masala', description: 'Special spice blend for perfect biryani', category: 'spices', image: '/images/grocery/biryani-masala.jpg', inStock: true },
  { id: 'curry-powder', name: 'Curry Powder', description: 'All-purpose curry spice blend', category: 'spices', image: '/images/grocery/curry-powder.jpg', inStock: true },

  // Lentils & Grains
  { id: 'basmati', name: 'Basmati Rice (Premium)', description: 'Long-grain aromatic basmati rice', category: 'lentils', image: '/images/grocery/basmati.jpg', inStock: true },
  { id: 'toor-dal', name: 'Toor Dal (Arhar)', description: 'Split pigeon peas for dal dishes', category: 'lentils', image: '/images/grocery/toor-dal.jpg', inStock: true },
  { id: 'chana-dal', name: 'Chana Dal', description: 'Split chickpeas for curries and snacks', category: 'lentils', image: '/images/grocery/chana-dal.jpg', inStock: true },
  { id: 'moong-dal', name: 'Moong Dal', description: 'Yellow split mung beans', category: 'lentils', image: '/images/grocery/moong-dal.jpg', inStock: true },
  { id: 'masoor-dal', name: 'Masoor Dal', description: 'Red lentils for quick cooking', category: 'lentils', image: '/images/grocery/masoor-dal.jpg', inStock: true },
  { id: 'chickpeas', name: 'Kabuli Chana (Chickpeas)', description: 'Dried chickpeas for chana masala', category: 'lentils', image: '/images/grocery/chickpeas.jpg', inStock: true },
  { id: 'atta', name: 'Whole Wheat Atta', description: 'Fresh wheat flour for chapathi and roti', category: 'lentils', image: '/images/grocery/atta.jpg', inStock: true },

  // Snacks & Sweets
  { id: 'bhujia', name: 'Bikaneri Bhujia', description: 'Crispy spiced gram flour noodles', category: 'snacks', image: '/images/grocery/bhujia.jpg', inStock: true },
  { id: 'mixture', name: 'Mumbai Mixture', description: 'Savory mix of fried snacks', category: 'snacks', image: '/images/grocery/mixture.jpg', inStock: true },
  { id: 'mathri', name: 'Mathri', description: 'Flaky, spiced crackers', category: 'snacks', image: '/images/grocery/mathri.jpg', inStock: true },
  { id: 'gulab-jamun-mix', name: 'Gulab Jamun Mix', description: 'Ready-to-make gulab jamun', category: 'snacks', image: '/images/grocery/gulab-jamun-mix.jpg', inStock: true },
  { id: 'soan-papdi', name: 'Soan Papdi', description: 'Flaky sweet made with gram flour', category: 'snacks', image: '/images/grocery/soan-papdi.jpg', inStock: true },

  // Fresh Produce
  { id: 'cilantro', name: 'Fresh Cilantro', description: 'Fresh coriander leaves', category: 'fresh', image: '/images/grocery/cilantro.jpg', inStock: true },
  { id: 'mint', name: 'Fresh Mint', description: 'Fresh mint leaves for chutneys', category: 'fresh', image: '/images/grocery/mint.jpg', inStock: true },
  { id: 'curry-leaves', name: 'Curry Leaves', description: 'Fresh curry leaves for tempering', category: 'fresh', image: '/images/grocery/curry-leaves.jpg', inStock: true },
  { id: 'green-chili', name: 'Green Chilies', description: 'Fresh Indian green chilies', category: 'fresh', image: '/images/grocery/green-chili.jpg', inStock: true },
  { id: 'ginger', name: 'Fresh Ginger', description: 'Fresh ginger root', category: 'fresh', image: '/images/grocery/ginger.jpg', inStock: true },

  // Frozen Foods
  { id: 'frozen-paratha', name: 'Frozen Paratha', description: 'Ready-to-cook layered parathas', category: 'frozen', image: '/images/grocery/frozen-paratha.jpg', inStock: true },
  { id: 'frozen-samosa', name: 'Frozen Samosas', description: 'Ready-to-fry vegetable samosas', category: 'frozen', image: '/images/grocery/frozen-samosa.jpg', inStock: true },
  { id: 'frozen-naan', name: 'Frozen Naan', description: 'Ready-to-heat naan bread', category: 'frozen', image: '/images/grocery/frozen-naan.jpg', inStock: true },

  // Beverages
  { id: 'chai-masala', name: 'Chai Masala', description: 'Spice blend for perfect masala chai', category: 'beverages', image: '/images/grocery/chai-masala.jpg', inStock: true },
  { id: 'tea-leaves', name: 'Indian Tea Leaves', description: 'Premium Assam tea leaves', category: 'beverages', image: '/images/grocery/tea-leaves.jpg', inStock: true },
  { id: 'mango-pulp', name: 'Mango Pulp', description: 'Alphonso mango pulp for lassi', category: 'beverages', image: '/images/grocery/mango-pulp.jpg', inStock: true },
  { id: 'rooh-afza', name: 'Rooh Afza', description: 'Traditional rose-flavored drink', category: 'beverages', image: '/images/grocery/rooh-afza.jpg', inStock: true },

  // Dairy & Paneer
  { id: 'paneer', name: 'Fresh Paneer', description: 'Homemade style cottage cheese', category: 'dairy', image: '/images/grocery/paneer.jpg', inStock: true },
  { id: 'ghee', name: 'Pure Desi Ghee', description: 'Clarified butter for cooking', category: 'dairy', image: '/images/grocery/ghee.jpg', inStock: true },
  { id: 'yogurt', name: 'Indian Style Yogurt', description: 'Thick, creamy dahi', category: 'dairy', image: '/images/grocery/yogurt.jpg', inStock: true },

  // Pickles & Chutneys
  { id: 'mango-pickle', name: 'Mango Pickle (Aam ka Achar)', description: 'Tangy and spicy mango pickle', category: 'pickles', image: '/images/grocery/mango-pickle.jpg', inStock: true },
  { id: 'lime-pickle', name: 'Lime Pickle (Nimbu ka Achar)', description: 'Zesty lime pickle', category: 'pickles', image: '/images/grocery/lime-pickle.jpg', inStock: true },
  { id: 'tamarind-chutney', name: 'Tamarind Chutney', description: 'Sweet and tangy imli chutney', category: 'pickles', image: '/images/grocery/tamarind-chutney.jpg', inStock: true },
  { id: 'mint-chutney', name: 'Mint Chutney', description: 'Fresh green mint chutney', category: 'pickles', image: '/images/grocery/mint-chutney.jpg', inStock: true },
];

export const getGroceryByCategory = (categoryId: string): GroceryItem[] => {
  return groceryItems.filter(item => item.category === categoryId);
};
