

export const abujaLocalPrices: Record<string, number> = {
    "Maitama": 2000,
    "Asokoro": 2300,
    "Garki": 2000,
    "Gwarimpa": 2500,
    "Utako": 2000,
    "Jabi": 2000,
    "Apo": 2500,
    "Nyanya": 3500,
    "Mararaba": 4000,
    "Lugbe": 3000,
    "Kubwa": 3000,
    "Kuje": 4500,
    "Karu": 3500,
    "Lokogoma": 3000,
    "LifeCamp": 2500,
    "Mpape": 2500,
    "AirportRoad": 3500,
    "Galadimawa": 3000,
    "DeiDei": 4000,
    "Zuba": 4500,
};

export const nigeriaStatesPrices: Record<string, number> = {
    "Lagos": 8000,
    "Kano": 8000,
    "PortHarcourt": 8000,
    "Ibadan": 8000,
    "Kaduna": 5000,
    "Jos": 5000,
    "BeninCity": 8000,
    "Enugu": 8000,
    "Maiduguri": 8000,
    "Yola": 8000,
    "Bauchi": 7000,
    "Ilorin": 7000,
    "Calabar": 8000,
    "Owerri": 8000,
    "Akure": 8000,
    "Sokoto": 8000,
    "Gusau": 8000,
    "Katsina": 8000,
    "Minna": 4000,
    "Lokoja": 4000,
    "Uyo": 8000,
    "Makurdi": 6000,
    "AdoEkiti": 8000,
    "Abeokuta": 8000,
    "Warri": 8000,
    "Onitsha": 8000,
    "Umuahia": 8000,
    "Jalingo": 8000,
    "Damaturu": 8000,
    "Lafia": 3000,
    "BirninKebbi": 8000,
    "Dutse": 7500,
    "Gombe": 8000,
    "Yenagoa": 8000,
    "Awka": 8000,
    "Ogbomoso": 8000,
    "Oyo": 8000,
    "IjebuOde": 8000,
    "Ekpoma": 8000,
    "Idah": 6000,
    "Okene": 5000,
    "Kontagora": 5000,
    "Gboko": 6500,
    "Nsukka": 8000,
    "Ilesha": 8000,
    "Osogbo": 8000,
    "Akwanga": 3000,
    "Keffi": 3000,
    "Bida": 5000,
    "Azare": 7000,
    "FCT-Abuja": 3000, // Default FCT price if a specific area isn't chosen
};

export const abujaLocations = Object.keys(abujaLocalPrices).sort((a,b) => a.localeCompare(b));
export const nigeriaStates = Object.keys(nigeriaStatesPrices).sort((a,b) => a.localeCompare(b));


// Combine all locations into a single sorted list for the dropdown
export const allDeliveryLocations: string[] = [
    ...Object.keys(abujaLocalPrices),
    ...Object.keys(nigeriaStatesPrices)
].sort((a, b) => a.localeCompare(b));


/**
 * Calculates the shipping cost from the fixed pricing table.
 * @param location The destination location (local Abuja area or state/city).
 * @returns The shipping cost, or null if no location is provided.
 */
export function getShippingCost(location: string): number | null {
    if (!location) return null;

    if (abujaLocalPrices[location] !== undefined) {
        return abujaLocalPrices[location];
    }

    if (nigeriaStatesPrices[location] !== undefined) {
        return nigeriaStatesPrices[location];
    }
    
    // Fallback if the location is somehow not in either list
    return 8000;
}
