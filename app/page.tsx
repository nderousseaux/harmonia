import { Button } from '@/app/ui/button';

import HarmoniaLogo from '@/app/ui/harmonia-logo';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 items-center justify-center main">
      <div className="text-center max-w-screen-sm mx-auto text-xl space-y-10 text-stone-100 animate-appear">

        <HarmoniaLogo />
        
        <p>Bienvenue sur Harmonia. Découvrez une application de sophrologie et de méditation conçue pour vous aider à retrouver calme et équilibre, où que vous soyez.</p>

        <div>
          <Button className='' href="/lessons"> Commencer </Button>
        </div>
          
      </div>
    </main>
  );
}

