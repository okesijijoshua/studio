
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
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useCurrency } from '@/hooks/use-currency';

const BRANDS = [...new Set(allProducts.map(p => p.brand))];
const SCENT_CATEGORIES = [...new Set(allProducts.filter(p => p.scentCategory).map(p => p.scentCategory!))];
const MAX_PRICE = Math.max(...allProducts.map(p => p.price));
const PRODUCTS_PER_PAGE = 10;

export default function CollectionsPage() {
  const searchParams = useSearchParams();
  const { formatPrice } = useCurrency();

  const [sortOption, setSortOption] = useState('name-asc');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedScentCategories, setSelectedScentCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, MAX_PRICE]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const initialCategory = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'All');

  useEffect(() => {
    // Reset to first page whenever filters change
    setCurrentPage(1);
  }, [selectedCategory, selectedBrands, selectedScentCategories, priceRange, sortOption]);


  const filteredAndSortedProducts = useMemo(() => {
    let products = allProducts;

    if (selectedCategory !== 'All') {
      products = products.filter(p => p.category === selectedCategory);
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
  }, [sortOption, selectedBrands, selectedScentCategories, priceRange, selectedCategory]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
      const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
      const endIndex = startIndex + PRODUCTS_PER_PAGE;
      return filteredAndSortedProducts.slice(startIndex, endIndex);
  }, [filteredAndSortedProducts, currentPage]);

  const toggleFilter = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setter(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl font-bold">Our Collection</h1>
        <p className="mt-2 text-muted-foreground">Browse our entire range of exquisite products.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="md:col-span-1">
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
                {['All', 'Perfume', 'Accessory'].map(cat => (
                  <Button key={cat} variant={selectedCategory === cat ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setSelectedCategory(cat)}>
                    {cat}
                  </Button>
                ))}
              </div>
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
              <Label className="text-lg font-headline">Scent</Label>
              <div className="mt-2 space-y-2">
                {SCENT_CATEGORIES.map(scent => (
                     <Button key={scent} variant={selectedScentCategories.includes(scent) ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => toggleFilter(setSelectedScentCategories, scent)}>
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
                <div className="mt-8 flex justify-center items-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button
                    variant="outline"
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
