import Link from 'next/link';
import { Logo } from './logo';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      className="h-5 w-5"
    >
      <path d="M12.52.02c1.31-.02 2.61.16 3.86.52v4.5a3.81 3.81 0 0 1-3.86-3.86v0A3.81 3.81 0 0 1 12.52 0Z" />
      <path d="M12.52 0c-2.09.02-4.14.7-5.89 1.95v10.51a.07.07 0 0 0 .07.07h4.48V18a3.83 3.83 0 0 1-3.83-3.83V6.26a3.83 3.83 0 0 1 3.83-3.83v0" />
      <path d="M16.38 5.02c.02 4.8-3.84 8.71-8.65 8.74v4.5a3.81 3.81 0 0 0 3.83-3.83v0" />
      <path d="M7.73 22.25c4.81-.02 8.71-3.87 8.65-8.74h4.5a.07.07 0 0 1 .07.07v-4.5a.07.07 0 0 0-.07-.07h-4.5" />
    </svg>
  );

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">Discover your signature scent with our exclusive collection of luxury perfumes.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <h3 className="font-headline text-lg font-semibold">Shop</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/collections" className="text-muted-foreground hover:text-primary">All Collections</Link></li>
                <li><Link href="/collections?category=Perfume" className="text-muted-foreground hover:text-primary">Perfumes</Link></li>
                <li><Link href="/collections?category=Accessory" className="text-muted-foreground hover:text-primary">Accessories</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold">About</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary">Our Story</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold">Connect</h3>
              <div className="mt-4 flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="h-5 w-5" /></a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="h-5 w-5" /></a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="h-5 w-5" /></a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><TiktokIcon /></a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LuxeScents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
