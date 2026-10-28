import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import "./CustomCursor.css";

/**
 * CustomCursor Component
 * 
 * 1. Global Website Circular Cursor & Background Ambient Glow:
 *    - Ambient Background Glow: Soft atmospheric cyan radial illumination following cursor.
 *    - Precision Center Dot: Instant reactive positioning with brand cyan glow.
 *    - Circular Follower Ring: Fluid spring damping that expands on clickable interactive elements.
 * 2. Dedicated Project Section Inversion Cursor:
 *    - Seamlessly transitions to 110px negative difference disc + "VIEW PROJECT" typography
 *      when hovering [data-cursor="project"], temporarily hiding the global circular cursor.
 */
export default function CustomCursor() {
  const glowRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const discRef = useRef(null);
  const textRef = useRef(null);
  const isFinePointer = useRef(false);
  const isHoveringProject = useRef(false);

  useEffect(() => {
    // Only enable on desktop devices with fine hover capability
    const fineQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    isFinePointer.current = fineQuery.matches;

    const handleMediaChange = (e) => {
      isFinePointer.current = e.matches;
      if (!e.matches) {
        if (glowRef.current) gsap.set(glowRef.current, { scale: 0, opacity: 0 });
        if (ringRef.current) gsap.set(ringRef.current, { scale: 0, opacity: 0 });
        if (dotRef.current) gsap.set(dotRef.current, { scale: 0, opacity: 0 });
        if (discRef.current) gsap.set(discRef.current, { scale: 0, opacity: 0 });
        if (textRef.current) gsap.set(textRef.current, { scale: 0, opacity: 0 });
      }
    };

    if (fineQuery.addEventListener) {
      fineQuery.addEventListener("change", handleMediaChange);
    } else {
      fineQuery.addListener(handleMediaChange);
    }

    if (!isFinePointer.current) return;

    const glow = glowRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    const disc = discRef.current;
    const text = textRef.current;
    if (!glow || !ring || !dot || !disc || !text) return;

    // Center all elements via transform offset & start hidden until first mousemove
    gsap.set([glow, ring, dot], { xPercent: -50, yPercent: -50, scale: 1, opacity: 0 });
    gsap.set([disc, text], { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });

    // Hardware-accelerated pointer tracking via GSAP quickTo
    const xToDot = gsap.quickTo(dot, "x", { duration: 0.04, ease: "none" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.04, ease: "none" });

    const xToRing = gsap.quickTo(ring, "x", { duration: 0.16, ease: "power2.out" });
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.16, ease: "power2.out" });

    const xToGlow = gsap.quickTo(glow, "x", { duration: 0.28, ease: "power2.out" });
    const yToGlow = gsap.quickTo(glow, "y", { duration: 0.28, ease: "power2.out" });

    const xToDisc = gsap.quickTo(disc, "x", { duration: 0.16, ease: "power3.out" });
    const yToDisc = gsap.quickTo(disc, "y", { duration: 0.16, ease: "power3.out" });
    const xToText = gsap.quickTo(text, "x", { duration: 0.16, ease: "power3.out" });
    const yToText = gsap.quickTo(text, "y", { duration: 0.16, ease: "power3.out" });

    let hasMoved = false;

    const handlePointerMove = (e) => {
      if (!isFinePointer.current) return;
      const { clientX, clientY } = e;

      xToDot(clientX);
      yToDot(clientY);
      xToRing(clientX);
      yToRing(clientY);
      xToGlow(clientX);
      yToGlow(clientY);
      xToDisc(clientX);
      yToDisc(clientY);
      xToText(clientX);
      yToText(clientY);

      if (!hasMoved) {
        hasMoved = true;
        if (!isHoveringProject.current) {
          gsap.to([glow, ring, dot], { opacity: 1, duration: 0.3, overwrite: "auto" });
        }
      }
    };

    // Event delegation for project preview hover & interactive elements
    const handlePointerOver = (e) => {
      if (!isFinePointer.current) return;

      // 1. Check if hovering project preview card
      const projectTarget = e.target.closest("[data-cursor='project']");
      if (projectTarget) {
        isHoveringProject.current = true;
        gsap.to([glow, ring, dot], {
          scale: 0,
          opacity: 0,
          duration: 0.22,
          ease: "power2.out",
          overwrite: "auto",
        });
        gsap.to([disc, text], {
          scale: 1,
          opacity: 1,
          duration: 0.28,
          ease: "power2.out",
          overwrite: "auto",
        });
        return;
      }

      // 2. Interactive elements (clickable links, buttons, cards)
      if (!isHoveringProject.current) {
        const interactive = e.target.closest(
          "a, button, input, textarea, [role='button'], .service-card, .folder-tab-card"
        );
        if (interactive) {
          gsap.to(ring, {
            scale: 1.45,
            duration: 0.22,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(dot, {
            scale: 0.75,
            duration: 0.22,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      }
    };

    const handlePointerOut = (e) => {
      if (!isFinePointer.current) return;

      // 1. Check if leaving project preview
      const projectTarget = e.target.closest("[data-cursor='project']");
      if (projectTarget) {
        const nextProject = e.relatedTarget ? e.relatedTarget.closest("[data-cursor='project']") : null;
        if (!nextProject) {
          isHoveringProject.current = false;
          gsap.to([disc, text], {
            scale: 0,
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
            overwrite: "auto",
          });
          gsap.to([glow, ring, dot], {
            scale: 1,
            opacity: 1,
            duration: 0.28,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      }

      // 2. Leaving interactive element
      if (!isHoveringProject.current) {
        const interactive = e.target.closest(
          "a, button, input, textarea, [role='button'], .service-card, .folder-tab-card"
        );
        if (interactive) {
          const nextInteractive = e.relatedTarget
            ? e.relatedTarget.closest("a, button, input, textarea, [role='button'], .service-card, .folder-tab-card")
            : null;
          if (!nextInteractive) {
            gsap.to(ring, {
              scale: 1,
              duration: 0.22,
              ease: "power2.out",
              overwrite: "auto",
            });
            gsap.to(dot, {
              scale: 1,
              duration: 0.22,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        }
      }
    };

    const handleMouseLeaveDoc = (e) => {
      if (!e.relatedTarget && !e.toElement) {
        gsap.to([glow, ring, dot, disc, text], { opacity: 0, duration: 0.22, overwrite: "auto" });
      }
    };

    const handleMouseEnterDoc = () => {
      if (!isHoveringProject.current && hasMoved) {
        gsap.to([glow, ring, dot], { opacity: 1, duration: 0.25, overwrite: "auto" });
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.addEventListener("pointerout", handlePointerOut, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeaveDoc);
    document.addEventListener("mouseenter", handleMouseEnterDoc);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.removeEventListener("mouseleave", handleMouseLeaveDoc);
      document.removeEventListener("mouseenter", handleMouseEnterDoc);
      if (fineQuery.removeEventListener) {
        fineQuery.removeEventListener("change", handleMediaChange);
      } else {
        fineQuery.removeListener(handleMediaChange);
      }
    };
  }, []);

  return createPortal(
    <>
      {/* 1. Global Ambient Background Glow (Pure white soft ambient illumination) */}
      <div
        ref={glowRef}
        className="site-cursor-glow"
        aria-hidden="true"
      />

      {/* 2. Global Dotted Rotating Follower Ring */}
      <div
        ref={ringRef}
        className="site-cursor-ring"
        aria-hidden="true"
      >
        <svg
          className="site-cursor-ring__spinner"
          viewBox="0 0 36 36"
          width="36"
          height="36"
          fill="none"
        >
          <circle
            cx="18"
            cy="18"
            r="15"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeDasharray="2.5 5.35"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 3. Global Precision Center Dot */}
      <div
        ref={dotRef}
        className="site-cursor-dot"
        aria-hidden="true"
      />

      {/* 4. Independent Negative Circle Disc (Project Section Only) */}
      <div
        ref={discRef}
        className="custom-cursor-disc"
        aria-hidden="true"
      />

      {/* 5. Independent Text Layer (Project Section Only) */}
      <div
        ref={textRef}
        className="custom-cursor-text"
        aria-hidden="true"
      >
        <span className="custom-cursor-text__line">VIEW</span>
        <span className="custom-cursor-text__line">PROJECT</span>
        <span className="custom-cursor-text__arrow-wrap">
          <svg
            className="custom-cursor-text__arrow"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </span>
      </div>
    </>,
    document.body
  );
}
