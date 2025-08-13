
"use client";

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { products as allProducts } from '@/lib/data';
import { useCurrency } from '@/hooks/use-currency';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { ProductCard } from '@/components/shared/product-card';
import type { Product } from '@/lib/types';
import { useEffect, useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


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

  const productDetails = useMemo(() => {
    if (!product) return [];
    
    const details = [
        { key: 'Brand', value: product.brand },
        { key: 'Type', value: product.perfumeType },
        { key: 'Notes', value: product.notes },
        { key: 'Size', value: product.details?.size },
    ];
    
    return details.filter(detail => detail.value);
  }, [product]);


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
    (p.notes === product.notes || p.brand === product.brand)
  ).slice(0, 3);

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
            </div>
            
            <p className="text-3xl font-semibold">{formatPrice(product.price)}</p>
            
            <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="description" className="data-[state=active]:font-bold data-[state=active]:bg-background data-[state=active]:shadow-sm">Description</TabsTrigger>
                    <TabsTrigger value="specifications" className="data-[state=active]:font-bold data-[state=active]:bg-background data-[state=active]:shadow-sm">Specifications</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-4 text-lg text-muted-foreground space-y-4">
                    <p>{product.description}</p>
                    {product.vibeCheck && (
                        <p className="text-sm italic text-muted-foreground/80">
                        <span className="font-semibold not-italic text-foreground/80">Vibe Check:</span> {product.vibeCheck}
                        </p>
                    )}
                </TabsContent>
                <TabsContent value="specifications" className="mt-4">
                     <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
                        {productDetails.map(({ key, value }) => (
                            <div key={key} className="flex items-center justify-between gap-4 p-3 bg-secondary rounded-lg">
                                <span className="font-semibold text-secondary-foreground">{capitalize(key)}</span>
                                <span className="text-left text-muted-foreground">{value}</span>
                            </div>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
            
            <Button size="lg" onClick={handleAddToCart} className="w-full md:w-auto">
                <ShoppingCart className="mr-2" />
                Add to Cart
            </Button>
        </div>
      </div>
      
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
