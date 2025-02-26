import clsx from 'clsx';

interface TagProps {
  className?: string;
	content: string;
}

export function Tag({ className, content }: TagProps) {
  return (
    <div className={clsx(
      className,
      "px-5 py-1.5 bg-slate-700 bg-opacity-45 text-white rounded-full text-sm"
    )}>
      {content}
    </div>
  );
}
