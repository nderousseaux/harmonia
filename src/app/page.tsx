'use client';

import * as motion from 'motion/react-client';
import React, { useState } from 'react';

import { UnderlineLabel } from '@/src/ui/components/labels';
import Logo from '@/src/ui/components/logo';

// Root page
export default function Page() {
  const [isExiting, setIsExiting] = useState(false);

  const handleStart = () => {
    setIsExiting(true);
    setTimeout(() => {
      window.location.href = '/lecons';
    }, 500);
  };

  return (
    <motion.main
      key="/"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? 10 : 0 }}
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
          <a onClick={handleStart}>
            <UnderlineLabel  style={{ cursor: 'pointer' }}>
              Commencer
            </UnderlineLabel>
          </a>
        </motion.div>
      </div>
    </motion.main>
  );
}
