'use client';


import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from 'next/navigation';
import React from 'react';

import "@/src/ui/global.css";
import LeconsList from '@/src/ui/components/nav/lecons-list';
import Logo from '@/src/ui/components/logo';
import NavItem from '@/src/ui/components/nav/nav-item';
import PageAnimatePresence from '@/src/ui/components/page-animate-presence';


// Navigation sidebar
export default function Layout({ children }: { children: React.ReactNode; }) {
	const router = useRouter();

	const [show, setShow] = React.useState(true);

	const clickLogo = () => {
		setShow(false);
		// Wait for the animation to finish
		setTimeout(() => {
			router.push('/');
		}, 500);
	}

  return (
		<AnimatePresence mode="wait">
			{ show && <motion.div
				key="/lecons"
				initial={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 10 }}
				transition={{ duration: 0.5 }}
				className="flex h-screen"
			>
				<motion.nav 
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="w-96 flex-none h-[110%] flex-col pt-4 gap-4 bg-slate-700 bg-opacity-45"
				>
					<div
						className="flex items-center justify-center h-32 shrink-0 cursor-pointer"
						onClick={clickLogo}
					>
							<Logo />
					</div>
					<div className="h-full">
						<h2 className="text-white opacity-50 text-sm uppercase font-semibold ml-4 mb-3">
							Mes leçons
						</h2>

						<LeconsList />
					</div>
				</motion.nav>

				<motion.div 
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="flex-grow"
				>
					<PageAnimatePresence>
						{children}
					</PageAnimatePresence>
				</motion.div>

			</motion.div> }
		</AnimatePresence>
  );
}