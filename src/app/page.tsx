import * as motion from 'motion/react-client';

import { UnderlineButton } from '@/src/ui/components/buttons';
import Logo from '@/src/ui/components/logo';


// Root page
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 items-center justify-center main">
      <div className="text-center max-w-screen-sm mx-auto text-xl space-y-10 text-stone-100">
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0 }}
        >
          <Logo />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          Bienvenue sur Harmonia. Découvrez une application de sophrologie et de méditation conçue pour vous aider à retrouver calme et équilibre, où que vous soyez.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <UnderlineButton className='' href="/lecons"> Commencer </UnderlineButton>
        </motion.div>

      </div>
    </main>
  );
}
