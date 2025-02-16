import clsx from 'clsx';

import '@/app/ui/button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
	return (
		<button
			{...rest}
			className={clsx(
				className,
				'button',
				'',
			)}
			style={{
				position: 'relative',
			}}
		>
			{children}
		</button>
	);
}