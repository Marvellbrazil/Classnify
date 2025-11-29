export type Class = {
  id: string;
  name: string;
  description: string;
  instructor: string;
  thumbnail: string;
  studentCount: number;
};

export type User = {
  id: string;
  fullName: string;
  email: string;
  avatar: string;
};

export const mockUsers: User[] = [
  {
    id: 'user-1',
    fullName: 'Alex Doe',
    email: 'alex.doe@example.com',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
  {
    id: 'user-2',
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
];

export const mockClasses: Class[] = [
  {
    id: 'class-1',
    name: 'Introduction to AI',
    description: 'Explore the fundamentals of Artificial Intelligence and its applications.',
    instructor: 'Dr. Evelyn Reed',
    thumbnail: 'https://picsum.photos/seed/tech/600/400',
    studentCount: 34,
  },
  {
    id: 'class-2',
    name: 'Renaissance Art History',
    description: 'A deep dive into the art and artists of the Renaissance period.',
    instructor: 'Prof. Marcus Chen',
    thumbnail: 'https://picsum.photos/seed/arthistory/600/400',
    studentCount: 22,
  },
  {
    id: 'class-3',
    name: 'Ecosystems & Biomes',
    description: 'Learn about the different ecosystems and biomes around the world.',
    instructor: 'Dr. Anya Sharma',
    thumbnail: 'https://picsum.photos/seed/biology/600/400',
    studentCount: 28,
  },
  {
    id: 'class-4',
    name: 'Modernist Literature',
    description: 'Analyzing the works of authors from the Modernist movement.',
    instructor: 'Dr. Ben Carter',
    thumbnail: 'https://picsum.photos/seed/literature/600/400',
    studentCount: 19,
  },
];
