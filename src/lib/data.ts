
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
    notes: 'Fresh',
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
    notes: 'Floral',
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
    notes: 'Woody',
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
    notes: 'Woody',
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
    notes: 'Woody',
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
    notes: 'Woody',
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
    notes: 'Woody',
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
    notes: 'Fresh',
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
    notes: 'Oriental',
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
    notes: 'Oriental',
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
    image: '/images/Angham.PNG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Oriental',
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
    notes: 'Spicy',
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
    notes: 'Oriental',
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
    notes: 'Fresh',
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
    notes: 'Floral',
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
    notes: 'Oriental',
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
    notes: 'Oriental',
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
    notes: 'Floral',
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
    notes: 'Oriental',
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
    notes: 'Fresh',
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
    notes: 'Oriental',
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
    notes: 'Oriental',
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
    notes: 'Spicy',
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
    notes: 'Woody',
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
    notes: 'Oriental',
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
    notes: 'Floral',
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
    notes: 'Floral',
    details: {
      size: '100ml'
    }
  },
    // ===== BINT HOORAN =====
    {
      id: '28',
      name: 'Bint Hooran Rose Passion',
      description: 'A playful gourmand floral with green mandarin, blackcurrant, strawberry candy, gardenia, vanilla syrup, musk, amber and sandalwood.',
      vibeCheck: 'Soft powdery romance perfect for brunch dates or sunny afternoons',
      price: 28000,
      image: '/images/Bint-Hooran.png',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Ard Al Zaafaran',
      notes: 'Floral',
      details: {
        size: '100ml'
      }
    },
  
    // ===== BLUE OUD =====
    {
      id: '29',
      name: 'Blue Oud',
      description: 'An amber-woody blend with marine accords, bergamot, black pepper, lavender, fruits, saffron, ambergris, sandalwood and vanilla.',
      vibeCheck: 'Fresh yet mysterious—ideal for evenings by the water or casual night-outs',
      price: 25000,
      image: '/images/blue-oud.jpg',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Fresh',
      details: {
        size: '100ml'
      }
    },
  
    // ===== CLUB DE NUIT =====
    {
      id: '30',
      name: 'Club de Nuit Intense Man',
      description: 'Bright citrus and blackcurrant burst into a smoky birch-rose heart, drying down to vanilla, musk and patchouli.',
      vibeCheck: 'Signature scent energy: perfect for nights that demand confidence or sharp boardroom moments',
      price: 60000,
      image: '/images/Club de Nuit-Intense man.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Armaf',
      notes: 'Woody',
      details: {
        size: '105ml'
      }
    },
  
    // ===== ECLAIRE =====
    {
      id: '31',
      name: 'Eclaire',
      description: 'A luscious gourmand floral with sparkling peach, jasmine, creamy vanilla and sandalwood.',
      vibeCheck: 'For when you want to feel soft, cozy and a little bit spectacular',
      price: 60000,
      image: '/images/Eclaire.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Floral',
      details: {
        size: '100ml'
      }
    },
  
    // ===== FAKHAR =====
    {
      id: '32',
      name: 'Fakhar',
      description: 'A vibrant citrus and floral opening wrapped in a warm, musky-woody base with hints of spice.',
      vibeCheck: 'A confident, all-day signature scent for someone who commands respect',
      price: 35000,
      image: '/images/Fakhar.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Spicy',
      details: {
        size: '100ml'
      }
    },
  
    // ===== HAYAATI =====
    {
      id: '33',
      name: 'Hayaati Florence',
      description: 'Sweet berries and soft florals meet creamy vanilla and musk in this charming feminine scent.',
      vibeCheck: 'For romantic walks and special dinners when you want to be remembered',
      price: 25000,
      image: '/images/Florence.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Floral',
      details: {
        size: '100ml'
      }
    },
    {
      id: '34',
      name: 'Hayaati Gold Elixir',
      description: 'A luxurious mix of saffron, amber, warm woods and vanilla.',
      vibeCheck: 'Opulence bottled—ideal for weddings and grand events',
      price: 30000,
      image: 'images/Gold Elixir.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Oriental',
      details: {
        size: '100ml'
      }
    },
    {
      id: '35',
      name: 'Hayaati',
      description: 'Fresh apple and citrus top notes blend into aromatic lavender and a cozy musk-amber base.',
      vibeCheck: 'A daily go-to for anyone who likes their scent fresh yet memorable',
      price: 25000,
      image: '/images/Hayaati.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Fresh',
      details: {
        size: '100ml'
      }
    },
  
    // ===== CONFESSION SERIES =====
    {
      id: '36',
      name: 'His Confession',
      description: 'Aromatic herbs and citrus brightness with warm woods, masculine yet refined.',
      vibeCheck: 'The "mystery man" fragrance—great for evening meetups',
      price: 50000,
      image: '/images/His Confession.jpg',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Fresh',
      details: {
        size: '100ml'
      }
    },
    {
      id: '37',
      name: 'Her Confession',
      description: 'A delicate dance of pear, rose and jasmine wrapped in soft vanilla and amber.',
      vibeCheck: 'Perfect for date nights when you want to feel like the main character',
      price: 50500,
      image: '/images/her-confession.jpg',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Floral',
      details: {
        size: '100ml'
      }
    },
  
    // ===== ISHQ AL SHUYUKH =====
    {
      id: '38',
      name: 'Ishq Al Shuyukh Silver',
      description: 'Bright citrus opening with lavender and spicy cardamom, melting into woody-musk dry down.',
      vibeCheck: 'For the bold achiever who walks into a room and owns it instantly',
      price: 40000,
      image: '/images/Ishq Al Shuyukh-Silver.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Spicy',
      details: {
        size: '100ml'
      }
    },
  
    // ===== JAZZAB =====
    {
      id: '39',
      name: 'Jazzab',
      description: 'A spicy-floral fragrance with a warm oud and amber base - distinct, deep and slightly smoky.',
      vibeCheck: 'Best for cold evenings, formal occasions or when you want mystery and depth',
      price: 28000,
      image: '/images/Jazzab.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Spicy',
      details: {
        size: '100ml'
      }
    },
  
    // ===== KHAMRAH =====
    {
      id: '40',
      name: 'Khamrah Dukhan',
      description: 'Sweet cinnamon, warm vanilla and smoky incense - rich and comforting.',
      vibeCheck: 'Warmth in a bottle—perfect for cozy nights and festive seasons',
      price: 48000,
      image: '/images/Khamrah Dukhan.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Spicy',
      details: {
        size: '100ml'
      }
    },
    {
      id: '41',
      name: 'Khamrah Qahwa',
      description: 'Coffee and caramel lead into creamy vanilla and spicy cinnamon - a gourmand dream.',
      vibeCheck: 'Your "luxury café" scent—ideal for coffee dates and artistic meetups',
      price: 48000,
      image: '/images/Khamrah-Qahwa.JPG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Oriental',
      details: {
        size: '100ml'
      }
    },
  
    // ===== LUXE RAED =====
    {
      id: '42',
      name: 'Luxe Raed Gold',
      description: 'A crisp citrus opening balanced with spices, oud and amber - rich yet wearable.',
      vibeCheck: 'For those who enjoy elegance without excess—great for office days and evening dinners',
      price: 40000,
      image: '/images/Luxe Raed Gold Lattafa Unisex.png',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Oriental',
      details: {
        size: '100ml'
      }
    },
  
    // ===== MAAHIR =====
    {
      id: '43',
      name: 'Maahir Legacy',
      description: 'A smooth blend of fruity sweetness, soft florals and a creamy musky base - refined yet approachable.',
      vibeCheck: 'Ideal for special celebrations and leaving graceful impressions',
      price: 38500,
      image: '/images/Maahir Legacy.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Floral',
      details: {
        size: '100ml'
      }
    },
    {
      id: '44',
      name: 'Maahir',
      description: 'Warm amber and oud layered with spicy notes - deep and slightly smoky.',
      vibeCheck: 'A statement fragrance for nights out and power moves',
      price: 38500,
      image: '/images/Maahir.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Spicy',
      details: {
        size: '100ml'
      }
    },
    {
      id: '45',
      name: 'Maahir Black Edition',
      description: 'Dark, rich oud blended with leather, spice and subtle sweetness.',
      vibeCheck: 'Confident and bold—the "boardroom and black-tie event" scent',
      price: 38500,
      image: '/images/Maahir-Black-Edition.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Spicy',
      details: {
        size: '100ml'
      }
    },
  
    // ===== MASHAIR =====
    {
      id: '46',
      name: 'Mashair Amber Turquoise',
      description: 'Exotic amber meets refreshing marine and citrus notes - a luxurious fresh-oriental blend.',
      vibeCheck: 'Perfect for summer vacations, yacht parties and sunlit brunches',
      price: 52000,
      image: '/images/MASHAER MASHAIR AMBER TURQOISE.png',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Fresh',
      details: {
        size: '100ml'
      }
    },
  
    // ===== MOUSUF =====
    {
      id: '47',
      name: 'Mousuf',
      description: 'A rich oriental blend of sweet oud, vanilla and soft floral undertones - warm and inviting.',
      vibeCheck: 'Your go-to for traditional gatherings and elegant evenings',
      price: 42000,
      image: '/images/MoUsuf.jpg',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Oriental',
      details: {
        size: '100ml'
      }
    },
    {
      id: '48',
      name: 'Mousuf Ramadi',
      description: 'Smoky oud and woody spices balanced with subtle sweetness - masculine and mysterious.',
      vibeCheck: 'The scent of a confident leader who keeps people guessing',
      price: 25000,
      image: '/images/Mosuf-Ramadi.png',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Woody',
      details: {
        size: '100ml'
      }
    },
    {
      id: '49',
      name: 'Mousuf Wardi',
      description: 'Fruity sweetness layered with rose and musk - soft and romantic.',
      vibeCheck: 'Perfect for weddings, date nights and feeling effortlessly graceful',
      price: 25000,
      image: '/images/Mosuf-Wardi.png',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Floral',
      details: {
        size: '100ml'
      }
    },
  
    // ===== NOW =====
    {
      id: '50',
      name: 'Now',
      description: 'Fresh citrus and herbs over a woody-musky base - crisp, clean and energetic.',
      vibeCheck: 'Ideal for everyday wear, gym sessions and casual hangouts',
      price: 32000,
      image: '/images/Now.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Fresh',
      details: {
        size: '100ml'
      }
    },
    {
      id: '51',
      name: 'Now Women',
      description: 'A lively mix of florals, fruits and musk - playful yet sophisticated.',
      vibeCheck: 'The "girls day out" perfume—bright, fun and perfect for sunny moods',
      price: 32000,
      image: '/images/Now-Women.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Floral',
      details: {
        size: '100ml'
      }
    },
  
    // ===== ODYSSEY =====
    {
      id: '52',
      name: 'Odyssey Dubai Chocolate',
      description: 'Decadent dark chocolate blended with warm spices, vanilla and a hint of oud.',
      vibeCheck: 'For the gourmand lover who wants to smell irresistibly delicious yet elegant',
      price: 55000,
      image: '/images/Odyssey-Dubai-Chocolate.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Oriental',
      details: {
        size: '100ml'
      }
    },
  
    // ===== OPULENT =====
    {
      id: '53',
      name: 'Opulent Dubai',
      description: 'A luxurious mix of amber, musk and exotic spices - evoking Middle Eastern opulence.',
      vibeCheck: 'Rich, regal and perfect for evening galas or VIP events',
      price: 30000,
      image: '/images/Opulent-Dubai.JPG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Spicy',
      details: {
        size: '100ml'
      }
    },
    {
      id: '54',
      name: 'Opulent Musk',
      description: 'Soft, powdery white musk layered with delicate florals and a touch of sweetness.',
      vibeCheck: 'Clean and sensual—ideal for intimate settings and cozy nights in',
      price: 30000,
      image: '/images/Opulent-Musk.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Floral',
      details: {
        size: '100ml'
      }
    },
    {
      id: '55',
      name: 'Opulent Oud',
      description: 'A deep, resinous oud paired with amber and smoky spices for a powerful statement.',
      vibeCheck: 'The scent of prestige—commanding attention in any room',
      price: 30000,
      image: '/images/Opulent-Oud.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Oriental',
      details: {
        size: '100ml'
      }
    },
    {
      id: '56',
      name: 'Opulent Red',
      description: 'Sweet, fruity top notes with a spicy-floral heart and an amber-oud base.',
      vibeCheck: 'Dramatic and opulent - like wearing a couture red gown to a gala.',
      price: 30000,
      image: '/images/Opulent-Red.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Spicy',
      details: {
        size: '100ml'
      }
    },
  
    // ===== OUD MOOD =====
    {
      id: '57',
      name: 'Oud Mood',
      description: 'A warm, woody oud infused with sweet amber and soft florals - balanced Arabian signature.',
      vibeCheck: 'Traditional yet timeless—perfect for weddings and evening wear',
      price: 28000,
      image: '/images/Oud-Mood.JPG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Oriental',
      details: {
        size: '100ml'
      }
    },
  
    // ===== QAED AL FURSAN =====
    {
      id: '58',
      name: 'Qaed Al Fursan',
      description: 'Fruity pineapple and apple blended with sweet vanilla and creamy woods.',
      vibeCheck: 'Energetic, adventurous and playful—perfect for daytime charm',
      price: 25000,
      image: '/images/Qaed Al Fursan.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Woody',
      details: {
        size: '100ml'
      }
    },
    {
      id: '59',
      name: 'Qaed Al Fursan Unlimited',
      description: 'Tropical fruits, smooth musk and woody undertones with creamy finish.',
      vibeCheck: 'Summer vibes in a bottle—great for vacations and beach parties',
      price: 25000,
      image: '/images/Qaed Al Fursan-Unlimited.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Woody',
      details: {
        size: '100ml'
      }
    },
    {
      id: '60',
      name: 'Qaed Al Fursan Untamed',
      description: 'Spicy, woody and smoky oud with untamed wild energy.',
      vibeCheck: 'The scent of a rebel leader—unapologetic and daring',
      price: 25000,
      image: '/images/Qaed Al Fursan-Untamed.jpg',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Spicy',
      details: {
        size: '100ml'
      }
    },
  
    // ===== RAMZ =====
    {
      id: '61',
      name: 'Ramz Silver',
      description: 'Fresh citrus top with woody, slightly smoky dry down - confident and sharp.',
      vibeCheck: 'Perfect for the boardroom or making strong first impressions',
      price: 25500,
      image: '/images/Ramz.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Fresh',
      details: {
        size: '100ml'
      }
    },
    {
      id: '62',
      name: 'Ramz Gold',
      description: 'Sweet amber, warm vanilla and light oud for rich golden aura.',
      vibeCheck: 'Glamorous and classy—made for elegant evenings',
      price: 25500,
      image: '/images/Ramz-Lattafa.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Oriental',
      details: {
        size: '100ml'
      }
    },
  
    // ===== RAYHAAN =====
    {
      id: '63',
      name: 'Rayhaan Floriana For Her',
      description: 'Floral bouquet with soft musk and hint of sweetness - feminine grace.',
      vibeCheck: 'Perfect for daily wear or romantic dates',
      price: 30000,
      image: '/images/Rayhaan-Floriana-For Her.jpg',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Floral',
      details: {
        size: '100ml'
      }
    },
  
    // ===== SAHEB =====
    {
      id: '64',
      name: 'Saheb',
      description: 'Bold oud with leather and smoky spices - dominant and powerful.',
      vibeCheck: 'The scent of a true alpha—commanding and intense',
      price: 32000,
      image: '/images/Saheb.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Spicy',
      details: {
        size: '100ml'
      }
    },
  
    // ===== SUGER OUD =====
    {
      id: '65',
      name: 'Suger Oud',
      description: 'Sweet caramel-like oud with hints of vanilla - dessert-like indulgence.',
      vibeCheck: 'Great for cozy nights and festive occasions',
      price: 25000,
      image: '/images/Suger-Oud.png',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Oriental',
      details: {
        size: '100ml'
      }
    },
  
    // ===== SUPREMACY =====
    {
      id: '66',
      name: 'Supremacy Collector\'s Edition',
      description: 'Rich woody amber mixed with spices and musk - luxury in a bottle.',
      vibeCheck: 'Exclusive and statement-making',
      price: 65000,
      image: '/images/Supremacy Collectors-Edition.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Afnan',
      notes: 'Oriental',
      details: {
        size: '100ml'
      }
    },
    {
      id: '67',
      name: 'Supremacy In Oud',
      description: 'Oud-forward with saffron, spicy rose and amber warmth - regal and mysterious.',
      vibeCheck: 'Perfect for evening occasions and special events',
      price: 75000,
      image: '/images/Supremacy In Oud.png',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Afnan',
      notes: 'Oriental',
      details: {
        size: '100ml'
      }
    },
    {
      id: '68',
      name: 'Supremacy Gold',
      description: 'Fruity top with sweet amber-musk base - stylish and uplifting.',
      vibeCheck: 'Ideal for all-day wear with sophisticated charm',
      price: 76000,
      image: '/images/Supremacy-Gold.png',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Afnan',
      notes: 'Oriental',
      details: {
        size: '100ml'
      }
    },
    {
      id: '69',
      name: 'Supremacy Silver',
      description: 'Crisp fresh opening with smoky birch and woody undertones.',
      vibeCheck: 'Adventurous and charming—great for casual and semi-formal wear',
      price: 60000,
      image: '/images/supremacy-silver.png',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Afnan',
      notes: 'Fresh',
      details: {
        size: '100ml'
      }
    },
  
    // ===== VINTAGE RADIO =====
    {
      id: '70',
      name: 'Vintage Radio',
      description: 'Warm woody base with touches of amber and nostalgia-inducing accords.',
      vibeCheck: 'Retro and cool—like a throwback with style',
      price: 55000,
      image: '/images/Vintage-Radio.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Woody',
      details: {
        size: '100ml'
      }
    },
  
    // ===== YARA =====
    {
      id: '71',
      name: 'Yara Moi',
      description: 'Creamy vanilla, tropical fruits and soft musk - sweet and dreamy.',
      vibeCheck: 'Irresistibly feminine—perfect for date nights or brunch with friends',
      price: 30000,
      image: '/images/Yara-Moi.jpg',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Oriental',
      details: {
        size: '100ml'
      }
    },
    {
      id: '72',
      name: 'Yara Tous',
      description: 'Fruity-floral mix with hints of coconut and vanilla - fun and vibrant.',
      vibeCheck: 'Youthful and energetic—ideal for everyday wear',
      price: 30000,
      image: '/images/Yara-Gold.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Floral',
      details: {
        size: '100ml'
      }
    },
    {
      id: '73',
      name: 'Yara Candy',
      description: 'Cotton candy sweetness with creamy undertones - playful and flirty.',
      vibeCheck: 'Perfect for parties or casual hangouts',
      price: 30000,
      image: '/images/Yara-Candy.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Oriental',
      details: {
        size: '100ml'
      }
    },
  {
    id: '74',
    name: 'Lattafa Yara',
    description: 'A sweet and feminine blend of tropical fruits, soft florals, vanilla and musk, creating a creamy and comforting scent.',
    vibeCheck: 'Charming, cozy, and elegant — perfect for everyday wear or special moments.',
    price: 30000,
    image: '/images/Yara-Pink.PNG',
    category: 'Perfume',
    perfumeType: 'Signature',
    brand: 'Lattafa',
    notes: 'Floral',
    details: {
      size: '100ml'
    }
  },
  
    // ===== YUM YUM =====
    {
      id: '75',
      name: 'Yum Yum',
      description: 'Dessert-inspired with notes of vanilla, caramel and fruity syrup.',
      vibeCheck: 'Warm and cozy—like wrapping yourself in candy',
      price: 57000,
      image: '/images/Yom Yom.PNG',
      category: 'Perfume',
      perfumeType: 'Signature',
      brand: 'Lattafa',
      notes: 'Oriental',
      details: {
        size: '100ml'
      }
    },
  {
    id: '76',
    name: '1 Million Eau de Parfum',
    brand: 'Paco Rabanne',
    description: 'Warm spicy gourmand – cinnamon, amber, leather, and blood mandarin.',
    vibeCheck: 'A sweet, playful, and luxurious scent. Perfect for nightlife and youthful confidence.',
    price: 185000,
    image: '/images/76.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Spicy',
    details: {
      size: '100ml'
    }
  },
  {
    id: '77',
    name: '212 Black',
    brand: 'Carolina Herrera',
    description: 'Aromatic fougère – lavender, musk, and citrus.',
    vibeCheck: 'Urban youthful freshness. Ideal for casual everyday wear.',
    price: 65000,
    image: '/images/77.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '78',
    name: '212 Men NYC',
    brand: 'Carolina Herrera',
    description: 'Citrus woody – grapefruit, ginger, sandalwood.',
    vibeCheck: 'Energetic, youthful, and masculine. Perfect for city life and casual wear.',
    price: 130000,
    image: '/images/78.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '79',
    name: '212 VIP',
    brand: 'Carolina Herrera',
    description: 'Boozy oriental – rum, passionfruit, leather.',
    vibeCheck: 'Party fragrance with bold energy. A true attention-grabber for nightlife.',
    price: 145000,
    image: '/images/79.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Oriental',
    details: {
      size: '100ml'
    }
  },
  {
    id: '80',
    name: '212 VIP Black Eau de Parfum',
    brand: 'Carolina Herrera',
    description: 'Sweet spicy – absinthe, vanilla, and lavender.',
    vibeCheck: 'Club-ready, seductive, and energetic. Perfect for bold men.',
    price: 180000,
    image: '/images/80.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Spicy',
    details: {
      size: '100ml'
    }
  },
  {
    id: '81',
    name: '212 VIP Black Elixir',
    brand: 'Carolina Herrera',
    description: 'Deep sweet oriental – vanilla, absinthe, and spices.',
    vibeCheck: 'More intense and darker than the original. Ideal for night seduction.',
    price: 200000,
    image: '/images/81.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Oriental',
    details: {
      size: '100ml'
    }
  },
  {
    id: '82',
    name: 'Amouage Guidance',
    brand: 'Amouage',
    description: 'Floral woody – pear, hazelnut, rose, and sandalwood.',
    vibeCheck: 'Luxurious, elegant, and artistic. Best for special occasions and high fashion.',
    price: 600000,
    image: '/images/82.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '83',
    name: 'Azzaro The Most Wanted',
    brand: 'Azzaro',
    description: 'Spicy gourmand – cardamom, toffee, vanilla, amberwood.',
    vibeCheck: 'Bold, daring, and addictive. Perfect for nightlife and confident energy.',
    price: 180000,
    image: '/images/83.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Spicy',
    details: {
      size: '100ml'
    }
  },
  {
    id: '84',
    name: 'Baccarat Rouge 540 Eau de Parfum',
    brand: 'Maison Francis Kurkdjian',
    description: 'Amber woody – saffron, jasmine, ambergris, cedar.',
    vibeCheck: 'Sophisticated, luxurious, and radiant. A modern cult fragrance for both men and women.',
    price: 680000,
    image: '/images/84.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Woody',
    details: {
      size: '70ml'
    }
  },
  {
    id: '85',
    name: 'Baccarat Rouge 540 Extrait de Parfum',
    brand: 'Maison Francis Kurkdjian',
    description: 'Amber floral – saffron, bitter almond, cedar, and ambergris.',
    vibeCheck: 'Richer, deeper, and longer-lasting than the Eau de Parfum. Intense luxury.',
    price: 800000,
    image: '/images/85.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '86',
    name: 'Baccarat Rouge 540 Extrait de Parfum',
    brand: 'Maison Francis Kurkdjian',
    description: 'Amber floral – saffron, bitter almond, cedar, ambergris.',
    vibeCheck: 'The ultimate statement of luxury and opulence in a larger bottle.',
    price: 1200000,
    image: '/images/86.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Floral',
    details: {
      size: '200ml'
    }
  },
  {
    id: '87',
    name: 'Black Opium',
    brand: 'Yves Saint Laurent',
    description: 'Coffee-vanilla floral – coffee, vanilla, jasmine, cedarwood.',
    vibeCheck: 'Sexy, mysterious, and intoxicating. Perfect for nightlife and evening outings.',
    price: 195000,
    image: '/images/87.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Floral',
    details: {
      size: '90ml'
    }
  },
  {
    id: '88',
    name: 'Bleu de Chanel Eau de Parfum',
    brand: 'Chanel',
    description: 'Woody aromatic – grapefruit, incense, ginger, sandalwood.',
    vibeCheck: 'Clean, fresh, yet sensual. Extremely versatile for all occasions.',
    price: 95000,
    image: '/images/88.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '89',
    name: 'Bvlgari Man in Black',
    brand: 'Bvlgari',
    description: 'Spicy leather – rum, tuberose, tonka bean, leather.',
    vibeCheck: 'Luxe evenings, confident masculinity. Bold and powerful presence.',
    price: 88000,
    image: '/images/89.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Spicy',
    details: {
      size: '100ml'
    }
  },
  {
    id: '90',
    name: 'Coco Mademoiselle',
    brand: 'Chanel',
    description: 'Patchouli citrus floral – bergamot, rose, patchouli, vanilla.',
    vibeCheck: 'Timeless feminine elegance. Ideal for both day and evening wear.',
    price: 180000,
    image: '/images/90.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '91',
    name: 'Cool Water',
    brand: 'Davidoff',
    description: 'Aquatic fresh – mint, lavender, amber, and sea notes.',
    vibeCheck: 'Refreshing, clean, and casual. Great everyday fragrance.',
    price: 120000,
    image: '/images/91.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Fresh',
    details: {
      size: '125ml'
    }
  },
  {
    id: '92',
    name: 'Creed Aventus',
    brand: 'Creed',
    description: 'Fruity woody – pineapple, birch, musk, and oakmoss.',
    vibeCheck: 'Powerful, confident, and luxurious. A compliment magnet and icon.',
    price: 560000,
    image: '/images/92.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '93',
    name: 'Dior Sauvage Eau de Toilette',
    brand: 'Dior',
    description: 'Fresh woody – bergamot, pepper, ambroxan.',
    vibeCheck: 'Modern masculine classic. Sharp, versatile, and confident.',
    price: 250000,
    image: '/images/93.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '94',
    name: 'Dior Sauvage Eau de Parfum',
    brand: 'Dior',
    description: 'Fresh woody – bergamot, star anise, nutmeg, ambroxan.',
    vibeCheck: 'Richer and deeper than the Eau de Toilette. Powerful and long-lasting.',
    price: 310000,
    image: '/images/94.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '95',
    name: 'Gucci Bloom',
    brand: 'Gucci',
    description: 'White floral – jasmine, tuberose, Rangoon creeper.',
    vibeCheck: 'Romantic, feminine, and graceful. Perfect for daytime wear.',
    price: 240000,
    image: '/images/95.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '96',
    name: 'J’adore Eau de Parfum',
    brand: 'Dior',
    description: 'Floral fruity – ylang-ylang, jasmine, pear, peach, musk.',
    vibeCheck: 'Sophisticated, radiant, and classy. Golden beauty in a bottle.',
    price: 250000,
    image: '/images/96.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '97',
    name: 'Jimmy Choo I Want Choo',
    brand: 'Jimmy Choo',
    description: 'Caramel-vanilla gourmand – peach, jasmine, caramel, vanilla.',
    vibeCheck: 'Flirty, sweet, and glamorous. Ideal for young confident women.',
    price: 190000,
    image: '/images/97.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Floral',
    details: {
      size: '80ml'
    }
  },
  {
    id: '98',
    name: 'Jean Paul Gaultier Ultra Male Intense',
    brand: 'Jean Paul Gaultier',
    description: 'Sweet spicy – pear, vanilla, cinnamon, lavender.',
    vibeCheck: 'Playful, bold, and seductive. Perfect for dates and nightlife.',
    price: 190000,
    image: '/images/98.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Spicy',
    details: {
      size: '125ml'
    }
  },
  {
    id: '99',
    name: 'Jean Paul Gaultier Scandal Le Parfum',
    brand: 'Jean Paul Gaultier',
    description: 'Sweet floral gourmand – caramel, jasmine, vanilla, honey.',
    vibeCheck: 'Rich, sexy, and seductive. Femme-fatale energy for nights out.',
    price: 220000,
    image: '/images/99.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '100',
    name: 'Jean Paul Gaultier Scandal Eau de Toilette',
    brand: 'Jean Paul Gaultier',
    description: 'Sweet woody – caramel, tonka bean, vetiver, clary sage.',
    vibeCheck: 'Playful yet masculine. Youthful energy with bold projection.',
    price: 190000,
    image: '/images/100.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Woody',
    details: {
      size: '125ml'
    }
  },
  {
    id: '101',
    name: 'La Vie Est Belle',
    brand: 'Lancôme',
    description: 'Iris-praline gourmand – iris, pear, praline, vanilla, patchouli.',
    vibeCheck: 'Comforting, sweet, and romantic. A true best-seller among women.',
    price: 135000,
    image: '/images/101.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Oriental',
    details: {
      size: '100ml'
    }
  },
  {
    id: '102',
    name: 'Louis Vuitton Imagination Eau de Parfum',
    brand: 'Louis Vuitton',
    description: 'Citrus aromatic – bergamot, black tea, ginger, ambroxan.',
    vibeCheck: 'Fresh, modern, and luxurious. Sophisticated everyday wear.',
    price: 850000,
    image: '/images/102.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '103',
    name: 'My Way',
    brand: 'Giorgio Armani',
    description: 'White floral – orange blossom, tuberose, vanilla.',
    vibeCheck: 'Feminine, soft, and elegant. Perfect for everyday or date nights.',
    price: 200000,
    image: '/images/103.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Floral',
    details: {
      size: '100ml'
    }
  },
  {
    id: '104',
    name: 'Reef 33 Black',
    brand: 'Reef Perfumes',
    description: 'Woody aromatic – citrus, spices, leather, amber.',
    vibeCheck: 'Mysterious, bold, and refined. Ideal for confident men.',
    price: 125000,
    image: '/images/104.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Woody',
    details: {
      size: '100ml'
    }
  },
  {
    id: '105',
    name: 'Si Eau de Parfum',
    brand: 'Giorgio Armani',
    description: 'Chypre fruity – cassis, vanilla, freesia, patchouli.',
    vibeCheck: 'Elegant, feminine, and confident. A classy signature scent.',
    price: 250000,
    image: '/images/105.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '106',
    name: 'Stronger With You Intensely',
    brand: 'Emporio Armani',
    description: 'Sweet spicy – toffee, cinnamon, vanilla, amber.',
    vibeCheck: 'Warm and seductive. Perfect for dates and winter evenings.',
    price: 180000,
    image: '/images/106.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Spicy',
    details: {
      size: '100ml'
    }
  },
  {
    id: '107',
    name: 'Tom Ford Black Orchid',
    brand: 'Tom Ford',
    description: 'Dark floral oriental – truffle, orchid, chocolate, patchouli.',
    vibeCheck: 'Daring, sensual, and mysterious. Ideal for bold personalities.',
    price: 280000,
    image: '/images/107.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Oriental',
    details: {
      size: '100ml'
    }
  },
  {
    id: '108',
    name: 'Tom Ford Noir Extreme',
    brand: 'Tom Ford',
    description: 'Warm gourmand – cardamom, nutmeg, kulfi dessert, vanilla, amber.',
    vibeCheck: 'Luxurious, exotic, and unforgettable. A statement-making fragrance.',
    price: 280000,
    image: '/images/108.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Oriental',
    details: {
      size: '100ml'
    }
  },
  {
    id: '109',
    name: 'Versace Eros Eau de Parfum',
    brand: 'Versace',
    description: 'Fresh woody vanilla – mint, lemon, vanilla, cedarwood.',
    vibeCheck: 'Playful and magnetic. A fragrance full of youthful seduction.',
    price: 190000,
    image: '/images/109.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '110',
    name: 'Versace Eros Eau de Toilette',
    brand: 'Versace',
    description: 'Fresh sweet aromatic – mint, apple, vanilla, tonka bean.',
    vibeCheck: 'Vibrant and attention-grabbing. A clubbing essential for men.',
    price: 190000,
    image: '/images/110.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Fresh',
    details: {
      size: '100ml'
    }
  },
  {
    id: '111',
    name: 'Yves Saint Laurent Libre Eau de Parfum Intense',
    brand: 'Yves Saint Laurent',
    description: 'Rich floral vanilla – lavender, tonka bean, orange blossom.',
    vibeCheck: 'Bold, powerful, and elegant. Perfect for nighttime sophistication.',
    price: 250000,
    image: '/images/111.jpg',
    category: 'Perfume',
    perfumeType: 'Designer',
    notes: 'Floral',
    details: {
      size: '90ml'
    }
  }
];

export const testimonials: Testimonial[] = [];
