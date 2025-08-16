
"use client";

import { useState, useMemo, useEffect } from 'react';
import { products as allProducts } from '@/lib/data';
import type { Product } from '@/lib/types';
import { ProductCard } from '@/components/shared/product-card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useCurrency } from '@/hooks/use-currency';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Filter } from 'lucide-react';
import { useSearchParams } from 'next/navigation';


const BRANDS = [...new Set(allProducts.filter(p => p.category === 'Accessory').map(p => p.brand))];
const MAX_PRICE = Math.max(...allProducts.filter(p => p.category === 'Accessory').map(p => p.price));
const PRODUCTS_PER_PAGE = 10;

const DOTS = '...';

const usePagination = ({ totalPages, siblingCount = 1, currentPage }: { totalPages: number, siblingCount?: number, currentPage: number }) => {
    const paginationRange = useMemo(() => {
        const totalPageNumbers = siblingCount + 5;

        if (totalPageNumbers >= totalPages) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPages;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
            return [...leftRange, DOTS, totalPages];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = Array.from({ length: rightItemCount }, (_, i) => totalPages - rightItemCount + i + 1);
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }

        return [];

    }, [totalPages, siblingCount, currentPage]);

    return paginationRange;
}

export default function AccessoriesPage() {
  const { formatPrice } = useCurrency();
  const isMobile = useIsMobile();
  const searchParams = useSearchParams();

  const [sortOption, setSortOption] = useState('name-asc');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, MAX_PRICE]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    const pageFromUrl = searchParams.get('page');
    if (pageFromUrl && !isNaN(parseInt(pageFromUrl))) {
      setCurrentPage(parseInt(pageFromUrl));
    }
  }, [searchParams]);

  useEffect(() => {
    // Reset to first page whenever filters change
    const pageParam = searchParams.get('page');
    if (!pageParam) {
      setCurrentPage(1);
    }
  }, [selectedBrands, priceRange, sortOption]);


  const filteredAndSortedProducts = useMemo(() => {
    let products = allProducts.filter(p => p.category === 'Accessory');

    if (selectedBrands.length > 0) {
      products = products.filter(p => selectedBrands.includes(p.brand));
    }

    products = products.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortOption) {
      case 'price-asc':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        products.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return products;
  }, [sortOption, selectedBrands, priceRange]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
      const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
      const endIndex = startIndex + PRODUCTS_PER_PAGE;
      return filteredAndSortedProducts.slice(startIndex, endIndex);
  }, [filteredAndSortedProducts, currentPage]);

  const paginationRange = usePagination({ currentPage, totalPages });

  const toggleFilter = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setter(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  }

  const Filters = () => (
     <div className="space-y-6">
        <div>
            <Label className="text-lg font-headline">Sort By</Label>
            <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Sort products" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="name-asc">Alphabetically, A-Z</SelectItem>
                <SelectItem value="name-desc">Alphabetically, Z-A</SelectItem>
                <SelectItem value="price-asc">Price, low to high</SelectItem>
                <SelectItem value="price-desc">Price, high to low</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div>
            <Label className="text-lg font-headline">Brand</Label>
            <div className="mt-2 space-y-2">
            {BRANDS.map(brand => (
                <Button key={brand} variant={selectedBrands.includes(brand) ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => toggleFilter(setSelectedBrands, brand)}>
                    {brand}
                </Button>
            ))}
            </div>
        </div>
        <div>
            <Label className="text-lg font-headline">Price Range</Label>
            <div className="mt-4">
            <Slider
                min={0}
                max={MAX_PRICE}
                step={1000}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value)}
            />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>{formatPrice(priceRange[0])}</span>
                <span>{formatPrice(priceRange[1])}</span>
            </div>
            </div>
        </div>
    </div>
  );

  const AccordionFilters = () => (
     <Accordion type="multiple" className="w-full">
        <AccordionItem value="sort">
            <AccordionTrigger className="text-lg font-headline">Sort By</AccordionTrigger>
            <AccordionContent>
                <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="Sort products" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="name-asc">Alphabetically, A-Z</SelectItem>
                    <SelectItem value="name-desc">Alphabetically, Z-A</SelectItem>
                    <SelectItem value="price-asc">Price, low to high</SelectItem>
                    <SelectItem value="price-desc">Price, high to low</SelectItem>
                    </SelectContent>
                </Select>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brand">
            <AccordionTrigger className="text-lg font-headline">Brand</AccordionTrigger>
            <AccordionContent>
                 <div className="mt-2 space-y-2">
                    {BRANDS.map(brand => (
                        <Button key={brand} variant={selectedBrands.includes(brand) ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => toggleFilter(setSelectedBrands, brand)}>
                            {brand}
                        </Button>
                    ))}
                </div>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
            <AccordionTrigger className="text-lg font-headline">Price</AccordionTrigger>
            <AccordionContent>
                 <div className="mt-4">
                    <Slider
                    min={0}
                    max={MAX_PRICE}
                    step={1000}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value)}
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>{formatPrice(priceRange[0])}</span>
                        <span>{formatPrice(priceRange[1])}</span>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
  );

  const MobileFilters = () => (
      <Sheet>
        <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4" />
                Filter By
            </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full max-w-sm">
            <SheetHeader>
                <SheetTitle className="font-headline text-2xl">Filters</SheetTitle>
            </SheetHeader>
            <div className="p-4">
                <AccordionFilters />
            </div>
        </SheetContent>
      </Sheet>
  )

  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl font-bold">Our Accessories</h1>
        <p className="mt-2 text-muted-foreground">Browse our stylish and functional accessories.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="md:col-span-1">
            {isMobile ? <MobileFilters /> : <Filters />}
        </aside>

        {/* Products Grid */}
        <main className="md:col-span-3">
          {paginatedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {paginatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} currentPage={currentPage} />
                  ))}
              </div>
               {totalPages > 1 && (
                <div className="mt-8 flex justify-center items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  {paginationRange?.map((pageNumber, index) => {
                      if (pageNumber === DOTS) {
                          return <span key={`${pageNumber}-${index}`} className="px-2 py-1 text-muted-foreground">...</span>;
                      }
                      return (
                          <Button
                              key={pageNumber}
                              variant={currentPage === pageNumber ? 'secondary' : 'ghost'}
                              size="sm"
                              onClick={() => setCurrentPage(pageNumber as number)}
                          >
                              {pageNumber}
                          </Button>
                      )
                  })}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-lg font-semibold">No accessories found</p>
                <p className="text-muted-foreground">Try adjusting your filters.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
