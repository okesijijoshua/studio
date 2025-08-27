
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Product } from '@/lib/types';
import { useCurrency } from '@/hooks/use-currency';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  currentPage?: number;
}

export function ProductCard({ product, currentPage }: ProductCardProps) {
  const { formatPrice } = useCurrency();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // prevent parent Link navigation
    e.preventDefault(); // prevent default button behavior
    addToCart(product, 1);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  const productLink = currentPage ? `/products/${product.id}?fromPage=${currentPage}` : `/products/${product.id}`;

  const originalPrice = product.price;
  const discountedPrice = product.discount ? originalPrice - (originalPrice * product.discount / 100) : originalPrice;


  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg group">
      <Link href={productLink} className="flex flex-col flex-1">
        <CardHeader className="p-0">
            <div className="relative aspect-square w-full">
            <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint="perfume bottle"
            />
             {product.discount && (
                <Badge variant="destructive" className="absolute top-2 left-2 text-sm">
                    {product.discount}% OFF
                </Badge>
            )}
             <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 text-white font-semibold transform-gpu scale-90 group-hover:scale-100 transition-transform duration-300 bg-black/50 p-2 rounded-md">
                    <Eye className="h-5 w-5" />
                    <span>View Details</span>
                </div>
            </div>
            </div>
        </CardHeader>
        <CardContent className="flex-1 p-4">
            <div className="flex justify-between items-start">
                <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
        </CardContent>
      </Link>
      <CardFooter className="flex flex-col items-start gap-2 p-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
         <div className="flex flex-col items-start sm:flex-row sm:items-center sm:gap-2">
            <p className="text-lg font-semibold">{formatPrice(discountedPrice)}</p>
            {product.discount && (
                <p className="text-sm text-muted-foreground line-through">{formatPrice(originalPrice)}</p>
            )}
        </div>
        {product.price > 0 ? (
          <Button onClick={handleAddToCart} size="sm" className="w-full sm:w-auto">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        ) : (
           <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
             <Link href={`/products/${product.id}`}>View Details</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
