import "@/app/ui/global.css";
import { Metadata } from 'next';
import SideNav from "@/app/ui/gallery/sidenav";

export const metadata: Metadata = {
  title: {
    template: '%s | Harmonia Meditation, a galery of meditation audio tracks',
    default: 'Harmonia Meditation',
  },
  description: 'You can find here a peaceful gallery of meditation audio tracks.',
};


export default function Layout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="flex h-screen">
      <div className="flex-none w-96">
        <SideNav />
      </div>
      <div className="flex-grow p-32">{children}</div>
    </div>
  );
}