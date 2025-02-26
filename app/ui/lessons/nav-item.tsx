'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Lesson } from '@/app/lib/definitions';

interface NavItemProps {
	className?: string;
  isFirst?: boolean;
  data: Lesson;
}

function Delimiter() {
  return (
    <div className="h-px bg-gradient-to-l from-transparent via-violet-100 to-transparent opacity-20"></div>
  )
}

export default function NavItem({ className, isFirst, data }: NavItemProps) {
  const pathname = usePathname();

  return (
    <Link 
      href={`/lessons/${data.id}`}
      className={`${className}`}
    >

      { isFirst && <Delimiter /> }
      <div className="flex p-4"
      style={
        pathname.includes(data.id) ? {
          background: `radial-gradient(at center top, rgba(191,230,134,0.30), rgba(255,255,255,0) 70%)`
        } : {}
      } 
      >

        <div className="h-full w-full flex flex-col justify-center">
          <div className="flex gap-2">
            <h3 className="text-white font-semibold">{data.title}</h3>
            {
              !data.is_read && (
                <div className="w-2 h-2 bg-white rounded-full self-center translate-y-[1px]"></div>
              )
            }
          </div>
          <p className="text-white opacity-50 text-sm line-clamp-3">{data.description}</p>
        </div>

        <div className="w-20 shrink-0 bg-opacity-20 flex flex-col items-center justify-center">
          <p className="text-white text-sm font-semibold">{data.duration}</p>
        </div>

      </div>

      <Delimiter />
    </Link>
  );
}