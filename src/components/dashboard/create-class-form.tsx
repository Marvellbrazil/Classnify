'use client';

import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { PlusCircle, Sparkles } from 'lucide-react';
import { generateClassAction, type FormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Sparkles className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Class
        </>
      )}
    </Button>
  );
}

export function CreateClassForm() {
  const initialState: FormState = { message: '' };
  const [state, formAction] = useFormState(generateClassAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && 'class' in state) {
      toast({
        title: 'Class Generated!',
        description: `Successfully created the class: ${state.class?.className}`,
      });
      formRef.current?.reset();
    } else if (state.message && state.issues) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.issues.join('\n'),
      });
    }
  }, [state, toast]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create New Class
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-xl w-full">
        <form ref={formRef} action={formAction}>
          <SheetHeader>
            <SheetTitle className="font-headline text-2xl">
              Create a Class with AI
            </SheetTitle>
            <SheetDescription>
              Describe the class you want to create. Our AI will generate a
              name, description, and starting materials for you.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-8">
            <div className="grid gap-2">
              <Label htmlFor="prompt">Class Prompt</Label>
              <Textarea
                id="prompt"
                name="prompt"
                placeholder="e.g., 'A 10th-grade course on American history from the colonial period to the Civil War.'"
                className="min-h-[120px]"
                required
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Cancel</Button>
            </SheetClose>
            <SubmitButton />
          </SheetFooter>
        </form>
        {'class' in state && state.class && (
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">{state.class.className}</CardTitle>
                <CardDescription>{state.class.classDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">Initial Materials:</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{state.class.initialMaterials}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
