import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

/* Why: small visual refresh — slightly larger heading, glass CTA */
export default function About() {
  useScrollReveal();
  return (
    <section className="bg-white px-6 py-16 md:py-24 reveal">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div id="about" className="flex items-center text-brand-blue font-semibold mb-3">
              <span className="w-3 h-3 bg-brand-blue rounded-full mr-2" />
              ABOUT US
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              A forward-looking firm for integrated financial, regulatory, and risk advisory.
            </h2>
          </div>

          <div className="text-gray-600 text-base lg:text-lg space-y-5">
            <p>B K N &amp; CO LLP is a forward-looking Chartered Accountancy firm established by CA Amit Jain, CA Bhavesh Jain, and CA Krishna Maheshwari. We provide integrated financial, regulatory, and risk advisory solutions to help businesses navigate complexity with clarity.</p>
            <p>With technical expertise and industry insight, we support organizations in enhancing governance, strengthening financial systems, and achieving sustainable growth through integrity and precision.</p>

            <Link to="/about" className="inline-flex items-center gap-2 px-6 py-2 bg-brand-blue text-white rounded-lg shadow hover:scale-[1.02] transition">
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}