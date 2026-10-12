'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Truck } from 'lucide-react';
import { BUSINESS } from '@/src/lib/business';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M16 3C9.383 3 4 8.383 4 15c0 2.332.672 4.503 1.828 6.34L4 29l7.86-1.79A11.9 11.9 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.9 9.9 0 0 1-4.93-1.332l-.35-.203-4.65 1.059 1.047-4.51-.227-.37A9.9 9.9 0 0 1 6 15c0-5.514 4.486-10 10-10zm-3.033 5a1.01 1.01 0 0 0-.812.422c-.21.283-.77.754-.77 1.838 0 1.084.79 2.13.9 2.278.112.148 1.561 2.49 3.84 3.492 2.282 1.002 2.293.695 2.708.652.415-.043 1.338-.546 1.526-1.074.188-.528.188-.98.133-1.074-.056-.094-.21-.151-.44-.264-.23-.113-1.362-.673-1.573-.75-.21-.075-.362-.113-.516.114-.154.226-.593.75-.727.906-.133.156-.267.17-.497.057-.23-.113-.974-.359-1.855-1.144-.686-.611-1.148-1.366-1.283-1.593-.135-.226-.014-.35.1-.462.102-.1.23-.259.345-.388.112-.129.15-.226.226-.378.075-.151.038-.283-.02-.396-.056-.113-.497-1.207-.695-1.652-.183-.414-.37-.357-.516-.364z"
      />
    </svg>
  );
}

// Thumb-reach Call / WhatsApp / Schedule Pickup bar, phones only.
// Replaces the floating WhatsApp button below the md breakpoint.
export default function MobileActionBar() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;
  // On the pickup page itself the form is already on screen
  const onContactPage = pathname === '/contact';

  return (
    <nav
      aria-label="Quick contact"
      className="md:hidden fixed inset-x-0 bottom-0 z-50 bg-white/95 backdrop-blur border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]"
    >
      <div className={`grid ${onContactPage ? 'grid-cols-2' : 'grid-cols-[1fr_1fr_1.6fr]'} gap-2 px-3 py-2`}>
        <a
          href={BUSINESS.phoneHref}
          className="flex flex-col items-center justify-center gap-0.5 h-12 rounded-xl text-gray-700 active:bg-gray-100"
        >
          <Phone size={20} />
          <span className="text-xs font-medium">Call</span>
        </a>
        <a
          href={BUSINESS.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 h-12 rounded-xl text-[#128C7E] active:bg-gray-100"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        {!onContactPage && (
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 h-12 rounded-xl bg-emerald-600 text-white font-semibold text-[15px] active:bg-emerald-700"
        >
          <Truck size={18} />
          Schedule Pickup
        </Link>
        )}
      </div>
    </nav>
  );
}
