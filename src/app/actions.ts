'use server';

import { generateClassFromPrompt } from '@/ai/flows/generate-class-from-prompt';
import { z } from 'zod';

const classSchema = z.object({
  prompt: z.string().min(10, { message: "Prompt must be at least 10 characters long." }),
});

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
} | {
  message: string;
  class?: {
    className: string;
    classDescription: string;
    initialMaterials: string;
  }
}

export async function generateClassAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {

  const validatedFields = classSchema.safeParse({
    prompt: formData.get('prompt'),
  });

  if (!validatedFields.success) {
    const issues = validatedFields.error.issues.map((issue) => issue.message);
    return {
      message: "Validation Error",
      issues,
    }
  }

  try {
    const result = await generateClassFromPrompt(validatedFields.data.prompt);
    return { 
      message: 'Class generated successfully.',
      class: result,
    };
  } catch (error) {
    return {
      message: 'An unexpected error occurred while generating the class.',
    };
  }
}
