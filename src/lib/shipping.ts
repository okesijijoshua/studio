
export const nigerianStates: string[] = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
    "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
    "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi",
    "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
    "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT-Abuja"
];

// --- New Distance-Based Pricing Configuration ---

// You can adjust these values to fit your business model.
const BASE_PRICE = 1500; // A flat fee for every order, in NGN.
const PER_KM_RATE = 15; // The price per kilometer, in NGN.

// Wuse Market, Abuja, is our starting point.
// These are approximate road distances from Wuse Market to each state capital.
const distancesFromAbuja: Record<string, number> = {
    // FCT
    "FCT-Abuja": 20, // Local delivery distance
    
    // North Central
    "Nasarawa": 220, // Lafia
    "Niger": 155, // Minna
    "Kogi": 200, // Lokoja
    "Kwara": 310, // Ilorin
    "Plateau": 245, // Jos
    "Benue": 340, // Makurdi

    // North West
    "Kaduna": 215,
    "Kano": 440,
    "Katsina": 600,
    "Jigawa": 570, // Dutse
    "Sokoto": 700,
    "Zamfara": 580, // Gusau
    "Kebbi": 650, // Birnin Kebbi

    // North East
    "Bauchi": 430,
    "Gombe": 560,
    "Adamawa": 760, // Yola
    "Taraba": 680, // Jalingo
    "Yobe": 860, // Damaturu
    "Borno": 870, // Maiduguri

    // South West
    "Lagos": 760,
    "Ogun": 680, // Abeokuta
    "Oyo": 540, // Ibadan
    "Osun": 530, // Oshogbo
    "Ondo": 460, // Akure
    "Ekiti": 440, // Ado-Ekiti

    // South East
    "Enugu": 470,
    "Imo": 540, // Owerri
    "Abia": 610, // Umuahia
    "Anambra": 470, // Awka
    "Ebonyi": 540, // Abakaliki
    
    // South South
    "Edo": 540, // Benin City
    "Delta": 550, // Asaba
    "Rivers": 630, // Port Harcourt
    "Bayelsa": 640, // Yenagoa
    "Akwa Ibom": 680, // Uyo
    "Cross River": 770, // Calabar
};

/**
 * Calculates the shipping cost based on distance from Abuja.
 * @param state The destination state.
 * @returns The calculated shipping cost, or null if no state is provided.
 */
export function getShippingCost(state: string): number | null {
    if (!state) return null;

    const distance = distancesFromAbuja[state];
    
    // If the state is not in our list, use a default high distance (e.g., 1000km)
    if (distance === undefined) {
        return BASE_PRICE + (1000 * PER_KM_RATE);
    }

    // Round to the nearest 50 for cleaner pricing
    const calculatedCost = BASE_PRICE + (distance * PER_KM_RATE);
    return Math.round(calculatedCost / 50) * 50;
}
