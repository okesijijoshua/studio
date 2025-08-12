
import type { Product, Testimonial } from '@/lib/types';

export const products: Product[] = [
  {
    id: '1',
    name: '9AM Dive',
    description: ' A fresh aquatic fragrance with citrus top notes.',
    price: 45000,
    image: '/images/mystic-bloom.jpg',
    category: 'Perfume',
    perfumeType: 'Dekemi',
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
    perfumeType: 'Designer',
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
    perfumeType: 'Dekemi',
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
    perfumeType: 'Signature',
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
    perfumeType: 'Designer',
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
    perfumeType: 'Signature',
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
    perfumeType: 'Dekemi',
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
    perfumeType: 'Signature',
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
    perfumeType: 'Dekemi',
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
  },
  {
    id: '13',
    name: 'Solar Flare',
    description: 'A bright, radiant citrus with a solar musk accord.',
    price: 43000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '14',
    name: 'Velvet Rose',
    description: 'A modern take on a classic rose, deep and velvety.',
    price: 58000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Floral',
    details: {
      size: '75ml'
    }
  },
  {
    id: '15',
    name: 'Cedarwood Dreams',
    description: 'A tranquil, dreamy scent of cedar and lavender.',
    price: 51000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '16',
    name: 'Crimson Spice',
    description: 'A fiery blend of cinnamon, clove, and red mandarin.',
    price: 65000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Oriental',
    details: {
      size: '50ml'
    }
  },
  {
    id: '17',
    name: 'Aqua Marine',
    description: 'A refreshing dive into notes of sea salt and cucumber.',
    price: 39000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Fresh',
    details: {
      size: '120ml'
    }
  },
  {
    id: '18',
    name: 'Golden Iris',
    description: 'A powdery, elegant iris with a touch of golden amber.',
    price: 72000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Floral',
    details: {
      size: '75ml'
    }
  },
  {
    id: '19',
    name: 'Vetiver Veil',
    description: 'Earthy and smoky vetiver wrapped in a clean, green veil.',
    price: 56000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '20',
    name: 'Orchid Noir',
    description: 'A dark, mysterious orchid with hints of black truffle.',
    price: 75000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Oriental',
    details: {
      size: '50ml'
    }
  },
  {
    id: '21',
    name: 'Green Tea Revive',
    description: 'A crisp, revitalizing scent of green tea and mint.',
    price: 40000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '22',
    name: 'Peony Blush',
    description: 'A soft, romantic peony with a hint of red apple.',
    price: 49000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '23',
    name: 'Ebony Wood',
    description: 'A deep, rich scent of ebony wood and black pepper.',
    price: 68000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Woody',
    details: {
      size: '75ml'
    }
  },
  {
    id: '24',
    name: 'Tonka Delight',
    description: 'A sweet and creamy tonka bean with almond notes.',
    price: 54000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Oriental',
    details: {
      size: '50ml'
    }
  },
  {
    id: '25',
    name: 'Fig Leaf',
    description: 'A green and slightly bitter scent of freshly crushed fig leaves.',
    price: 46000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '26',
    name: 'White Jasmine',
    description: 'A pure, intoxicating jasmine fragrance for warm evenings.',
    price: 61000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Floral',
    details: {
      size: '75ml'
    }
  },
  {
    id: '27',
    name: 'Smoked Leather',
    description: 'A rugged, smoky leather with a hint of birch tar.',
    price: 78000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '28',
    name: 'Cardamom Kiss',
    description: 'A spicy, warm cardamom blended with sweet coffee.',
    price: 63000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Oriental',
    details: {
      size: '50ml'
    }
  },
  {
    id: '29',
    name: 'Gilded Lily',
    description: 'A magnificent lily scent, touched with a hint of spice.',
    price: 53000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '30',
    name: 'Mojito Twist',
    description: 'A sparkling mix of lime, mint, and white rum notes.',
    price: 42000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Fresh',
    details: {
      size: '120ml'
    }
  },
  {
    id: '31',
    name: 'Oud Mystique',
    description: 'A dark, resinous oud with a touch of rose and saffron.',
    price: 85000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Woody',
    details: {
      size: '75ml'
    }
  },
  {
    id: '32',
    name: 'Blackcurrant Bomb',
    description: 'A juicy, explosive blackcurrant scent with green undertones.',
    price: 47000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '33',
    name: 'Tuberose Triumph',
    description: 'A creamy, carnal tuberose that commands attention.',
    price: 69000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Floral',
    details: {
      size: '50ml'
    }
  },
  {
    id: '34',
    name: 'Sacred Frankincense',
    description: 'A spiritual, resinous frankincense with a citrus lift.',
    price: 71000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Oriental',
    details: {
      size: '75ml'
    }
  },
  {
    id: '35',
    name: 'Whispering Woods',
    description: 'A soft, gentle blend of light woods and white musk.',
    price: 50000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '36',
    name: 'Mandarin Sun',
    description: 'A bright, joyful mandarin orange scent.',
    price: 44000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Fresh',
    details: {
      size: '120ml'
    }
  },
  {
    id: '37',
    name: 'Cherry Blossom Dream',
    description: 'A delicate and airy cherry blossom scent.',
    price: 48000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '38',
    name: 'Ambergris Tide',
    description: 'A salty, marine ambergris scent with mineralic tones.',
    price: 95000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Woody',
    details: {
      size: '50ml'
    }
  },
  {
    id: '39',
    name: 'Ginger Zest',
    description: 'A spicy and sharp ginger fragrance, perfect for a pick-me-up.',
    price: 45000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '40',
    name: 'Myrrh Imperial',
    description: 'A rich, balsamic myrrh with a touch of vanilla sweetness.',
    price: 76000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Oriental',
    details: {
      size: '75ml'
    }
  },
  {
    id: '41',
    name: 'Violet Volt',
    description: 'An electric, powdery violet with a modern twist.',
    price: 57000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Floral',
    details: {
      size: '75ml'
    }
  },
  {
    id: '42',
    name: 'Palo Santo',
    description: 'A cleansing, aromatic scent of sacred palo santo wood.',
    price: 64000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '43',
    name: 'Peach Paradise',
    description: 'A juicy, ripe peach scent that feels like summer.',
    price: 49000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '44',
    name: 'Incense Smoke',
    description: 'A contemplative, smoky incense with notes of spice.',
    price: 67000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Oriental',
    details: {
      size: '50ml'
    }
  },
  {
    id: '45',
    name: 'Freesia Fields',
    description: 'A light, peppery freesia that dances in the air.',
    price: 52000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '46',
    name: 'Guaiac Gold',
    description: 'A smoky, leathery guaiac wood with a touch of sweetness.',
    price: 73000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Woody',
    details: {
      size: '75ml'
    }
  },
  {
    id: '47',
    name: 'Coconut Cream',
    description: 'A creamy, tropical coconut scent with a hint of vanilla.',
    price: 48000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Fresh',
    details: {
      size: '120ml'
    }
  },
  {
    id: '48',
    name: 'Saffron Silk',
    description: 'A luxurious, warm saffron with a leathery nuance.',
    price: 88000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Oriental',
    details: {
      size: '50ml'
    }
  },
  {
    id: '49',
    name: 'Magnolia Charm',
    description: 'A creamy, citrusy magnolia blossom.',
    price: 59000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '50',
    name: 'Birch Bark',
    description: 'A cool, crisp scent of birch trees in winter.',
    price: 60000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '51',
    name: 'Royal Oud',
    description: 'A majestic oud, fit for royalty, with spices and woods.',
    price: 105000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Woody',
    details: {
      size: '75ml'
    }
  },
  {
    id: '52',
    name: 'Lavender Lullaby',
    description: 'A calming and aromatic lavender for peaceful moments.',
    price: 47000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '53',
    name: 'Jasmine Sambac',
    description: 'A sweet, green, and animalic jasmine from India.',
    price: 66000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Floral',
    details: {
      size: '50ml'
    }
  },
  {
    id: '54',
    name: 'Clove Ember',
    description: 'A warm, spicy clove that glows like an ember.',
    price: 62000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Oriental',
    details: {
      size: '75ml'
    }
  },
  {
    id: '55',
    name: 'Cypress Grove',
    description: 'A green, coniferous scent of a sun-drenched cypress grove.',
    price: 55000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '56',
    name: 'Rainy Meadow',
    description: 'The fresh scent of rain on green grass and wildflowers.',
    price: 43000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Fresh',
    details: {
      size: '120ml'
    }
  },
  {
    id: '57',
    name: 'Honeysuckle Haze',
    description: 'A sweet, nectarous honeysuckle in a summer haze.',
    price: 53000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '58',
    name: 'Tobacco Vanille',
    description: 'A rich blend of tobacco leaf, vanilla, and spices.',
    price: 82000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Oriental',
    details: {
      size: '50ml'
    }
  },
  {
    id: '59',
    name: 'Pine Forest',
    description: 'A crisp, aromatic journey through a pine forest.',
    price: 54000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '60',
    name: 'Grapefruit Glow',
    description: 'A sharp, bitter, and refreshing pink grapefruit.',
    price: 46000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Fresh',
    details: {
      size: '120ml'
    }
  },
  {
    id: '61',
    name: 'Osmanthus Oolong',
    description: 'A delicate osmanthus flower with apricot notes and oolong tea.',
    price: 68000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Floral',
    details: {
      size: '75ml'
    }
  },
  {
    id: '62',
    name: 'Patchouli Purity',
    description: 'A clean, refined patchouli, stripped of its earthiness.',
    price: 58000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '63',
    name: 'Chai Latte',
    description: 'A comforting, spicy scent of chai tea and steamed milk.',
    price: 56000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Oriental',
    details: {
      size: '50ml'
    }
  },
  {
    id: '64',
    name: 'Waterlily Whisper',
    description: 'A gentle, aquatic floral that whispers on the skin.',
    price: 50000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '65',
    name: 'Ylang-Ylang Elixir',
    description: 'A rich, tropical, and slightly fruity ylang-ylang.',
    price: 65000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Floral',
    details: {
      size: '75ml'
    }
  },
  {
    id: '66',
    name: 'Teakwood Treasure',
    description: 'A warm and comforting scent of polished teakwood.',
    price: 61000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '67',
    name: 'Bergamot Bliss',
    description: 'A bright, sparkling bergamot that brings pure bliss.',
    price: 47000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Fresh',
    details: {
      size: '120ml'
    }
  },
  {
    id: '68',
    name: 'Olibanum Obscur',
    description: 'A deep, dark, and resinous olibanum (frankincense).',
    price: 79000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Oriental',
    details: {
      size: '50ml'
    }
  },
  {
    id: '69',
    name: 'Carnation Cadence',
    description: 'A spicy, peppery carnation with a vintage feel.',
    price: 54000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '70',
    name: 'Oakmoss Aura',
    description: 'An earthy, mossy scent of a damp forest floor.',
    price: 63000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Woody',
    details: {
      size: '75ml'
    }
  },
  {
    id: '71',
    name: 'Cucumber Splash',
    description: 'A cool, watery, and refreshing cucumber fragrance.',
    price: 41000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Fresh',
    details: {
      size: '120ml'
    }
  },
  {
    id: '72',
    name: 'Labdanum Leather',
    description: 'A warm, ambery labdanum with a smooth leather accord.',
    price: 81000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Oriental',
    details: {
      size: '50ml'
    }
  },
  {
    id: '73',
    name: 'Mimosa Mist',
    description: 'A soft, powdery mimosa with a hint of almond.',
    price: 56000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '74',
    name: 'Redwood Rise',
    description: 'The majestic scent of towering redwood trees at sunrise.',
    price: 69000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '75',
    name: 'Verbena Verde',
    description: 'A zesty, lemony verbena that is intensely green.',
    price: 48000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Fresh',
    details: {
      size: '120ml'
    }
  },
  {
    id: '76',
    name: 'Vanilla Bourbon',
    description: 'A rich, boozy vanilla with a hint of oak barrel.',
    price: 70000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Oriental',
    details: {
      size: '75ml'
    }
  },
  {
    id: '77',
    name: 'Heliotrope Heaven',
    description: 'A soft, almond-like heliotrope with a vanilla base.',
    price: 58000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '78',
    name: 'Cashmere Woods',
    description: 'A soft, cozy scent that feels like wrapping up in cashmere.',
    price: 66000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '79',
    name: 'Mint Mojito',
    description: 'An icy blast of fresh mint, lime, and sugar.',
    price: 44000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Fresh',
    details: {
      size: '120ml'
    }
  },
  {
    id: '80',
    name: 'Amber Absolute',
    description: 'A dense, powerful, and uncompromising amber.',
    price: 85000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Oriental',
    details: {
      size: '50ml'
    }
  },
  {
    id: '81',
    name: 'Gardenia Grandeur',
    description: 'A grand, opulent gardenia scent for special occasions.',
    price: 72000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Floral',
    details: {
      size: '75ml'
    }
  },
  {
    id: '82',
    name: 'Hinoki Calm',
    description: 'A meditative, lemony scent of Japanese hinoki wood.',
    price: 70000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '83',
    name: 'Bamboo Harmony',
    description: 'A clean, green scent of bamboo leaves and white tea.',
    price: 51000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '84',
    name: 'Cinnamon Spice',
    description: 'A warm, sweet, and spicy cinnamon bark.',
    price: 60000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Oriental',
    details: {
      size: '50ml'
    }
  },
  {
    id: '85',
    name: 'Lotus Lagoon',
    description: 'An aquatic, slightly sweet lotus blossom.',
    price: 55000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '86',
    name: 'Mahogany Soul',
    description: 'A rich, dark, and slightly sweet mahogany wood.',
    price: 74000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Woody',
    details: {
      size: '75ml'
    }
  },
  {
    id: '87',
    name: 'Juniper Sling',
    description: 'A crisp, aromatic scent of gin and juniper berries.',
    price: 53000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '88',
    name: 'Plum Petal',
    description: 'A juicy, dark plum with floral undertones.',
    price: 59000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Oriental',
    details: {
      size: '75ml'
    }
  },
  {
    id: '89',
    name: 'Frangipani Fever',
    description: 'A tropical, creamy, and exotic frangipani flower.',
    price: 64000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '90',
    name: 'Sandalwood Supreme',
    description: 'The ultimate sandalwood, creamy, rich, and spiritual.',
    price: 98000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Woody',
    details: {
      size: '50ml'
    }
  },
  {
    id: '91',
    name: 'Sea Salt & Sage',
    description: 'A windswept coast, with salt spray and earthy sage.',
    price: 52000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '92',
    name: 'Rose de Mai',
    description: 'A precious, honeyed rose harvested in May.',
    price: 110000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Floral',
    details: {
      size: '50ml'
    }
  },
  {
    id: '93',
    name: 'Myrrh Mystere',
    description: 'A mysterious, dark myrrh with smoky facets.',
    price: 77000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Oriental',
    details: {
      size: '75ml'
    }
  },
  {
    id: '94',
    name: 'Driftwood Dusk',
    description: 'The scent of sun-bleached driftwood on a beach at dusk.',
    price: 61000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '95',
    name: 'Lime Basil & Mandarin',
    description: 'A classic combination of peppery basil and zesty lime.',
    price: 50000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '96',
    name: 'Orange Blossom Opus',
    description: 'A grand, operatic orange blossom with a honeyed drydown.',
    price: 73000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Floral',
    details: {
      size: '75ml'
    }
  },
  {
    id: '97',
    name: 'Vetiver Virtuoso',
    description: 'A masterful vetiver, showcasing its green, earthy, and smoky sides.',
    price: 76000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '98',
    name: 'Gingerbread Gourmand',
    description: 'A delicious, edible scent of gingerbread cookies.',
    price: 57000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Oriental',
    details: {
      size: '50ml'
    }
  },
  {
    id: '99',
    name: 'Neroli Nirvana',
    description: 'A blissful, bright, and slightly bitter neroli.',
    price: 63000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '100',
    name: 'Iris Pallida',
    description: 'The rooty, powdery, and precious scent of iris pallida butter.',
    price: 125000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Floral',
    details: {
      size: '50ml'
    }
  },
  {
    id: '101',
    name: 'Cedar Atlas',
    description: 'A dry, slightly animalic cedar from the Atlas mountains.',
    price: 68000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    scentCategory: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '102',
    name: 'Tonka Imperiale',
    description: 'An imperial tonka bean, rich with notes of tobacco and hay.',
    price: 84000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Scentoria',
    scentCategory: 'Oriental',
    details: {
      size: '75ml'
    }
  },
  {
    id: '103',
    name: 'Aqua Celestia',
    description: 'A heavenly water, with notes of lime, mint, and blackcurrant.',
    price: 54000,
    image: 'https://placehold.co/600x600.png',
    category: 'Perfume',
    perfumeType: 'Dekemi',
    brand: 'DekemiScents',
    scentCategory: 'Fresh',
    details: {
      size: '120ml'
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
