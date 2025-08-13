
export type Product = {
  id: string;
  name: string;
  description: string;
  vibeCheck?: string;
  price: number; // Stored in NGN (default currency)
  image: string;
  category: 'Perfume' | 'Accessory';
  perfumeType?: 'Dekemi' | 'Designer' | 'Signature' | 'Mini';
  brand: string;
  scentCategory?: 'Top: Citrus, Heart: Floral, Base: Woody' | 'Top: Rose, Heart: Jasmine, Base: Musk & Oud' | 'Top: Spicy Pepper, Heart: Vanilla, Base: Woody Amber' | 'Top: Vanilla, Heart: Smoky Bourbon, Base: Woody' | 'Top: Tropical Spices, Heart: Citrus, Base: Creamy Woods' | 'Top: Soft Florals, Heart: Powdery Musk, Base: Amber' | 'Top: Sweet Rose, Heart: Creamy Vanilla, Base: Smoky Oud' | 'Top: Spicy Saffron, Heart: Sweet Rose, Base: Resinous Oud' | 'Top: Powdery Florals, Heart: Creamy Woods, Base: Gentle Sweetness' | 'Top: Bold Oud, Heart: Smoky Incense, Base: Sweet Amber' | 'Top: Citrus, Heart: Woods, Base: Musk' | 'Top: Sweet Vanilla, Heart: Fruity Melon, Base: Warm Amber' | 'Top: Raspberry, Heart: Saffron, Base: Ambergris & Musk' | 'Top: Warm Tobacco, Heart: Sweet Vanilla, Base: Spicy Cinnamon' | 'Top: Woody, Heart: Musky, Base: Fruity' | 'Top: Strong Oud, Heart: Smoky Incense, Base: Amber' | 'Top: Floral, Heart: Fruity, Base: Musk & Vanilla' | 'Top: Fruity, Heart: Floral, Base: Warm Amber' | 'Oriental' | 'Floral' | 'Fresh' | 'Woody';
  details?: {
    size?: string;
    color?: string;
    material?: string;
  };
};

export type Testimonial = {
  id: string;
  name: string;
  rating: number;
  review: string;
  avatar?: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
