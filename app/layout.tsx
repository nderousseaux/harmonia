import "@/app/ui/global.css";
import { emphasisFont } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { Background } from "@/app/ui/background/background"; 

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
      <body className={`
        ${emphasisFont.className} antialiased bg-stone-700`}>
        <div className="relative z-10">
          {children}

        </div>

        <Background />
      </body>
    </html>
  );
}