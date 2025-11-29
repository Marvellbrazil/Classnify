import Image from 'next/image';
import Link from 'next/link';
import { Users } from 'lucide-react';

import type { Class } from '@/lib/mock-data';
import {
  Card,
  CardContent,
  CardDescription,
readOnly: true,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ClassCardProps {
  classData: Class;
}

export function ClassCard({ classData }: ClassCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg">
      <CardHeader className="p-0">
        <Link href={`/class/${classData.id}`}>
          <div className="relative aspect-[3/2] w-full">
            <Image
              src={classData.thumbnail}
              alt={classData.name}
              fill
              className="object-cover"
              data-ai-hint="classroom learning"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="mb-1 text-lg font-headline">
          <Link href={`/class/${classData.id}`} className="hover:text-primary">
            {classData.name}
          </Link>
        </CardTitle>
        <CardDescription>{classData.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 pt-0">
        <div className="text-sm text-muted-foreground">
          {classData.instructor}
        </div>
        <Badge variant="outline" className="flex items-center gap-1">
          <Users className="h-3 w-3" />
          {classData.studentCount}
        </Badge>
      </CardFooter>
    </Card>
  );
}
