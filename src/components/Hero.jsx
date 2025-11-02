import React from 'react';
import heroImageUrl from '../assets/banner-img.jpg';

function Hero() {
  return (
    <div
      className="relative bg-cover bg-center text-white min-h-[36rem]"
      style={{ backgroundImage: `url(${heroImageUrl})` }}
    >
      {/* Overlay*/}
      <div className="absolute inset-0 bg-black opacity-40">

      </div>
      
      <div className="container mx-auto px-6 py-32 md:py-48 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Empowering Growth
          <br />
          Ensuring Compliance
          <br />
          Enabling Confidence
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Delivering excellence across Audit & Assurance, Taxation, Regulatory, Risk Advisory, and CFO Services — empowering businesses of every scale to achieve financial integrity and sustainable growth
        </p>
        <a 
          href="#" 
          className="bg-brand-blue text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors"
        >
          Discover Our Services
        </a>
      </div>
    </div>
  );
}

export default Hero;
