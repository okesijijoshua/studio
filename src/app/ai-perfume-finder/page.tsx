
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { findPerfumeAction } from '../actions/perfume-actions';
import type { FindPerfumeOutput } from '@/ai/flows/perfume-finder';
import { Sparkles, Bot } from 'lucide-react';
import { ProductCard } from '@/components/shared/product-card';
import { products as allProducts } from '@/lib/data';
import type { Product } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

const formSchema = z.object({
  description: z.string().min(10, 'Please describe your desired scent in a bit more detail.').max(500),
});
type FormValues = z.infer<typeof formSchema>;

export default function AiPerfumeFinderPage() {
  const [result, setResult] = useState<FindPerfumeOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    const response = await findPerfumeAction(data);
    setResult(response);
    setIsLoading(false);
  };

  const getProductById = (id?: string): Product | undefined => {
      if (!id) return undefined;
      return allProducts.find(p => p.id === id);
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl font-bold flex items-center justify-center gap-2">
          <Sparkles className="text-primary" />
          AI Perfume Finder
        </h1>
        <p className="mt-2 text-muted-foreground">
          Describe your ideal fragrance, and let our AI assistant find the perfect match for you.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-headline">Your Scent Profile</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'I'm looking for a light, floral scent for summer evenings, maybe with a hint of citrus...' or 'I want something bold and spicy for special occasions.'"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Be as descriptive as you like. Mention notes, occasions, or moods.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? 'Finding your scent...' : 'Find My Perfume'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <div className="mt-12">
        {isLoading && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Skeleton className="h-[450px] w-full" />
                <Skeleton className="h-[450px] w-full" />
                <Skeleton className="h-[450px] w-full" />
            </div>
        )}
        {result && (
           <div className="max-w-4xl mx-auto">
             <div className="flex items-center gap-2 mb-6">
                <Bot className="h-8 w-8 text-primary" />
                <h2 className="font-headline text-3xl font-bold">Here are my recommendations...</h2>
             </div>
            {result.recommendations.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {result.recommendations.map((rec, index) => {
                        const existingProduct = getProductById(rec.id);
                        if (existingProduct) {
                            return <ProductCard key={existingProduct.id} product={existingProduct} />;
                        }
                        
                        // Fictional product, create a temporary product object to pass to the card
                        const fictionalProduct: Product = {
                            id: `fictional-${index}`,
                            name: rec.name,
                            description: rec.description,
                            price: 0, // Or handle differently
                            image: `https://placehold.co/600x600.png`,
                            category: 'Perfume',
                            brand: rec.brand,
                            scentCategory: rec.scentCategory,
                        };

                        return <ProductCard key={fictionalProduct.id} product={fictionalProduct} />;
                    })}
                </div>
            ) : (
                <div className="text-center text-muted-foreground py-10">
                    <p>I couldn't find a specific recommendation based on your description. Try being a bit more detailed!</p>
                </div>
            )}
           </div>
        )}
      </div>

    </div>
  );
}
