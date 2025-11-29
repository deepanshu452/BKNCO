// This is the page where all the servides are together

import ServiceDetailRow from '../components/ServiceDetailRow';

// --- Service Data ---
const servicesData = [
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
    imageUrl: "/assets/Audit-Assurance-1.webp",
    imageAlt: "Audit & Assurance",
  },
   {
    title: "Taxation",
    slug: "taxation",
    items: [
      "Direct Tax Advisory & Compliance",
      "Transfer Pricing",
      "Indirect Taxes, GST, Customs & Foreign trade policy"
    ],
    imageUrl: "/assets/Taxation.webp",
    imageAlt: "Taxation Services",
  },
  {
    title: "IPO Services", 
    slug: "ipo-services",
    items: [
      "IPO Readiness Assessment",
      "Restated Financial Statements",
      "Due Diligence Support",
      "Post-IPO Compliance"
    ],
    imageUrl: "assets/IPO-Services.webp",
    imageAlt: "IPO Services",
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
    imageUrl: "/assets/Risk-Advisory-Services.webp",
    imageAlt: "Risk Advisory",
  },
  
];

function ServicesPage() {
  return (
    <div className="bg-white">
      
      {/* Section 1: Page Header */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div className="flex items-center justify-center text-brand-blue font-semibold mb-3">
            <span className="flex-shrink-0 w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
            OUR SERVICES
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6" style={{ fontFamily: 'serif' }}>
            Our services custom made
          </h1>
          <p className="text-gray-600 text-lg text-justify">
            We cover a broad range of services under our Audit & Assurance Services vertical to fulfil our clients’ requirements under one roof. This includes: Financial Due diligence, Stock & Fixed Asset audits, Accounting & Audit support,  GAAP conversion & support (including INDAS), Purchase Price Allocation, Certifications, and IND-AS transition support.
          </p>
        </div>
      </section>

      {/* Section 2: Service Details*/}
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
          
              // It passes 'true' for every even-indexed item (0, 2, 4...)
              // and 'false' for odd-indexed (1, 3, 5...)
              //  index 0 is normal, index 1 is reversed.
              reverse={index % 2 !== 0} 
            />
          ))}

        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
