import TeamCard from '../components/teamCard'; 
import { teamMembers } from '../data/team';

const OurTeam = () => {
  return (
    <main className="bg-white/50 py-12">
        {/* Top Banner Section */}
        <section className="bg-[#f3f3f3] py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-[#153947]">
            Our Team
            </h1>
        </div>
        </section>

        {/* Two Column Intro Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <h2 className="text-4xl md:text-5xl font-bold text-[#153947] leading-tight">
            The team behind<br />the cutting-edge project
            </h2>

            <p className="text-lg text-gray-700 md:border-l-2 md:pl-8 border-brand-blue">
            Our team at Nangia & Co LLP is a blend of seasoned professionals and innovative thinkers. 
            With diverse expertise and a commitment to excellence, we work collaboratively to deliver 
            tailored solutions that drive success and foster long-term growth for our clients. We 
            believe in empowering our team through continuous professional development and training.
            </p>

        </div>
        </section>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">Meet Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-stretch mt-10">
          {teamMembers.map((m) => (
            <div key={m.name} className="w-full h-full">
              <TeamCard
                photo={m.photo}
                name={m.name}
                designation={m.designation}
                alt={`Portrait of ${m.name}`}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default OurTeam;
