
import type { Product, Testimonial } from '@/lib/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Mystic Bloom',
    description: 'A captivating floral scent with notes of jasmine and rose.',
    price: 45000,
    image: '/images/mystic-bloom.jpg',
    category: 'Perfume',
    brand: 'DekemiScents',
    scentCategory: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '2',
    name: 'Amber Oud',
    description: 'A rich and warm oud fragrance, with a hint of sweet amber.',
    price: 62000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    brand: 'Aura Fragrances',
    scentCategory: 'Woody',
    details: {
      size: '75ml'
    }
  },
  {
    id: '3',
    name: 'Ocean Breeze',
    description: 'A fresh and invigorating scent reminiscent of a cool sea breeze.',
    price: 38000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    brand: 'DekemiScents',
    scentCategory: 'Fresh',
    details: {
        size: '100ml'
    }
  },
  {
    id: '4',
    name: 'Spiced Vanilla',
    description: 'An exotic blend of vanilla bean and oriental spices.',
    price: 55000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    brand: 'Scentoria',
    scentCategory: 'Oriental',
    details: {
        size: '50ml'
    }
  },
  {
    id: '5',
    name: 'Citrus Burst',
    description: 'A zesty and energetic fragrance with lemon and bergamot.',
    price: 41000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    brand: 'Aura Fragrances',
    scentCategory: 'Fresh',
    details: {
        size: '120ml'
    }
  },
  {
    id: '6',
    name: 'Rose Gold Atomizer',
    description: 'A stylish and portable perfume atomizer in rose gold.',
    price: 15000,
    image: 'https://placehold.co/600x600.png',
    category: 'Accessory',
    brand: 'DekemiScents',
    details: {
        color: 'Rose Gold',
        material: 'Aluminum',
        size: '5ml'
    }
  },
  {
    id: '7',
    name: 'Sandalwood Serenity',
    description: 'A calming and creamy sandalwood scent for a tranquil mind.',
    price: 48000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    brand: 'Scentoria',
    scentCategory: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '8',
    name: 'Midnight Gardenia',
    description: 'An elegant and powerful white floral fragrance.',
    price: 59000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    brand: 'DekemiScents',
    scentCategory: 'Floral',
    details: {
        size: '75ml'
    }
  },
  {
    id: '9',
    name: 'Leather Travel Case',
    description: 'Protect your favorite fragrance with this premium leather case.',
    price: 25000,
    image: 'https://placehold.co/600x600.png',
    category: 'Accessory',
    brand: 'Aura Fragrances',
    details: {
        color: 'Brown',
        material: 'Genuine Leather'
    }
  },
  {
    id: '10',
    name: 'Fresh Linen',
    description: 'Clean and comforting, like freshly laundered sheets.',
    price: 36000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    brand: 'Scentoria',
    scentCategory: 'Fresh',
    details: {
        size: '100ml'
    }
  },
  {
    id: '11',
    name: 'Patchouli Passion',
    description: 'A deep, earthy, and mysterious patchouli blend.',
    price: 52000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    brand: 'DekemiScents',
    scentCategory: 'Oriental',
    details: {
        size: '50ml'
    }
  },
  {
    id: '12',
    name: 'Velvet Pouch',
    description: 'A soft velvet pouch for storing your perfume bottle.',
    price: 8000,
    image: 'https://placehold.co/600x600.png',
    category: 'Accessory',
    brand: 'Scentoria',
    details: {
        color: 'Black',
        material: 'Velvet'
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Aisha Bello',
    rating: 5,
    review: 'The Mystic Bloom is absolutely divine. I get compliments every time I wear it. The scent lasts all day!',
    avatar: 'https://placehold.co/100x100.png',
  },
  {
    id: '2',
    name: 'David Chen',
    rating: 4,
    review: 'Amber Oud is my new signature scent. It\'s powerful but not overwhelming. The packaging was also very luxurious.',
    avatar: 'https://placehold.co/100x100.png',
  },
  {
    id: '3',
    name: 'Fatima Diallo',
    rating: 5,
    review: 'I love how fresh and clean Ocean Breeze smells. It\'s perfect for everyday wear. The customer service was excellent too.',
    avatar: 'https://placehold.co/100x100.png',
  },
  {
    id: '4',
    name: 'Michael Smith',
    rating: 5,
    review: 'The Rose Gold Atomizer is a game-changer for travel. It\'s so chic and easy to use. Highly recommend!',
    avatar: 'https://placehold.co/100x100.png',
  },
  {
    id: '5',
    name: 'Chioma Okoro',
    rating: 4,
    review: 'Spiced Vanilla is a beautiful, cozy scent for the colder months. It feels like a warm hug in a bottle.',
    avatar: 'https://placehold.co/100x100.png',
  },
  {
    id: '6',
    name: 'Liam Johnson',
    rating: 5,
    review: 'I bought the leather travel case and it exceeded my expectations. The quality is top-notch.',
    avatar: 'https://placehold.co/100x100.png',
  }
];
