import * as motion from 'motion/react-client';
import { Suspense } from 'react';

import Lecon from '@/src/ui/components/lecons/lecon';


// Page for a single lesson
export default async function Page(props: { params: Promise<{ id: string }> }) {
	
	return (    
		<motion.main
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			className="h-full w-full space-y-10 text-white overflow-scroll pt-24 pb-10 px-32"
		>
			
			<Suspense fallback={""}>
				<Lecon params={props.params} />
			</Suspense>
		
		</motion.main>

	);
}