
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Wand } from 'lucide-react';
import { recommendPerfumes } from '@/ai/flows/perfume-recommender';
import { products } from '@/lib/data';
import { ProductCard } from '../shared/product-card';
import { Skeleton } from '../ui/skeleton';
import type { Product } from '@/lib/types';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

const formSchema = z.object({
  prompt: z.string().min(10, 'Please describe the scent or occasion in a bit more detail.'),
});
type FormValues = z.infer<typeof formSchema>;

interface Recommendation extends Product {
  reasoning: string;
}

export function AiRecommender() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setRecommendations([]);
    setError(null);

    try {
      const result = await recommendPerfumes(data);
      if (result.recommendations.length > 0) {
        const recommendedProducts = result.recommendations.map(rec => {
          const product = products.find(p => p.id === rec.productId);
          return { ...product!, reasoning: rec.reasoning };
        }).filter(Boolean); // Filter out any potential undefined products
        setRecommendations(recommendedProducts as Recommendation[]);
      } else {
        setError("I couldn't find a perfect match. Try describing the vibe or occasion differently!");
      }
    } catch (e) {
      console.error(e);
      setError('An error occurred while finding your scent. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="bg-secondary/50 border-primary/20 border">
            <CardHeader className="text-center">
                <div className="flex justify-center items-center gap-2 text-primary">
                    <Sparkles className="h-8 w-8" />
                </div>
                <h2 className="font-headline text-3xl font-bold md:text-4xl">Find Your Signature Scent</h2>
                <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Tell us what you're looking for, and our AI expert will find the perfect match from our collection.</p>
            </CardHeader>
            <CardContent>
                <div className="max-w-xl mx-auto">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row items-start gap-2">
                             <FormField
                                control={form.control}
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                    <FormControl>
                                        <div className="relative">
                                            <Wand className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                            <Input 
                                                placeholder="e.g., 'A warm, cozy scent for a rainy day...'" 
                                                className="pl-10"
                                                {...field} />
                                        </div>
                                    </FormControl>
                                    <FormMessage className="sm:absolute" />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto flex-shrink-0">
                                {isLoading ? 'Thinking...' : 'Find My Scent'}
                            </Button>
                        </form>
                    </Form>
                </div>

                <div className="mt-12">
                  {isLoading && (
                     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col gap-2">
                           <Skeleton className="h-6 w-3/4" />
                           <Skeleton className="h-4 w-full" />
                           <Skeleton className="h-64 w-full" />
                        </div>
                         <div className="hidden sm:flex flex-col gap-2">
                           <Skeleton className="h-6 w-3/4" />
                           <Skeleton className="h-4 w-full" />
                           <Skeleton className="h-64 w-full" />
                        </div>
                         <div className="hidden lg:flex flex-col gap-2">
                           <Skeleton className="h-6 w-3/4" />
                           <Skeleton className="h-4 w-full" />
                           <Skeleton className="h-64 w-full" />
                        </div>
                    </div>
                  )}
                  {error && (
                    <Alert variant="destructive" className="max-w-md mx-auto">
                      <AlertTitle>Oops!</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  {recommendations.length > 0 && !isLoading && (
                    <>
                       <h3 className="font-headline text-2xl font-bold text-center mb-2">Our AI Recommends...</h3>
                       <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                        {recommendations.map((rec) => (
                           <div key={rec.id} className="flex flex-col gap-2">
                             <p className="text-center text-sm text-muted-foreground italic">
                                <span className="font-semibold text-foreground not-italic">For you, because:</span> {rec.reasoning}
                             </p>
                             <ProductCard product={rec} />
                           </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
