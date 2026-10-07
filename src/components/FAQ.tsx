'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData } from '@/src/lib/faq';
import { BUSINESS } from '@/src/lib/business';
import { Plus_Jakarta_Sans } from 'next/font/google';

const headingFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});



function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <div
      className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen
          ? 'border-emerald-200 bg-emerald-50/50 shadow-lg shadow-emerald-100/30'
          : 'border-gray-200 bg-white hover:border-emerald-100 hover:shadow-md'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-start gap-4 p-5 sm:p-6 text-left cursor-pointer group"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 ${
            isOpen
              ? 'bg-emerald-600 text-white rotate-0'
              : 'bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200'
          }`}
        >
          {index + 1}
        </span>
        <span
          className={`flex-1 font-semibold text-base sm:text-lg transition-colors duration-300 ${
            isOpen ? 'text-emerald-800' : 'text-gray-800'
          }`}
        >
          {question}
        </span>
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 mt-1 transition-all duration-300 ${
            isOpen ? 'rotate-180 text-emerald-600' : 'text-gray-400 group-hover:text-emerald-500'
          }`}
        />
      </button>
      <div
        id={`faq-answer-${index}`}
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ overflow: 'hidden' }}
      >
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[4.25rem]">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-20 sm:py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white overflow-hidden"
    >

      {/* Background decoration */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-200/20 to-transparent rounded-full blur-[120px] -translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-green-200/20 to-transparent rounded-full blur-[100px] translate-y-1/3 translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
            <HelpCircle size={16} />
            FAQ
          </span>
          <h2
            className={`${headingFont.className} text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4`}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Everything you need to know about recycling your old electronics and e-waste responsibly.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Still have questions?{' '}
            <a
              href="/contact"
              className="text-emerald-600 font-semibold hover:text-emerald-700 underline underline-offset-2 transition-colors"
            >
              Contact us
            </a>{' '}
            or call{' '}
            <a
              href={BUSINESS.phoneHref}
              className="text-emerald-600 font-semibold hover:text-emerald-700 underline underline-offset-2 transition-colors"
            >
              {BUSINESS.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
