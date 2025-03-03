import { Metadata } from 'next';

// Some metadata
export const metadata: Metadata = {
  title: "Leçons",
  description: 'You can find here a peaceful gallery of meditation audio tracks.'
};

// Home page
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 items-center justify-center">
      <div className="text-center max-w-screen-sm mx-auto text-xl space-y-10 text-stone-100">

        <h1 className="text-4xl">
          Leçons
        </h1>

      </div>
    </main>
  );
}

