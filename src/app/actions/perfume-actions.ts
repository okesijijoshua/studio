'use server';

import { perfumeRecommendationsBasedOnHistory } from '@/ai/flows/perfume-recommendation';
import type { PerfumeRecommendationsBasedOnHistoryInput } from '@/ai/flows/perfume-recommendation';

export async function getPerfumeRecommendations(input: PerfumeRecommendationsBasedOnHistoryInput) {
  try {
    const result = await perfumeRecommendationsBasedOnHistory(input);
    return result.recommendations;
  } catch(e) {
    console.error(e);
    // In a real app, you'd want more robust error handling.
    // For now, we'll return a hardcoded list on failure.
    return ["Mystic Bloom", "Amber Oud"];
  }
}
