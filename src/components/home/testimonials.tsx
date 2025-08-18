
"use client";

import { useState, useEffect } from 'react';
import type { Testimonial } from '@/lib/types';
import { TestimonialCard } from '@/components/shared/testimonial-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ReviewForm } from './review-form';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '../ui/skeleton';

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const storedTestimonials = localStorage.getItem('dekemi_scents_testimonials');
      if (storedTestimonials) {
        setTestimonials(JSON.parse(storedTestimonials));
      }
    } catch (error) {
      console.error("Could not access localStorage:", error);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem('dekemi_scents_testimonials', JSON.stringify(testimonials));
      } catch (error) {
        console.error("Could not access localStorage:", error);
      }
    }
  }, [testimonials, isMounted]);

  const handleReviewSubmit = (review: Testimonial) => {
    setTestimonials(prev => [review, ...prev]);
  };
  
  const displayedTestimonials = testimonials.slice(0, 2);

  return (
    <section id="reviews" className="bg-secondary py-12 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">What Our Customers Say</h2>
          <p className="mt-2 text-muted-foreground">Real stories from our valued patrons.</p>
        </div>
        
        {!isMounted ? (
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-48 w-full" />
            </div>
        ) : (
          <>
            {displayedTestimonials.length > 0 ? (
              <>
                {/* Carousel for Mobile */}
                <div className="mt-10 md:hidden">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: displayedTestimonials.length > 1,
                        }}
                    >
                        <CarouselContent>
                        {displayedTestimonials.map(testimonial => (
                            <CarouselItem key={testimonial.id} className="sm:basis-1/2">
                                <div className="p-1 h-full">
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            </CarouselItem>
                        ))}
                        </CarouselContent>
                        {displayedTestimonials.length > 1 && (
                            <>
                                <CarouselPrevious />
                                <CarouselNext />
                            </>
                        )}
                    </Carousel>
                </div>

                {/* Grid for Desktop */}
                <div className="hidden md:grid mt-10 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                  {displayedTestimonials.map(testimonial => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
                </div>
              </>
            ) : (
                <div className="mt-10 text-center text-muted-foreground">
                    <p>No reviews yet. Be the first to share your experience!</p>
                </div>
            )}
          </>
        )}

        <Separator className="my-16" />
        <ReviewForm onReviewSubmit={handleReviewSubmit} />
      </div>
    </section>
  );
}
