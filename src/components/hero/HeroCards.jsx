/**
 * HeroCards Component
 * 
 * Renders the two visual representations:
 * - BrokenCard: Muted slate, red/orange error tags, misaligned wireframes, crooked tilt.
 * - PolishedCard: Luxury obsidian, razor-thin cyan border, micro-charts, sub-second metrics.
 */

export function BrokenCard({ data }) {
  const { broken } = data;

  return (
    <article className={`conveyor-card conveyor-card--broken ${broken.tilt}`}>
      {/* Top Header Tag */}
      <div className="conveyor-card__header">
        <span className={`conveyor-tag conveyor-tag--${broken.tagType}`}>
          <span className="conveyor-tag__dot" />
          <span>{broken.tag}</span>
        </span>
        <span className="conveyor-card__warning-icon" title="Broken Build">⚠</span>
      </div>

      {/* Main Broken Wireframe Body */}
      <div className="conveyor-card__body">
        <h4 className="conveyor-card__title conveyor-card__title--broken">
          {broken.title}
        </h4>
        <p className="conveyor-card__subtitle">{broken.subtitle}</p>

        {/* Broken Wireframe Visual */}
        <div className="broken-wireframe" aria-hidden="true">
          <div className="broken-wireframe__bar broken-wireframe__bar--1" />
          <div className="broken-wireframe__bar broken-wireframe__bar--2" />
          <div className="broken-wireframe__box">
            <span className="broken-wireframe__cross">✕</span>
            <span className="broken-wireframe__label">Asset Timeout (504)</span>
          </div>
        </div>
      </div>

      {/* Bottom Broken Metric Strip */}
      <div className="conveyor-card__footer conveyor-card__footer--broken">
        <span className="conveyor-card__metric-label">{broken.metricLabel}</span>
        <span className="conveyor-card__metric-val conveyor-card__metric-val--error">
          {broken.metricValue}
        </span>
      </div>
    </article>
  );
}

export function PolishedCard({ data }) {
  const { polished } = data;

  return (
    <article className="conveyor-card conveyor-card--polished">
      {/* Top Header Tag */}
      <div className="conveyor-card__header">
        <span className="conveyor-tag conveyor-tag--success">
          <span className="conveyor-tag__dot conveyor-tag__dot--pulse" />
          <span>{polished.tag}</span>
        </span>
        <span className="conveyor-card__sparkle">✦</span>
      </div>

      {/* Main Polished Body */}
      <div className="conveyor-card__body">
        <h4 className="conveyor-card__title conveyor-card__title--polished">
          {polished.title}
        </h4>
        <p className="conveyor-card__subtitle conveyor-card__subtitle--polished">
          {polished.subtitle}
        </p>

        {/* Polished Visual Micro-Interface */}
        <div className="polished-interface" aria-hidden="true">
          {/* Micro Trendline / Telemetry Visual */}
          <div className="polished-interface__preview">
            <div className="polished-interface__chart">
              <svg viewBox="0 0 100 28" fill="none" className="polished-interface__chart-svg">
                <path
                  d="M0 24 Q 25 20, 45 14 T 80 8 L 100 2"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="100" cy="2" r="3" fill="#ffffff" filter="drop-shadow(0 0 4px #38bdf8)" />
              </svg>
            </div>
            <div className="polished-interface__bars">
              <span className="polished-interface__bar" style={{ height: "45%" }} />
              <span className="polished-interface__bar" style={{ height: "70%" }} />
              <span className="polished-interface__bar" style={{ height: "95%" }} />
              <span className="polished-interface__bar" style={{ height: "60%" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Polished Metric Strip */}
      <div className="conveyor-card__footer conveyor-card__footer--polished">
        <span className="conveyor-card__metric-label">{polished.metricLabel}</span>
        <span className="conveyor-card__metric-val conveyor-card__metric-val--cyan">
          {polished.metricValue}
        </span>
      </div>
    </article>
  );
}
