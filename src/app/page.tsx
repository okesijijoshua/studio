import { Hero } from '@/components/home/hero';
import { FeaturedCollection } from '@/components/home/featured-collection';
import { Testimonials } from '@/components/home/testimonials';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <Separator />
      <Testimonials />
    </>
  );
}
