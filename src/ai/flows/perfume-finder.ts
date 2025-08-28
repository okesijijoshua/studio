
'use server';

/**
 * @fileOverview An AI agent to help users find perfumes based on their preferences.
 * 
 * - findPerfume - A function that finds perfumes for a user.
 * - FindPerfumeInput - The input type for the findPerfume function.
 * - FindPerfumeOutput - The return type for the findPerfume function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { products } from '@/lib/data';

const PerfumeScentProfileSchema = z.object({
  name: z.string().describe('The name of the perfume.'),
  notes: z.array(z.string()).describe('The notes of the perfume (e.g., floral, woody, citrus).'),
  description: z.string().describe('A brief description of the perfume.'),
});

export const FindPerfumeInputSchema = z.object({
  mood: z.string().describe('The mood or occasion for the perfume (e.g., "a night out", "a professional meeting").'),
  preferredNotes: z.array(z.string()).optional().describe('A list of preferred notes or scents (e.g., "vanilla", "rose", "oud").'),
});
export type FindPerfumeInput = z.infer<typeof FindPerfumeInputSchema>;

export const FindPerfumeOutputSchema = z.object({
  recommendations: z.array(z.object({
    perfumeName: z.string().describe("The name of the recommended perfume."),
    reason: z.string().describe("A brief explanation for why this perfume is a good match."),
  })).describe('A list of 3-5 perfume recommendations.'),
});
export type FindPerfumeOutput = z.infer<typeof FindPerfumeOutputSchema>;

const perfumeRecommendationPrompt = ai.definePrompt({
    name: 'perfumeRecommendationPrompt',
    input: { schema: FindPerfumeInputSchema },
    output: { schema: FindPerfumeOutputSchema },
    prompt: `
      You are a world-class perfumer with an encyclopedic knowledge of fragrances.
      A customer is looking for a new scent. Your task is to recommend 3-5 perfumes from the list provided below based on their preferences.

      Customer Preferences:
      - Mood/Occasion: {{{mood}}}
      {{#if preferredNotes}}
      - Preferred Notes: {{#each preferredNotes}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
      {{/if}}

      Available Perfumes:
      Below is a list of available perfumes with their names, scent notes, and descriptions.
      Use only the perfumes from this list for your recommendations.

      {{#each perfumes}}
      - **{{{name}}}**: (Notes: {{#each notes}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}) - {{{description}}}
      {{/each}}

      Based on the customer's input, provide a list of 3 to 5 recommendations. For each recommendation, give the perfume's name and a short, compelling reason why it fits the customer's request.
    `,
});

const findPerfumeFlow = ai.defineFlow(
  {
    name: 'findPerfumeFlow',
    inputSchema: FindPerfumeInputSchema,
    outputSchema: FindPerfumeOutputSchema,
  },
  async (input) => {
    
    const perfumeProfiles = products
      .filter(p => p.category === 'Perfume' && p.notes)
      .map(p => ({
        name: p.name,
        notes: [p.notes!], 
        description: p.description,
      }));

    const result = await perfumeRecommendationPrompt({
        ...input,
        perfumes: perfumeProfiles,
    });

    return result.output!;
  }
);

export async function findPerfume(input: FindPerfumeInput): Promise<FindPerfumeOutput> {
    return findPerfumeFlow(input);
}
