
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
  notes?: 'Woody' | 'Floral' | 'Oriental' | 'Fresh' | 'Spicy';
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
