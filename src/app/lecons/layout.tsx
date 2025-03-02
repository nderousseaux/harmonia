import * as motion from 'motion/react-client';
import { Metadata } from 'next';

import "@/src/ui/global.css";
import Logo from '@/src/ui/components/logo';
import NavItem from '@/src/ui/components/nav-item';
import { TLink } from '@/src/ui/components/t-link';

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
				initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
				className="w-96 flex-none h-full flex-col pt-4 gap-4 bg-slate-700 bg-opacity-45"
			>
				<TLink
					className="flex items-center justify-center h-32 shrink-0"
					href="/"
				>
						<Logo />
				</TLink>
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
				className="flex-grow"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.5 }}
			>
				{children}
			</motion.div>

    </div>
  );
}