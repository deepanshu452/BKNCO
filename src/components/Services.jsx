import { Link } from 'react-router-dom';


const ServiceCard = ({ title, slug }) => {
  return (
    <div className="relative px-4 py-6 group">
      {/* Vertical divider line i.ie., seperator */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-brand-blue"></div>
      
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        {title}
      </h3>
      <Link to = {`/services/${slug}`} 
        className="flex items-center text-brand-blue hover:text-brand-blue/80 transition-colors text-sm font-medium"
      >
        VIEW MORE
        {/* Right arrow icon */}
        <svg 
          className="ml-2 w-4 h-4 transform text-brand-blue transition-transform duration-300 group-hover:scale-110 group-hover:rotate-180" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M17 8l4 4m0 0l-4 4m4-4H3">
          </path>
        </svg>
      </Link>
    </div>
  );
};

function Services() {

  const services = [
    { title:"Taxation", slug:"taxation"},
    {title:"Risk Advisory", slug:"risk-advisory"},
    {title:"Audit & Assurance", slug:"audit"},
    {title:"IPO Services", slug:"ipo-services"},
  ];

  return (
    <section className="bg-gray-50 py-6 md:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center text-brand-blue font-semibold mb-3">
            <span className="flex-shrink-0 w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
            SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our Expertise
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8">
          {services.map(({title, slug}) => (
            <ServiceCard key={slug} title={title} slug={slug}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

