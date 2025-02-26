import { CheckCircleIcon } from '@heroicons/react/24/outline';

import { markAsRead } from '@/app/lib/actions';

export function MarkAsRead({ id, is_read }: { id: string, is_read: boolean }) {
  const MarkAsRead = markAsRead.bind(null, id, is_read);
  return (
    <form action={MarkAsRead} className="relative">
      <button type="submit" className="flex flex-col items-center group relative">
        {is_read ? 
          <CheckCircleIcon className="w-8 h-8 opacity-50" />
          : <div className="w-8 h-8 bg-transparent rounded-full opacity-50 border-2 border-white scale-[0.8]"></div>	 
        }
        
        {/* Tooltip */}
        <div className="absolute bottom-full mb-2 flex items-center gap-2 bg-slate-700 bg-opacity-45 rounded-lg p-2 whitespace-nowrap transform opacity-0 group-hover:opacity-100 transition-opacity">
          {is_read ?
            <p className="text-white text-sm font-semibold">Mark as unread</p>
            : <p className="text-white text-sm font-semibold">Mark as read</p>
          }
        </div>
      </button>
    </form>
  );
}
