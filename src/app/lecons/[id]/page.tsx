import { Metadata } from 'next';
import { Suspense } from 'react';
import { unstable_cache as cache } from 'next/cache';

import { fetchLessonById } from '@/src/lib/data';
import Lecon, {LoadingLecon} from '@/src/ui/components/lecons/lecon';

const getData = cache(
	(id) => fetchLessonById(id),
	['getData'],
	{ revalidate: 300}
)

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
	const lesson = await getData((await params).id);
	return {
		title: `${lesson.title} | Harmonia`,
		description: lesson.description,
	};
}


// Page for a single lesson
export default async function Page(props: { params: Promise<{ id: string }> }) {
	const id = (await props.params).id;
	return (
		<main
			className="h-full w-full space-y-10 text-white xl:px-32 p-10"
		>
			
			<Suspense fallback={<LoadingLecon />}>
				<Lecon id={id} />
			</Suspense>
		
		</main>
	);
}