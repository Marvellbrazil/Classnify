'use server';

/**
 * @fileOverview This file contains the Genkit flow for automatically grading student submissions
 * by matching answers with predefined keywords using AI.
 *
 * - automaticallyGradeSubmission - The main function to trigger the grading flow.
 * - GradingInput - The input type for the grading function.
 * - GradingOutput - The output type for the grading function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GradingInputSchema = z.object({
  submissionText: z
    .string()
    .describe('The text of the student submission.'),
  keywords: z
    .array(z.string())
    .describe('An array of keywords to match in the submission.'),
  maxScore: z
    .number()
    .describe('The maximum possible score for the submission.'),
});
export type GradingInput = z.infer<typeof GradingInputSchema>;

const GradingOutputSchema = z.object({
  score: z.number().describe('The score achieved by the student.'),
  matchedKeywords: z
    .array(z.string())
    .describe('The keywords that were matched in the submission.'),
  status: z
    .string()
    .describe('The status of the grading (e.g., Pass, Fail).'),
  feedback: z.string().describe('AI-generated feedback for the submission.'),
});
export type GradingOutput = z.infer<typeof GradingOutputSchema>;

export async function automaticallyGradeSubmission(
  input: GradingInput
): Promise<GradingOutput> {
  return automaticallyGradeSubmissionFlow(input);
}

const automaticallyGradeSubmissionPrompt = ai.definePrompt({
  name: 'automaticallyGradeSubmissionPrompt',
  input: {schema: GradingInputSchema},
  output: {schema: GradingOutputSchema},
  prompt: `You are an AI grading assistant. Grade the following student submission based on the provided keywords and max score.

Submission: {{{submissionText}}}
Keywords: {{#each keywords}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Max Score: {{{maxScore}}}

Provide a score based on the number of keywords matched (1 point per keyword).
Provide feedback to the student, highlighting the matched keywords.
Set the status to "Pass" if the score is at least 70% of the max score; otherwise, set it to "Fail".

Ensure the output is valid JSON.  Do not include any text outside of the JSON. The JSON should include the keys 'score', 'matchedKeywords', 'status', and 'feedback'. The matchedKeywords field should be an array of strings.
`,
});

const automaticallyGradeSubmissionFlow = ai.defineFlow(
  {
    name: 'automaticallyGradeSubmissionFlow',
    inputSchema: GradingInputSchema,
    outputSchema: GradingOutputSchema,
  },
  async input => {
    const {output} = await automaticallyGradeSubmissionPrompt(input);
    return output!;
  }
);

