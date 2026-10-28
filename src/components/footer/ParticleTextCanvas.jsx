import { useEffect, useRef, useCallback } from "react";
import "./ParticleTextCanvas.css";

/**
 * ParticleTextCanvas Component
 * 
 * Interactive rasterized dot/particle matrix banner displaying "POINTFEX".
 * - Offscreen text rasterization and pixel grid sampling.
 * - Physics-based cursor repulsion with elastic spring return and damping.
 * - Reactive color bloom transitioning from muted editorial slate into luminous Pointfex cyan on disturbance.
 * - IntersectionObserver lifecycle management for zero idle CPU usage.
 * - High-DPI Retina support and mobile touch responsiveness.
 */
export default function ParticleTextCanvas({ text = "POINTFEX" }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const animFrameIdRef = useRef(null);
  const isVisibleRef = useRef(false);
  const isReducedMotionRef = useRef(false);

  // Initialize and rasterize particle grid
  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height || 380);

    if (width === 0 || height === 0) return;

    // Handle high-DPI displays
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    ctx.scale(dpr, dpr);

    // Create offscreen canvas to sample text pixels
    const offCanvas = document.createElement("canvas");
    offCanvas.width = width;
    offCanvas.height = height;
    const offCtx = offCanvas.getContext("2d", { willReadFrequently: true });
    if (!offCtx) return;

    // Responsive font scaling: fit "POINTFEX" across ~92% of container width (50% larger scale)
    const targetWidth = width * 0.92;
    offCtx.font = `900 100px "Plus Jakarta Sans", "Inter", -apple-system, sans-serif`;
    const initialMetrics = offCtx.measureText(text);
    const scaleFactor = targetWidth / (initialMetrics.width || 1);
    const idealFontSize = Math.min(Math.floor(100 * scaleFactor), Math.floor(height * 0.88));
    const finalFontSize = Math.max(idealFontSize, 28);

    offCtx.font = `900 ${finalFontSize}px "Plus Jakarta Sans", "Inter", -apple-system, sans-serif`;
    offCtx.textAlign = "center";
    offCtx.textBaseline = "middle";
    offCtx.fillStyle = "#ffffff";
    offCtx.fillText(text, width / 2, height / 2);

    // Read pixel data
    let imgData;
    try {
      imgData = offCtx.getImageData(0, 0, width, height).data;
    } catch {
      return;
    }

    // Determine grid step & particle radius optimized for larger font scale & 60fps
    const isMobile = width < 768;
    const step = isMobile ? 5 : width > 1400 ? 6 : 5;
    const particleRadius = isMobile ? 1.3 : 1.6;

    const newParticles = [];
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const index = (y * width + x) * 4;
        const alpha = imgData[index + 3];

        if (alpha > 120) {
          newParticles.push({
            originX: x,
            originY: y,
            x: x,
            y: y,
            vx: 0,
            vy: 0,
            radius: particleRadius,
            active: 0,
          });
        }
      }
    }

    particlesRef.current = newParticles;
  }, [text]);

  useEffect(() => {
    // Check reduced motion preference
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    isReducedMotionRef.current = motionQuery.matches;

    const handleMotionChange = (e) => {
      isReducedMotionRef.current = e.matches;
    };
    if (motionQuery.addEventListener) {
      motionQuery.addEventListener("change", handleMotionChange);
    } else {
      motionQuery.addListener(handleMotionChange);
    }

    // Ensure fonts are loaded before initial sampling
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        initParticles();
      });
    } else {
      initParticles();
    }

    // Debounced window resize listener
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initParticles();
      }, 140);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Pointer events for desktop tracking
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    // Touch events for mobile interaction
    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = e.touches[0].clientX - rect.left;
        mouseRef.current.y = e.touches[0].clientY - rect.top;
        mouseRef.current.active = true;
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    canvas.addEventListener("pointermove", handlePointerMove, { passive: true });
    canvas.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
    canvas.addEventListener("touchend", handleTouchEnd, { passive: true });

    const render = () => {
      if (!isVisibleRef.current) {
        animFrameIdRef.current = null;
        return;
      }

      animFrameIdRef.current = requestAnimationFrame(render);

      const cvs = canvasRef.current;
      if (!cvs) return;
      const ctx = cvs.getContext("2d");
      if (!ctx) return;

      const rect = cvs.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const reducedMotion = isReducedMotionRef.current;

      // Dynamic interaction radius based on container dimensions (scaled for 50% larger name)
      const repulseRadius = Math.max(70, Math.min(130, width * 0.12));
      const repulseRadiusSq = repulseRadius * repulseRadius;
      const repulsionPower = 20;
      const springEase = 0.08;
      const damping = 0.88;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!reducedMotion) {
          // Repulsion from mouse cursor
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < repulseRadiusSq && distSq > 0) {
              const dist = Math.sqrt(distSq);
              const force = (repulseRadius - dist) / repulseRadius;
              const angle = Math.atan2(dy, dx);
              const push = force * force * repulsionPower;

              p.vx += Math.cos(angle) * push;
              p.vy += Math.sin(angle) * push;
              p.active = Math.min(1, p.active + force * 0.45);
            }
          }

          // Spring return to origin coordinate
          const dOriginX = p.originX - p.x;
          const dOriginY = p.originY - p.y;
          p.vx += dOriginX * springEase;
          p.vy += dOriginY * springEase;

          // Velocity damping & position integration
          p.vx *= damping;
          p.vy *= damping;
          p.x += p.vx;
          p.y += p.vy;

          // Color active decay
          p.active *= 0.93;

          // Snap to rest when velocity is negligible
          if (
            Math.abs(p.vx) < 0.01 &&
            Math.abs(p.vy) < 0.01 &&
            Math.abs(dOriginX) < 0.05 &&
            Math.abs(dOriginY) < 0.05
          ) {
            p.x = p.originX;
            p.y = p.originY;
            p.vx = 0;
            p.vy = 0;
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        // Smooth color transition from crisp muted white to luminous Pointfex cyan
        if (p.active > 0.04) {
          const r = Math.round(240 - p.active * 184); // 240 -> 56
          const g = Math.round(245 - p.active * 56);  // 245 -> 189
          const b = 248;
          const a = (0.45 + p.active * 0.5).toFixed(2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
        } else {
          ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
        }

        ctx.fill();
      }
    };

    // IntersectionObserver to only animate when in viewport (0% idle CPU)
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVisibleRef.current = entry.isIntersecting;

        if (entry.isIntersecting && !animFrameIdRef.current) {
          animFrameIdRef.current = requestAnimationFrame(render);
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener("change", handleMotionChange);
      } else {
        motionQuery.removeListener(handleMotionChange);
      }

      if (canvas) {
        canvas.removeEventListener("pointermove", handlePointerMove);
        canvas.removeEventListener("pointerleave", handlePointerLeave);
        canvas.removeEventListener("touchmove", handleTouchMove);
        canvas.removeEventListener("touchend", handleTouchEnd);
      }

      observer.disconnect();

      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [initParticles]);

  return (
    <div
      ref={containerRef}
      className="particle-text-banner"
      aria-label="Interactive particle display of agency name: POINTFEX"
    >
      <span className="sr-only">POINTFEX</span>
      <canvas
        ref={canvasRef}
        className="particle-text-canvas"
        aria-hidden="true"
      />
    </div>
  );
}
