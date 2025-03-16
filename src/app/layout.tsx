import { Metadata } from 'next';

import "@/src/ui/global.css";
import { primaryFont } from '@/src/ui/fonts';
import PageAnimatePresence from '@/src/ui/components/page-animate-presence';

export const metadata: Metadata = {
  title: {
    template: '%s | Harmonia',
    default: 'Harmonia',
  },
  description: 'A meditation app for relaxation and mindfulness.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://harmonia.nderousseaux.fr',
    siteName: 'Harmonia',
    images: [
      {
        url: 'https://harmonia.nderousseaux.fr/og-image.png',
        alt: 'Harmonia - A meditation app for relaxation and mindfulness.',
      },
    ],
  },
  twitter: {
    creator: '@nderousseaux',
    title: 'Harmonia',
    description: 'A meditation app for relaxation and mindfulness.',
    card: 'summary_large_image',
    images: [
      {
        url: 'https://harmonia.nderousseaux.fr/og-image.png',
        alt: 'Harmonia - A meditation app for relaxation and mindfulness.',
      },
    ],
  },
};

// Main layout component
export default function RootLayout({children}: { children: React.ReactNode; }) {

  return (
    <html lang="fr">
      <meta name="theme-color" content="rgb(88, 125, 171)" /> 
      <meta name="keywords" content="meditation, relaxation, mindfulness, Harmonia" />
      <body className={`${primaryFont.className} antialiased`} style={{ background: 'linear-gradient(40deg, var(--primary), var(--secondary))' }}>
        <div className="relative z-10">
          <PageAnimatePresence disableINotfMobile={true}>
            {children}
          </PageAnimatePresence>
        </div>
      </body>
    </html>
  );
}