'use server';

/**
 * @fileOverview A flow for generating assignment questions and answer keys using AI assistance.
 *
 * - generateAssignmentQuestions - A function that handles the generation of assignment questions.
 * - GenerateAssignmentQuestionsInput - The input type for the generateAssignmentQuestions function.
 * - GenerateAssignmentQuestionsOutput - The return type for the generateAssignmentQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAssignmentQuestionsInputSchema = z.object({
  topic: z.string().describe('The topic of the assignment.'),
  questionType: z.enum(['short answer', 'multiple choice', 'checkbox']).describe('The type of questions to generate.'),
  numberOfQuestions: z.number().int().min(1).max(10).describe('The number of questions to generate.'),
  difficulty: z.enum(['easy', 'medium', 'hard']).describe('The difficulty level of the questions.'),
});
export type GenerateAssignmentQuestionsInput = z.infer<
  typeof GenerateAssignmentQuestionsInputSchema
>;

const GenerateAssignmentQuestionsOutputSchema = z.object({
  questions: z.array(
    z.object({
      question: z.string().describe('The generated question.'),
      answerKey: z.string().describe('The answer key for the question.'),
    })
  ).describe('The generated questions and answer keys.'),
});
export type GenerateAssignmentQuestionsOutput = z.infer<
  typeof GenerateAssignmentQuestionsOutputSchema
>;

export async function generateAssignmentQuestions(
  input: GenerateAssignmentQuestionsInput
): Promise<GenerateAssignmentQuestionsOutput> {
  return generateAssignmentQuestionsFlow(input);
}

const generateAssignmentQuestionsPrompt = ai.definePrompt({
  name: 'generateAssignmentQuestionsPrompt',
  input: {schema: GenerateAssignmentQuestionsInputSchema},
  output: {schema: GenerateAssignmentQuestionsOutputSchema},
  prompt: `You are an expert teacher generating assignment questions and answer keys.

  Generate {{numberOfQuestions}} {{questionType}} questions for the topic of {{topic}} with a difficulty of {{difficulty}}.

  Each question should have an answer key.

  The output should be a JSON array of objects with the following format:
  {
    "question": "The generated question.",
    "answerKey": "The answer key for the question."
  }

  Here's an example:
  [
    {
      "question": "What is the capital of France?",
      "answerKey": "Paris"
    },
    {
      "question": "What is the highest mountain in the world?",
      "answerKey": "Mount Everest"
    }
  ]
  `,
});

const generateAssignmentQuestionsFlow = ai.defineFlow(
  {
    name: 'generateAssignmentQuestionsFlow',
    inputSchema: GenerateAssignmentQuestionsInputSchema,
    outputSchema: GenerateAssignmentQuestionsOutputSchema,
  },
  async input => {
    const {output} = await generateAssignmentQuestionsPrompt(input);
    return output!;
  }
);
