'use client';

import Link from 'next/link';

export default function FloatingWhatsAppButton() {
  return (
    <Link
      href="https://wa.me/919075010115?text=Hi%20DMD%20Green%20Tech%2C%20I%20want%20to%20recycle%20my%20e-waste"
      aria-label="Chat with us on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl flex items-center justify-center transition transform hover:scale-105">
        {/* Simple WhatsApp-style icon using SVG so you don't depend on any extra library */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 md:w-8 md:h-8"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M16 3C9.383 3 4 8.383 4 15c0 2.332.672 4.503 1.828 6.34L4 29l7.86-1.79A11.9 11.9 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.9 9.9 0 0 1-4.93-1.332l-.35-.203-4.65 1.059 1.047-4.51-.227-.37A9.9 9.9 0 0 1 6 15c0-5.514 4.486-10 10-10zm-3.033 5a1.01 1.01 0 0 0-.812.422c-.21.283-.77.754-.77 1.838 0 1.084.79 2.13.9 2.278.112.148 1.561 2.49 3.84 3.492 2.282 1.002 2.293.695 2.708.652.415-.043 1.338-.546 1.526-1.074.188-.528.188-.98.133-1.074-.056-.094-.21-.151-.44-.264-.23-.113-1.362-.673-1.573-.75-.21-.075-.362-.113-.516.114-.154.226-.593.75-.727.906-.133.156-.267.17-.497.057-.23-.113-.974-.359-1.855-1.144-.686-.611-1.148-1.366-1.283-1.593-.135-.226-.014-.35.1-.462.102-.1.23-.259.345-.388.112-.129.15-.226.226-.378.075-.151.038-.283-.02-.396-.056-.113-.497-1.207-.695-1.652-.183-.414-.37-.357-.516-.364z"
          />
        </svg>
      </div>
    </Link>
  );
}
