import * as motion from 'motion/react-client';

import NavItem, { NavItemSkeleton } from '@/src/ui/components/nav/nav-item';
import { fetchLessons } from '@/src/lib/data';

export default async function LeconsList() {
	const lessons = await fetchLessons();

  return (
		
    <motion.div 
			className="overflow-y-auto h-full"
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			{lessons.map((lesson, index) => (
				<NavItem key={index} isFirst={index === 0} lesson={lesson} />
			))} 
    </motion.div>
  );
}

export async function LeconsListSkeleton() {
  return (
    <div className="overflow-y-auto h-full">
      {Array.from(Array(5).keys()).map((index) => (
        <NavItemSkeleton key={index} isFirst={index === 0} />
      ))}
    </div>
  );
}
