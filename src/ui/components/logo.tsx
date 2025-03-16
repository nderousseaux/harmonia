import clsx from 'clsx';

import { emphasisFont } from '@/src/ui/fonts';

export default function Logo(props: { className?: string }) {
	const { className } = props;
  return (
		<h1 className={clsx(
			emphasisFont.className, 
			"text-4xl text-stone-100",
			className)}
		>
			Harmonia.
		</h1>
  );
}