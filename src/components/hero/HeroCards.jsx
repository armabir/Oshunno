/**
 * HeroCards Component
 * 
 * Simple website wireframe card:
 * - More width than height (landscape desktop browser ratio)
 * - Pure geometric wireframe with NO extra text or labels
 * - Window control dots (red, amber, green) & clean URL search pill
 * - Nav skeleton with logo pill & nav item bars
 * - Hero skeleton with headline shimmer bar, subline bar, & CTA button pills
 * - Modular website wireframe grid (trendline chart, metrics progress bar, media box, product blocks)
 * - Ambient blueprint corner crosshairs (+)
 */

export function WireframeWebsiteCard({ data }) {
  // Support data.type or data.wireframe?.type
  const type = data.type || (data.wireframe && data.wireframe.type) || "landing";

  return (
    <article className="conveyor-card conveyor-card--wireframe">
      {/* Ambient Blueprint Crosshairs */}
      <span className="card-wireframe-cross card-wireframe-cross--tl">+</span>
      <span className="card-wireframe-cross card-wireframe-cross--tr">+</span>

      {/* Browser Window Control Header Bar */}
      <div className="card-wireframe-header">
        <div className="card-wireframe-dots">
          <span className="card-wireframe-dot card-wireframe-dot--red" />
          <span className="card-wireframe-dot card-wireframe-dot--amber" />
          <span className="card-wireframe-dot card-wireframe-dot--green" />
        </div>
        <div className="card-wireframe-search-pill" />
      </div>

      {/* Wireframe Canvas Body */}
      <div className="card-wireframe-body">
        {/* Nav Skeleton */}
        <div className="card-wireframe-nav-row">
          <div className="card-wireframe-logo-skeleton" />
          <div className="card-wireframe-nav-links">
            <span className="card-wireframe-nav-item" />
            <span className="card-wireframe-nav-item" />
            <span className="card-wireframe-nav-item" />
          </div>
        </div>

        {/* Hero Skeleton Block with Shimmer */}
        <div className="card-wireframe-hero">
          <div className="card-wireframe-headline-bar" />
          <div className="card-wireframe-sub-bar" />
          <div className="card-wireframe-btn-row">
            <div className="card-wireframe-btn-pill card-wireframe-btn-pill--primary" />
            <div className="card-wireframe-btn-pill card-wireframe-btn-pill--ghost" />
          </div>
        </div>

        {/* Modular UI Cards Row (Archetype-specific website wireframe, pure geometry) */}
        {(type === "landing" || type === "analytics") && (
          <div className="card-wireframe-grid">
            {/* Dynamic Vector Conversion Trend Chart */}
            <div className="card-wireframe-module card-wireframe-module--chart">
              <div className="card-wireframe-module__head">
                <span className="card-wireframe-mini-title" />
                <span className="card-wireframe-mini-badge" />
              </div>
              <div className="card-wireframe-chart-svg-wrap">
                <svg viewBox="0 0 100 34" fill="none" className="card-wireframe-chart-svg">
                  <path
                    d="M0 26 Q 25 22, 45 15 T 80 8 L 100 2"
                    stroke="#7e72ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="card-wireframe-chart-path"
                  />
                  <circle cx="100" cy="2" r="3" fill="#ffffff" filter="drop-shadow(0 0 5px #b2c2ff)" />
                </svg>
              </div>
            </div>

            {/* Modular Metrics & Progress Meter */}
            <div className="card-wireframe-module card-wireframe-module--metrics">
              <div className="card-wireframe-metric-val" />
              <div className="card-wireframe-progress-track">
                <div className="card-wireframe-progress-bar" />
              </div>
              <div className="card-wireframe-bars">
                <span className="card-wireframe-bar" />
                <span className="card-wireframe-bar card-wireframe-bar--short" />
              </div>
            </div>
          </div>
        )}

        {(type === "brand" || type === "showcase") && (
          <div className="card-wireframe-grid card-wireframe-grid--showcase">
            <div className="card-wireframe-module card-wireframe-module--media">
              <div className="card-wireframe-media-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="#7e72ff" strokeWidth="1.5" className="card-wireframe-media-icon">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
            </div>
            <div className="card-wireframe-module card-wireframe-module--editorial">
              <span className="card-wireframe-bar card-wireframe-bar--primary" />
              <span className="card-wireframe-bar" />
              <span className="card-wireframe-bar card-wireframe-bar--short" />
              <div className="card-wireframe-tag-pill" />
            </div>
          </div>
        )}

        {type === "dashboard" && (
          <div className="card-wireframe-grid card-wireframe-grid--dashboard">
            <div className="card-wireframe-module">
              <div className="card-wireframe-kpi-row">
                <span className="card-wireframe-kpi-pill" />
                <span className="card-wireframe-kpi-dot" />
              </div>
              <div className="card-wireframe-bars">
                <span className="card-wireframe-bar" />
                <span className="card-wireframe-bar card-wireframe-bar--short" />
              </div>
            </div>
            <div className="card-wireframe-module card-wireframe-module--barchart">
              <div className="card-wireframe-barchart-wrap">
                <span className="card-wireframe-bar-col card-wireframe-bar-col--1" />
                <span className="card-wireframe-bar-col card-wireframe-bar-col--2" />
                <span className="card-wireframe-bar-col card-wireframe-bar-col--3" />
                <span className="card-wireframe-bar-col card-wireframe-bar-col--4" />
                <span className="card-wireframe-bar-col card-wireframe-bar-col--5" />
              </div>
            </div>
          </div>
        )}

        {(type === "products" || type === "commerce") && (
          <div className="card-wireframe-grid card-wireframe-grid--products">
            <div className="card-wireframe-module card-wireframe-module--prod">
              <div className="card-wireframe-thumb" />
              <span className="card-wireframe-bar card-wireframe-bar--short" />
              <span className="card-wireframe-price-pill" />
            </div>
            <div className="card-wireframe-module card-wireframe-module--prod">
              <div className="card-wireframe-thumb" />
              <span className="card-wireframe-bar card-wireframe-bar--short" />
              <span className="card-wireframe-price-pill" />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

// Aliases for seamless backward compatibility
export const PolishedCard = WireframeWebsiteCard;
export const BrokenCard = WireframeWebsiteCard;


