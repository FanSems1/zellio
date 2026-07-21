import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

import About from "@/components/sections/About";
import VisionMission from "@/components/sections/VisionMission";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";

import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <About />
        <VisionMission />
        <Services />
        <WhyChoose />

        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
