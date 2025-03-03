import Link from 'next/link';
import { Metadata } from 'next';
import * as motion from 'motion/react-client';

import "@/src/ui/global.css";
import Logo from '@/src/ui/components/logo';
import NavItem from '@/src/ui/components/nav/nav-item';
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
      <motion.nav 
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="w-96 flex-none h-[110%] flex-col pt-4 gap-4 bg-slate-700 bg-opacity-45"
			>
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
      </motion.nav>

      <motion.div 
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}
				className="flex-grow"
			>
				{children}
			</motion.div>

    </div>
  );
}