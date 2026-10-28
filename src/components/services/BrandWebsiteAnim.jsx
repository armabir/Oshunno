/**
 * BrandWebsiteAnim Component
 * 
 * Animation for Service 01: Brand Website
 * Features:
 * - Overlapping Venn diagram circles labeled "Brand" and "Audience".
 * - Both circle tracks are dotted and continuously rotate smoothly.
 * - Central squircle badge with an iconic brain symbol.
 * - Ambient twinkling cosmic dust particles (no vertical bar behind).
 */
export default function BrandWebsiteAnim() {
  return (
    <div className="service-visual service-visual--brand" aria-hidden="true">
      <div className="venn-stage">
        {/* Ambient Twinkling Cosmic Stars */}
        <div className="venn-stars">
          <span className="venn-star venn-star--1" />
          <span className="venn-star venn-star--2" />
          <span className="venn-star venn-star--3" />
          <span className="venn-star venn-star--4" />
          <span className="venn-star venn-star--5" />
        </div>

        {/* Overlapping Venn Diagram Circles with Rotating Dotted Tracks */}
        <div className="venn-diagram">
          {/* Left Circle: Brand */}
          <div className="venn-circle venn-circle--brand">
            <div className="venn-circle-track venn-circle-track--left" />
            <span className="venn-label venn-label--brand">Brand</span>
          </div>

          {/* Right Circle: Audience */}
          <div className="venn-circle venn-circle--audience">
            <div className="venn-circle-track venn-circle-track--right" />
            <span className="venn-label venn-label--audience">Audience</span>
          </div>
        </div>

        {/* Central Intersection Squircle Badge with Iconic Brain Icon */}
        <div className="venn-badge">
          <div className="venn-badge__inner">
            <svg
              className="venn-brain-icon"
              viewBox="0 0 32 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Constellation Network Synapse Lines */}
              <g stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.9">
                {/* Silhouette Boundary */}
                <line x1="6" y1="15" x2="7" y2="10" />
                <line x1="7" y1="10" x2="11" y2="6" />
                <line x1="11" y1="6" x2="16" y2="4" />
                <line x1="16" y1="4" x2="21" y2="5" />
                <line x1="21" y1="5" x2="25" y2="8" />
                <line x1="25" y1="8" x2="28" y2="12" />
                <line x1="28" y1="12" x2="27" y2="17" />
                <line x1="27" y1="17" x2="23" y2="20" />
                <line x1="23" y1="20" x2="19" y2="22" />
                <line x1="19" y1="22" x2="14" y2="21" />
                <line x1="14" y1="21" x2="10" y2="19" />
                <line x1="10" y1="19" x2="6" y2="15" />

                {/* Internal Synapse Interconnections */}
                <line x1="11" y1="6" x2="12" y2="11" />
                <line x1="7" y1="10" x2="12" y2="11" />
                <line x1="16" y1="4" x2="16" y2="9" />
                <line x1="12" y1="11" x2="16" y2="9" />
                <line x1="16" y1="9" x2="21" y2="10" />
                <line x1="21" y1="5" x2="21" y2="10" />
                <line x1="21" y1="10" x2="25" y2="8" />
                <line x1="21" y1="10" x2="24" y2="14" />
                <line x1="24" y1="14" x2="28" y2="12" />
                <line x1="24" y1="14" x2="27" y2="17" />
                <line x1="12" y1="11" x2="14" y2="15" />
                <line x1="14" y1="15" x2="16" y2="9" />
                <line x1="14" y1="15" x2="19" y2="15" />
                <line x1="16" y1="9" x2="19" y2="15" />
                <line x1="19" y1="15" x2="21" y2="10" />
                <line x1="19" y1="15" x2="24" y2="14" />
                <line x1="14" y1="15" x2="10" y2="19" />
                <line x1="14" y1="15" x2="14" y2="21" />
                <line x1="19" y1="15" x2="19" y2="22" />
                <line x1="19" y1="15" x2="23" y2="20" />
              </g>

              {/* Glowing Constellation Neural Nodes */}
              <g fill="#ffffff" filter="drop-shadow(0 0 2px #38bdf8)">
                <circle cx="6" cy="15" r="1.5" />
                <circle cx="7" cy="10" r="1.5" />
                <circle cx="11" cy="6" r="1.6" />
                <circle cx="16" cy="4" r="1.7" />
                <circle cx="21" cy="5" r="1.6" />
                <circle cx="25" cy="8" r="1.6" />
                <circle cx="28" cy="12" r="1.5" />
                <circle cx="27" cy="17" r="1.5" />
                <circle cx="23" cy="20" r="1.6" />
                <circle cx="19" cy="22" r="1.6" />
                <circle cx="14" cy="21" r="1.5" />
                <circle cx="10" cy="19" r="1.5" />
                {/* Central Key Nodes */}
                <circle cx="12" cy="11" r="1.8" />
                <circle cx="16" cy="9" r="2" />
                <circle cx="21" cy="10" r="1.8" />
                <circle cx="14" cy="15" r="1.8" />
                <circle cx="19" cy="15" r="1.9" />
                <circle cx="24" cy="14" r="1.7" />
              </g>
            </svg>
          </div>
          <div className="venn-badge__glow" />
          <div className="venn-badge__reflection" />
        </div>
      </div>
    </div>
  );
}
