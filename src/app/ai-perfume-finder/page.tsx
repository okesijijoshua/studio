
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { findPerfume, type FindPerfumeInput, type FindPerfumeOutput } from '@/ai/flows/perfume-finder';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Sparkles, Loader2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  mood: z.string().min(10, 'Please describe the mood or occasion in a bit more detail.'),
  preferredNotes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function AiPerfumeFinderPage() {
  const [recommendations, setRecommendations] = useState<FindPerfumeOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mood: '',
      preferredNotes: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setRecommendations(null);
    setError(null);

    const input: FindPerfumeInput = {
      mood: data.mood,
      preferredNotes: data.preferredNotes ? data.preferredNotes.split(',').map(s => s.trim()) : undefined,
    };

    try {
      const result = await findPerfume(input);
      setRecommendations(result);
    } catch (e) {
      console.error(e);
      setError('Sorry, something went wrong while finding your perfume. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold md:text-5xl flex items-center justify-center gap-3">
          <Wand2 className="h-10 w-10 text-primary" />
          AI Perfume Finder
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Let our AI scent expert help you discover the perfect fragrance. Just describe the vibe, and we'll do the rest.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Describe Your Scent</CardTitle>
              <CardDescription>Tell us what you're looking for.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="mood"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mood or Occasion</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., A confident fragrance for important work meetings, something for a romantic dinner, or a fresh scent for daily wear..."
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="preferredNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Notes (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., vanilla, rose, sandalwood, citrus" {...field} />
                        </FormControl>
                         <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" />
                        Finding your scent...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2" />
                        Find My Perfume
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
            <Card className="h-full">
                 <CardHeader>
                    <CardTitle className="font-headline text-2xl">Your Recommendations</CardTitle>
                    <CardDescription>Here are some scents we think you'll love.</CardDescription>
                </CardHeader>
                <CardContent>
                    {isLoading && (
                        <div className="flex flex-col items-center justify-center h-64 gap-4">
                            <Loader2 className="h-12 w-12 text-primary animate-spin" />
                            <p className="text-muted-foreground">Our AI is sniffing out the best options...</p>
                        </div>
                    )}
                    {error && <p className="text-destructive text-center">{error}</p>}
                    {!isLoading && !error && !recommendations && (
                        <div className="text-center text-muted-foreground h-64 flex items-center justify-center">
                            <p>Your personalized recommendations will appear here.</p>
                        </div>
                    )}
                    {recommendations && (
                        <div className="space-y-6">
                            {recommendations.recommendations.map((rec, index) => (
                                <div key={index}>
                                    <h3 className="font-semibold text-lg text-primary">{rec.perfumeName}</h3>
                                    <p className="text-muted-foreground">{rec.reason}</p>
                                    {index < recommendations.recommendations.length - 1 && <Separator className="mt-6" />}
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
