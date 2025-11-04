import React from 'react';
import { Link } from 'react-router-dom';

// `reverse={true}` is used to flip the image and text
function ServiceDetailRow({ title, items, imageUrl, imageAlt, reverse = false, slug }) {
  
  // This line adds 'md:flex-row-reverse' if the reverse prop is true
  const rowDirectionClass = reverse ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <div className={`flex flex-col ${rowDirectionClass} items-center gap-8 md:gap-12`}>
      
      {/* --- Image Column --- */}
      <div className="w-full md:w-1/2">
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="w-full h-auto rounded-lg shadow-lg object-cover"
          // We can set a fixed aspect ratio for consistency
          style={{ aspectRatio: '4/3' }} 
        />
      </div>

      {/* --- Text Column --- */}
      <div className="w-full md:w-1/2">
        <h3 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'serif' }}>
          {title}
        </h3>
        
        <ul className="space-y-4 mb-8">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {/* Red Circle Icon */}
              <span className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
              <span className="text-gray-700 text-lg">{item}</span>
            </li>
          ))}
        </ul>

        {/* Read More Button */}
        <Link 
          to={`/services/${slug}`} // This will link to /services/taxation, etc.
          className="group flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-brand-blue font-semibold hover:bg-blue-50 transition-colors w-fit"
        >
          READ MORE
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
              className="w-4 h-4 text-brand-blue transform transition-transform duration-300 group-hover:translate-x-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default ServiceDetailRow;
