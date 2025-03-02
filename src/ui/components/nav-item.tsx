'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

import { TLink } from '@/src/ui/components/t-link';
import { Lesson } from '@/src/lib/definitions';
import { formatDuration } from "@/src/lib/utils";


interface NavItemProps {
  className?: string;
  isFirst?: boolean;
  lesson: Lesson;
}


function Delimiter() {
  return (
  <div className="
    h-px bg-gradient-to-l 
    from-transparent via-violet-100 
    to-transparent opacity-20">
  </div>
  )
}


export default function NavItem({ className, isFirst, lesson }: NavItemProps) {
  const pathname = usePathname();

  return (
  <TLink 
    href={`/lecons/${lesson.id}`}
    className={`${className} relative`} // Add relative positioning here
    elementTransition='main'
  >

    {/* Delimiter if is not first */}
    { isFirst && <Delimiter /> }

    {/* A NavItem */}
    <div className="flex p-4 relative bg-transparent">
      
      {/* Title and description */}
      <div className="h-full w-full flex flex-col justify-center">

        <div className="flex gap-2">
        <h3 className="text-white font-semibold">{lesson.title}</h3>
        {
          !lesson.is_read && (
          <div className="w-2 h-2 bg-white rounded-full self-center translate-y-[1px]"></div>
          )
        }
        </div>

        <p className="text-white opacity-50 text-sm line-clamp-3">{lesson.description}</p>

      </div>

      {/* Duration */}
      <div className="w-20 shrink-0 bg-opacity-20 flex flex-col items-center justify-center">
        <p className="text-white text-sm font-semibold">{formatDuration(lesson.duration)}</p>
      </div>

      
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{ background: 'radial-gradient(at center top, rgba(191,230,134,0.30), rgba(255,255,255,0) 70%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: pathname.includes(lesson.id) ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    

    </div>

    <Delimiter />
  </TLink>
  );
}