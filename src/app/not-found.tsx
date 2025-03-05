import { UnderlineLabel } from '@/src/ui/components/labels';
import Link from 'next/link';
 
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col p-6 items-center justify-center">
      <div className="text-center max-w-screen-sm mx-auto text-xl space-y-10 text-stone-100">
				<div>
					<h1 className="text-2xl">
						404 - Page non trouvée
					</h1>
				</div>

				<div>
					<p>La page que vous recherchez n'existe pas.</p>
				</div>

				<div>
					<Link href="/lecons">
						<UnderlineLabel  style={{ cursor: 'pointer' }}>
							Retour à l'accueil
						</UnderlineLabel>
					</Link>
				</div>
			</div>
		</main>						
  );
}