'use client';
 
import { useEffect } from 'react';

import { UnderlineLabel } from '@/src/ui/components/labels';
import Link from 'next/link';
 
export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex min-h-screen flex-col p-6 items-center justify-center">
      <div className="text-center max-w-screen-sm mx-auto text-xl space-y-10 text-stone-100">
        <div>
          <h1 className="text-2xl">
            Ah zut, une erreur est survenue !
          </h1>
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