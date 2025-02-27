import Link from 'next/link';

import NavItem from '@/app/ui/lecons/nav-item';
import HarmoniaLogo from '@/app/ui/harmonia-logo';

import { fetchLessons } from '@/app/lib/data';

export default async function SideNav() {
  const lessons = await fetchLessons();
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
            <NavItem key={index} isFirst={index === 0} lesson={lesson} />
          ))}
        </div>

      </div>
    </nav>
  );
}