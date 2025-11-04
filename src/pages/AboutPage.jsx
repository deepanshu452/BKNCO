import React from 'react';

// A component for the "Stats" section from the image
// NOT IN USE CURRENTLY (If needed for future)
const StatItem = ({ number, label }) => (
  <div className="text-center">
    <span className="block text-5xl font-bold text-brand-blue">{number}</span>
    <span className="block text-sm text-gray-600 font-medium">{label}</span>
  </div>
);

// A component for the "Culture" values
const ValueCard = ({ title, text }) => (
  <div className="relative p-6">
    {/* Red divider line from the image */}
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{text}</p>
  </div>
);


function AboutPage() {
  return (
    <div className="bg-white">
      
      {/* === Section 1: "About our Company" === */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center text-brand-blue font-semibold mb-3">
            <span className="flex-shrink-0 w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
            ABOUT US
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8" style={{ fontFamily: 'serif' }}>
            About our Company
          </h1>
          <div className="text-gray-600 text-lg space-y-5 max-w-4xl">
            <p>We are a leading professional services firm in the country. Since its founding in 1984, the firm has continuously evolved and grown, diligently focusing on establishing itself as a benchmark for excellence in professional services.</p>
            <p>We serve businesses, governments, and multilateral bodies across industries and sectors, offering specialized services in Assurance, Taxation, Risk, M&A, Corporate Finance, Digital & Technology advisory, and more.</p>
            <p>Our people, 1500+ and growing, drive our success. With deep expertise across service lines, our team delivers clear, timely and actionable advice, ensuring quality in every client interaction.</p>
            <p>We pride ourselves on adapting global expertise and international best practices to a deeply Indian business ethos that places clients at its core.</p>
          </div>
        </div>
      </section>


      {/* === Section 3: "Our Approach" === */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column (Text) */}
            <div>
              <div className="flex items-center text-brand-blue font-semibold mb-3">
                <span className="flex-shrink-0 w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
                HOW DO WE CREATE VALUE
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'serif' }}>
                Our Approach
              </h2>
              <div className="text-gray-600 text-lg space-y-5">
                <p>At B K N & CO LLP, we focus on understanding client's business, goals and challenges. Our services are built on a foundation of quality and commitment to client success. A multi-disciplinary team of experts, aligned with client's needs comes together to provide tailored advice on business models, mergers, acquisitions and tax strategies, both in India and globally. Our aim is to provide innovative, value driven solutions that address the unique challenges of each client.</p>
              </div>
            </div>
            {/* Right Column (Image) */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://placehold.co/600x400/054c7d/FFFFFF?text=Handshake" 
                alt="Our Approach Handshake" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === Section 4: "Our Culture" === */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center text-brand-blue font-semibold mb-3">
              <span className="flex-shrink-0 w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
              HOW WE LIVE
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'serif' }}>
              Our Culture
            </h2>
            <p className="text-gray-600 text-lg">These values are deeply ingrained across our organization, guiding everyone—from new hires to senior partners, in every client interaction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              title="People value" 
              text="With over 1500 professionals from across geographies and diverse backgrounds, B K N & Co. blends Indian values with a progressive global work culture, fostering equal opportunity and inclusivity." 
            />
            <ValueCard 
              title="Client value" 
              text="Our motto of Keeping Clients First comes with an unwavering commitment to delivering high-quality services while upholding Integrity and ensuring Transparency in both words and deeds alike." 
            />
            <ValueCard 
              title="Societal value" 
              text="Giving back to society is something that we feel deeply about. As influential advisors to diverse industries, we advocate for sustainable practices that enhance long-term business viability and foster environmentally responsible and socially conscious client actions." 
            />
          </div>
        </div>
      </section>

      {/* === Section 5: "BKN Foundation" (CSR) === */}
      <section 
        className="py-24 md:py-32 bg-gray-800 bg-cover bg-center bg-blend-overlay bg-opacity-60" 
        style={{ backgroundImage: `url(https://placehold.co/1920x1080/000000/FFFFFF?text=Blurred+Library)` }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white p-8 md:p-12 bg-black bg-opacity-50 rounded-lg">
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'serif' }}>
              B K N Foundation
            </h2>
            <p className="text-lg leading-relaxed">
              Corporate social responsibility (CSR) has been the cornerstone of success right from the inception of B K N & CO LLP. Our aim is to reach the people and help enrich the quality of life of the community and preserve ecological balance and heritage through a strong environment conscience... As a constructive partner in the communities in which it operates, B K N & CO LLP has been taking concrete action to realize its social responsibility objectives, thereby building value for its customers.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;
