import Image from 'next/image';
import { Star } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Testimonial } from '@/lib/types';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            {testimonial.avatar && <AvatarImage src={testimonial.avatar} alt={testimonial.name} />}
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'h-4 w-4',
                    i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground'
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground italic">"{testimonial.review}"</p>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}
