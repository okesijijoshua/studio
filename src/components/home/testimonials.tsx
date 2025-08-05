import { testimonials } from '@/lib/data';
import { TestimonialCard } from '@/components/shared/testimonial-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export function Testimonials() {
  return (
    <section className="bg-secondary py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">What Our Customers Say</h2>
          <p className="mt-2 text-muted-foreground">Real stories from our valued patrons.</p>
        </div>
        
        {/* Carousel for Mobile */}
        <div className="mt-10 md:hidden">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                {testimonials.map(testimonial => (
                    <CarouselItem key={testimonial.id} className="sm:basis-1/2">
                         <div className="p-1 h-full">
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

        {/* Grid for Desktop */}
        <div className="hidden md:grid mt-10 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
