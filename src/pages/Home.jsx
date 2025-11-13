import Hero from '../components/Hero';
import About from '../components/About'; 
import Services from '../components/Services';
import FounderCard from '../components/FounderCard';
import bhaveshceo from '/assets/Bhavesh.webp';
import AmitJain from '/assets/AmitJain.jpg';

function Home() {
  return (
    <>
      <Hero />
      
      {/* This <section> wrapper is important for the scroll-link from App.jsx */}
      <section id="about-us">
        <About />
      </section>
      <FounderCard 
      name = "CA Amit Jain"
      title = "Founder & Managing Partner"
      imgSrc = {`${AmitJain}`}
      imgAlt = "Portrait of the founder"
      shortBio = "At B K N & CO LLP, Amit Jain brings over 9 years of diverse professional experience across tax advisory, regulatory matters, GST, transaction strategy, and controversy management. Recognized as a sector-focused tax specialist in Real Estate, Hospitality, and Pharma, he has advised major multinationals and leading Indian business groups on complex tax challenges. With a strong commitment to exceptional client service, he ensures high-quality delivery, client-focused execution, and consistent value across every engagement."
      quote = "Exceptional service begins with expertise, but it’s perfected through commitment, clarity, and client trust."
      reverse="true"
      />
      
      <FounderCard 
      name = "Bhavesh Jain"
      title = "Founder & Managing Partner"
      imgSrc = {`${bhaveshceo}`}
      imgAlt = "Portrait of the founder"
      shortBio = "CA Bhavesh Jain is a seasoned Chartered Accountant with 8+ years of expertise in auditing, risk assurance, Ind AS implementation, due diligence, and regulatory compliance. He has led critical assurance and risk advisory engagements for clients across Banking, Financial Services, Manufacturing, and Education, consistently enhancing internal controls and financial reporting systems. Known for his practical, value-driven approach, he helps organizations strengthen governance and achieve sustainable, compliant growth."
      quote = "Strong controls, clear reporting, and disciplined governance create the foundation for sustainable business excellence."
      reverse="false"
      />

      <FounderCard 
      name = "Krishna Maheshwari"
      title = "Founder & Managing Partner"
      // imgSrc = {`${bhaveshceo}`}
      imgAlt = "Portrait of the founder"
      shortBio = "At B K N & CO LLP, CA Krishna Maheshwari is a seasoned Credit Rating Analyst with 5 years of experience, delivering sharp financial insights across real estate, infrastructure, hospitality, retail, and MSME sectors. She specialises in credit risk assessment, audit & assurance, and financial due diligence, providing strategic guidance to ARCs and financial institutions. With broad exposure to banking, manufacturing, fintech, and service industries, she blends analytical depth with strategic foresight to strengthen financial decisions and regulatory confidence."
      quote = "Precision in analysis, integrity in action, and foresight in every decision — that’s the foundation of lasting financial stability."
      reverse="true"
      />
      

      <section id="services">
        <Services />
      </section>
    </>
  );
}

export default Home;
