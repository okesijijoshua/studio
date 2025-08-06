
export const currencies = {
  NGN: { symbol: '₦', rate: 1, name: 'Nigerian Naira', flag: '🇳🇬' },
  USD: { symbol: '$', rate: 0.00067, name: 'United States Dollar', flag: '🇺🇸' },
  GBP: { symbol: '£', rate: 0.00053, name: 'British Pound Sterling', flag: '🇬🇧' },
  EUR: { symbol: '€', rate: 0.00062, name: 'Euro', flag: '🇪🇺' },
  JPY: { symbol: '¥', rate: 0.10, name: 'Japanese Yen', flag: '🇯🇵' },
  CNY: { symbol: '¥', rate: 0.0048, name: 'Chinese Yuan', flag: '🇨🇳' },
  INR: { symbol: '₹', rate: 0.056, name: 'Indian Rupee', flag: '🇮🇳' },
  CAD: { symbol: '$', rate: 0.00092, name: 'Canadian Dollar', flag: '🇨🇦' },
  AUD: { symbol: '$', rate: 0.0010, name: 'Australian Dollar', flag: '🇦🇺' },
  // Adding other top currencies as requested
  CHF: { symbol: 'CHF', rate: 0.00061, name: 'Swiss Franc', flag: '🇨🇭' },
  HKD: { symbol: 'HK$', rate: 0.0052, name: 'Hong Kong Dollar', flag: '🇭🇰' },
  SGD: { symbol: 'S$', rate: 0.00091, name: 'Singapore Dollar', flag: '🇸🇬' },
  SEK: { symbol: 'kr', rate: 0.0070, name: 'Swedish Krona', flag: '🇸🇪' },
  KRW: { symbol: '₩', rate: 0.93, name: 'South Korean Won', flag: '🇰🇷' },
  NOK: { symbol: 'kr', rate: 0.0071, name: 'Norwegian Krone', flag: '🇳🇴' },
  NZD: { symbol: '$', rate: 0.0011, name: 'New Zealand Dollar', flag: '🇳🇿' },
  MXN: { symbol: '$', rate: 0.012, name: 'Mexican Peso', flag: '🇲🇽' },
  TWD: { symbol: 'NT$', rate: 0.022, name: 'New Taiwan Dollar', flag: '🇹🇼' },
  ZAR: { symbol: 'R', rate: 0.012, name: 'South African Rand', flag: '🇿🇦' },
  BRL: { symbol: 'R$', rate: 0.0035, name: 'Brazilian Real', flag: '🇧🇷' },
  DKK: { symbol: 'kr', rate: 0.0046, name: 'Danish Krone', flag: '🇩🇰' },
  PLN: { symbol: 'zł', rate: 0.0027, name: 'Polish Złoty', flag: '🇵🇱' },
  THB: { symbol: '฿', rate: 0.025, name: 'Thai Baht', flag: '🇹🇭' },
  IDR: { symbol: 'Rp', rate: 10.95, name: 'Indonesian Rupiah', flag: '🇮🇩' },
  HUF: { symbol: 'Ft', rate: 0.25, name: 'Hungarian Forint', flag: '🇭🇺' },
};

export type CurrencyCode = keyof typeof currencies;

export const formatPrice = (priceInNgn: number, currency: CurrencyCode = 'NGN') => {
  const { symbol, rate } = currencies[currency];
  const convertedPrice = priceInNgn * rate;
  return `${symbol}${convertedPrice.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
