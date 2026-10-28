/**
 * LandingPageAnim Component
 * 
 * Animation for Service 04: Landing Page
 * Features an animated blueprint wireframe of a high-converting website:
 * - Browser window frame styled in the cohesive cyan/blue aesthetic of Image 2.
 * - Wireframe hero skeleton with animated headline shimmer & CTA button pills.
 * - Modular metric cards with live dynamic SVG conversion trendline & progress bar.
 * - Continuous luminous laser scanline sweeping vertically down the blueprint.
 */
export default function LandingPageAnim() {
  return (
    <div className="service-visual service-visual--landing" aria-hidden="true">
      <div className="wireframe-stage">
        {/* Browser Window Frame */}
        <div className="wireframe-browser">
          {/* Window Control Header Bar */}
          <div className="wireframe-header">
            <div className="wireframe-dots">
              <span className="wireframe-dot wireframe-dot--red" />
              <span className="wireframe-dot wireframe-dot--amber" />
              <span className="wireframe-dot wireframe-dot--green" />
            </div>
            <div className="wireframe-search-pill" />
          </div>

          {/* Wireframe Canvas Body */}
          <div className="wireframe-body">
            {/* Nav Row */}
            <div className="wireframe-nav-row">
              <div className="wireframe-logo-skeleton" />
              <div className="wireframe-nav-links">
                <span className="wireframe-nav-item" />
                <span className="wireframe-nav-item" />
                <span className="wireframe-nav-item" />
              </div>
            </div>

            {/* Hero Skeleton Block */}
            <div className="wireframe-hero">
              <div className="wireframe-headline-bar" />
              <div className="wireframe-sub-bar" />
              <div className="wireframe-btn-row">
                <div className="wireframe-btn-pill wireframe-btn-pill--primary" />
                <div className="wireframe-btn-pill wireframe-btn-pill--ghost" />
              </div>
            </div>

            {/* Modular UI Cards Row */}
            <div className="wireframe-grid">
              {/* Card A: Dynamic Vector Conversion Trend Chart */}
              <div className="wireframe-card wireframe-card--chart">
                <div className="wireframe-card__header">
                  <span className="wireframe-mini-title" />
                  <span className="wireframe-mini-badge" />
                </div>
                <div className="wireframe-chart-svg-wrap">
                  <svg viewBox="0 0 100 40" fill="none" className="wireframe-chart-svg">
                    <path
                      d="M0 32 Q 25 28, 45 20 T 80 12 L 100 4"
                      stroke="#38bdf8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="wireframe-chart-path"
                    />
                    <circle cx="100" cy="4" r="3" fill="#ffffff" filter="drop-shadow(0 0 5px #38bdf8)" />
                  </svg>
                </div>
              </div>

              {/* Card B: Modular Metrics & Progress Meter */}
              <div className="wireframe-card wireframe-card--metrics">
                <div className="wireframe-metric-val" />
                <div className="wireframe-progress-track">
                  <div className="wireframe-progress-bar" />
                </div>
                <div className="wireframe-card-bars">
                  <span className="wireframe-card-bar" />
                  <span className="wireframe-card-bar wireframe-card-bar--short" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient Corner Crosshairs (Blueprint Aesthetic) */}
        <span className="wireframe-cross wireframe-cross--tl">+</span>
        <span className="wireframe-cross wireframe-cross--tr">+</span>
      </div>
    </div>
  );
}
