/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import React, { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import Orb from './orb';

interface PlayerProps {
  className?: string;
  path: string;
  duration: number
}

export function Player({ className, path, duration }: PlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    const progress = progressRef.current;

    const updateProgress = () => {
      if (audio && progress) {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${percentage}%`;
      }
    };

    if (audio) {
      audio.addEventListener('timeupdate', updateProgress);
      // Set initial progress to 0
      if (progress) {
        progress.style.width = '0%';
      }
    }

    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', updateProgress);
      }
    };
  }, []);

  return (
    <div className={clsx(
      className,
      "relative z-50 flex flex-col items-center justify-center gap-5 rounded-lg pt-8 overflow-hidden bg-slate-700 bg-opacity-45 w-72"
    )}>

      <div className='w-full h-44' ref={orbRef}>
        <Orb 
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={70}
        />
      </div>

      <div className='flex flex-col items-center gap-1 mt-4'>
        <h2 className='text-white text-2xl font-semibold'>Écoutez</h2>
        
        <p className='text-white text-sm opacity-50 pb-5 '>Durée : {Math.floor(duration/60 || 0)} minutes</p>


        <div className='flex gap-4'>
          <button className='bg-white text-slate-700 px-4 py-2 rounded-lg' onClick={handlePlay}> 
            {isPlaying ? 'Pause' : 'Commencer'}
          </button>
        </div>
      </div>

      <div className='w-full bg-white bg-opacity-20 rounded-full h-1'>
        <div id="progress" ref={progressRef} className='bg-white rounded-full h-1 w-0'></div>  
      </div>

      {/* // Audio player */}
      <audio ref={audioRef} className='hidden' controls>
        {/* <source src={path}/> */}
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
