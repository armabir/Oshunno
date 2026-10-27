import CustomCursor from "./components/CustomCursor";
import HeroSection from "./components/hero/HeroSection";
import ServicesSection from "./components/services/ServicesSection";
import ProjectShowcase from "./components/ProjectShowcase";
import PricingSection from "./components/pricing/PricingSection";
import Footer from "./components/footer/Footer";
import "./App.css";

/**
 * Oshunno Agency Website Shell
 * 
 * - Section 00: Transformation Conveyor Hero & Navigation
 * - Section 01: Bespoke Interlocking Services Pinwheel
 * - Section 02: Pinned Horizontal Project Showcase
 * - Section 03: Transparent Asymmetric Folder-Tab Pricing
 * - Section 04: Editorial Footer & Interactive Contact Matrix Banner
 */
export default function App() {
  return (
    <div className="site-shell">
      {/* High-Contrast Negative Inverted Project Cursor */}
      <CustomCursor />

      {/* Main Content Flow */}
      <main id="main-content" className="site-shell__main">
        {/* Section 00: Transformation Conveyor Hero */}
        <HeroSection />

        {/* Section 01: Bespoke Interlocking Services Pinwheel */}
        <ServicesSection />

        {/* Section 02: Pinned Horizontal Project Showcase */}
        <ProjectShowcase />

        {/* Section 03: Transparent Asymmetric Folder-Tab Pricing */}
        <PricingSection />
      </main>

      {/* Editorial Footer & Interactive Particle Matrix Banner */}
      <Footer />
    </div>
  );
}
