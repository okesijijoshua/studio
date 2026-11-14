/**
 * Shipping calculation for DekemiScents.
 * Internal dispatch origin: FHA Lugbe, Abuja.
 * Note: The dispatch origin is kept internal and NOT displayed to users.
 */

export interface LocationCoords {
  lat: number;
  lng: number;
  name?: string;
}

// Internal dispatch origin (FHA Lugbe, Abuja)
export const DISPATCH_ORIGIN: LocationCoords = {
  name: "FHA Lugbe, Abuja",
  lat: 8.9733,
  lng: 7.3755,
};

// Pre-calculated delivery fees for Abuja locations from FHA Lugbe (+₦1,000 applied)
export const ABUJA_AREAS: Record<string, { lat: number; lng: number; fee: number }> = {
  "Lugbe (FHA / Federal Housing)": { lat: 8.9733, lng: 7.3755, fee: 2500 },
  "Lugbe (Airport Road / Trademore / Pyakasa)": { lat: 8.9600, lng: 7.3500, fee: 2800 },
  "Airport / Airport Road": { lat: 9.0068, lng: 7.2631, fee: 3000 },
  "Galadimawa": { lat: 8.9950, lng: 7.4350, fee: 3000 },
  "Lokogoma": { lat: 8.9800, lng: 7.4600, fee: 3200 },
  "Apo (Resettlement / Legislative / Mechanic)": { lat: 9.0050, lng: 7.4950, fee: 3500 },
  "Garki (Area 1 - Area 11)": { lat: 9.0333, lng: 7.4833, fee: 3500 },
  "Central Business District (CBD)": { lat: 9.0546, lng: 7.4878, fee: 4000 },
  "Wuse 2": { lat: 9.0765, lng: 7.4760, fee: 4000 },
  "Wuse (Zone 1 - 7 / Market)": { lat: 9.0686, lng: 7.4648, fee: 4000 },
  "Utako": { lat: 9.0633, lng: 7.4410, fee: 4000 },
  "Jabi": { lat: 9.0700, lng: 7.4200, fee: 4000 },
  "Asokoro": { lat: 9.0430, lng: 7.5270, fee: 4000 },
  "Guzape": { lat: 9.0200, lng: 7.5300, fee: 4000 },
  "Wuye": { lat: 9.0450, lng: 7.4500, fee: 4000 },
  "Life Camp": { lat: 9.0720, lng: 7.3850, fee: 4000 },
  "Maitama": { lat: 9.0882, lng: 7.4934, fee: 4000 },
  "Mabushi": { lat: 9.0833, lng: 7.4600, fee: 4500 },
  "Gwarinpa": { lat: 9.1120, lng: 7.3980, fee: 4500 },
  "Kado": { lat: 9.0900, lng: 7.4200, fee: 4500 },
  "Jahi": { lat: 9.1000, lng: 7.4400, fee: 4500 },
  "Dawaki": { lat: 9.1350, lng: 7.3750, fee: 4800 },
  "Kuje": { lat: 8.8800, lng: 7.2300, fee: 5000 },
  "Mpape": { lat: 9.1300, lng: 7.5000, fee: 5000 },
  "Karu": { lat: 9.0000, lng: 7.5650, fee: 4800 },
  "Nyanya": { lat: 8.9900, lng: 7.5900, fee: 5000 },
  "Mararaba": { lat: 8.9800, lng: 7.6200, fee: 5500 },
  "Kubwa": { lat: 9.1550, lng: 7.3350, fee: 5500 },
  "Dei-Dei": { lat: 9.1400, lng: 7.2900, fee: 5800 },
  "Bwari": { lat: 9.2800, lng: 7.3800, fee: 6500 },
  "Zuba": { lat: 9.1050, lng: 7.2000, fee: 6500 },
};

export const abujaLocations = Object.keys(ABUJA_AREAS).sort((a, b) => a.localeCompare(b));

// Interstate delivery fees for states outside Abuja (+₦1,000 applied)
export const nigeriaStatesPrices: Record<string, number> = {
  "Lagos": 9000,
  "Kano": 9000,
  "Port Harcourt (Rivers)": 9000,
  "Ibadan (Oyo)": 9000,
  "Kaduna": 6000,
  "Jos (Plateau)": 6000,
  "Benin City (Edo)": 9000,
  "Enugu": 9000,
  "Maiduguri (Borno)": 9000,
  "Yola (Adamawa)": 9000,
  "Bauchi": 8000,
  "Ilorin (Kwara)": 8000,
  "Calabar (Cross River)": 9000,
  "Owerri (Imo)": 9000,
  "Akure (Ondo)": 9000,
  "Sokoto": 9000,
  "Gusau (Zamfara)": 9000,
  "Katsina": 9000,
  "Minna (Niger)": 5000,
  "Lokoja (Kogi)": 5000,
  "Uyo (Akwa Ibom)": 9000,
  "Makurdi (Benue)": 7000,
  "Ado-Ekiti (Ekiti)": 9000,
  "Abeokuta (Ogun)": 9000,
  "Delta (Warri / Asaba)": 9000,
  "Anambra (Onitsha / Awka)": 9000,
  "Abia (Umuahia / Aba)": 9000,
  "Jalingo (Taraba)": 9000,
  "Damaturu (Yobe)": 9000,
  "Lafia (Nasarawa)": 4000,
  "Keffi (Nasarawa)": 4000,
  "Birnin Kebbi (Kebbi)": 9000,
  "Dutse (Jigawa)": 8500,
  "Gombe": 9000,
  "Yenagoa (Bayelsa)": 9000,
  "Ebonyi (Abakaliki)": 9000,
  "Osogbo (Osun)": 9000,
};

export const nigeriaStates = Object.keys(nigeriaStatesPrices).sort((a, b) => a.localeCompare(b));

/**
 * Calculates delivery fee for any selected location.
 */
export function getShippingCost(location: string): number | null {
  if (!location) return null;
  if (ABUJA_AREAS[location]) {
    return ABUJA_AREAS[location].fee;
  }
  if (nigeriaStatesPrices[location] !== undefined) {
    return nigeriaStatesPrices[location];
  }
  return 4000;
}
