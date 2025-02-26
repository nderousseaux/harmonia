import clsx from 'clsx';
import Orb from './orb';

interface PlayerProps {
  className?: string;
}

export function Player({ className }: PlayerProps) {
  return (
    <div className={clsx(
      className,
      "flex flex-col items-center justify-center gap-5 rounded-lg pt-8 overflow-hidden max-w-max bg-slate-700 bg-opacity-45 aspect-3/4"
    )}>

      <Orb 
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={70}
        forceHoverState={true}
      />

      <div className='flex flex-col items-center gap-1 mt-4'>
        <h2 className='text-white text-2xl font-semibold'>Écoutez</h2>
        <p className='text-white text-sm opacity-50 pb-5 '>Durée: 15 minutes</p>

        <div className='flex gap-4'>
          <button className='bg-white text-slate-700 px-4 py-2 rounded-lg'>Reprendre</button>
          <button className='bg-white text-slate-700 px-4 py-2 rounded-lg'>Recommencer</button>
        </div>
      </div>

      <div className='w-full bg-white bg-opacity-20 rounded-full h-1'>
        <div className='bg-white rounded-full h-1 w-4/5'></div>  
      </div>

    </div>
  );
}
