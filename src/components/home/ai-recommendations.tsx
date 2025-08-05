"use client";

import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

import { getPerfumeRecommendations } from '@/app/actions/perfume-actions';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/shared/product-card';
import type { Product } from '@/lib/types';
import { Skeleton } from '../ui/skeleton';

export function AiRecommendations() {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setIsLoading(true);
      // Simulate a user's viewing history
      const viewingHistory = [
        'A warm and spicy fragrance',
        'Something with vanilla notes',
        'A popular floral perfume',
      ];
      
      try {
        const recommendedNames = await getPerfumeRecommendations({
          viewingHistory,
          numberOfRecommendations: 2,
        });

        // Find the full product objects from our mock data
        const recommendedProducts = recommendedNames
          .map(name => products.find(p => p.name.toLowerCase() === name.toLowerCase()))
          .filter((p): p is Product => p !== undefined);

        setRecommendations(recommendedProducts);
      } catch (error) {
        console.error("Failed to get AI recommendations:", error);
        // Fallback to showing first 2 products
        setRecommendations(products.slice(4, 6));
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl flex items-center justify-center gap-2">
            <Sparkles className="text-primary" /> Just For You
          </h2>
          <p className="mt-2 text-muted-foreground">Personalized recommendations based on your preferences.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {isLoading ? (
            <>
              <Skeleton className="h-[450px] w-full" />
              <Skeleton className="h-[450px] w-full" />
            </>
          ) : recommendations.length > 0 ? (
            recommendations.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-2 text-center text-muted-foreground">Could not load recommendations at this time.</p>
          )}
        </div>
      </div>
    </section>
  );
}
