/**
 * StartupAnim Component
 * 
 * Animation for Service 03: Startup
 * Features an aerospace hypergrowth rocket vessel launching dynamically:
 * - Precision vector spacecraft fuselage with metallic depth, porthole glint, and delta fins.
 * - Flawlessly attached continuous plasma flame emerging directly from inside the engine nozzle (0px separation gap).
 * - Downward trailing exhaust shockwaves and high-velocity atmospheric speed streaks.
 * - Twinkling cosmic star field.
 */
export default function StartupAnim() {
  return (
    <div className="service-visual service-visual--startup" aria-hidden="true">
      <div className="rocket-stage">
        {/* Ambient Cosmic Stars & Space Dust */}
        <div className="rocket-stars">
          <span className="rocket-star rocket-star--1" />
          <span className="rocket-star rocket-star--2" />
          <span className="rocket-star rocket-star--3" />
          <span className="rocket-star rocket-star--4" />
          <span className="rocket-star rocket-star--5" />
          <span className="rocket-star rocket-star--6" />
        </div>

        {/* High-Velocity Propulsion Streaks Trailing Downward */}
        <div className="rocket-streaks">
          <span className="rocket-streak rocket-streak--1" />
          <span className="rocket-streak rocket-streak--2" />
          <span className="rocket-streak rocket-streak--3" />
          <span className="rocket-streak rocket-streak--4" />
          <span className="rocket-streak rocket-streak--5" />
        </div>

        {/* Main Rocket Vessel with Integrated Exhaust Plume (Zero Gap) */}
        <div className="rocket-vessel-wrap">
          <svg
            className="rocket-svg"
            viewBox="0 0 80 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Metallic Fuselage Gradient */}
              <linearGradient id="rocketBodyGrad" x1="20" y1="10" x2="60" y2="90" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="35%" stopColor="#cbd5e1" />
                <stop offset="70%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>

              {/* Shaded Nose Cone Gradient */}
              <linearGradient id="rocketNoseGrad" x1="40" y1="8" x2="40" y2="34" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>

              {/* Stabilizer Fin Gradient */}
              <linearGradient id="rocketFinGrad" x1="12" y1="65" x2="68" y2="98" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="60%" stopColor="#0369a1" />
                <stop offset="100%" stopColor="#0c4a6e" />
              </linearGradient>

              {/* Porthole Window Gradient */}
              <radialGradient id="rocketWindowGrad" cx="40" cy="50" r="9" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#bae6fd" />
                <stop offset="65%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#082f49" />
              </radialGradient>

              {/* Engine Exhaust Nozzle Gradient */}
              <linearGradient id="rocketNozzleGrad" x1="32" y1="90" x2="48" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="50%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>

              {/* Outer Plasma Flame Gradient */}
              <linearGradient id="flameOuterGrad" x1="40" y1="99" x2="40" y2="152" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
              </linearGradient>

              {/* Mid Vivid Cyan Flame Gradient */}
              <linearGradient id="flameMidGrad" x1="40" y1="99" x2="40" y2="136" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="60%" stopColor="#0284c7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
              </linearGradient>

              {/* Core White-Hot Flame Gradient */}
              <linearGradient id="flameCoreGrad" x1="40" y1="99" x2="40" y2="120" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#bae6fd" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>

              {/* Specular Hull Filter */}
              <filter id="rocketHullGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#38bdf8" floodOpacity="0.55" />
              </filter>

              {/* Plasma Flame Radiant Glow Filter */}
              <filter id="plasmaGlow" x="-50%" y="-20%" width="200%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* =============================================================
                1. CONTINUOUS PLASMA THRUSTER EXHAUST FLAME
                Directly overlaps nozzle opening (y=99) so separation is 0px
                ============================================================= */}
            <g className="rocket-exhaust-flame" filter="url(#plasmaGlow)">
              {/* Outer Blue/Cyan Dispersion Plume */}
              <path
                d="M32 99 Q24 120 40 152 Q56 120 48 99 Z"
                fill="url(#flameOuterGrad)"
                className="rocket-flame-path rocket-flame-path--outer"
              />

              {/* Mid Vivid Cyan Flame Plume */}
              <path
                d="M34 99 Q28 116 40 136 Q52 116 46 99 Z"
                fill="url(#flameMidGrad)"
                className="rocket-flame-path rocket-flame-path--mid"
              />

              {/* Inner White-Hot Plasma Core Flame */}
              <path
                d="M36 99 Q33 108 40 120 Q47 108 44 99 Z"
                fill="url(#flameCoreGrad)"
                className="rocket-flame-path rocket-flame-path--core"
              />
            </g>

            {/* Trailing Particle Shockwave Gas Rings */}
            <g className="rocket-shockwaves">
              <ellipse cx="40" cy="132" rx="10" ry="3.5" stroke="#38bdf8" strokeWidth="1.2" opacity="0.75" className="rocket-ring rocket-ring--1" />
              <ellipse cx="40" cy="144" rx="15" ry="4.5" stroke="#38bdf8" strokeWidth="1" opacity="0.5" className="rocket-ring rocket-ring--2" />
              <ellipse cx="40" cy="154" rx="20" ry="5.5" stroke="#38bdf8" strokeWidth="0.8" opacity="0.3" className="rocket-ring rocket-ring--3" />
            </g>

            {/* =============================================================
                2. AERODYNAMIC ROCKET VESSEL FUSELAGE
                ============================================================= */}
            {/* Left Stabilizer Delta Fin */}
            <path
              d="M26 68L12 92C11 94 13 97 16 96L27 91L26 68Z"
              fill="url(#rocketFinGrad)"
              stroke="rgba(56, 189, 248, 0.7)"
              strokeWidth="1"
            />

            {/* Right Stabilizer Delta Fin */}
            <path
              d="M54 68L68 92C69 94 67 97 64 96L53 91L54 68Z"
              fill="url(#rocketFinGrad)"
              stroke="rgba(56, 189, 248, 0.7)"
              strokeWidth="1"
            />

            {/* Main Rocket Fuselage Body */}
            <path
              d="M40 8C31 20 25 45 25 86C25 88 27 90 29 90H51C53 90 55 88 55 86C55 45 49 20 40 8Z"
              fill="url(#rocketBodyGrad)"
              filter="url(#rocketHullGlow)"
            />

            {/* Specular Highlight Streak (Portside Reflection) */}
            <path
              d="M40 10C33 22 28 44 28 84"
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* Aerodynamic Cyan Nosecone Cap */}
            <path
              d="M40 8C35 15 31 24 30 32C35 34 45 34 50 32C49 24 45 15 40 8Z"
              fill="url(#rocketNoseGrad)"
            />

            {/* Cockpit Porthole Window */}
            <circle cx="40" cy="50" r="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.8" />
            <circle cx="40" cy="50" r="7.5" fill="url(#rocketWindowGrad)" />
            {/* Window Glass Highlight Glint */}
            <ellipse cx="38" cy="48" rx="3.5" ry="2" fill="#ffffff" opacity="0.85" transform="rotate(-30 38 48)" />

            {/* Center Dorsal Fin Strip */}
            <path
              d="M39.2 68H40.8L40.8 88H39.2Z"
              fill="#38bdf8"
              opacity="0.9"
            />

            {/* Engine Exhaust Nozzle (Base at y=100) */}
            <path
              d="M32 90L29 98C29 99 30 100 31 100H49C50 100 51 99 51 98L48 90H32Z"
              fill="url(#rocketNozzleGrad)"
              stroke="#38bdf8"
              strokeWidth="1.2"
            />

            {/* Glowing Internal Emitter Lip */}
            <ellipse cx="40" cy="99.5" rx="8.5" ry="2" fill="#ffffff" filter="drop-shadow(0 0 6px #38bdf8)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
