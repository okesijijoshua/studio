export const currencies = {
  NGN: { symbol: '₦', rate: 1, name: 'Nigerian Naira' },
  USD: { symbol: '$', rate: 0.00067, name: 'United States Dollar' },
  GBP: { symbol: '£', rate: 0.00053, name: 'British Pound Sterling' },
  EUR: { symbol: '€', rate: 0.00062, name: 'Euro' },
  JPY: { symbol: '¥', rate: 0.10, name: 'Japanese Yen' },
  CNY: { symbol: '¥', rate: 0.0048, name: 'Chinese Yuan' },
  INR: { symbol: '₹', rate: 0.056, name: 'Indian Rupee' },
  CAD: { symbol: '$', rate: 0.00092, name: 'Canadian Dollar' },
  AUD: { symbol: '$', rate: 0.0010, name: 'Australian Dollar' },
  // Adding other top currencies as requested
  CHF: { symbol: 'CHF', rate: 0.00061, name: 'Swiss Franc' },
  HKD: { symbol: 'HK$', rate: 0.0052, name: 'Hong Kong Dollar' },
  SGD: { symbol: 'S$', rate: 0.00091, name: 'Singapore Dollar' },
  SEK: { symbol: 'kr', rate: 0.0070, name: 'Swedish Krona' },
  KRW: { symbol: '₩', rate: 0.93, name: 'South Korean Won' },
  NOK: { symbol: 'kr', rate: 0.0071, name: 'Norwegian Krone' },
  NZD: { symbol: '$', rate: 0.0011, name: 'New Zealand Dollar' },
  MXN: { symbol: '$', rate: 0.012, name: 'Mexican Peso' },
  TWD: { symbol: 'NT$', rate: 0.022, name: 'New Taiwan Dollar' },
  ZAR: { symbol: 'R', rate: 0.012, name: 'South African Rand' },
  BRL: { symbol: 'R$', rate: 0.0035, name: 'Brazilian Real' },
  DKK: { symbol: 'kr', rate: 0.0046, name: 'Danish Krone' },
  PLN: { symbol: 'zł', rate: 0.0027, name: 'Polish Złoty' },
  THB: { symbol: '฿', rate: 0.025, name: 'Thai Baht' },
  IDR: { symbol: 'Rp', rate: 10.95, name: 'Indonesian Rupiah' },
  HUF: { symbol: 'Ft', rate: 0.25, name: 'Hungarian Forint' },
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
