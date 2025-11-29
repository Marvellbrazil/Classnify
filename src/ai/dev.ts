import { config } from 'dotenv';
config();

import '@/ai/flows/automatically-grade-student-submissions.ts';
import '@/ai/flows/generate-keywords-for-assignment.ts';
import '@/ai/flows/generate-assignment-questions.ts';
import '@/ai/flows/generate-class-from-prompt.ts';