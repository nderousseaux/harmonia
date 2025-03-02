import NavItem, { NavItemSkeleton } from '@/src/ui/components/nav/nav-item';

import { fetchLessons } from '@/src/lib/data';

export default async function LeconsList() {
	const lessons = await fetchLessons();
	return (
		<div className="overflow-y-auto h-full">
			{lessons.map((lesson, index) => (
				<NavItem key={index} isFirst={index === 0} lesson={lesson} />
			))}
		</div>
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