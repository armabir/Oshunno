import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import "./CustomCursor.css";

/**
 * CustomNegativeCursor Component
 * 
 * High-impact negative inverted circular cursor (154px) displayed on project hover.
 * - Portaled directly to document.body to prevent any ancestor stacking context trapping.
 * - mix-blend-mode: difference applied directly on the cursor element for true mathematical inversion.
 * - Hardware-accelerated pointer tracking and scaling via GSAP.
 * - Enabled exclusively on desktop devices with fine hover capability.
 * - Non-blocking (pointer-events: none).
 */
export default function CustomCursor() {
  const cursorRef = useRef(null);
  const isFinePointer = useRef(false);

  useEffect(() => {
    // Only enable on desktop devices with fine hover capability
    const fineQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    isFinePointer.current = fineQuery.matches;

    const handleMediaChange = (e) => {
      isFinePointer.current = e.matches;
      if (!e.matches && cursorRef.current) {
        gsap.set(cursorRef.current, { scale: 0, opacity: 0 });
      }
    };

    if (fineQuery.addEventListener) {
      fineQuery.addEventListener("change", handleMediaChange);
    } else {
      fineQuery.addListener(handleMediaChange);
    }

    if (!isFinePointer.current) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Center cursor offset and start scaled to 0
    gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });

    // GSAP quickTo creates high-performance hardware-accelerated tracking
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.16, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.16, ease: "power3.out" });

    const handlePointerMove = (e) => {
      if (!isFinePointer.current) return;
      xTo(e.clientX);
      yTo(e.clientY);
    };

    // Event delegation for project preview hover triggers
    const handlePointerOver = (e) => {
      if (!isFinePointer.current) return;
      const target = e.target.closest("[data-cursor='project']");
      if (target) {
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          duration: 0.28,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    const handlePointerOut = (e) => {
      if (!isFinePointer.current) return;
      const target = e.target.closest("[data-cursor='project']");
      if (target) {
        const nextTarget = e.relatedTarget ? e.relatedTarget.closest("[data-cursor='project']") : null;
        if (!nextTarget) {
          gsap.to(cursor, {
            scale: 0,
            opacity: 0,
            duration: 0.22,
            ease: "power2.in",
            overwrite: "auto",
          });
        }
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.addEventListener("pointerout", handlePointerOut, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      if (fineQuery.removeEventListener) {
        fineQuery.removeEventListener("change", handleMediaChange);
      } else {
        fineQuery.removeListener(handleMediaChange);
      }
    };
  }, []);

  return createPortal(
    <div ref={cursorRef} className="custom-project-cursor" aria-hidden="true">
      <div className="custom-project-cursor__content">
        <span className="custom-project-cursor__line">VIEW</span>
        <span className="custom-project-cursor__line">PROJECT</span>
        <span className="custom-project-cursor__arrow-wrap">
          <svg
            className="custom-project-cursor__arrow"
            width="16"
            height="16"
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
    </div>,
    document.body
  );
}
