import * as motion from 'motion/react-client';
import Link from 'next/link';
import React, { Suspense } from 'react';
import { Metadata } from 'next';

import LeconsList, { LeconsListSkeleton } from '@/src/ui/components/nav/lecons-list';
import Logo from '@/src/ui/components/logo';
import PageAnimatePresence from '@/src/ui/components/page-animate-presence';


// Some metadata
export const metadata: Metadata = {
  title: "Leçons",
  description: 'You can find here a peaceful gallery of meditation audio tracks.'
};


export default async function Layout({ children }: { children: React.ReactNode }) {

	return (
		<div className="flex h-screen">
			<motion.nav 
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: -5 }}
				transition={{ duration: 1 }}
				className="w-96 flex-none h-[110%] flex-col pt-4 gap-4 bg-slate-700 bg-opacity-45"
			>
				<Link href="/"
					className="flex items-center justify-center h-32 shrink-0 cursor-pointer pt-[5px]"
				>
						<Logo />
				</Link>
				<div className="h-full">
					<h2 className="text-white opacity-50 text-sm uppercase font-semibold ml-4 mb-3">
						Mes leçons
					</h2>
					
					<Suspense fallback={<LeconsListSkeleton />}>
						<LeconsList />
					</Suspense>
				</div>
			</motion.nav>

			<motion.div 
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.5 }}
				className="flex-grow"
			>
				<PageAnimatePresence>
					{children}
				</PageAnimatePresence>
			</motion.div>
		</div>
	);
}