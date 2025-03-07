"use client"

import React, { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';

import Orb from '@/src/ui/components/lecons/orb';

interface PlayerProps {
	className?: string;
	path: string;
	duration: number;
}

export function Player({ className, path, duration }: PlayerProps) {
	const audioRef = useRef<HTMLAudioElement>(null);
	const progressRef = useRef<HTMLDivElement>(null);
	const progressContainerRef = useRef<HTMLDivElement>(null);

	// Play/pause state
	const [isPlaying, setIsPlaying] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const handlePlay = () => {
		if (isPlaying) {
			audioRef.current?.pause();
		} else {
			audioRef.current?.play();
		}
		setIsPlaying(!isPlaying);
	};

	// Update progress bar
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

	// Handle progress bar click
	const handleProgressClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const progressContainer = progressContainerRef.current;
		const audio = audioRef.current;
		if (progressContainer && audio) {
			const rect = progressContainer.getBoundingClientRect();
			const offsetX = e.clientX - rect.left;
			const percentage = offsetX / rect.width;
			audio.currentTime = percentage * audio.duration;
		}
	};

	// Handle progress bar drag
	const handleDotDrag = (e: MouseEvent | TouchEvent) => {
		e.preventDefault(); // Prevent vertical scroll
		const progressContainer = progressContainerRef.current;
		const audio = audioRef.current;
		const progress = progressRef.current;
		if (progressContainer && audio && progress) {
			// Pause the audio
			audio.pause();
			const rect = progressContainer.getBoundingClientRect();
			const offsetX = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
			const percentage = offsetX / rect.width;
			audio.currentTime = percentage * audio.duration;
			progress.style.width = `${Math.min(percentage * 100, 100)}%`;
		}
	};

	// Handle mouse down on progress bar
	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.preventDefault();
		setIsDragging(true);
		document.addEventListener('mousemove', handleDotDrag);
		document.addEventListener('mouseup', () => {
			document.removeEventListener('mousemove', handleDotDrag);
			setIsDragging(false);
			// Play the audio
			if (isPlaying)
				audioRef.current?.play();
		}, { once: true });
	};

	// Handle touch start on progress bar
	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDragging(true);
		const touch = e.touches[0];
		const progressContainer = progressContainerRef.current;
		const audio = audioRef.current;
		if (progressContainer && audio) {
			const rect = progressContainer.getBoundingClientRect();
			const offsetX = touch.clientX - rect.left;
			const percentage = offsetX / rect.width;
			audio.currentTime = percentage * audio.duration;
		}
		document.addEventListener('touchmove', handleDotDrag, { passive: false });
		document.addEventListener('touchend', () => {
			document.removeEventListener('touchmove', handleDotDrag);
			setIsDragging(false);
			// Play the audio
			if (isPlaying)
				audioRef.current?.play();
		}, { once: true });
	}

	return (
		<div className={clsx(
				className, 
				"bg-slate-700 bg-opacity-45 w-full lg:w-72 rounded-lg z-50 relative group",
				"flex flex-col items-center justify-center px-5 pt-5"
			)}>

			<Orb hue={70} forceHoverState={isPlaying} hoverIntensity={0.4}/>

			{/* Title and subtitle */}
			<div className='flex flex-col items-center gap-1'>
				<h2 className='text-white text-2xl font-semibold'>Écoutez</h2>
				<p className='text-white text-sm opacity-50 '>
					Durée : {Math.floor(duration / 60 || 0)} minutes
				</p>
			</div>

			{/* Buttons */}
			<div className='flex items-center gap-3 mt-5'>
				<button 
					className='bg-white text-slate-700 px-4 py-2 rounded-lg'
					onClick={handlePlay}
				>
					{isPlaying ? 'Pause' : 'Commencer'}
				</button>
			</div> 

			{/* Progress bar */}
			<div className='w-full py-5 cursor-pointer'
				onClick={handleProgressClick}
				onMouseDown={handleMouseDown}
				onTouchStart={handleTouchStart}
			>
				<div 
					className='w-full bg-white bg-opacity-20 rounded-full lg:h-1 h-2'
					ref={progressContainerRef}
				>
					<div id='progress' ref={progressRef} className='bg-white rounded-full lg:h-1 h-2 w-0 relative'>
							<div 
								className={clsx(
									'absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full transition-all cursor-pointer',
									{ 'w-4 h-4 opacity-0 group-hover:opacity-100 lg:w-3 lg:h-3': !isDragging },
									{ 'w-6 h-6 opacity-100 lg:w-4 lg:h-4': isDragging },
								)}
							></div>
					</div>
				</div>
			</div>

			{/* Audio player, hidden */}
			<audio ref={audioRef} className='hidden' controls src={path} preload='metadata'>
				Your browser does not support the audio element.
			</audio>
		</div>
	);
}
