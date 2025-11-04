import React, { useState } from 'react';

// This is the rotating arrow icon (pointing UP by default)
const ChevronUp = ({ isOpen }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={3} // A slightly thicker stroke
    stroke="currentColor" 
    // Starts pointing UP, rotates 180 to point DOWN when open
    className={`w-5 h-5 text-gray-900 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
);

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Updated border color to be darker
    <div className="border-b border-gray-900">
      
      {/* --- Accordion Header --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        {/* Updated text color to be darker */}
        <h3 className="text-3xl font-semibold text-gray-900" style={{ fontFamily: 'serif' }}>
          {title}
        </h3>
        {/* Swapped to the new ChevronUp icon */}
        <ChevronUp isOpen={isOpen} />
      </button>

      {/* --- Accordion Content (Animated with Tailwind) --- */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pb-6 pr-8 text-gray-600 text-lg space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;

