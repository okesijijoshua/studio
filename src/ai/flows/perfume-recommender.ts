
'use server';
/**
 * @fileOverview An AI flow for recommending perfumes based on user input.
 *
 * This file defines a Genkit flow that takes a user's description of their
 * desired scent or occasion and recommends perfumes from the existing product list.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { products } from '@/lib/data';
import type { Product } from '@/lib/types';

// Filter only for perfumes to provide to the AI
const perfumeCollection: Product[] = products.filter(p => p.category === 'Perfume');

// Define the input schema for the flow.
const PerfumeRecommenderInputSchema = z.object({
  prompt: z.string().describe('The user\'s request or description of the desired vibe, occasion, or scent.'),
});
export type PerfumeRecommenderInput = z.infer<typeof PerfumeRecommenderInputSchema>;


// Define the schema for a single recommendation.
const RecommendationSchema = z.object({
  productId: z.string().describe('The ID of the recommended product.'),
  reasoning: z.string().describe('A short, compelling reason why this perfume is a great match for the user\'s prompt.'),
});

// Define the output schema for the flow, which is a list of recommendations.
const PerfumeRecommenderOutputSchema = z.object({
  recommendations: z.array(RecommendationSchema),
});
export type PerfumeRecommenderOutput = z.infer<typeof PerfumeRecommenderOutputSchema>;


/**
 * An exported wrapper function that calls the Genkit flow.
 * This is called from the frontend component.
 * @param input The user's prompt.
 * @returns A list of perfume recommendations.
 */
export async function recommendPerfumes(input: PerfumeRecommenderInput): Promise<PerfumeRecommenderOutput> {
  return perfumeRecommenderFlow(input);
}


const recommenderPrompt = ai.definePrompt({
  name: 'perfumeRecommenderPrompt',
  input: { schema: PerfumeRecommenderInputSchema },
  output: { schema: PerfumeRecommenderOutputSchema },
  prompt: `You are a world-class perfume expert and personal shopper for DekemiScents.
A customer is looking for a new fragrance. Based on their request, recommend exactly 2 to 3 perfumes from the provided list.

For each recommendation, provide the product ID and write a short, compelling, one-sentence reason explaining why it's the perfect fit for them. Analyze the user's prompt and match it against the perfume's name, description, notes, and vibe check.

USER'S REQUEST:
"{{{prompt}}}"

AVAILABLE PERFUME COLLECTION (JSON format):
${JSON.stringify(perfumeCollection, null, 2)}
`,
});


const perfumeRecommenderFlow = ai.defineFlow(
  {
    name: 'perfumeRecommenderFlow',
    inputSchema: PerfumeRecommenderInputSchema,
    outputSchema: PerfumeRecommenderOutputSchema,
  },
  async (input) => {
    const { output } = await recommenderPrompt(input);
    if (!output) {
      throw new Error('The AI model did not return any recommendations.');
    }
    return output;
  }
);
