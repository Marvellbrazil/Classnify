'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a class with a name, description, and initial materials based on a single prompt.
 *
 * - generateClassFromPrompt - A function that takes a prompt and returns the generated class details.
 * - GenerateClassFromPromptInput - The input type for the generateClassFromPrompt function.
 * - GenerateClassFromPromptOutput - The return type for the generateClassFromPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateClassFromPromptInputSchema = z.string().describe('A prompt describing the class to be generated.');
export type GenerateClassFromPromptInput = z.infer<typeof GenerateClassFromPromptInputSchema>;

const GenerateClassFromPromptOutputSchema = z.object({
  className: z.string().describe('The generated name of the class.'),
  classDescription: z.string().describe('The generated description of the class.'),
  initialMaterials: z.string().describe('The generated initial materials for the class.'),
});
export type GenerateClassFromPromptOutput = z.infer<typeof GenerateClassFromPromptOutputSchema>;

export async function generateClassFromPrompt(input: GenerateClassFromPromptInput): Promise<GenerateClassFromPromptOutput> {
  return generateClassFromPromptFlow(input);
}

const generateClassPrompt = ai.definePrompt({
  name: 'generateClassPrompt',
  input: {schema: GenerateClassFromPromptInputSchema},
  output: {schema: GenerateClassFromPromptOutputSchema},
  prompt: `You are an AI assistant designed to help teachers quickly create new classes. Based on the provided prompt, generate a class name, a detailed class description, and some initial materials that would be helpful for the teacher to start with.\n\nPrompt: {{{$input}}}`, // Changed to use {{$input}} for accessing the string directly
});

const generateClassFromPromptFlow = ai.defineFlow(
  {
    name: 'generateClassFromPromptFlow',
    inputSchema: GenerateClassFromPromptInputSchema,
    outputSchema: GenerateClassFromPromptOutputSchema,
  },
  async input => {
    const {output} = await generateClassPrompt(input);
    return output!;
  }
);
