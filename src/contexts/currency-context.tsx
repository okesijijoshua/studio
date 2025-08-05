"use client";

import React, { createContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import { currencies, type CurrencyCode } from '@/lib/currency';

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  formatPrice: (priceInNgn: number) => string;
}

export const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrencyState] = useState<CurrencyCode>('NGN');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const storedCurrency = localStorage.getItem('luxe_scents_currency') as CurrencyCode;
      if (storedCurrency && currencies[storedCurrency]) {
        setCurrencyState(storedCurrency);
      }
    } catch (error) {
      console.error("Could not access localStorage:", error);
    }
  }, []);

  const setCurrency = (newCurrency: CurrencyCode) => {
    if (currencies[newCurrency]) {
      setCurrencyState(newCurrency);
      try {
        localStorage.setItem('luxe_scents_currency', newCurrency);
      } catch (error) {
         console.error("Could not access localStorage:", error);
      }
    }
  };

  const formatPrice = useMemo(() => {
    return (priceInNgn: number) => {
      if (!isMounted) {
        // Return a placeholder or default format during SSR
        return `${currencies['NGN'].symbol}${priceInNgn.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`;
      }
      const { symbol, rate } = currencies[currency];
      const convertedPrice = priceInNgn * rate;
      return `${symbol}${convertedPrice.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    };
  }, [currency, isMounted]);

  const value = {
    currency,
    setCurrency,
    formatPrice,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};
