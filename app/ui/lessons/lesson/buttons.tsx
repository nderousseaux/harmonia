import { CheckCircleIcon } from '@heroicons/react/24/outline';

import { markAsRead } from '@/app/lib/actions';

export function MarkAsRead({ id, is_read }: { id: string, is_read: boolean }) {
  const MarkAsRead = markAsRead.bind(null, id, is_read);
  return (
    <form action={MarkAsRead}>
      <button type="submit" className="flex items-center">
				{is_read ? 
          <CheckCircleIcon className="w-8 h-8 opacity-50" />
					: <div className="w-8 h-8 bg-transparent rounded-full opacity-50 border-2 border-white scale-[0.8]"></div>	 
				}
      </button>
    </form>
  );
}