import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/hero/Navbar";
import HeroSection from "./components/hero/HeroSection";
import ServicesSection from "./components/services/ServicesSection";
import ProjectShowcase from "./components/ProjectShowcase";
import PricingSection from "./components/pricing/PricingSection";
import Footer from "./components/footer/Footer";
import { ContactModalProvider } from "./context/ContactModalContext";
import ContactModal from "./components/contact/ContactModal";
import SectionDivider from "./components/SectionDivider";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * Pointfex Agency Website Shell
 * 
 * - Global Floating Glass Navigation
 * - Section 00: Transformation Conveyor Hero
 * - Section 01: Bespoke Interlocking Services Pinwheel
 * - Section 02: Pinned Horizontal Project Showcase
 * - Section 03: Transparent Asymmetric Folder-Tab Pricing
 * - Section 04: Editorial Footer & Interactive Contact Matrix Banner
 * - Global Contact Inquiry Modal (Web3Forms Integrated)
 */
export default function App() {
  useEffect(() => {
    // Initialize Lenis for luxurious buttery smooth scrolling
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <ContactModalProvider>
      <div className="site-shell">
        {/* High-Contrast Negative Inverted Project Cursor */}
        <CustomCursor />

        {/* Floating Global Glass Island Navbar */}
        <Navbar />

        {/* Main Content Flow */}
        <main id="main-content" className="site-shell__main">
          {/* Section 00: Transformation Conveyor Hero */}
          <HeroSection />

          {/* Section Divider: Hero (dark) to Services (light) */}
          <SectionDivider from="dark" to="light" />

          {/* Section 01: Bespoke Interlocking Services Pinwheel */}
          <ServicesSection />

          {/* Section Divider: Services (light) to Projects (dark) */}
          <SectionDivider from="light" to="dark" />

          {/* Section 02: Pinned Horizontal Project Showcase */}
          <ProjectShowcase />

          {/* Section Divider: Projects (dark) to Pricing (light) */}
          <SectionDivider from="dark" to="light" />

          {/* Section 03: Transparent Asymmetric Folder-Tab Pricing */}
          <PricingSection />
        </main>

        {/* Section Divider: Pricing (light) to Footer (dark) */}
        <SectionDivider from="light" to="dark" />

        {/* Editorial Footer & Interactive Particle Matrix Banner */}
        <Footer />

        {/* Global Contact / Start a Project Modal */}
        <ContactModal />
      </div>
    </ContactModalProvider>
  );
}
