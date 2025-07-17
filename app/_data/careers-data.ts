export interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: 'تمام‌وقت' | 'پاره‌وقت' | 'کارآموزی';
}

export const openPositions: JobPosition[] = [
  {
    id: 1,
    title: 'توسعه‌دهنده Front-end (React/Next.js)',
    department: 'فنی و مهندسی',
    location: 'تهران (امکان دورکاری)',
    type: 'تمام‌وقت',
  },
  {
    id: 2,
    title: 'طراح محصول (UI/UX)',
    department: 'طراحی',
    location: 'تهران',
    type: 'تمام‌وقت',
  },
  {
    id: 3,
    title: 'کارشناس تولید محتوا و سئو',
    department: 'بازاریابی',
    location: 'تهران',
    type: 'تمام‌وقت',
  },
  {
    id: 4,
    title: 'کارآموز تست نرم‌افزار',
    department: 'فنی و مهندسی',
    location: 'تهران',
    type: 'کارآموزی',
  },
];