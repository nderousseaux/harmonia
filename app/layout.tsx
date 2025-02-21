import "@/app/ui/global.css";
import { emphasisFont } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { Background } from "@/app/ui/background"; 

const HAS_BACKGROUND = true;

export const metadata: Metadata = {
  title: {
    template: '%s | Harmonia Meditation',
    default: 'Harmonia Meditation',
  },
  description: 'A meditation app for relaxation and mindfulness.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${emphasisFont.className} antialiased bg-gradient-to-br from-stone-600 to-stone-700`}>
        <div className="relative z-10">
          {children}
        </div>

        {HAS_BACKGROUND && <Background />}
      </body>
    </html>
  );
}