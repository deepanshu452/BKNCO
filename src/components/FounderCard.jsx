import useScrollReveal from '../hooks/useScrollReveal';

export default function FounderCard(props) {

  useScrollReveal();
  return (
    <section 
      aria-labelledby="founder-heading"
      className="md:gap-12 bg-white px-6 py-6 md:py-20"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-4 items-center">
                  
          {/* Left column: text */}
          <div>
            <p className="text-sm text-brand-blue font-semibold mb-3 flex items-center gap-3">
              <span className="inline-block w-2 h-2 bg-brand-blue rounded-full" />
              FROM THE FOUNDER&apos;S DESK
            </p>

            <h2
              id="founder-heading"
              className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6"
              style={{ fontFamily: 'serif' }}
            >
              From the Founder&apos;s Desk
            </h2>

            <p className="text-base text-gray-600 mb-6 max-w-xl text-justify">
              {props.shortBio}
            </p>

            <blockquote className="border-l-4 border-brand-blue pl-4 italic text-gray-700 mb-6 max-w-xl">
              “{props.quote}”
            </blockquote>

            <div className="flex items-center gap-4">
              <div>
                <p className="text-lg font-semibold text-gray-900">{props.name}</p>
                <p className="text-sm text-gray-500">{props.title}</p>
              </div>

              {/* small CTA — optional */}
              <a
                href="/about"
                className="ml-4 inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-4 py-2 rounded-full shadow-sm hover:translate-y-[-2px] transition-transform duration-200"
                aria-label="Read more about the founder"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Right column: portrait card */}
          <div className="relative flex justify-center md:ml-10 lg:ml-40 mt-10 md:mt-0">

            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-full max-w-sm bg-neutral-50 rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-1">

              {/* container with rounded corner */}
              <div className="relative">
                <img
                  src={props.imgSrc}
                  alt={props.imgAlt}
                  loading="lazy"
                  className="w-full h-full object-cover block"
                  style={{ aspectRatio: '3/4' }}
                />
              </div>

              <div className="px-6 py-5 bg-white">
                <p className="text-lg font-semibold text-gray-900">{props.name}</p>
                <p className="text-sm text-gray-500">{props.title}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
