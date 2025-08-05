'use server';

import { perfumeRecommendationsBasedOnHistory } from '@/ai/flows/perfume-recommendation';
import type { PerfumeRecommendationsBasedOnHistoryInput } from '@/ai/flows/perfume-recommendation';
import { findPerfume } from '@/ai/flows/perfume-finder';
import type { FindPerfumeInput, FindPerfumeOutput } from '@/ai/flows/perfume-finder';


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

export async function findPerfumeAction(input: FindPerfumeInput): Promise<FindPerfumeOutput> {
    try {
        return await findPerfume(input);
    } catch (e) {
        console.error(e);
        return { recommendations: [] };
    }
}
