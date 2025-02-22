import Link from 'next/link';

import LessonCard from '@/app/ui/gallery/lesson-card';
import HarmoniaLogo from '@/app/ui/harmonia-logo';

import { lessons } from '@/app/lib/placeholder-data';

export default function SideNav() {
  return (
    <nav className="flex h-full flex-col pt-4 gap-4 bg-slate-700 bg-opacity-45">
      <Link
        className="flex items-center justify-center h-32 shrink-0"
        href="/"
      >
          <HarmoniaLogo />
      </Link>
      <div className="h-full">
        <h2 className="text-white opacity-50 text-sm uppercase font-semibold ml-4 mb-3">
          Mes leçons
        </h2>

        <div className="overflow-y-auto h-full">
          {lessons.map((lesson, index) => (
            <LessonCard key={index} isFirst={index === 0} data={lesson} />
          ))}
        </div>

      </div>
    </nav>
  );
}