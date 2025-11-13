import { servicesData } from '../data/services';

function ContactPage() {
  return (
    <div className="bg-white fade-in-page">
      
      {/*Section 1: Get in Touch (Form)*/}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Form */}
            <div>
              <div className="flex items-center text-brand-blue font-semibold mb-3">
                <span className="flex-shrink-0 w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
                CONTACT US
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'serif' }}>
                Get in Touch
              </h1>
              
              <form 
                action="https://formspree.io/f/xyzlznje" 
                method="POST" 
                className="space-y-6"
              >
                <div>
                  <label htmlFor="full-name" className="sr-only">Full Name</label>
                  <input
                    type="text"
                    name="full-name" // 'name' is required for Formspree
                    id="full-name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    name="email" // 'name' attribute is required
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="sr-only">Service of Interest</label>
                  <select
                    id="service"
                    name="service" // 'name' attribute is required
                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6"
                    defaultValue=""
                  >
                    <option value="" disabled>Service of Interest</option>
                    {servicesData.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message" // 'name' attribute is required
                    rows={4}
                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6"
                    placeholder="Message"
                    defaultValue={""}
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Image */}
            <div className="w-full h-full min-h-[300px] ">
              <img 
                src="/assets/contactus.webp" 
                alt="B K N & CO LLP Office" 
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

      {/* Section 2: Find Us (Map)*/}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          {/* This grid layout now has the map on the left */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Google Map */}
            <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-xl"
             style={{
                  aspectRatio: "4/3",
                  borderTopRightRadius: "100px",
                  borderBottomLeftRadius: "100px",
                }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.485128037042!2d72.84439007521101!3d19.26162388201502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e515d02231%3A0xe7a76689d90527c!2sOm%20Shankheshwar%20Tower!5e0!3m2!1sen!2sin!4v1724000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="B K N & CO LLP Office Location"
              ></iframe>
            </div>

            {/* Right Column: Address */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'serif' }}>
                Find Us
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  <strong>Address:</strong><br />
                  603, Om Shankheshwar Tower, Padmavati Nagar, Near Maxus Mall, Bhayandar West 401101
                </p>
                <p>
                  <strong>Email:</strong><br />
                  <a href="mailto:info@bknco.com" className="text-brand-blue hover:underline"> bknco2810@gmail.com</a>
                </p>
                <p>
                  <strong>Phone:</strong><br />
                  +91 977 367 5665<br/>
                  +91 701 405 3583<br/>
                  +91 865 510 5483
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default ContactPage;

