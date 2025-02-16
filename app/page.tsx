import { Button } from '@/app/ui/button';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 items-center justify-center">
      <div className="text-center max-w-screen-sm mx-auto text-xl space-y-10 text-stone-100 animate-appear">

        {/* <h1 className="text-4xl">
          Harmonia.
        </h1> */}
        <h1 className="text-4xl">
          LoremIps.
        </h1>

        {/* <p>Bienvenue sur Harmonia. Découvrez une application de sophrologie et de méditation conçue pour vous aider à retrouver calme et équilibre, où que vous soyez.</p> */}
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. </p>
        <Button className=''> Commencer </Button>
      </div>
    </main>
  );
}

