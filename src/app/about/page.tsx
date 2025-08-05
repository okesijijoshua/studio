import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';
import { TestimonialCard } from '@/components/shared/testimonial-card';
import { testimonials } from '@/lib/data';

const TiktokIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M12.52.02c1.31-.02 2.61.16 3.86.52v4.5a3.81 3.81 0 0 1-3.86-3.86v0A3.81 3.81 0 0 1 12.52 0Z" />
      <path d="M12.52 0c-2.09.02-4.14.7-5.89 1.95v10.51a.07.07 0 0 0 .07.07h4.48V18a3.83 3.83 0 0 1-3.83-3.83V6.26a3.83 3.83 0 0 1 3.83-3.83v0" />
      <path d="M16.38 5.02c.02 4.8-3.84 8.71-8.65 8.74v4.5a3.81 3.81 0 0 0 3.83-3.83v0" />
      <path d="M7.73 22.25c4.81-.02 8.71-3.87 8.65-8.74h4.5a.07.07 0 0 1 .07.07v-4.5a.07.07 0 0 0-.07-.07h-4.5" />
    </svg>
  );

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Our Story</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            LuxeScents was born from a passion for the art of perfumery. We believe that a fragrance is more than just a scent—it's an expression of identity, a memory, a feeling. Our mission is to bring you the most exquisite and unique fragrances from around the world, curated with love and expertise.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl font-bold">The Essence of Luxury</h2>
              <p className="mt-4 text-muted-foreground">
                We travel the globe to source the finest ingredients and partner with master perfumers who share our dedication to quality and craftsmanship. Each bottle in our collection tells a story, ready to become a part of yours.
              </p>
              <p className="mt-4 text-muted-foreground">
                From rare florals to rich, exotic ouds, our collection is a journey for the senses. We invite you to explore, discover, and find the scent that truly speaks to you.
              </p>
              <div className="mt-6 flex space-x-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook /></a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter /></a>
                </Button>
                 <Button variant="ghost" size="icon" asChild>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TiktokIcon /></a>
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
                    src="https://placehold.co/600x700.png"
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
