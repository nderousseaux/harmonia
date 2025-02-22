import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "A peaceful audio tracks for help you meditate",
  description: 'You can find here a peaceful audio of meditation audio tracks.',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
	

  return (
		<main className="flex min-h-screen flex-col p-6 items-center justify-center">
			<div className="text-center max-w-screen-sm mx-auto text-xl space-y-10 text-stone-100">

				<h1 className="text-4xl">
					{id}
				</h1>

			</div>
		</main>
  );
}