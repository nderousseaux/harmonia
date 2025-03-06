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
		<div className="flex h-screen lg:flex-row">
			<motion.nav 
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: -5 }}
				exit={{ opacity: 0, y: -10 }}
				transition={{ duration: 1 }}
				key={children?.toString()}
				className="w-full lg:w-96 flex-none h-[110%] flex-col pt-4 gap-4 lg:bg-slate-700 lg:bg-opacity-45 overflow-hidden shrink-[2] lg:shrink-0"
			>
				<Link href="/"
					className="flex items-center justify-center h-32 shrink-0 cursor-pointer"
				>
					<Logo />
				</Link>
				<div>
					<h2 className="text-white opacity-50 text-sm uppercase font-semibold ml-4 mb-3">
						Mes leçons
					</h2>
					
					<div className="overflow-y-auto max-h-[calc(100svh-10.5rem)]">
						<Suspense fallback={<LeconsListSkeleton />}>
							<LeconsList />
						</Suspense>
					</div>
				</div>
			</motion.nav>

			<div 
				className="lg:flex-grow overflow-y-scroll"
			>
				<PageAnimatePresence>
					{children}
				</PageAnimatePresence>
			</div>
		</div>
	);
}
