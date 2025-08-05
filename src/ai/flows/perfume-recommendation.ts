'use server';

/**
 * @fileOverview An AI agent to provide personalized perfume recommendations based on user viewing history.
 *
 * - perfumeRecommendationsBasedOnHistory - A function that provides perfume recommendations.
 * - PerfumeRecommendationsBasedOnHistoryInput - The input type for the perfumeRecommendationsBasedOnHistory function.
 * - PerfumeRecommendationsBasedOnHistoryOutput - The return type for the perfumeRecommendationsBasedOnHistory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PerfumeRecommendationsBasedOnHistoryInputSchema = z.object({
  viewingHistory: z.array(
    z.string().describe('Names or descriptions of perfumes the user has viewed')
  ).describe('List of perfumes the user has viewed in the past'),
  numberOfRecommendations: z.number().default(2).describe('Number of perfume recommendations to provide'),
});

export type PerfumeRecommendationsBasedOnHistoryInput = z.infer<typeof PerfumeRecommendationsBasedOnHistoryInputSchema>;

const PerfumeRecommendationsBasedOnHistoryOutputSchema = z.object({
  recommendations: z.array(
    z.string().describe('Recommended perfume names or descriptions')
  ).describe('List of perfume recommendations based on viewing history'),
});

export type PerfumeRecommendationsBasedOnHistoryOutput = z.infer<typeof PerfumeRecommendationsBasedOnHistoryOutputSchema>;

export async function perfumeRecommendationsBasedOnHistory(input: PerfumeRecommendationsBasedOnHistoryInput): Promise<PerfumeRecommendationsBasedOnHistoryOutput> {
  return perfumeRecommendationsBasedOnHistoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'perfumeRecommendationsBasedOnHistoryPrompt',
  input: {
    schema: PerfumeRecommendationsBasedOnHistoryInputSchema,
  },
  output: {
    schema: PerfumeRecommendationsBasedOnHistoryOutputSchema,
  },
  prompt: `Based on the user's viewing history of perfumes:

  {{#each viewingHistory}}
  - {{{this}}}
  {{/each}}

  Recommend {{numberOfRecommendations}} perfumes that they might like.  Return the recommendations as a simple array of strings.
  `
});

const perfumeRecommendationsBasedOnHistoryFlow = ai.defineFlow(
  {
    name: 'perfumeRecommendationsBasedOnHistoryFlow',
    inputSchema: PerfumeRecommendationsBasedOnHistoryInputSchema,
    outputSchema: PerfumeRecommendationsBasedOnHistoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
