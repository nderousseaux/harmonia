import { Metadata } from 'next';

import "@/src/ui/global.css";
import { Background } from "@/src/ui/components/background/background";
import { primaryFont } from '@/src/ui/fonts';
import PageAnimatePresence from '@/src/ui/components/page-animate-presence';

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
          <PageAnimatePresence disableINotfMobile={true}>
            {children}
          </PageAnimatePresence>
        </div>

        <Background/>

      </body>
    </html>
  );
}