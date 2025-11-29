'use client';

import { useApp } from '@/hooks/use-app';
import { mockClasses, mockUsers } from '@/lib/mock-data';
import { ClassCard } from './class-card';
import { CreateClassForm } from './create-class-form';

export function DashboardClient() {
  const { role } = useApp();
  const user = mockUsers[0];

  const roleHeadlines = {
    teacher: "Teacher's Dashboard",
    student: "Student's Dashboard",
    admin: "Admin's Dashboard",
  };

  const roleDescriptions = {
    teacher: 'Manage your classes, create assignments, and grade submissions.',
    student: 'View your enrolled classes and upcoming assignments.',
    admin: 'Oversee all classes and manage users.',
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-headline tracking-tight">
            {roleHeadlines[role]}
          </h1>
          <p className="text-muted-foreground">
            Welcome back, {user.fullName}. {roleDescriptions[role]}
          </p>
        </div>
        {role === 'teacher' && <CreateClassForm />}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockClasses.map((classData) => (
          <ClassCard key={classData.id} classData={classData} />
        ))}
      </div>
    </div>
  );
}
