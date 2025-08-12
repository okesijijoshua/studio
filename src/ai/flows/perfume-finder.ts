
'use server';

/**
 * @fileOverview An AI agent to help users find perfumes based on their preferences.
 * 
 * - findPerfume - A function that finds perfumes for a user.
 * - FindPerfumeInput - The input type for the findPerfume function.
 * - FindPerfumeOutput - The return type for the findPerfume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { products } from '@/lib/data';

const PerfumeSchema = z.object({
    id: z.string().optional(),
    name: z.string().describe('The name of the perfume.'),
    description: z.string().describe('A brief description of the perfume.'),
    brand: z.string().describe('The brand that makes the perfume.'),
    scentCategory: z.enum(['Floral', 'Woody', 'Oriental', 'Fresh']).describe('The scent category of the perfume.'),
});


const FindPerfumeInputSchema = z.object({
  description: z.string().describe('The user\'s description of the desired perfume scent.'),
});

export type FindPerfumeInput = z.infer<typeof FindPerfumeInputSchema>;

const FindPerfumeOutputSchema = z.object({
    recommendations: z.array(PerfumeSchema).describe('A list of recommended perfumes. Include perfumes from the existing collection if they are a good match. If no existing perfumes match well, suggest new, fictional perfumes that fit the user\'s description.'),
});

export type FindPerfumeOutput = z.infer<typeof FindPerfumeOutputSchema>;

export async function findPerfume(input: FindPerfumeInput): Promise<FindPerfumeOutput> {
  return findPerfumeFlow(input);
}

const prompt = ai.definePrompt({
    name: 'perfumeFinderPrompt',
    input: {
        schema: z.object({
            description: z.string(),
            products: z.array(z.any()),
        }),
    },
    output: {
        schema: FindPerfumeOutputSchema,
    },
    prompt: `You are a world-class perfumier. A customer is looking for a new scent. Based on their description, recommend up to 3 perfumes.

    User's request: "{{description}}"
    
    Here is a list of perfumes available in our collection:
    {{#each products}}
    - Name: {{this.name}}
      - ID: {{this.id}}
      - Description: {{this.description}}
      - Brand: {{this.brand}}
      - Scent Category: {{this.scentCategory}}
    {{/each}}
    
    Please analyze the user's request and compare it against our collection.
    
    - If you find one or more perfumes in our collection that are a strong match, please return them. Include their IDs.
    - If our collection does not contain a strong match, create and recommend one or two new, fictional perfumes that you believe the user would love. For these fictional perfumes, do not include an ID.
    - You can also return a mix of existing and fictional perfumes if there is one good match but you think a fictional one would be even better.
    
    Return your recommendations in the requested JSON format.
    `,
});

const findPerfumeFlow = ai.defineFlow(
  {
    name: 'findPerfumeFlow',
    inputSchema: FindPerfumeInputSchema,
    outputSchema: FindPerfumeOutputSchema,
  },
  async (input) => {
    const {output} = await prompt({
      description: input.description,
      products: products,
    });
    return output!;
  }
);
