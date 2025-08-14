
import Link from 'next/link';
import { Logo } from './logo';
import { Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppIcon = () => (
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
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

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
                  <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></a>
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
