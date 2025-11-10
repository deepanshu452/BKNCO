import Hero from '../components/Hero';
import About from '../components/About'; 
import Services from '../components/Services';
import FounderCard from '../components/FounderCard';
import bhaveshceo from '/assets/Bhavesh-CEO.webp';

function Home() {
  return (
    <>
      <Hero />
      
      {/* This <section> wrapper is important for the scroll-link from App.jsx */}
      <section id="about-us">
        <About />
      </section>
      
      <FounderCard 
      name = "Bhavesh Jain"
      title = "Founder & Managing Partner"
      imgSrc = {`${bhaveshceo}`}
      imgAlt = "Portrait of the founder"
      shortBio = "At B K N & CO LLP, our commitment to excellence and a client-first approach drives everything we do. With deep industry experience, we deliver practical, high-quality advisory and assurance services that help organizations grow sustainably"
      quote = "Integrity, excellence and client-first thinking guide every decision we make."
      />

      <FounderCard 
      name = "Krishna Mahishwari"
      title = "Founder & Managing Partner"
      // imgSrc = {`${bhaveshceo}`}
      imgAlt = "Portrait of the founder"
      shortBio = "At B K N & CO LLP, our commitment to excellence and a client-first approach drives everything we do. With deep industry experience, we deliver practical, high-quality advisory and assurance services that help organizations grow sustainably"
      quote = "Integrity, excellence and client-first thinking guide every decision we make."
      />

      <section id="services">
        <Services />
      </section>
    </>
  );
}

export default Home;
