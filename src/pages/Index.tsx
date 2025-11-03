import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Layanan from "@/components/Layanan";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials"; // <-- 1. IMPOR BARU
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.targetId) {
      const targetId = location.state.targetId;
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Layanan />
      <Skills />
      <Projects />
      <Testimonials /> {/* <-- 2. TAMBAHKAN DI SINI */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;