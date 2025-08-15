
import Link from 'next/link';
import { Logo } from './logo';
import { Instagram, Linkedin, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-1.59-1.87-2.32-4.2-2.06-6.55.26-2.35 1.45-4.53 3.37-5.89 1.92-1.36 4.24-2.02 6.55-1.95v4.02c-1.1.02-2.18.2-3.23.55-.38.13-.75.29-1.1.48-.41.21-.78.48-1.1.81-.13.12-.25.25-.37.39a.9.9 0 00-.19.24c-.16.23-.29.49-.39.75-.1.26-.18.53-.23.82-.05.28-.07.57-.07.86s.02.58.06.86c.09.47.26.92.51 1.33.25.41.57.77.96 1.06.39.29.83.5 1.3.64.47.14.96.21 1.45.21.36 0 .71-.03 1.07-.08.35-.05.7-.14 1.04-.28.34-.14.67-.32.98-.54.31-.22.6-.48.86-.78.26-.3.49-.64.68-1.01.19-.37.33-.76.43-1.17.05-.2.08-.4.1-.6.02-.2.03-.4.03-.6v-8.7c-.01-1.31.02-2.62.01-3.93z" />
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
             <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span>4th Avenue, FHA Lugbe FCT-Abuja</span>
            </div>
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
              <div className="mt-4 flex space-x-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.instagram.com/dekemiscents?igsh=MTFmaTJpOW1xbDZsZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <img src="/pub/whatsapp1.svg" alt="WhatsApp" className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.instagram.com/dekemiscents?igsh=MTFmaTJpOW1xbDZsZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="h-6 w-6" /></a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.tiktok.com/@dekemiscents?_t=ZS-8ytlSU2Qyji&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <TikTokIcon />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-6 w-6" /></a>
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
