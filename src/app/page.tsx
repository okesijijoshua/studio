import { Hero } from '@/components/home/hero';
import { FeaturedCollection } from '@/components/home/featured-collection';
import { Testimonials } from '@/components/home/testimonials';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <section className="bg-secondary/50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="flex justify-center items-center gap-2 text-primary">
                <Sparkles className="h-8 w-8" />
            </div>
            <h2 className="font-headline text-3xl font-bold md:text-4xl mt-4">Lost in a World of Scents?</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                Let our AI-powered Fragrance Guide help you discover the perfect perfume. Describe a mood, an occasion, or a favorite note, and we'll find your next signature scent from our collection.
            </p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/ai-fragrance-guide">
                    Launch the AI Fragrance Guide
                </Link>
            </Button>
        </div>
      </section>
      <Separator />
      <Testimonials />
    </>
  );
}
