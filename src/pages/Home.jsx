import React from 'react';

import Hero from '../components/Hero';
import About from '../components/About'; // This is the homepage "About" snippet
import Services from '../components/Services';

function Home() {
  return (
    <>
      <Hero />
      
      {/* This <section> wrapper is important for the scroll-link from App.jsx */}
      <section id="about-us">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>
    </>
  );
}

export default Home;
