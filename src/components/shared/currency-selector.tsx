
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
      <SelectTrigger className="w-[120px] border-none focus:ring-0 shadow-none bg-transparent">
        <SelectValue placeholder="Select currency">
          <span className="flex items-center gap-2">
            {currencies[currency].flag}
            <span>{currency}</span>
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {Object.entries(currencies).map(([code, { name, flag }]) => (
          <SelectItem key={code} value={code}>
            <span className="flex items-center gap-2">
                {flag}
                <span>{code} - {name}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
