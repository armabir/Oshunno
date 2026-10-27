/**
 * StartupAnim Component
 * 
 * Animation for Service 03: Startup
 * Features live SaaS hypergrowth metrics, dynamic upward vector chart,
 * and real-time telemetry indicators.
 */
export default function StartupAnim() {
  return (
    <div className="service-visual service-visual--startup" aria-hidden="true">
      <div className="startup-dashboard">
        {/* Metric Header Row */}
        <div className="startup-dashboard__header">
          <div className="startup-dashboard__metric">
            <span className="startup-dashboard__metric-val">$184.2K</span>
            <span className="startup-dashboard__metric-badge">↗ 148%</span>
          </div>
          <span className="startup-dashboard__metric-sub">MONTHLY VELOCITY</span>
        </div>

        {/* Dynamic Glowing Upward Chart */}
        <div className="startup-dashboard__chart-wrap">
          <svg className="startup-dashboard__chart" viewBox="0 0 180 60" fill="none">
            <defs>
              <linearGradient id="startup-chart-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Gradient Area Fill */}
            <path
              d="M0 50 Q 35 44, 60 36 T 115 22 T 155 12 L 180 6 L 180 60 L 0 60 Z"
              fill="url(#startup-chart-grad)"
            />

            {/* Glowing Trend Line */}
            <path
              d="M0 50 Q 35 44, 60 36 T 115 22 T 155 12 L 180 6"
              stroke="#38bdf8"
              strokeWidth="2.4"
              strokeLinecap="round"
              className="startup-dashboard__trendline"
            />

            {/* Active Data Focal Point */}
            <circle cx="180" cy="6" r="4.5" fill="#ffffff" filter="drop-shadow(0 0 6px #38bdf8)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
