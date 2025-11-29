'use client';

import { User, Briefcase, Shield } from 'lucide-react';

import { useApp, type Role } from '@/hooks/use-app';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function RoleSwitcher() {
  const { role, setRole } = useApp();

  const handleValueChange = (value: string) => {
    setRole(value as Role);
  };

  const roleIcons = {
    teacher: <Briefcase className="h-4 w-4" />,
    student: <User className="h-4 w-4" />,
    admin: <Shield className="h-4 w-4" />,
  };

  return (
    <Select value={role} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <div className="flex items-center gap-2">
          {roleIcons[role]}
          <SelectValue placeholder="Select a role" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="teacher">
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            Teacher
          </div>
        </SelectItem>
        <SelectItem value="student">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Student
          </div>
        </SelectItem>
        <SelectItem value="admin">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Admin
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
