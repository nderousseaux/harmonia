'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
	props?: any;
}

export function UnderlineLabel({ children, className, ...props }: ButtonProps) {
	const classButton = clsx(
	'before:content-[""] before:block before:w-full before:h-px before:bg-current before:absolute before:bottom-0 before:left-0',
	'before:transition-transform before:duration-1000 before:[transform-origin:0%_50%] before:animate-underlineButton',
	'hover:before:scale-x-0 hover:before:[transform-origin:100%_50%]'
	);

	const [isClassAssigned, setIsClassAssigned] = useState(false);

	// Assign class after 1 seconds
	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsClassAssigned(true);
		}, 1000);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<button
		className={clsx(
			className, 
			'relative',
			{ [classButton]: isClassAssigned }
		)}
	>
		{children}
	</button>
	);
}
