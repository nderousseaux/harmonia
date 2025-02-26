import { Metadata } from 'next';
import Image from 'next/image';

import { MarkAsRead } from '@/app/ui/lessons/lesson/buttons';
import { fetchLessonById } from '@/app/lib/data';
import { Tag } from '@/app/ui/lessons/lesson/tag';
import { Player } from '@/app/ui/lessons/lesson/player';

export const metadata: Metadata = {
  title: "A peaceful audio tracks for help you meditate",
  description: 'You can find here a peaceful audio of meditation audio tracks.',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

	const lesson = await fetchLessonById(id);
	
  return (		
		<main className="h-full w-full space-y-10 text-white overflow-scroll pt-24 pb-10 px-32">


			{/* Title and tag */}
			<section className="space-y-3">

				<div className="flex justify-between items-center">

					<div className="flex items-center space-x-3">
						<h1 className="font-semibold text-3xl">
							{lesson.title}
						</h1>
						<div className="w-2 h-2 bg-white rounded-full self-center translate-y-[2px]"></div>
						<p className="text-xl font-semibold opacity-50 translate-y-[2px]">
							{lesson.duration}
						</p>
					</div>

					<MarkAsRead id={id} is_read={lesson.is_read} />
				</div>

				<div className="flex space-x-3">
					{lesson.tags.map((tag, index) => (
						<Tag key={index} content={tag} />
					))}
				</div>

			</section>


			{/* Description */}
			<section>
				<p className="opacity-75">
					{lesson.description}
				</p>
			</section>

			{/* Advices */}
			<section className="space-y-3">
				<h2 className="font-semibold text-2xl">
					Conseils
				</h2>
				<p className="opacity-75">
					Pour tirer le meilleur parti de cette séance, créez un espace calme et confortable. Éteignez les distractions et assurez-vous d&apos;être dans une posture adaptée, que ce soit sur un coussin ou une chaise.
				</p>
			</section>


			{/* Audio player */}
			<section className="space-y-3">
				<h2 className="font-semibold text-2xl">
					La leçon
				</h2>
				<Player />
			</section>

			{/* Comments */}
			<section className="space-y-3">
				<h2 className="font-semibold text-2xl">
					À propos de l&apos;instructeur
				</h2>
				<div className="flex space-x-5">
					<div className="aspect-square shrink-0">
						<Image 
							src="/pp.png"
							alt="Marie Dupont"
							width={90} height={90}
							className="rounded-full"
						/>
					</div>
					<div className="flex flex-col justify-center">
						<h3 className="font-semibold text-ld">
							Marie Dupont
						</h3>
						<p className="opacity-75">
							Instructrice certifiée en méditation guidée, forte de plus de 10 ans d&apos;expérience, spécialisée dans les techniques de pleine conscience pour la réduction du stress.
						</p>
					</div>
				</div>
			</section>

		</main>
  );
}