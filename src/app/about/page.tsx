
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { TestimonialCard } from '@/components/shared/testimonial-card';
import type { Testimonial } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-1.59-1.87-2.32-4.2-2.06-6.55.26-2.35 1.45-4.53 3.37-5.89 1.92-1.36 4.24-2.02 6.55-1.95v4.02c-1.1.02-2.18.2-3.23.55-.38.13-.75.29-1.1.48-.41.21-.78.48-1.1.81-.13.12-.25.25-.37.39a.9.9 0 00-.19.24c-.16.23-.29.49-.39.75-.1.26-.18.53-.23.82-.05.28-.07.57-.07.86s.02.58.06.86c.09.47.26.92.51 1.33.25.41.57.77.96 1.06.39.29.83.5 1.3.64.47.14.96.21 1.45.21.36 0 .71-.03 1.07-.08.35-.05.7-.14 1.04-.28.34-.14.67-.32.98-.54.31-.22.6-.48.86-.78.26-.3.49-.64.68-1.01.19-.37.33-.76.43-1.17.05-.2.08-.4.1-.6.02-.2.03-.4.03-.6v-8.7c-.01-1.31.02-2.62.01-3.93z" />
    </svg>
);


export default function AboutPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [showAll, setShowAll] = useState(false);
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

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Our Story</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            DekemiScents was born from a passion for the art of perfumery. We believe that a fragrance is more than just a scent—it's an expression of identity, a memory, a feeling. Our mission is to bring you the most exquisite and unique fragrances from around the world, curated with love and expertise.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl font-bold">The Essence of Luxury</h2>
              <p className="mt-4 text-muted-foreground">
                At <span className="font-bold text-foreground">DekemiScents</span>, we don’t just sell perfumes, we help you discover your perfect scent. Through global research and expert curation, we offer a refined collection of luxury fragrances crafted with rare ingredients. Explore, discover, and find the fragrance that tells your story.
              </p>
              <div className="mt-6 flex space-x-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.instagram.com/dekemiscents?igsh=MTFmaTJpOW1xbDZsZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <img src="/pub/whatsapp1.svg" alt="WhatsApp" className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.instagram.com/dekemiscents?igsh=MTFmaTJpOW1xbDZsZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="h-6 w-6" /></a>
                </Button>
                 <Button variant="ghost" size="icon" asChild>
                    <a href="https://www.tiktok.com/@dekemiscents?_t=ZS-8ytlSU2Qyji&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <TikTokIcon />
                    </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-6 w-6" /></a>
                </Button>
              </div>
               <Button asChild className="mt-8">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
             <div className="order-1 md:order-2">
                <Image
                    src="/images/Perfume-bottles1.jpg"
                    alt="Perfume ingredients on a table"
                    width={600}
                    height={700}
                    className="rounded-lg shadow-lg object-cover"
                    data-ai-hint="perfume ingredients"
                />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold">From Our Community</h2>
          </div>
            {!isMounted ? (
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Skeleton className="h-48 w-full" />
                    <Skeleton className="h-48 w-full" />
                    <Skeleton className="h-48 w-full" />
                </div>
            ) : testimonials.length > 0 ? (
                <>
                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {visibleTestimonials.map(testimonial => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>
                    {testimonials.length > 3 && !showAll && (
                        <div className="mt-12 text-center">
                        <Button onClick={() => setShowAll(true)}>
                            See all reviews
                        </Button>
                        </div>
                    )}
                </>
            ) : (
                <div className="mt-10 text-center text-muted-foreground">
                    <p>No reviews have been submitted yet.</p>
                    <Button variant="link" asChild>
                        <Link href="/#reviews">Be the first to leave a review</Link>
                    </Button>
                </div>
            )}
        </div>
      </section>
    </>
  );
}
