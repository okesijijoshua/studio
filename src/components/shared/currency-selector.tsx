"use client";

import { useCurrency } from '@/hooks/use-currency';
import { currencies, type CurrencyCode } from '@/lib/currency';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  return (
    <Select value={currency} onValueChange={(value: CurrencyCode) => setCurrency(value)}>
      <SelectTrigger className="w-[80px] border-none focus:ring-0 shadow-none bg-transparent">
        <SelectValue placeholder="Select currency" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(currencies).map(([code, { name }]) => (
          <SelectItem key={code} value={code}>
            {code} - {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
