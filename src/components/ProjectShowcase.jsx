import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IntroPanel from "./IntroPanel";
import ProjectCard from "./ProjectCard";
import { showcaseIntro, projectsData } from "../data/projects";
import "./ProjectShowcase.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * ProjectShowcase Component
 * 
 * Section 01 of Oshunno.com: Horizontal Project Showcase.
 * - Framed by cinematic glowing lens-flare beams above and below.
 * - Desktop: Reduced section height with pinned horizontal scrolling.
 * - Mobile/Tablet: Native touch-optimized swipeable row with CSS scroll-snap.
 * - Respects prefers-reduced-motion.
 */
export default function ProjectShowcase() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    // GSAP MatchMedia for responsive behavior & accessibility
    const mm = gsap.matchMedia();

    // Desktop: screens 900px and up with no reduced-motion preference
    mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      // Calculate total horizontal travel distance based on real DOM measurements
      const getScrollDistance = () => {
        return Math.max(0, track.scrollWidth - window.innerWidth);
      };

      // Set up pinned horizontal scroll animation
      const scrollTween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: section, // Pins the framed showcase including top & bottom glowing lines
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          scrub: 1, // responsive direct input sync with silky inertia
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // Recalculate dimensions when images finish loading
      const handleImageLoad = () => {
        ScrollTrigger.refresh();
      };

      const images = track.querySelectorAll("img");
      images.forEach((img) => {
        if (!img.complete) {
          img.addEventListener("load", handleImageLoad, { once: true });
        }
      });

      window.addEventListener("resize", handleImageLoad);

      // Force refresh on next animation frame after layout settles
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        scrollTween.kill();
        images.forEach((img) => img.removeEventListener("load", handleImageLoad));
        window.removeEventListener("resize", handleImageLoad);
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      id="selected-projects"
      ref={sectionRef}
      className="showcase-section"
      aria-label="Selected Projects Showcase"
    >
      {/* Top Glowing Flare Line */}
      <div className="glowing-separator glowing-separator--top" aria-hidden="true">
        <div className="glowing-separator__core" />
        <div className="glowing-separator__flare" />
      </div>

      {/* Stage: Horizontally moving track container */}
      <div className="showcase-stage">
        <div ref={trackRef} className="showcase-track">
          {/* Introductory Moving Panel */}
          <IntroPanel intro={showcaseIntro} />

          {/* Sequential Project Cards */}
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}

          {/* End buffer element to ensure generous terminal spacing and prevent clipping */}
          <div className="showcase-track__end-buffer" aria-hidden="true" />
        </div>
      </div>

      {/* Bottom Glowing Flare Line */}
      <div className="glowing-separator glowing-separator--bottom" aria-hidden="true">
        <div className="glowing-separator__core" />
        <div className="glowing-separator__flare" />
      </div>
    </section>
  );
}
