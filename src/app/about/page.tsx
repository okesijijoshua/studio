
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { TestimonialCard } from '@/components/shared/testimonial-card';
import { testimonials } from '@/lib/data';

export default function AboutPage() {
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
                  <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <img src="/pub/whatsapp.svg" alt="WhatsApp" className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="h-6 w-6" /></a>
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
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(3, 6).map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
