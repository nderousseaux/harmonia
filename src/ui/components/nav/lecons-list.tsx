import NavItem, { NavItemSkeleton } from '@/src/ui/components/nav/nav-item';
import * as motion from 'motion/react-client';

import { fetchLessons } from '@/src/lib/data';

export default async function LeconsList() {
	const lessons = await fetchLessons();
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 3 }}
			className="overflow-y-auto h-full"
		>
			{lessons.map((lesson, index) => (
				<NavItem key={index} isFirst={index === 0} lesson={lesson} />
			))}
		</motion.div>
		
	)
}

export function LeconsListSkeleton() {
	return (
		<div className="overflow-y-auto h-full">
			{Array.from(Array(5).keys()).map((index) => (
				<NavItemSkeleton key={index} isFirst={index === 0} />
			))}
		</div>
	)
}