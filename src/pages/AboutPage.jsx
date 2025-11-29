import hero from '/assets/About.webp';

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
    <p className="text-gray-600 leading-relaxed text-justify">{text}</p>
  </div>
);


function AboutPage() {
  return (
    <div className="bg-white">
      
      {/*Section 1: "About our Company"*/}
      <section className="bg-gray-50 py-6 md:py-4">
        <div className="container mx-auto">
          <div className="px-[40px] flex items-center text-brand-blue font-semibold mb-3">
            <span className="flex-shrink-0 w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
            ABOUT US
          </div>
          <h1 className="px-[40px] text-3xl md:text-6xl font-bold text-gray-900 leading-tight mb-8" style={{ fontFamily: 'serif' }}>
            About our Company
          </h1>
          {/* hero Image */}
          <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={`${hero}`}
                alt="Our Approach Handshake" 
                className="w-full h-[88vh] object-cover"
                loading="lazy"
                aspect-ratio="3/4"
                // style={{
                //   borderTopLeftRadius: "100px",
                //   borderBottomRightRadius: "100px",
                // }}
              />
            </div>
          <div className="px-[50px] text-gray-600 text-lg max-w-full space-y-3  mt-5 text-justify mx-auto">
            <p>B K N & CO LLP is a Chartered Accountancy firm that has flourished through organic growth, anchored by our strong execution ability, accessibility, and client-centric approach. We are dedicated to providing insightful and independent assurance services designed to strengthen our clients' positions in today’s complex and dynamic business environment.</p>
            <p>Our dedicated team brings deep knowledge and extensive experience to meet your diverse requirements. We pride ourselves on an efficient, effective work approach, ensuring that your business objectives are met promptly and with precision. With deep expertise across service lines, our team delivers clear, timely and actionable advice, ensuring quality in every client interaction.</p>
            <p>At B K N & CO LLP, our collective mission is to provide valuable and tailored support in specialized areas of expertise that ultimately benefit your organization. We pride ourselves on adapting global expertise and international best practices to a deeply Indian business ethos that places clients at its core.</p>
          </div>
        </div>
      </section>


      {/*Section 3: "Our Approach"*/}
      <section className="bg-gray-50 py-10 md:py-15 mx-10">
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
              <div className="text-gray-600 text-lg space-y-5 text-justify">
                <p>At B K N & CO LLP, we understand that every client is unique, and we remain flexible to your resources and specific needs. We look forward to demonstrating the distinctive difference B K N & CO LLP offers through this engagement and beyond.</p>
              </div>
            </div>
            {/* Right Column (Image) */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/assets/About-us-Our-Approach-1.webp" 
                alt="Our Approach Handshake" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/*Section 4: "Our Culture"*/}
      <section className="py-6 md:pt-15 pb-24 mx-10">
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
              text="At B K N & CO LLP, our strength stems from our people. We are committed to nurturing talent and building a supportive environment where every individual has the opportunity to thrive and contribute meaningfully towards our shared success.
Our culture encourages growth, collaboration, and professional excellence—ensuring that our clients receive guidance from a team driven by integrity and diverse perspectives.
" 
            />
            <ValueCard 
              title="Client value" 
              text="Our motto of Keeping Clients First comes with an unwavering commitment to delivering high-quality services while upholding Integrity and ensuring Transparency in both words and deeds a like." 
            />
            <ValueCard 
              title="Societal value" 
              text="Giving back to society is something that we feel deeply about. As influential advisors to diverse industries, we advocate for sustainable practices that enhance long-term business viability and foster environmentally responsible and socially conscious client actions." 
            />
          </div>
        </div>
      </section>

{/*   
      <section
        className="py-24 md:py-32 bg-cover bg-center min-h-full"
        loading="lazy"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${'/assets/About2.webp'})`
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white p-8 md:p-12 bg-black bg-opacity-50 rounded-lg">
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'serif' }}>
              B K N Foundation
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              Corporate social responsibility (CSR) has been the cornerstone of success right from the inception of B K N & CO LLP. Our aim is to reach the people and help enrich the quality of life of the community and preserve ecological balance and heritage through a strong environment conscience... As a constructive partner in the communities in which it operates, B K N & CO LLP has been taking concrete action to realize its social responsibility objectives, thereby building value for its customers.
            </p>
          </div>
        </div>
      </section> */}

    </div>
  );
}

export default AboutPage;
