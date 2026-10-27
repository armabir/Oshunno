/**
 * BrandWebsiteAnim Component
 * 
 * Animation for Service 01: Brand Website
 * Features an overhead volumetric spotlight beam projecting onto a floating luxury brand emblem badge.
 */
export default function BrandWebsiteAnim() {
  return (
    <div className="service-visual service-visual--brand" aria-hidden="true">
      <div className="brand-stage">
        {/* Overhead Spot Emitter */}
        <div className="brand-stage__emitter">
          <div className="brand-stage__emitter-cap" />
          <div className="brand-stage__emitter-bulb" />
        </div>

        {/* Volumetric Downward Light Cone */}
        <div className="brand-stage__cone" />

        {/* Floating Brand Monogram Badge */}
        <div className="brand-stage__badge">
          <div className="brand-stage__badge-inner">
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              className="brand-stage__icon"
            >
              <rect x="4" y="4" width="24" height="24" rx="6" stroke="#38bdf8" strokeWidth="1.8" />
              <circle cx="16" cy="16" r="6" stroke="#ffffff" strokeWidth="1.8" />
              <path d="M16 6V10M16 22V26M6 16H10M22 16H26" stroke="#60a5fa" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
          <div className="brand-stage__badge-glow" />
        </div>

        {/* Ambient Floating Spark Ticks */}
        <span className="brand-stage__spark brand-stage__spark--1" />
        <span className="brand-stage__spark brand-stage__spark--2" />
        <span className="brand-stage__spark brand-stage__spark--3" />
      </div>
    </div>
  );
}
