import { Metadata } from 'next';

import "@/src/ui/global.css";
import PageAnimatePresence from '@/src/ui/components/page-animate-presence';
import { Background } from "@/src/ui/components/background/background";
import { primaryFont } from '@/src/ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Harmonia',
    default: 'Harmonia',
  },
  description: 'A meditation app for relaxation and mindfulness.',
};

// Main layout component
export default function RootLayout({children}: { children: React.ReactNode; }) {

  return (
    <html lang="fr">
      <body className={`${primaryFont.className} antialiased bg-gradient-to-br from-stone-600 to-stone-700`}>

        <div className="relative z-10">
          <PageAnimatePresence>
            {children}
          </PageAnimatePresence>
        </div>

        <Background/>

      </body>
    </html>
  );
}