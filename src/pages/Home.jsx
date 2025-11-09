import Hero from '../components/Hero';
import About from '../components/About'; 
import Services from '../components/Services';
import FounderCard from '../components/FounderCard';

function Home() {
  return (
    <>
      <Hero />
      
      {/* This <section> wrapper is important for the scroll-link from App.jsx */}
      <section id="about-us">
        <About />
      </section>
      
      <FounderCard/>

      <section id="services">
        <Services />
      </section>
    </>
  );
}

export default Home;
