import * as motion from 'motion/react-client'; 
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import { Player } from '@/src/ui/components/lecons/player';
import { Tag } from '@/src/ui/components/lecons/tag';
import { formatDuration } from '@/src/lib/utils';
import { fetchLessonById } from '@/src/lib/data';


// Page for a single lesson
export default async function Lesson(props: { id: string }) {
	const lesson = await fetchLessonById(props.id);

	if (!lesson) {
		notFound();
	}

	return (
		<main className="space-y-5" >
			{/* Back arrow for mobile view */}
			<motion.div 
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.5 }}
				className="block lg:hidden"
			>
				<Link
					href="/lecons"
					className="flex items-center space-x-2 text-lg"
				>
					<ArrowLeftIcon className="w-6 h-6" />
				</Link>
			</motion.div>

			{/* Title and tag */}
			<motion.section 
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.5 }}
				className="space-y-5 xl:space-y-3 pb-5">
				<div className="flex justify-between items-center">

					<div className="flex items-center space-x-3 text-2xl lg:text-3xl">
						<h1 className="font-semibold">
							{lesson.title}
						</h1>
						<span className="block">-</span>
						<p className="font-semibold opacity-50 translate-y-[2px] text-xl">
							{formatDuration(lesson.duration)}
						</p>
					</div>

				</div>

				<div className="flex-wrap flex gap-2">
					{lesson.tags.map((tag, index) => (
						<Tag key={index} content={tag} />
					))}
				</div>
			</motion.section>

			<div 
				className="space-y-10">
				{/* Audio player */}
				<motion.section 
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5, delay: 0.5 }}
					className="w-full flex justify-center lg:float-right lg:ml-10 lg:mb-5 lg:w-auto">
					<Player path={lesson.path} duration={lesson.duration} />
				</motion.section>

				{/* Description */}
				<motion.section
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5, delay: 0.5 }}
				>
					<p className="opacity-75">
						{lesson.description}
					</p>
				</motion.section>

				{/* Advices */}
				<motion.section 
					className="space-y-3"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5, delay: 1 }}
				>
					<h2 className="font-semibold text-2xl">
						Conseils
					</h2>
					<p className="opacity-75">
					Pour tirer pleinement profit de cette séance de méditation, il est essentiel de préparer un environnement dédié à la détente. Commencez par choisir un espace calme, loin du tumulte quotidien, où la lumière est douce et tamisée. Idéalement, optez pour une pièce peu exposée aux bruits extérieurs et assurez-vous que la température y est agréable, afin de créer une atmosphère propice à la relaxation. Prenez le temps de désactiver vos appareils électroniques et d&apos;éloigner toute source de distraction, comme la télévision ou les notifications de votre smartphone, afin de permettre à votre esprit de se recentrer. Vous pouvez également ajouter une touche personnelle en diffusant de la musique d&apos;ambiance apaisante ou en allumant une bougie parfumée pour instaurer une atmosphère sereine. Ensuite, installez-vous dans une posture confortable qui soutient votre dos, que ce soit sur un coussin de méditation posé sur le sol ou sur une chaise ergonomique, afin que votre corps soit à l&apos;aise et que votre esprit puisse se concentrer sur le moment présent. Prenez quelques instants pour vous ajuster, respirer profondément et vous préparer mentalement à l&apos;expérience qui vous attend. Ce rituel de préparation permet non seulement de réduire les tensions physiques et mentales, mais aussi de signaler à votre cerveau que vous entrez dans un espace de pleine présence et de sérénité, maximisant ainsi les bienfaits de la méditation.
					</p>
				</motion.section>

				{/* Instructor */}
				<motion.section 
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.5, delay: 1.5 }}
					className="space-y-3">
					<h2 className="font-semibold text-2xl">
						À propos de l&apos;instructeur
					</h2>
					<div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
						<div className="md:aspect-square aspect-auto shrink-0">
							<Image 
								src="/pp.jpeg"
								alt="Photo of Marie Dupont"
								width={400} height={400}
								className="rounded-full w-[90px] h-[90px]"
							/>
						</div>
						<div className="flex flex-col justify-center">
							<h3 className="font-semibold text-lg">
								Marie Dupont
							</h3>
							<p className="opacity-75">
								Instructrice certifiée en méditation guidée, forte de plus de 10 ans d&apos;expérience, spécialisée dans les techniques de pleine conscience pour la réduction du stress.
							</p>
						</div>
					</div>
				</motion.section>
			</div>
		</main>
	);
}

export function LoadingLecon() {
	return (
		<main>

			{/* // Loading spinner	 */}
			<motion.div 
				className="flex items-center justify-center h-[80vh]"
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.5 }}
				>
			{/* bg-slate-700 */}
				<div className="w-10 h-10 border-2 border-white border-t-slate-700 rounded-full animate-spin opacity-75"></div>
			</motion.div>
		</main>
	)
}
