import clsx from 'clsx';
import { TLink } from '@/src/ui/components/t-link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
	href?: string | undefined;
}

export function UnderlineButton({ children, className, href }: ButtonProps) {
	const stringHref = href || ''; 

	return (
		<TLink
			className={clsx(
				className, 
				'relative',
				'before:content-[""] before:block before:w-full before:h-px before:bg-current before:absolute before:bottom-0 before:left-0',
				'before:transition-transform before:duration-1000 before:[transform-origin:0%_50%] before:animate-underlineButton',
				'hover:before:scale-x-0 hover:before:[transform-origin:100%_50%]'
			)}
			href={stringHref}
		>
			{children}
		</TLink>
	);
}
