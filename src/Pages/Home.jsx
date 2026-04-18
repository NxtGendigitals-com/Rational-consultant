import Hero from "../Component/Hero";
import AboutSection from "../Component/AboutSection";
import Services from "../Component/Services";
import ProjectSection from "../Component/ProjectSection";
import WorkProcessSection from "../Component/WorkProcessSection";
import Testomonial from "../Component/Testomonial";
import FAQSection from "../Component/FAQSection";
import ContactSection from "../Component/ContactSection";
import FooterSection from "../Component/FooterSection";

const Home = () => {
  return (
    <main className="overflow-hidden bg-[#f7f8fc] text-slate-900">
      <Hero />
      <AboutSection />
      <Services />
      <ProjectSection />
      <WorkProcessSection />
      <Testomonial />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Home;
