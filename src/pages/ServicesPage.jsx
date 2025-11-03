import React from 'react';
import ServiceDetailRow from '../components/ServiceDetailRow';

// --- Service Data ---
const servicesData = [
  {
    title: "Taxation Services",
    slug: "taxation",
    items: [
      "Direct Tax Advisory & Compliance",
      "Transfer Pricing",
      "Indirect Taxes, GST, Customs & Foreign trade policy"
    ],
    imageUrl: "https://placehold.co/600x450/054c7d/FFFFFF?text=Taxation",
    imageAlt: "Taxation Services",
  },
  {
    title: "Audit & Assurance",
    slug: "audit",
    items: [
      "Statutory Audit",
      "Tax audit",
      "Risk Assurance Services / Internal Audit",
      "Group Reporting",
      "Other Assurance Services"
    ],
    imageUrl: "https://placehold.co/600x450/EFEFEF/333333?text=Audit",
    imageAlt: "Audit & Assurance",
  },
  {
    title: "Regulatory",
    slug: "regulatory",
    items: [
      "Exchange Control Advisory (FEMA & FDI)",
      "Compounding & Representation Services",
      "Business Entity Services (set-up, closure, etc.)",
      "Corporate Compliance & Secretarial Support"
    ],
    imageUrl: "https://placehold.co/600x450/054c7d/FFFFFF?text=Regulatory",
    imageAlt: "Regulatory Services",
  },
  {
    title: "Risk Advisory",
    slug: "risk-advisory",
    items: [
      "Forensics",
      "Internal Audit",
      "Internal Financial Controls",
      "Standard Operating Procedures (SOPs)",
      "Enterprise Risk Management (ERM)"
    ],
    imageUrl: "https://placehold.co/600x450/EFEFEF/333333?text=Risk+Advisory",
    imageAlt: "Risk Advisory",
  },
];

function ServicesPage() {
  return (
    <div className="bg-white">
      
      {/* === Section 1: Page Header === */}
      {/* Based on image 55e088.png */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div className="flex items-center justify-center text-brand-blue font-semibold mb-3">
            <span className="flex-shrink-0 w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
            OUR SERVICES
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6" style={{ fontFamily: 'serif' }}>
            Our services custom made
          </h1>
          <p className="text-gray-600 text-lg">
            Our experience over four decades spans industries and organizations of all forms: from start-ups and SMEs to conglomerates, multinationals, public and private sector firms, multilateral organizations, and governments.
          </p>
        </div>
      </section>

      {/* === Section 2: Service Details === */}
      {/* We map over our data and render the reusable component */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 space-y-20 md:space-y-28">
          
          {servicesData.map((service, index) => (
            <ServiceDetailRow
              key={service.slug}
              title={service.title}
              items={service.items}
              imageUrl={service.imageUrl}
              imageAlt={service.imageAlt}
              slug={service.slug}
              // This is the magic!
              // It passes 'true' for every even-indexed item (0, 2, 4...)
              // and 'false' for odd-indexed (1, 3, 5...)
              // Wait, the images show Tax (left), Audit (right). So index 0 is normal, index 1 is reversed.
              reverse={index % 2 !== 0} 
            />
          ))}

        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
