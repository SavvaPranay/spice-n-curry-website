export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVegetarian: boolean;
  isVegan: boolean;
  isHalal: boolean;
  isPopular: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
}

export const menuCategories: MenuCategory[] = [
  { id: 'curries', name: 'Curries', description: 'Authentic Indian curries made with fresh spices' },
  { id: 'biryani', name: 'Biryani & Rice', description: 'Aromatic rice dishes with premium basmati' },
  { id: 'snacks', name: 'Snacks & Appetizers', description: 'Crispy samosas, pakoras, and more' },
  { id: 'breads', name: 'Breads', description: 'Freshly made chapathi, naan, and roti' },
  { id: 'drinks', name: 'Beverages', description: 'Refreshing lassi, chai, and traditional drinks' },
  { id: 'desserts', name: 'Desserts', description: 'Sweet treats to end your meal' },
];

export const menuItems: MenuItem[] = [
  // Curries
  {
    id: 'chicken-curry',
    name: 'Chicken Curry',
    description: 'Tender chicken pieces cooked in a rich, flavorful curry sauce with aromatic spices',
    price: 10.99,
    category: 'curries',
    image: '/images/menu/chicken-curry.jpg',
    isVegetarian: false,
    isVegan: false,
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'goat-curry',
    name: 'Goat Curry',
    description: 'Succulent goat meat slow-cooked in traditional spices and herbs',
    price: 12.99,
    category: 'curries',
    image: '/images/menu/goat-curry.jpg',
    isVegetarian: false,
    isVegan: false,
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'mutton-curry',
    name: 'Mutton Curry',
    description: 'Rich and hearty mutton curry with a blend of authentic Indian spices',
    price: 13.99,
    category: 'curries',
    image: '/images/menu/mutton-curry.jpg',
    isVegetarian: false,
    isVegan: false,
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'palak-paneer',
    name: 'Palak Paneer',
    description: 'Cottage cheese cubes in a creamy spinach sauce',
    price: 9.99,
    category: 'curries',
    image: '/images/menu/palak-paneer.jpg',
    isVegetarian: true,
    isVegan: false,
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'chana-masala',
    name: 'Chana Masala',
    description: 'Chickpeas cooked in a tangy tomato-based sauce with Indian spices',
    price: 8.99,
    category: 'curries',
    image: '/images/menu/chana-masala.jpg',
    isVegetarian: true,
    isVegan: true,
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'vegan-curry',
    name: 'Vegan Curry',
    description: 'Mixed vegetables in a flavorful vegan curry sauce',
    price: 8.99,
    category: 'curries',
    image: '/images/menu/vegan-curry.jpg',
    isVegetarian: true,
    isVegan: true,
    isHalal: true,
    isPopular: false,
  },
  {
    id: 'veggie-curry',
    name: 'Veggie Curry',
    description: 'Seasonal vegetables cooked in a mild, creamy curry',
    price: 8.49,
    category: 'curries',
    image: '/images/menu/veggie-curry.jpg',
    isVegetarian: true,
    isVegan: false,
    isHalal: true,
    isPopular: false,
  },
  {
    id: 'dal-tadka',
    name: 'Dal Tadka',
    description: 'Yellow lentils tempered with cumin, garlic, and spices',
    price: 7.99,
    category: 'curries',
    image: '/images/menu/dal-tadka.jpg',
    isVegetarian: true,
    isVegan: true,
    isHalal: true,
    isPopular: false,
  },
  // Biryani & Rice
  {
    id: 'chicken-biryani',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice layered with spiced chicken and saffron',
    price: 11.99,
    category: 'biryani',
    image: '/images/menu/chicken-biryani.jpg',
    isVegetarian: false,
    isVegan: false,
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'goat-biryani',
    name: 'Goat Biryani',
    description: 'Premium basmati rice cooked with tender goat and aromatic spices',
    price: 13.99,
    category: 'biryani',
    image: '/images/menu/goat-biryani.jpg',
    isVegetarian: false,
    isVegan: false,
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'vegetable-biryani',
    name: 'Vegetable Biryani',
    description: 'Aromatic basmati rice with mixed vegetables and Indian spices',
    price: 9.99,
    category: 'biryani',
    image: '/images/menu/veg-biryani.jpg',
    isVegetarian: true,
    isVegan: true,
    isHalal: true,
    isPopular: false,
  },
  {
    id: 'basmati-rice',
    name: 'Basmati Rice',
    description: 'Perfectly steamed premium basmati rice',
    price: 2.99,
    category: 'biryani',
    image: '/images/menu/basmati-rice.jpg',
    isVegetarian: true,
    isVegan: true,
    isHalal: true,
    isPopular: false,
  },
  // Snacks & Appetizers
  {
    id: 'chicken-samosa',
    name: 'Chicken Samosas',
    description: 'Crispy pastry filled with spiced chicken - 2 pieces',
    price: 3.00,
    category: 'snacks',
    image: '/images/menu/chicken-samosa.jpg',
    isVegetarian: false,
    isVegan: false,
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'veggie-samosa',
    name: 'Veggie Samosas',
    description: 'Crispy pastry filled with spiced potatoes and peas - 2 pieces',
    price: 2.50,
    category: 'snacks',
    image: '/images/menu/veggie-samosa.jpg',
    isVegetarian: true,
    isVegan: true,
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'samosa-chaat',
    name: 'Samosa Chaat',
    description: 'Crushed samosa topped with chutneys, yogurt, and spices',
    price: 5.99,
    category: 'snacks',
    image: '/images/menu/samosa-chaat.jpg',
    isVegetarian: true,
    isVegan: false,
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'papadum',
    name: 'Papadum',
    description: 'Crispy lentil crackers - 4 pieces',
    price: 2.99,
    category: 'snacks',
    image: '/images/menu/papadum.jpg',
    isVegetarian: true,
    isVegan: true,
    isHalal: true,
    isPopular: false,
  },
  {
    id: 'pakora',
    name: 'Vegetable Pakora',
    description: 'Mixed vegetables dipped in spiced chickpea batter and fried',
    price: 4.99,
    category: 'snacks',
    image: '/images/menu/pakora.jpg',
    isVegetarian: true,
    isVegan: true,
    isHalal: true,
    isPopular: false,
  },
  // Breads
  {
    id: 'chapathi',
    name: 'Chapathi',
    description: 'Freshly made whole wheat flatbread - 2 pieces',
    price: 2.49,
    category: 'breads',
    image: '/images/menu/chapathi.jpg',
    isVegetarian: true,
    isVegan: true,
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'naan',
    name: 'Naan',
    description: 'Soft, fluffy leavened bread baked in tandoor',
    price: 2.99,
    category: 'breads',
    image: '/images/menu/naan.jpg',
    isVegetarian: true,
    isVegan: false,
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'garlic-naan',
    name: 'Garlic Naan',
    description: 'Naan bread topped with fresh garlic and cilantro',
    price: 3.49,
    category: 'breads',
    image: '/images/menu/garlic-naan.jpg',
    isVegetarian: true,
    isVegan: false,
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'paratha',
    name: 'Paratha',
    description: 'Flaky, layered whole wheat bread',
    price: 2.99,
    category: 'breads',
    image: '/images/menu/paratha.jpg',
    isVegetarian: true,
    isVegan: false,
    isHalal: true,
    isPopular: false,
  },
  // Beverages
  {
    id: 'mango-lassi',
    name: 'Mango Lassi',
    description: 'Refreshing yogurt drink blended with sweet mango',
    price: 3.99,
    category: 'drinks',
    image: '/images/menu/mango-lassi.jpg',
    isVegetarian: true,
    isVegan: false,
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'sweet-lassi',
    name: 'Sweet Lassi',
    description: 'Traditional sweet yogurt drink',
    price: 3.49,
    category: 'drinks',
    image: '/images/menu/sweet-lassi.jpg',
    isVegetarian: true,
    isVegan: false,
    isHalal: true,
    isPopular: false,
  },
  {
    id: 'masala-chai',
    name: 'Masala Chai',
    description: 'Spiced Indian tea with milk',
    price: 2.49,
    category: 'drinks',
    image: '/images/menu/masala-chai.jpg',
    isVegetarian: true,
    isVegan: false,
    isHalal: true,
    isPopular: true,
  },
  // Desserts
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    description: 'Sweet milk dumplings soaked in rose-flavored syrup - 2 pieces',
    price: 3.99,
    category: 'desserts',
    image: '/images/menu/gulab-jamun.jpg',
    isVegetarian: true,
    isVegan: false,
    isHalal: true,
    isPopular: true,
  },
  {
    id: 'kheer',
    name: 'Kheer',
    description: 'Creamy rice pudding with cardamom and nuts',
    price: 3.99,
    category: 'desserts',
    image: '/images/menu/kheer.jpg',
    isVegetarian: true,
    isVegan: false,
    isHalal: true,
    isPopular: false,
  },
];

export const getMenuByCategory = (categoryId: string): MenuItem[] => {
  return menuItems.filter(item => item.category === categoryId);
};

export const getPopularItems = (): MenuItem[] => {
  return menuItems.filter(item => item.isPopular);
};

export const getVegetarianItems = (): MenuItem[] => {
  return menuItems.filter(item => item.isVegetarian);
};

export const getVeganItems = (): MenuItem[] => {
  return menuItems.filter(item => item.isVegan);
};
