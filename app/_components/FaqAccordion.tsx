'use client';

import { useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-700 last:border-b-0">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex justify-between items-center text-right py-5 px-2 text-lg font-semibold text-white hover:text-red-500 transition-colors cursor-pointer"
          >
            <span>{item.question}</span>
            <span className={`transform transition-transform duration-300  ${openIndex === index ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <p className="pb-5 px-2 text-gray-300 leading-loose">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}