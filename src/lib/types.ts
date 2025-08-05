export type Product = {
  id: string;
  name: string;
  description: string;
  price: number; // Stored in NGN (default currency)
  image: string;
  category: 'Perfume' | 'Accessory';
  brand: string;
  scentCategory?: 'Floral' | 'Woody' | 'Oriental' | 'Fresh';
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
