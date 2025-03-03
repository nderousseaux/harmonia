'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from 'next/navigation';

import { UnderlineLabel } from '@/src/ui/components/labels';
import Logo from '@/src/ui/components/logo';


// Root page
export default function Page() {
  const router = useRouter();

  const [show, setShow] = React.useState(true);

  const passNextPage = () => {
    setShow(false);
    // Wait for the animation to finish
    setTimeout(() => {
      router.push('/lecons');
    }, 500);
  }
  
  return (
    <AnimatePresence mode="wait">
      { show && <motion.main
        key="/"
        initial={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-screen flex-col p-6 items-center justify-center main"
      >
        <div className="text-center max-w-screen-sm mx-auto text-xl space-y-10 text-stone-100">
          <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0 }}
          >
            <Logo />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            Bienvenue sur Harmonia. Découvrez une application de sophrologie et de méditation conçue pour vous aider à retrouver calme et équilibre, où que vous soyez.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
          >

            <div onClick={passNextPage} className="cursor-pointer">
              <UnderlineLabel> Commencer </UnderlineLabel>
            </div>
          </motion.div>
        </div>
      </motion.main> }
    </AnimatePresence>    
  );
}
