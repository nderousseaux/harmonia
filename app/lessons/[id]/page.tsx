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

			<div className="space-y-10">

				{/* Audio player */}
				<section className="float-right ml-10 mb-10">
					<Player />
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
					Pour tirer pleinement profit de cette séance de méditation, il est essentiel de préparer un environnement dédié à la détente. Commencez par choisir un espace calme, loin du tumulte quotidien, où la lumière est douce et tamisée. Idéalement, optez pour une pièce peu exposée aux bruits extérieurs et assurez-vous que la température y est agréable, afin de créer une atmosphère propice à la relaxation. Prenez le temps de désactiver vos appareils électroniques et d&apos;éloigner toute source de distraction, comme la télévision ou les notifications de votre smartphone, afin de permettre à votre esprit de se recentrer. Vous pouvez également ajouter une touche personnelle en diffusant de la musique d&apos;ambiance apaisante ou en allumant une bougie parfumée pour instaurer une atmosphère sereine. Ensuite, installez-vous dans une posture confortable qui soutient votre dos, que ce soit sur un coussin de méditation posé sur le sol ou sur une chaise ergonomique, afin que votre corps soit à l&apos;aise et que votre esprit puisse se concentrer sur le moment présent. Prenez quelques instants pour vous ajuster, respirer profondément et vous préparer mentalement à l&apos;expérience qui vous attend. Ce rituel de préparation permet non seulement de réduire les tensions physiques et mentales, mais aussi de signaler à votre cerveau que vous entrez dans un espace de pleine présence et de sérénité, maximisant ainsi les bienfaits de la méditation.
					</p>
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
			</div>
		
		</main>
  );
}