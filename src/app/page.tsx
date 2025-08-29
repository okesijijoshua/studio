import { Hero } from '@/components/home/hero';
import { FeaturedCollection } from '@/components/home/featured-collection';
import { Testimonials } from '@/components/home/testimonials';
import { Separator } from '@/components/ui/separator';
import { AiRecommender } from '@/components/home/ai-recommender';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <AiRecommender />
      <Separator />
      <Testimonials />
    </>
  );
}
