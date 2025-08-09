
"use client";

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { products as allProducts } from '@/lib/data';
import { useCurrency } from '@/hooks/use-currency';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { ProductCard } from '@/components/shared/product-card';
import type { Product } from '@/lib/types';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const { formatPrice } = useCurrency();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    if (id) {
        const foundProduct = allProducts.find(p => p.id === id);
        setProduct(foundProduct);
    }
  }, [id]);


  if (!product) {
    return <div className="container mx-auto py-10 text-center">Loading product...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  const relatedProducts = allProducts.filter(p => 
    p.id !== product.id && 
    (p.scentCategory === product.scentCategory || p.brand === product.brand)
  ).slice(0, 3);
  
  const productDetails = product.details ? Object.entries(product.details).filter(([_, value]) => value) : [];

  return (
    <div className="container mx-auto py-12">
       <Button variant="ghost" onClick={() => router.back()} className="mb-8">
        <ArrowLeft className="mr-2" />
        Go Back
      </Button>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="relative aspect-square">
            <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg shadow-lg"
                data-ai-hint="perfume bottle lifestyle"
            />
        </div>
        <div className="space-y-6">
            <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">{product.brand}</p>
                <h1 className="font-headline text-4xl font-bold">{product.name}</h1>
                {product.scentCategory && <Badge variant="secondary">{product.scentCategory}</Badge>}
            </div>
            
            <p className="text-3xl font-semibold">{formatPrice(product.price)}</p>
            
            <p className="text-muted-foreground text-lg">{product.description}</p>
            
            <Button size="lg" onClick={handleAddToCart} className="w-full md:w-auto">
                <ShoppingCart className="mr-2" />
                Add to Cart
            </Button>
        </div>
      </div>

       {productDetails.length > 0 && (
          <div className="my-12">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2 text-sm grid md:grid-cols-2 gap-x-8 gap-y-2">
                        {productDetails.map(([key, value]) => (
                            <li key={key} className="flex justify-between border-b pb-1">
                                <span className="text-muted-foreground">{capitalize(key)}:</span>
                                <span>{value}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
          </div>
      )}
      
      <Separator className="my-16" />
      
      <div>
        <h2 className="font-headline text-3xl font-bold text-center mb-10">You Might Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map(related => (
                <ProductCard key={related.id} product={related} />
            ))}
        </div>
      </div>
    </div>
  );
}
