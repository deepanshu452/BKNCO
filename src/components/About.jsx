import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/*using grid for the 2-column layout*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column Headline */}
          <div>
            <div id="about" className="flex items-center text-brand-blue font-semibold mb-3">
              {/* This creates the small circle icon from the image */}
              <span className="flex-shrink-0 w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
              ABOUT US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              A forward-looking firm for integrated financial, regulatory, and risk advisory.
            </h2>
          </div>

          {/* Right Column (Text Content) */}
          <div className="text-gray-600 text-base lg:text-lg space-y-5">
            <p>
              B K N & CO LLP is a forward-looking Chartered Accountancy firm
              established by CA Amit Jain, CA Bhavesh Jain, and CA Krishna Maheshwari. We
              provide integrated financial, regulatory, and risk advisory solutions to help
              businesses navigate complexity with clarity.
            </p>
            <p>
              With a blend of technical expertise and industry understanding, we
              support organizations in enhancing governance, strengthening financial systems,
              and achieving lasting growth. Our approach is rooted in integrity, precision,
              and a commitment to building enduring client relationships through trust and
              accountability.
            </p>
            <br/>
            <Link to="/about" 
                  className="group inline-flex items-center gap-2 px-8 py-3 border border-gray-300 rounded-full text-brand-blue font-semibold hover:bg-blue-50 transition-colors">
                READ MORE
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    className="w-4 h-4 brand-blue transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-180">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
            </Link>
          </div>
            
        </div>
      </div>
    </section>
  );
}

export default About;
