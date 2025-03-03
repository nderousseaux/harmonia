import * as motion from 'motion/react-client';
import { Suspense } from 'react';

import Lecon, { LeconSkeleton } from '@/src/ui/components/lecons/lecon';


// Page for a single lesson
export default async function Page(props: { params: Promise<{ id: string }> }) {
	
	return (    
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="h-full w-full space-y-10 text-white overflow-scroll pt-24 pb-10 px-32"
		>
			
			<Suspense fallback={<LeconSkeleton />}>
				<Lecon params={props.params} />
			</Suspense>
		
		</motion.main>

	);
}