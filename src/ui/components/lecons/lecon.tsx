import Image from 'next/image';
import { Metadata } from 'next';
import * as motion from 'motion/react-client';

import { MarkAsRead } from '@/src/ui/components/lecons/mark-as-read';
import { Player } from '@/src/ui/components/lecons/player';
import { Tag } from '@/src/ui/components/lecons/tag';
import { formatDuration } from '@/src/lib/utils';
import { fetchLessonById } from '@/src/lib/data';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
	const lesson = await fetchLessonById((await params).id);
	return {
		title: `${lesson.title} | Harmonia`,
		description: lesson.description,
	};
}

export default async function Lecon(props: { params: Promise<{ id: string }> }) {
	const lesson = await fetchLessonById((await props.params).id)

	return (
		<motion.main
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
		>
			{/* Title and tag */}
			<section className="space-y-3">
				<div className="flex justify-between items-center">

					<div className="flex items-center space-x-3">
						<h1 className="font-semibold text-3xl">
							{lesson.title} -
						</h1>
						<p className="text-xl font-semibold opacity-50 translate-y-[2px]">
							{formatDuration(lesson.duration)}
						</p>
					</div>

					<MarkAsRead id={lesson.id} is_read={lesson.is_read} />
				</div>

				<div className="flex space-x-3">
					{lesson.tags.map((tag, index) => (
						<Tag key={index} content={tag} />
					))}
				</div>
			</section>

			<div className="space-y-10">
				{/* Audio player */}
				<section className="float-right ml-10 mb-5">
					<Player path={lesson.path} duration={lesson.duration} />
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

				{/* Instructor */}
				<section className="space-y-3">
					<h2 className="font-semibold text-2xl">
						À propos de l&apos;instructeur
					</h2>
					<div className="flex space-x-5">
						<div className="aspect-square shrink-0">
							<Image 
								src="/pp.jpeg"
								alt="Marie Dupont"
								width={400} height={400}
								className="rounded-full w-[90px] h-[90px]"
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
		</motion.main>
	)
}

export function LeconSkeleton() {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="space-y-10 animate-pulse"
		>
			{/* Title and tag */}
			<section className="space-y-3">
				<div className="w-96 h-8 bg-slate-700 opacity-45 rounded-xl"></div>
				
				<div className="flex space-x-3">
					<div className="w-24 h-6 bg-slate-700 opacity-45 rounded-xl"></div>
					<div className="w-24 h-6 bg-slate-700 opacity-45 rounded-xl"></div>
					<div className="w-24 h-6 bg-slate-700 opacity-45 rounded-xl"></div>
				</div>
			</section>

			<section className="flex space-x-10">
				<div className="w-full space-y-10">
					<div className="h-52 bg-slate-700 opacity-45 rounded-xl"></div>
					<div className="h-52 bg-slate-700 opacity-45 rounded-xl"></div>
				</div>

				<div className="w-80 h-96 bg-slate-700 opacity-45 rounded-xl"></div>
			</section>

			{/* Instructor */}
			<section className="space-y-3">
				<div className="w-96 h-8 bg-slate-700 opacity-45 rounded-xl"></div>
				<div className="flex space-x-5">
					<div className="aspect-square shrink-0">
						<div className="w-20 h-20 bg-slate-700 opacity-45 rounded-full"></div>
					</div>
					<div className="flex flex-col justify-center space-y-2">
						<div className="w-32 h-6 bg-slate-700 opacity-45 rounded-xl"></div>
						<div className="w-96 h-6 bg-slate-700 opacity-45 rounded-xl"></div>
					</div>
				</div>
			</section>
		</motion.main>
	)
}