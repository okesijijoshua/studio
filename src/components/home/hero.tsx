import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/close-up-of-essential-oils.jpg')" }} data-ai-hint="perfume lifestyle">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="font-headline text-4xl font-bold md:text-6xl animate-fade-in-down">
          Elegance in Every Drop
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl animate-fade-in-up">
          Discover our curated collection of luxury perfumes, crafted to captivate your senses and define your essence.
        </p>
        <Button asChild size="lg" className="mt-8 animate-fade-in">
          <Link href="/collections">Explore Scents</Link>
        </Button>
      </div>
    </section>
  );
}
