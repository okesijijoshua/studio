import Link from 'next/link';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/shared/product-card';

export function FeaturedCollection() {
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Peek at Our Collection</h2>
          <p className="mt-2 text-muted-foreground">A glimpse into our world of exquisite fragrances and accessories.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/collections">View Full Collection</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
