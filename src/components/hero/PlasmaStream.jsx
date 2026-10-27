import React, { useId, useRef, useState, useLayoutEffect } from "react";

/**
 * PlasmaStream Component
 * 
 * Optical Volumetric Light Flare (Exponential Filter Mesh):
 * - Geometry: Curved horn/funnel profile starting at 8px on the far left,
 *   expanding exponentially to 220px vertical spread at machine contact.
 * - Triple-Stage Optical Glow Pipeline:
 *   1. Atmospheric Bloom (Deep Blue/Purple): feGaussianBlur stdDeviation="32", mix-blend-mode: screen.
 *   2. Plasma Sheath (Electric Cyan): feGaussianBlur stdDeviation="8".
 *   3. Hyper-Intense White Core: 2px pure white center line with feGaussianBlur stdDeviation="1.5".
 *   4. Radiant Radial Flare: 140px diameter radial flare centered on the machine's left edge.
 * - Dynamic high-frequency breathing loop simulating pulsing raw plasma energy.
 */
export default function PlasmaStream() {
  const filterId = useId();
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 500, height: 320 });

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0) {
        setSize({
          width: Math.max(rect.width, 100),
          height: rect.height || 320,
        });
      }
    };

    measure();

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          setSize({
            width: Math.max(entry.contentRect.width, 100),
            height: entry.contentRect.height || 320,
          });
        }
      }
    });

    ro.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { width, height } = size;
  const half_h = height / 2;

  // Outer Volumetric Funnel Path (exponential spread from 8px at left to 220px at impact)
  const outerFunnel = `M 0,${half_h - 4} C ${width * 0.6},${half_h - 8} ${width * 0.85},${half_h - 90} ${width},${half_h - 110} L ${width},${half_h + 110} C ${width * 0.85},${half_h + 90} ${width * 0.6},${half_h + 8} 0,${half_h + 4} Z`;

  // Inner Plasma Sheath Conical Funnel
  const sheathFunnel = `M 0,${half_h - 2} C ${width * 0.65},${half_h - 4} ${width * 0.88},${half_h - 48} ${width},${half_h - 65} L ${width},${half_h + 65} C ${width * 0.88},${half_h + 48} ${width * 0.65},${half_h + 4} 0,${half_h + 2} Z`;

  return (
    <div ref={containerRef} className="plasma-beam-track" aria-hidden="true">
      <svg
        className="plasma-optical-svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Atmospheric Bloom Gradient (Deep Blue/Purple) */}
          <linearGradient
            id={`bloom-grad-${filterId}`}
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            <stop offset="0%" stopColor="rgba(30, 58, 138, 0)" />
            <stop offset="55%" stopColor="rgba(56, 189, 248, 0.25)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0.4)" />
          </linearGradient>

          {/* Plasma Sheath Gradient (Electric Cyan) */}
          <linearGradient
            id={`sheath-grad-${filterId}`}
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.2)" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#67e8f9" />
          </linearGradient>

          {/* Radiant Radial Impact Flare Gradient */}
          <radialGradient
            id={`radial-flare-${filterId}`}
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
            <stop offset="30%" stopColor="rgba(56, 189, 248, 0.7)" />
            <stop offset="70%" stopColor="rgba(56, 189, 248, 0)" />
          </radialGradient>

          {/* Anamorphic Flare Gradient */}
          <radialGradient
            id={`anamorphic-flare-${filterId}`}
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#38bdf8" />
            <stop offset="60%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>

          {/* Optical Filters with Exponential Falloff */}
          <filter
            id={`filter-bloom-${filterId}`}
            x="-30%"
            y="-80%"
            width="160%"
            height="260%"
          >
            <feGaussianBlur stdDeviation="32" result="blur1" />
          </filter>

          <filter
            id={`filter-sheath-${filterId}`}
            x="-20%"
            y="-50%"
            width="140%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="8" result="blur2" />
          </filter>

          <filter
            id={`filter-core-${filterId}`}
            x="-10%"
            y="-40%"
            width="120%"
            height="180%"
          >
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>

        {/* Optical Volumetric Mesh with Raw Plasma Hum Breathing */}
        <g className="plasma-optical-mesh">
          {/* Stage 1: Atmospheric Bloom (Deep Blue/Purple, 32px blur, mix-blend screen) */}
          <path
            d={outerFunnel}
            fill={`url(#bloom-grad-${filterId})`}
            filter={`url(#filter-bloom-${filterId})`}
            style={{ mixBlendMode: "screen" }}
          />

          {/* Stage 2: Plasma Sheath (Electric Cyan, 8px blur, conical core) */}
          <path
            d={sheathFunnel}
            fill={`url(#sheath-grad-${filterId})`}
            filter={`url(#filter-sheath-${filterId})`}
            style={{ mixBlendMode: "screen" }}
          />

          {/* Stage 3: Hyper-Intense White Core (2px razor-thin horizontal line) */}
          <line
            x1="0"
            y1={half_h}
            x2={width}
            y2={half_h}
            stroke="#ffffff"
            strokeWidth="3.5"
            filter={`url(#filter-core-${filterId})`}
            opacity="0.95"
          />
          <line
            x1="0"
            y1={half_h}
            x2={width}
            y2={half_h}
            stroke="#ffffff"
            strokeWidth="1.8"
          />

          {/* High-speed streaming energy pulses surging into the machine */}
          <line
            x1="0"
            y1={half_h}
            x2={width}
            y2={half_h}
            stroke="#67e8f9"
            strokeWidth="4"
            className="plasma-stream-surge"
          />

          {/* Impact Point Radiant Radial Flare (140px diameter centered at x=width, y=half_h) */}
          <circle
            cx={width}
            cy={half_h}
            r="70"
            fill={`url(#radial-flare-${filterId})`}
            style={{ mixBlendMode: "screen" }}
            className="plasma-impact-flare"
          />

          {/* Anamorphic vertical impact flare streak */}
          <ellipse
            cx={width}
            cy={half_h}
            rx="14"
            ry="110"
            fill={`url(#anamorphic-flare-${filterId})`}
            style={{ mixBlendMode: "screen" }}
            filter={`url(#filter-sheath-${filterId})`}
            className="plasma-impact-vertical"
          />

          {/* Brilliant specular focal spark */}
          <circle
            cx={width}
            cy={half_h}
            r="16"
            fill="#ffffff"
            filter={`url(#filter-core-${filterId})`}
          />
          <circle
            cx={width}
            cy={half_h}
            r="6"
            fill="#ffffff"
          />
        </g>
      </svg>
    </div>
  );
}
