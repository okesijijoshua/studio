
"use client";

import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet';
import { Logo } from '@/components/shared/logo';
import { CurrencySelector } from '@/components/shared/currency-selector';
import { CartSheet } from '@/components/cart/cart-sheet';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/collections', label: 'Perfumes' },
  { href: '/accessories', label: 'Accessories' },
  { href: '/ai-fragrance-guide', label: 'AI Fragrance Guide' },
  { href: '/about', label: 'About Us' },
];

const perfumeCategories = [
    { href: '/collections', label: 'All Perfumes' },
    { href: '/collections?type=Dekemi', label: 'Dekemi Perfumes' },
    { href: '/collections?type=Designer', label: 'Designer Perfumes' },
    { href: '/collections?type=Signature', label: 'Signature Perfumes' },
    { href: '/collections?type=Mini', label: 'Mini Perfumes' },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPerfumeMenuOpen, setIsPerfumeMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-card transition-all duration-300',
        isScrolled
          ? 'border-b bg-card/80 backdrop-blur-sm'
          : 'bg-card'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden items-center gap-4 lg:gap-6 md:flex">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-xs lg:text-sm font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary font-bold' : 'text-foreground/60'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
           <div className="hidden md:block">
            <CurrencySelector />
          </div>
          <CartSheet />
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-6">
                  <Logo />
                   <nav className="flex flex-col gap-4">
                    {navLinks.map(link => {
                      if (link.label === 'Perfumes') {
                        return (
                          <Collapsible key={link.href} open={isPerfumeMenuOpen} onOpenChange={setIsPerfumeMenuOpen}>
                            <CollapsibleTrigger className="w-full">
                               <div className={cn('flex w-full items-center justify-between text-lg font-medium transition-colors hover:text-primary',
                                pathname.startsWith('/collections') ? 'text-primary' : 'text-foreground/80'
                               )}>
                                {link.label}
                                <ChevronDown className={cn("h-5 w-5 transition-transform", isPerfumeMenuOpen && "rotate-180")} />
                               </div>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="mt-2 flex flex-col gap-3 pl-4">
                                {perfumeCategories.map(catLink => (
                                    <Link key={catLink.href} href={catLink.href} onClick={closeMobileMenu} className="text-base text-foreground/70 hover:text-primary">
                                        {catLink.label}
                                    </Link>
                                ))}
                            </CollapsibleContent>
                          </Collapsible>
                        );
                      }
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={closeMobileMenu}
                          className={cn(
                            'text-lg font-medium transition-colors hover:text-primary',
                            pathname === link.href ? 'text-primary' : 'text-foreground/80'
                          )}
                        >
                          {link.label}
                        </Link>
                      )
                    })}
                  </nav>
                  <CurrencySelector />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
