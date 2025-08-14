
import Link from 'next/link';
import { Logo } from './logo';
import { Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-card border-t">
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
                <li><Link href="/collections" className="text-muted-foreground hover:text-primary">Perfumes</Link></li>
                <li><Link href="/accessories" className="text-muted-foreground hover:text-primary">Accessories</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold">About</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary">Our Story</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
                <li><Link href="/faq" className="text-muted-foreground hover:text-primary">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold">Connect</h3>
              <div className="mt-4 flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                    <img src="/pub/whatsapp.svg" alt="WhatsApp" className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="h-5 w-5" /></a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /></a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DekemiScents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
