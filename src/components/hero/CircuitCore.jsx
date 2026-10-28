import React, { useId } from "react";

/**
 * CircuitCore Component
 * 
 * Cybernetic circuit motherboard inside the center card:
 * 1. Smooth, rounder turns (all corners rounded with generous Bézier fillets).
 * 2. Elegant, slower dot velocities (6.0s - 8.0s loop cycles).
 * 3. Clean, stable microchip boxes (no distracting blinking).
 * 4. Multi-tiered following stroke lines trailing behind each dot, filling up the path
 *    from box to box and naturally fading out from the tail side.
 */
export default function CircuitCore() {
  const uid = useId();

  // Smooth Rounded Signal Loop Paths (All turns filleted with R=10px/R=6px)
  const pathMain = "M 0,180 L 300,180";
  const pathTop = "M 150,146 L 160,146 L 160,65 Q 160,55 170,55 L 208,55 Q 218,55 218,65 L 218,95 Q 218,105 228,105 L 245,105 Q 255,105 255,115 L 255,170 Q 255,180 245,180 L 150,180";
  const pathLeftTop = "M 45,180 L 45,136 Q 45,130 51,130 Q 57,130 57,124 L 57,95 Q 57,85 67,85 L 122,85 Q 132,85 132,95 L 132,170 Q 132,180 140,180 L 150,180 L 45,180";
  const pathBottom = "M 150,214 L 165,214 L 165,295 Q 165,305 155,305 L 67,305 Q 57,305 57,295 L 57,236 Q 57,230 51,230 Q 45,230 45,224 L 45,180 L 150,180";

  return (
    <div className="circuit-core-wrap" aria-hidden="true">
      <svg
        className="circuit-svg"
        viewBox="0 0 300 360"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Signal Dot Glow Filter */}
          <filter id={`dotGlow-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft Tail Fade Filter */}
          <filter id={`tailGlow-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Center Chip Glass Background Gradient */}
          <linearGradient id={`chipBg-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(24, 20, 62, 0.9)" />
            <stop offset="100%" stopColor="rgba(10, 8, 28, 0.95)" />
          </linearGradient>
        </defs>

        {/* ====================================================================
            1. STATIC CIRCUIT TRACES (ALL TURNS ROUNDED & SMOOTH)
            ==================================================================== */}
        <g className="circuit-traces" strokeLinecap="round" strokeLinejoin="round">
          {/* 1. Left Entrance -> Left Chip */}
          <path d="M 0,180 L 32,180" className="circuit-trace-line" />

          {/* 2. Left Chip -> Center Chip */}
          <path d="M 58,180 L 116,180" className="circuit-trace-line" />

          {/* 3. Left Chip -> Top-Left Chip (Smooth Rounded S-Curve) */}
          <path d="M 45,167 L 45,136 Q 45,130 51,130 Q 57,130 57,124 L 57,96" className="circuit-trace-line" />

          {/* 4. Top-Left Chip -> Top Chip (Smooth Rounded Corner R=10px) */}
          <path d="M 55,74 L 55,65 Q 55,55 65,55 L 146,55" className="circuit-trace-line" />

          {/* 5. Top-Left Chip -> Center Chip (Smooth Rounded Corner R=10px) */}
          <path d="M 68,85 L 122,85 Q 132,85 132,95 L 132,146" className="circuit-trace-line" />

          {/* 6. Center Chip -> Top Chip */}
          <path d="M 160,146 L 160,66" className="circuit-trace-line" />

          {/* 7. Top Chip -> Right Chip (All 3 Turns Smooth & Rounded R=10px) */}
          <path
            d="M 174,55 L 208,55 Q 218,55 218,65 L 218,95 Q 218,105 228,105 L 245,105 Q 255,105 255,115 L 255,167"
            className="circuit-trace-line"
          />

          {/* 8. Center Chip -> Right Chip */}
          <path d="M 184,180 L 242,180" className="circuit-trace-line" />

          {/* 9. Right Chip -> Exit Conveyor */}
          <path d="M 268,180 L 300,180" className="circuit-trace-line" />

          {/* 10. Right Chip -> Bottom Chip (All 3 Turns Smooth & Rounded R=10px) */}
          <path
            d="M 255,193 L 255,245 Q 255,255 245,255 L 228,255 Q 218,255 218,265 L 218,295 Q 218,305 208,305 L 179,305"
            className="circuit-trace-line"
          />

          {/* 11. Center Chip -> Bottom Chip */}
          <path d="M 165,214 L 165,294" className="circuit-trace-line" />

          {/* 12. Bottom Chip -> Bottom-Left Chip (Smooth Rounded Corner R=10px) */}
          <path d="M 151,305 L 67,305 Q 57,305 57,295 L 57,296" className="circuit-trace-line" />

          {/* 13. Bottom-Left Chip -> Left Chip (Smooth Rounded S-Curve) */}
          <path d="M 57,274 L 57,236 Q 57,230 51,230 Q 45,230 45,224 L 45,193" className="circuit-trace-line" />
        </g>

        {/* ====================================================================
            2. FOLLOWING STROKE LINES + SLOW MOVING SIGNAL DOTS
            - Fills up the path between boxes behind the dot
            - Tapers and fades out from the tail side
            ==================================================================== */}
        <g className="circuit-signals" strokeLinecap="round" strokeLinejoin="round">
          {/* STREAM 1: Main Horizontal Stream (Left Plasma -> Center -> Right Conveyor) */}
          <g className="signal-stream-main">
            {/* Layer 3: Longest Fading Tail (Soft Violet Ambient Halo) */}
            <path
              d={pathMain}
              fill="none"
              stroke="#6555ff"
              strokeWidth="3.6"
              opacity="0.32"
              filter={`url(#tailGlow-${uid})`}
              pathLength="1000"
              strokeDasharray="260 740"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="260"
                to="-740"
                dur="6.0s"
                repeatCount="indefinite"
              />
            </path>

            {/* Layer 2: Mid Energy Stream (Vibrant Periwinkle Glow) */}
            <path
              d={pathMain}
              fill="none"
              stroke="#91a0ff"
              strokeWidth="2.4"
              opacity="0.75"
              filter={`url(#tailGlow-${uid})`}
              pathLength="1000"
              strokeDasharray="160 840"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="160"
                to="-840"
                dur="6.0s"
                repeatCount="indefinite"
              />
            </path>

            {/* Layer 1: Leading Core Stroke (Razor-Sharp White-Blue Line following dot) */}
            <path
              d={pathMain}
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.8"
              opacity="0.95"
              pathLength="1000"
              strokeDasharray="75 925"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="75"
                to="-925"
                dur="6.0s"
                repeatCount="indefinite"
              />
            </path>

            {/* Leading White Signal Dot */}
            <circle r="3.2" fill="#ffffff" filter={`url(#dotGlow-${uid})`}>
              <animateMotion
                dur="6.0s"
                repeatCount="indefinite"
                path={pathMain}
              />
            </circle>
          </g>

          {/* STREAM 2: Top Processing Loop (Smooth Rounded Corners) */}
          <g className="signal-stream-top">
            {/* Layer 3: Longest Fading Tail */}
            <path
              d={pathTop}
              fill="none"
              stroke="#6555ff"
              strokeWidth="3.4"
              opacity="0.3"
              filter={`url(#tailGlow-${uid})`}
              pathLength="1000"
              strokeDasharray="240 760"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="240"
                to="-760"
                dur="6.8s"
                begin="0.5s"
                repeatCount="indefinite"
              />
            </path>

            {/* Layer 2: Mid Glow Tail */}
            <path
              d={pathTop}
              fill="none"
              stroke="#91a0ff"
              strokeWidth="2.2"
              opacity="0.7"
              filter={`url(#tailGlow-${uid})`}
              pathLength="1000"
              strokeDasharray="150 850"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="150"
                to="-850"
                dur="6.8s"
                begin="0.5s"
                repeatCount="indefinite"
              />
            </path>

            {/* Layer 1: Core Stroke Line */}
            <path
              d={pathTop}
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.8"
              opacity="0.95"
              pathLength="1000"
              strokeDasharray="70 930"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="70"
                to="-930"
                dur="6.8s"
                begin="0.5s"
                repeatCount="indefinite"
              />
            </path>

            {/* Leading Signal Dot */}
            <circle r="2.8" fill="#ffffff" filter={`url(#dotGlow-${uid})`}>
              <animateMotion
                dur="6.8s"
                begin="0.5s"
                repeatCount="indefinite"
                path={pathTop}
              />
            </circle>
          </g>

          {/* STREAM 3: Left-to-Top Circuit Loop (Smooth Rounded Corners) */}
          <g className="signal-stream-left">
            {/* Layer 3: Longest Fading Tail */}
            <path
              d={pathLeftTop}
              fill="none"
              stroke="#6555ff"
              strokeWidth="3.4"
              opacity="0.3"
              filter={`url(#tailGlow-${uid})`}
              pathLength="1000"
              strokeDasharray="240 760"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="240"
                to="-760"
                dur="7.2s"
                begin="1.2s"
                repeatCount="indefinite"
              />
            </path>

            {/* Layer 2: Mid Glow Tail */}
            <path
              d={pathLeftTop}
              fill="none"
              stroke="#91a0ff"
              strokeWidth="2.2"
              opacity="0.7"
              filter={`url(#tailGlow-${uid})`}
              pathLength="1000"
              strokeDasharray="150 850"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="150"
                to="-850"
                dur="7.2s"
                begin="1.2s"
                repeatCount="indefinite"
              />
            </path>

            {/* Layer 1: Core Stroke Line */}
            <path
              d={pathLeftTop}
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.8"
              opacity="0.95"
              pathLength="1000"
              strokeDasharray="70 930"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="70"
                to="-930"
                dur="7.2s"
                begin="1.2s"
                repeatCount="indefinite"
              />
            </path>

            {/* Leading Signal Dot */}
            <circle r="2.8" fill="#ffffff" filter={`url(#dotGlow-${uid})`}>
              <animateMotion
                dur="7.2s"
                begin="1.2s"
                repeatCount="indefinite"
                path={pathLeftTop}
              />
            </circle>
          </g>

          {/* STREAM 4: Bottom Circuit Loop (Smooth Rounded Corners) */}
          <g className="signal-stream-bottom">
            {/* Layer 3: Longest Fading Tail */}
            <path
              d={pathBottom}
              fill="none"
              stroke="#6555ff"
              strokeWidth="3.4"
              opacity="0.3"
              filter={`url(#tailGlow-${uid})`}
              pathLength="1000"
              strokeDasharray="240 760"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="240"
                to="-760"
                dur="7.6s"
                begin="2.0s"
                repeatCount="indefinite"
              />
            </path>

            {/* Layer 2: Mid Glow Tail */}
            <path
              d={pathBottom}
              fill="none"
              stroke="#91a0ff"
              strokeWidth="2.2"
              opacity="0.7"
              filter={`url(#tailGlow-${uid})`}
              pathLength="1000"
              strokeDasharray="150 850"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="150"
                to="-850"
                dur="7.6s"
                begin="2.0s"
                repeatCount="indefinite"
              />
            </path>

            {/* Layer 1: Core Stroke Line */}
            <path
              d={pathBottom}
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.8"
              opacity="0.95"
              pathLength="1000"
              strokeDasharray="70 930"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="70"
                to="-930"
                dur="7.6s"
                begin="2.0s"
                repeatCount="indefinite"
              />
            </path>

            {/* Leading Signal Dot */}
            <circle r="2.8" fill="#b2c2ff" filter={`url(#dotGlow-${uid})`}>
              <animateMotion
                dur="7.6s"
                begin="2.0s"
                repeatCount="indefinite"
                path={pathBottom}
              />
            </circle>
          </g>
        </g>

        {/* ====================================================================
            3. PERIPHERAL NODE BOXES (CLEAN & STABLE, NO BLINKING)
            ==================================================================== */}
        <g className="circuit-chips">
          {/* Node 1: Top Chip */}
          <g className="circuit-node">
            <rect x="146" y="44" width="28" height="22" rx="4" className="circuit-node__box" />
            <rect x="156" y="52" width="8" height="6" rx="1.5" className="circuit-node__core" />
          </g>

          {/* Node 2: Top-Left Chip */}
          <g className="circuit-node">
            <rect x="42" y="74" width="26" height="22" rx="4" className="circuit-node__box" />
            <rect x="51" y="81" width="8" height="6" rx="1.5" className="circuit-node__core" />
          </g>

          {/* Node 3: Left Chip (Plasma entrance receiver) */}
          <g className="circuit-node">
            <rect x="32" y="167" width="26" height="26" rx="4" className="circuit-node__box" />
            <rect x="41" y="176" width="8" height="8" rx="2" className="circuit-node__core" />
          </g>

          {/* Node 4: Bottom-Left Chip */}
          <g className="circuit-node">
            <rect x="44" y="274" width="26" height="22" rx="4" className="circuit-node__box" />
            <rect x="53" y="281" width="8" height="6" rx="1.5" className="circuit-node__core" />
          </g>

          {/* Node 5: Bottom Chip */}
          <g className="circuit-node">
            <rect x="151" y="294" width="28" height="22" rx="4" className="circuit-node__box" />
            <rect x="161" y="302" width="8" height="6" rx="1.5" className="circuit-node__core" />
          </g>

          {/* Node 6: Right Chip (Conveyor output transmitter) */}
          <g className="circuit-node">
            <rect x="242" y="167" width="26" height="26" rx="4" className="circuit-node__box" />
            <rect x="251" y="176" width="8" height="8" rx="2" className="circuit-node__core" />
          </g>
        </g>

        {/* ====================================================================
            4. CENTRAL LOGO PROCESSOR (STEADY CLEAN GLASS CHIP)
            ==================================================================== */}
        <g className="circuit-center-processor">
          {/* Subtle Outer Halo Frame */}
          <rect
            x="112"
            y="142"
            width="76"
            height="76"
            rx="18"
            className="circuit-processor__halo"
          />

          {/* Processor Glass Body */}
          <rect
            x="116"
            y="146"
            width="68"
            height="68"
            rx="14"
            fill={`url(#chipBg-${uid})`}
            className="circuit-processor__body"
          />

          {/* Micro Corner Bracket Details */}
          <path
            d="M 124,152 L 122,152 L 122,154 M 176,152 L 178,152 L 178,154 M 122,206 L 122,208 L 124,208 M 178,206 L 178,208 L 176,208"
            stroke="rgba(145, 160, 255, 0.4)"
            strokeWidth="1"
            fill="none"
          />

          {/* Pointfex Brand Logo Mark in the Middle */}
          <image
            href="/logo.png"
            x="127"
            y="157"
            width="46"
            height="46"
            preserveAspectRatio="xMidYMid meet"
            className="circuit-processor__logo-img"
          />

          {/* Fallback "P" glyph */}
          <text
            x="150"
            y="189"
            textAnchor="middle"
            className="circuit-processor__logo-fallback"
          >
            P
          </text>
        </g>
      </svg>
    </div>
  );
}
