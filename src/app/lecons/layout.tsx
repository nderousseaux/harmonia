import { Metadata } from 'next';
import Link from 'next/link';

import "@/src/ui/global.css";
import Logo from '@/src/ui/components/logo';
import NavItem from '@/src/ui/components/nav-item';

import { fetchLessons } from '@/src/lib/data';

// Some metadata
export const metadata: Metadata = {
  title: "Leçons",
  description: 'You can find here a peaceful gallery of meditation audio tracks.'
};


// Navigation sidebar
export default async function Layout({ children }: { children: React.ReactNode; }) {

	const lessons = await fetchLessons();

  return (
    <div className="flex h-screen">

      <nav className="w-96 flex-none h-full flex-col pt-4 gap-4 bg-slate-700 bg-opacity-45">
				<Link
					className="flex items-center justify-center h-32 shrink-0"
					href="/"
				>
						<Logo />
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

      <div className="flex-grow">
				{children}
			</div>

    </div>
  );
}