
import type { Product, Testimonial } from '@/lib/types';

export const products: Product[] = [
  {
    id: '1',
    name: '9AM Dive',
    description: 'An invigorating aquatic fragrance with crisp citrus, cool marine notes, and a smooth amber-musk base for a fresh yet refined scent.',
    vibeCheck: 'A crisp morning swim in citrus-infused waters—energizing and bold, for those who chase sunrises with confidence.',
    price: 60000,
    image: '/images/9am-Dive.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Afnan',
    notes: 'Top: Citrus, Heart: Floral, Base: Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '2',
    name: '9AM Pour Femme',
    description: 'A fresh citrus opening with floral heart notes and woody base for elegant daytime wear.',
    vibeCheck: 'Elegant brunch vibes—think linen dresses and iced lavender lattes, with a whisper of floral sophistication.',
    price: 60000,
    image: '/images/9am-PourFemme_.jpg',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Afnan',
    notes: 'Top: Citrus, Heart: Floral, Base: Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '3',
    name: '9PM Elixir',
    description: 'Citrus top notes blend with floral heart and woody base for a sophisticated evening scent.',
    vibeCheck: 'Midnight magnetism—smooth citrus and woods that linger like a secret shared under starry skies.',
    price: 65000,
    image: '/images/9pm-Elixir.PNG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Afnan',
    notes: 'Top: Citrus, Heart: Floral, Base: Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '4',
    name: '9PM Rebel Afnan',
    description: 'Bold citrus opening with floral heart and rebellious woody base notes.',
    vibeCheck: 'A leather-jacket-and-motorcycle scent—unapologetically fresh with a rebellious woody edge.',
    price: 60000,
    image: '/images/9pm-rebel-afnan.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Afnan',
    notes: 'Top: Citrus, Heart: Floral, Base: Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '5',
    name: 'Ajeeb',
    description: 'A surprising blend of citrus, florals and woods that intrigues the senses.',
    vibeCheck: 'A sun-dappled library nook—citrus pages turning into floral chapters, wrapped in woody warmth.',
    price: 25000,
    image: '/images/Ajeeb.PNG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Top: Citrus, Heart: Floral, Base: Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '6',
    name: 'Ajwad',
    description: 'A regal composition of citrus, florals and rich woody notes.',
    vibeCheck: 'Royal garden soirées—where citrus fountains meet floral tapestries and polished mahogany halls.',
    price: 34000,
    image: '/images/Ajwad.JPG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Top: Citrus, Heart: Floral, Base: Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '7',
    name: 'Al Dirgham Limited Edition',
    description: 'An exclusive blend of citrus, florals and precious woods.',
    vibeCheck: 'A hidden oasis—zesty top notes bloom into a floral heart, anchored by rare desert woods.',
    price: 30000,
    image: '/images/Al Dirgham Limited Edition.png',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Top: Citrus, Heart: Floral, Base: Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '8',
    name: 'Al Haramain Amber Oud Aqua Dubai',
    description: 'A luxurious aquatic take on the classic amber oud composition.',
    vibeCheck: 'Skyline infinity pool—citrus sparkle over floral depths, with a woody anchor.',
    price: 160000,
    image: '/images/Amber-Oud Aqua-Dubai.PNG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Al Haramain',
    notes: 'Top: Citrus, Heart: Floral, Base: Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '9',
    name: 'Al Haramain Amber Oud Extreme',
    description: 'An intense interpretation of the beloved amber oud fragrance.',
    vibeCheck: 'Desert storm—citrus sharpness cut through by oud\'s electric intensity.',
    price: 130000,
    image: '/images/Amber-Oud Extreme.PNG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Al Haramain',
    notes: 'Top: Citrus, Heart: Floral, Base: Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '10',
    name: 'Al Haramain Amber Oud Gold Edition',
    description: 'A golden, luxurious take on the classic amber oud.',
    vibeCheck: 'Gilded cocktail hour—vanilla and melon shimmer like champagne bubbles.',
    price: 135000,
    image: '/images/Amber-Oud Gold Edition.PNG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Al Haramain',
    notes: 'Top: Citrus, Heart: Floral, Base: Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '11',
    name: 'Angham',
    description: 'A rich floral-oriental blend with rose, jasmine, musk, and oud undertones.',
    vibeCheck: 'A velvet-curtained opera house—rose and jasmine crescendo over musk and oud\'s dramatic bassline.',
    price: 40000,
    image: '/images/Angham.jpg',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Top: Rose, Heart: Jasmine, Base: Musk & Oud',
    details: {
      size: '100ml'
    }
  },
  {
    id: '12',
    name: 'Asad',
    description: 'Warm vanilla, spicy pepper, and wood notes with a sweet-amber dry down.',
    vibeCheck: 'Spice-market mystique—vanilla and pepper clash like firelight on ancient amber walls.',
    price: 30000,
    image: '/images/Asad.PNG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Top: Spicy Pepper, Heart: Vanilla, Base: Woody Amber',
    details: {
      size: '100ml'
    }
  },
  {
    id: '13',
    name: 'Asad Bourbon',
    description: 'A deeper, boozier twist on Asad with sweet vanilla and smoky bourbon accords.',
    vibeCheck: 'Smoky jazz club nights—bourbon-kissed vanilla swirling with dark, woody intrigue.',
    price: 30000,
    image: '/images/asad-bourbon.jpg',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Top: Vanilla, Heart: Smoky Bourbon, Base: Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '14',
    name: 'Asad Zanzibar',
    description: 'Tropical spices, citrus freshness, and woody undertones with a creamy base.',
    vibeCheck: 'Beach bonfire at dusk—tropical spices crackle over creamy coconut and driftwood.',
    price: 30000,
    image: '/images/Asad-zanzibar.PNG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Top: Tropical Spices, Heart: Citrus, Base: Creamy Woods',
    details: {
      size: '100ml'
    }
  },
  {
    id: '15',
    name: 'Atheeri',
    description: 'Soft florals mixed with powdery musk and gentle amber sweetness.',
    vibeCheck: 'Powdered silk gloves—soft florals and musk that feel like a whispered compliment.',
    price: 50000,
    image: '/images/Atheeri.jpg',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Top: Soft Florals, Heart: Powdery Musk, Base: Amber',
    details: {
      size: '100ml'
    }
  },
  {
    id: '16',
    name: 'Badee Al Oud Amethyst',
    description: 'Sweet rose, creamy vanilla, and smoky oud blend; inspired by Initio Atomic Rose.',
    vibeCheck: 'Gothic romance—rose and vanilla dance with smoky oud under a full moon.',
    price: 38000,
    image: '/images/Badee-Al-Oud- Amethyst.JPG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Top: Sweet Rose, Heart: Creamy Vanilla, Base: Smoky Oud',
    details: {
      size: '100ml'
    }
  },
  {
    id: '17',
    name: 'Badee Al Oud For Glory',
    description: 'Spicy saffron, sweet rose, and resinous oud; similar to Initio Oud for Greatness.',
    vibeCheck: 'A throne room\'s grandeur—saffron and oud weave a tapestry of power and opulence.',
    price: 38000,
    image: '/images/Badee-Al-Oud- For Glory.PNG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Top: Spicy Saffron, Heart: Sweet Rose, Base: Resinous Oud',
    details: {
      size: '100ml'
    }
  },
  {
    id: '18',
    name: 'Badee Al Oud Noble Blush',
    description: 'Powdery florals with creamy woods and gentle sweetness.',
    vibeCheck: 'Blushing debutante—powdery florals melt into creamy woods like a first love letter.',
    price: 38000,
    image: '/images/Badee-Al-Oud Noble Blush.PNG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Top: Powdery Florals, Heart: Creamy Woods, Base: Gentle Sweetness',
    details: {
      size: '100ml'
    }
  },
  {
    id: '19',
    name: 'Badee Al Oud Honour and Glory',
    description: 'Bold oud, smoky incense, and sweet amber.',
    vibeCheck: 'Ancient temple incense—bold oud and amber echo through stone corridors.',
    price: 38000,
    image: '/images/Badee-Al-Oud-Honour and Glory.PNG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Top: Bold Oud, Heart: Smoky Incense, Base: Sweet Amber',
    details: {
      size: '100ml'
    }
  },
  {
    id: '20',
    name: 'Badee Al Oud Sublime',
    description: 'A fresher take on the Badee Al Oud DNA; hints of citrus, woods, and musk.',
    vibeCheck: 'A minimalist art gallery—citrus and musk in clean, modern strokes.',
    price: 38000,
    image: '/images/Badee-Al-Oud-Sublime.PNG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Top: Citrus, Heart: Woods, Base: Musk',
    details: {
      size: '100ml'
    }
  },
  {
    id: '21',
    name: 'Amber Oud Gold Edition',
    description: 'Sweet vanilla, fruity melon, warm amber, with a slightly powdery dry-down.',
    vibeCheck: 'Gilded cocktail hour—vanilla and melon shimmer like champagne bubbles.',
    price: 120000,
    image: '/images/Amber-Oud Gold Edition100.PNG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Al Haramain',
    notes: 'Top: Sweet Vanilla, Heart: Fruity Melon, Base: Warm Amber',
    details: {
      size: '100ml'
    }
  },
  {
    id: '22',
    name: 'Amber Oud Ruby',
    description: 'Raspberry, saffron, ambergris, and musk — inspired by Baccarat Rouge 540.',
    vibeCheck: 'Heirloom jewelry box—raspberry and saffron glow against musky velvet.',
    price: 120000,
    image: '/images/Amber-Oud Ruby 100.PNG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Al Haramain',
    notes: 'Top: Raspberry, Heart: Saffron, Base: Ambergris & Musk',
    details: {
      size: '100ml'
    }
  },
  {
    id: '23',
    name: 'Amber Oud Tobacco Edition',
    description: 'Warm tobacco, sweet vanilla, and spicy cinnamon notes; cozy and rich.',
    vibeCheck: 'Library of rare books—tobacco leaves and vanilla spines aged to perfection.',
    price: 120000,
    image: '/images/Amber-Oud Tobacco Edition.PNG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Al Haramain',
    notes: 'Top: Warm Tobacco, Heart: Sweet Vanilla, Base: Spicy Cinnamon',
    details: {
      size: '100ml'
    }
  },
  {
    id: '24',
    name: 'Ameer Al Arab Imperium',
    description: 'Woody, musky, and slightly fruity with an elegant smoothness.',
    vibeCheck: 'CEO energy—woody musk with a fruity wink, for boardrooms and yacht decks.',
    price: 25000,
    image: '/images/Ameer Al Arab-Imperium.JPG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Top: Woody, Heart: Musky, Base: Fruity',
    details: {
      size: '100ml'
    }
  },
  {
    id: '25',
    name: 'Ameer Al Ouhd Intense Oud',
    description: 'Strong oud presence with smoky incense and amber notes.',
    vibeCheck: 'Aged whiskey by the fireplace—oud and incense crackle with smoky depth.',
    price: 28000,
    image: '/images/Ameer Al Ouhd-Intense Oud.JPG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Top: Strong Oud, Heart: Smoky Incense, Base: Amber',
    details: {
      size: '100ml'
    }
  },
  {
    id: '26',
    name: 'Ameerat Al Arab',
    description: 'Floral, fruity, with hints of musk and sweet vanilla. Feminine and soft.',
    vibeCheck: 'Honeysuckle-draped balconies—floral and fruity, like a Mediterranean breeze.',
    price: 25000,
    image: '/images/Ameerat Al Arab.JPG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Top: Floral, Heart: Fruity, Base: Musk & Vanilla',
    details: {
      size: '100ml'
    }
  },
  {
    id: '27',
    name: 'Andaleeb',
    description: 'Fruity-floral with a warm amber base; smooth and inviting.',
    vibeCheck: 'Picnic in an orchard—juicy fruits and amber warmth under dappled sunlight.',
    price: 25000,
    image: '/images/Andaleem.PNG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Top: Fruity, Heart: Floral, Base: Warm Amber',
    details: {
      size: '100ml'
    }
  },
  {
    id: '28',
    name: 'Cardamom Kiss',
    description: 'A spicy, warm cardamom blended with sweet coffee.',
    price: 63000,
    image: '/images/Cardamom Kiss.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    brand: 'Aura Fragrances',
    notes: 'Oriental',
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
    notes: 'Floral',
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
    notes: 'Fresh',
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
    notes: 'Woody',
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
    notes: 'Fresh',
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
    notes: 'Floral',
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
    notes: 'Oriental',
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
    notes: 'Woody',
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
    notes: 'Fresh',
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
    notes: 'Floral',
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
    notes: 'Woody',
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
    notes: 'Fresh',
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
    notes: 'Oriental',
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
    notes: 'Floral',
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
    notes: 'Woody',
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
    notes: 'Fresh',
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
    notes: 'Oriental',
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
    notes: 'Floral',
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
    notes: 'Woody',
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
    notes: 'Fresh',
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
    notes: 'Oriental',
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
    notes: 'Floral',
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
    notes: 'Woody',
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
    notes: 'Woody',
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
    notes: 'Fresh',
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
    notes: 'Floral',
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
    notes: 'Oriental',
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
    notes: 'Woody',
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
    notes: 'Fresh',
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
    notes: 'Floral',
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
    notes: 'Oriental',
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
    notes: 'Woody',
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
    notes: 'Fresh',
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
    notes: 'Floral',
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
    notes: 'Woody',
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
    notes: 'Oriental',
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
    notes: 'Fresh',
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
    notes: 'Floral',
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
    notes: 'Woody',
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
    notes: 'Fresh',
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
    notes: 'Oriental',
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
    notes: 'Floral',
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
    notes: 'Woody',
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
    notes: 'Fresh',
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
    notes: 'Oriental',
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
    notes: 'Floral',
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
    notes: 'Woody',
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
    notes: 'Fresh',
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
    notes: 'Oriental',
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
    notes: 'Floral',
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
    notes: 'Woody',
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
    notes: 'Fresh',
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
    notes: 'Oriental',
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
    notes: 'Floral',
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
    notes: 'Woody',
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
    notes: 'Fresh',
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
    notes: 'Oriental',
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
    notes: 'Floral',
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
    notes: 'Woody',
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
    notes: 'Fresh',
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
    notes: 'Oriental',
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
    notes: 'Floral',
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
    notes: 'Woody',
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
    notes: 'Fresh',
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
    notes: 'Floral',
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
    notes: 'Oriental',
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
    notes: 'Woody',
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
    notes: 'Fresh',
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
    notes: 'Floral',
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
    notes: 'Woody',
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
    notes: 'Oriental',
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
    notes: 'Fresh',
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
    notes: 'Floral',
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
    notes: 'Woody',
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
    notes: 'Oriental',
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
    notes: 'Fresh',
    details: {
      size: '120ml'
    }
  }
];

export const testimonials: Testimonial[] = [];
