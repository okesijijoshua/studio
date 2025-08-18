
"use client"
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { CurrencyProvider } from '@/contexts/currency-context';
import { CartProvider } from '@/contexts/cart-context';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>DekemiScents - Elegance in Every Drop</title>
        <meta name="description" content="Discover our curated collection of luxury perfumes, crafted to captivate your senses and define your essence." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lato:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <CurrencyProvider>
          <CartProvider>
            <div className="relative flex min-h-dvh flex-col bg-background">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </CartProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
