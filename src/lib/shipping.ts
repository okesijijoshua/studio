
export const nigerianStates: string[] = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
    "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
    "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi",
    "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
    "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT-Abuja"
];

// Prices are in NGN, our base currency
const shippingRates: Record<string, number> = {
    // South West
    "Lagos": 2500, // Local
    "Ogun": 3500,
    "Oyo": 4000,
    "Osun": 4500,
    "Ondo": 5000,
    "Ekiti": 5000,
    
    // South South
    "Edo": 5500,
    "Delta": 6000,
    "Rivers": 6500,
    "Bayelsa": 7000,
    "Akwa Ibom": 7500,
    "Cross River": 8000,

    // South East
    "Anambra": 6000,
    "Enugu": 6000,
    "Imo": 6500,
    "Abia": 6500,
    "Ebonyi": 7000,

    // North Central
    "FCT-Abuja": 5000,
    "Kwara": 5500,
    "Kogi": 5500,
    "Niger": 6000,
    "Nasarawa": 6000,
    "Benue": 7000,
    "Plateau": 7500,

    // North West
    "Kaduna": 7000,
    "Kano": 8000,
    "Katsina": 8500,
    "Jigawa": 9000,
    "Sokoto": 9500,
    "Zamfara": 9500,
    "Kebbi": 10000,

    // North East
    "Gombe": 8500,
    "Bauchi": 8500,
    "Taraba": 9000,
    "Adamawa": 10000,
    "Yobe": 11000,
    "Borno": 12000,
};

export function getShippingCost(state: string): number | null {
    if (!state) return null;
    return shippingRates[state] || 15000; // Default to a higher price for unlisted/remote areas
}
