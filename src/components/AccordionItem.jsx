import { useState } from 'react';

const Chevron = ({ open }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
    className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}>
    <path strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
);

export default function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <Chevron open={open} />
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-[1000px] mt-4' : 'max-h-0'}`}>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
}