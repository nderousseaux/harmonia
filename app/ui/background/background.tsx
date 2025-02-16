"use client";

import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import gsap from 'gsap';

import { gaussianRandom } from '@/app/lib/utils';
import '@/app/ui/background/background.css';

const MEAN_OFFSET = 0.10;
const MEAN_DURATION = 8;

interface BackgroundProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}

// Randomly animate bubbles, but keep them approximately at center
interface AnimateOptions {
	x: number;
	y: number;
	duration: number;
	ease: string;
	onComplete: () => void;
}


// Randomly animate bubbles
function animateRandomly(element: HTMLElement, mean_offset: number = MEAN_OFFSET, mean_duration: number = MEAN_DURATION, start_x: number = 0, start_y: number = 0) {
	let x: number = gaussianRandom(start_x, window.innerWidth * mean_offset);
	let y: number = gaussianRandom(start_y, window.innerHeight * mean_offset);
	const options: AnimateOptions = {
		x: x,
		y: y,
		duration: gaussianRandom(mean_duration, mean_duration / 4),
		ease: "power1.inOut",
		onComplete: () => {
			animateRandomly(element, mean_offset, mean_duration, start_x, start_y);
		}
	};
	gsap.to(element, options);
}

function followMouse(element: HTMLElement) {
	document.addEventListener('mousemove', (e) => {
		gsap.to(element, {
			duration: 1,
			x: e.pageX,
			y: e.pageY,
			ease: "power1.out",
			overwrite: "auto",
			stagger: 0.035,
			onComplete: () => {
				animateRandomly(element, 0.01, 4, e.pageX, e.pageY);
			}
		});
	});
}


export function Background({ className, ...rest }: BackgroundProps) {
	return (
		<div
			{...rest}
			className={clsx(
				'background',
				'fixed inset-0 z-0',
				className
			)}
		>
			<svg xmlns="http://www.w3.org/2000/svg">
				<defs>
					<filter id="goo">
						<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
						<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
						<feBlend in="SourceGraphic" in2="goo" />
					</filter>
				</defs>
			</svg>
			<div className="bubbles-container">
				<span className="bubble bubble-1" ref={el => { if (el) animateRandomly(el); }}></span>
				<span className="bubble bubble-2" ref={el => { if (el) animateRandomly(el); }}></span>
				<span className="bubble bubble-3" ref={el => { if (el) animateRandomly(el); }}></span>
				<span className="bubble bubble-4" ref={el => { if (el) animateRandomly(el); }}></span>
				<span className="bubble bubble-5" ref={el => { if (el) animateRandomly(el); }}></span>
				<div className="bubble follow" ref={el => { if (el) followMouse(el); }}></div>
			</div>	
		</div>
	);
}