

import { useParams } from "react-router-dom";
import { servicesData } from "../data/services";

export default function ServiceSubDetailPage() {
  const { slug, subSlug } = useParams();

  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return <div className="p-6">Service not found.</div>;

  const sub = service.subServices.find((s) => s.subSlug === subSlug);
  if (!sub) return <div className="p-6">Sub-service not found.</div>;

  return (
    <section className="container mx-auto px-6 py-12">

      {/* <section className="relative bg-gray-50 py-16 md:py-24 overflow-hidden curved-bg"> */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column (Text) */}
            <div>
              <p className="text-brand-blue font-semibold mb-1">{service.title}</p>
              <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'serif' }}>
                {sub.title}
              </h1>
              <p className="text-md text-gray-600 leading-relaxed text-justify">
                {sub.moreContent ? (
                  sub.moreContent
                    .trim()
                    .split(/\n\s*\n/)  // split on blank lines = paragraphs
                    .map((para, i) => <p key={i} className="mb-4">{para.trim()}</p>)
                ) : (
                  <p>No additional details available.</p>
                )}

              </p>
            </div>

            {/* Right Column (Image) */}
            <div className=" hidden md:flex justify-center">
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
  );
}