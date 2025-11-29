// page for the each service 

import { useEffect } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';

import { servicesData } from '../data/services'; 
import AccordionItem from '../components/AccordionItem';

// A helper hook to scroll to top on page change
function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function ServiceDetailPage() {
  useScrollToTop(); // Scroll to top when this component renders
  
  // 1. Get the "slug" (e.g., "taxation") from the URL
  const { slug } = useParams();

  // 2. Find the correct service data
  const service = servicesData.find(s => s.slug === slug);

  // 3. If no service is found, redirect to the main services page
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    // This 'fade-in-page' class provides the simple transition
    <div className="bg-white fade-in-page">
      
      {/* Section 1: Hero */}
      <section className="relative bg-gray-50 py-16 md:py-24 overflow-hidden curved-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column (Text) */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'serif' }}>
                {service.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                {service.mainDescription}
              </p>
            </div>

            {/* Right Column (Image) */}
            <div className="flex justify-center">
              <img 
                src={service.imageUrl} 
                alt={service.imageAlt} 
                className="object-cover shadow-xl"
                style={{
                  aspectRatio: "4/3",
                  borderTopLeftRadius: "100px",
                  borderBottomRightRadius: "100px",
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Accordion Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 ">
          <h2 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'serif' }}>
            Services
          </h2>
          <div className="space-y-2">
            {service.subServices.map((sub, index) => (
              <AccordionItem key={index} title={sub.title}>
                <p className="text-justify">{sub.text}</p>
                {/* can add a "Read More" button here if needed */}
                {sub.hasMore && (
                  <Link to={`/services/${service.slug}/${sub.subSlug}`}
                        className="text-brand-blue font-semibold mt-4 inline-block">
                    Read More &rarr;
                  </Link>
                ) 
                }
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default ServiceDetailPage;

