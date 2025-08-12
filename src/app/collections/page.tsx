
"use client";

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
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
} from "@/components/ui/accordion"
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useCurrency } from '@/hooks/use-currency';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';


const PERFUME_TYPES = ['All Perfumes', 'Dekemi Perfumes', 'Designer Perfumes', 'Signature Perfumes', 'Mini Perfumes'];
const BRANDS = [...new Set(allProducts.filter(p => p.category === 'Perfume').map(p => p.brand))];
const SCENT_CATEGORIES = [...new Set(allProducts.filter(p => p.scentCategory).map(p => p.scentCategory!))];
const MAX_PRICE = Math.max(...allProducts.filter(p => p.category === 'Perfume').map(p => p.price));
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

export default function CollectionsPage() {
  const { formatPrice } = useCurrency();
  const searchParams = useSearchParams();
  const isMobile = useIsMobile();

  const [sortOption, setSortOption] = useState('name-asc');
  const [selectedPerfumeType, setSelectedPerfumeType] = useState<string | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedScentCategories, setSelectedScentCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, MAX_PRICE]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    const typeFromUrl = searchParams.get('type');
    if (typeFromUrl) {
        const matchingType = PERFUME_TYPES.find(t => t.toLowerCase().includes(typeFromUrl.toLowerCase()));
        if (matchingType) {
            setSelectedPerfumeType(matchingType);
        }
    }
  }, [searchParams]);
  
  useEffect(() => {
    // Reset to first page whenever filters change
    setCurrentPage(1);
  }, [selectedPerfumeType, selectedBrands, selectedScentCategories, priceRange, sortOption]);


  const filteredAndSortedProducts = useMemo(() => {
    let products = allProducts.filter(p => p.category === 'Perfume');

    if (selectedPerfumeType && selectedPerfumeType !== 'All Perfumes') {
      const internalType = selectedPerfumeType.split(' ')[0];
      products = products.filter(p => p.perfumeType === internalType);
    }

    if (selectedBrands.length > 0) {
      products = products.filter(p => selectedBrands.includes(p.brand));
    }
    
    if (selectedScentCategories.length > 0) {
        products = products.filter(p => p.scentCategory && selectedScentCategories.includes(p.scentCategory));
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
  }, [sortOption, selectedPerfumeType, selectedBrands, selectedScentCategories, priceRange]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
      const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
      const endIndex = startIndex + PRODUCTS_PER_PAGE;
      return filteredAndSortedProducts.slice(startIndex, endIndex);
  }, [filteredAndSortedProducts, currentPage]);

  const paginationRange = usePagination({ currentPage, totalPages });

  const handlePerfumeTypeSelect = (type: string) => {
      if (type === 'All Perfumes') {
        setSelectedPerfumeType(null);
      } else {
        setSelectedPerfumeType(prev => (prev === type ? null : type));
      }
  };
  
  const toggleArrayFilter = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
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
            <Label className="text-lg font-headline">Category</Label>
            <div className="mt-2 space-y-2">
                {PERFUME_TYPES.map(type => (
                    <Button
                        key={type}
                        variant={selectedPerfumeType === type || (type === 'All Perfumes' && selectedPerfumeType === null) ? 'secondary' : 'ghost'}
                        className="w-full justify-start"
                        onClick={() => handlePerfumeTypeSelect(type)}
                    >
                        {type}
                    </Button>
                ))}
            </div>
        </div>
        <div>
            <Label className="text-lg font-headline">Brand</Label>
            <div className="mt-2 space-y-2">
            {BRANDS.map(brand => (
                <Button key={brand} variant={selectedBrands.includes(brand) ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => toggleArrayFilter(setSelectedBrands, brand)}>
                    {brand}
                </Button>
            ))}
            </div>
        </div>
        <div>
            <Label className="text-lg font-headline">Scent</Label>
            <div className="mt-2 space-y-2">
            {SCENT_CATEGORIES.map(scent => (
                    <Button key={scent} variant={selectedScentCategories.includes(scent) ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => toggleArrayFilter(setSelectedScentCategories, scent)}>
                    {scent}
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
    <Accordion type="multiple" className="w-full" defaultValue={['sort']}>
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
        <AccordionItem value="category">
            <AccordionTrigger className="text-lg font-headline">Category</AccordionTrigger>
            <AccordionContent>
                <div className="mt-2 space-y-2">
                    {PERFUME_TYPES.map(type => (
                        <Button
                            key={type}
                            variant={selectedPerfumeType === type || (type === 'All Perfumes' && selectedPerfumeType === null) ? 'secondary' : 'ghost'}
                            className="w-full justify-start"
                            onClick={() => handlePerfumeTypeSelect(type)}
                        >
                            {type}
                        </Button>
                    ))}
                </div>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="brand">
            <AccordionTrigger className="text-lg font-headline">Brand</AccordionTrigger>
            <AccordionContent>
                 <div className="mt-2 space-y-2">
                    {BRANDS.map(brand => (
                        <Button key={brand} variant={selectedBrands.includes(brand) ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => toggleArrayFilter(setSelectedBrands, brand)}>
                            {brand}
                        </Button>
                    ))}
                </div>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="scent">
            <AccordionTrigger className="text-lg font-headline">Scent</AccordionTrigger>
            <AccordionContent>
                <div className="mt-2 space-y-2">
                    {SCENT_CATEGORIES.map(scent => (
                        <Button key={scent} variant={selectedScentCategories.includes(scent) ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => toggleArrayFilter(setSelectedScentCategories, scent)}>
                            {scent}
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

  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl font-bold">Our Perfumes</h1>
        <p className="mt-2 text-muted-foreground">Browse our exquisite collection of fragrances.</p>
      </div>

       {selectedPerfumeType && (
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm font-medium">Active Filter:</span>
            <Badge variant="secondary" className="text-sm">
                {selectedPerfumeType}
            </Badge>
            <Button variant="ghost" size="sm" onClick={() => setSelectedPerfumeType(null)} className="text-primary hover:text-primary">
                Clear filter
            </Button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="md:col-span-1">
            {isMobile ? <AccordionFilters /> : <Filters />}
        </aside>

        {/* Products Grid */}
        <main className="md:col-span-3">
          {paginatedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {paginatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
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
                <p className="text-lg font-semibold">No products found</p>
                <p className="text-muted-foreground">Try adjusting your filters.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
