'use server';

/**
 * @fileOverview An AI agent that suggests relevant keywords for assignments.
 *
 * - generateKeywordsForAssignment - A function that generates keywords for an assignment.
 * - GenerateKeywordsForAssignmentInput - The input type for the generateKeywordsForAssignment function.
 * - GenerateKeywordsForAssignmentOutput - The return type for the generateKeywordsForAssignment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateKeywordsForAssignmentInputSchema = z.object({
  assignmentDescription: z
    .string()
    .describe('The description of the assignment.'),
});

export type GenerateKeywordsForAssignmentInput = z.infer<
  typeof GenerateKeywordsForAssignmentInputSchema
>;

const GenerateKeywordsForAssignmentOutputSchema = z.object({
  keywords: z
    .array(z.string())
    .describe('An array of relevant keywords for the assignment.'),
});

export type GenerateKeywordsForAssignmentOutput = z.infer<
  typeof GenerateKeywordsForAssignmentOutputSchema
>;

export async function generateKeywordsForAssignment(
  input: GenerateKeywordsForAssignmentInput
): Promise<GenerateKeywordsForAssignmentOutput> {
  return generateKeywordsForAssignmentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateKeywordsForAssignmentPrompt',
  input: {schema: GenerateKeywordsForAssignmentInputSchema},
  output: {schema: GenerateKeywordsForAssignmentOutputSchema},
  prompt: `You are an expert teacher. Your job is to suggest keywords that should be present in a student's assignment, given the assignment description.

Assignment Description: {{{assignmentDescription}}}

Return a JSON array of keywords.`,
});

const generateKeywordsForAssignmentFlow = ai.defineFlow(
  {
    name: 'generateKeywordsForAssignmentFlow',
    inputSchema: GenerateKeywordsForAssignmentInputSchema,
    outputSchema: GenerateKeywordsForAssignmentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
