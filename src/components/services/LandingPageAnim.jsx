/**
 * LandingPageAnim Component
 * 
 * Animation for Service 04: Landing Page
 * Features an intense vertical conversion light pillar with floating conversion badges
 * and an animated glowing magnetic CTA button.
 */
export default function LandingPageAnim() {
  return (
    <div className="service-visual service-visual--landing" aria-hidden="true">
      <div className="landing-stage">
        {/* Vertical Conversion Light Pillar */}
        <div className="landing-stage__pillar" />
        <div className="landing-stage__pillar-glow" />

        {/* Floating Conversion Badges */}
        <div className="landing-stage__badge-float landing-stage__badge-float--1">
          <span className="landing-stage__badge-dot" />
          <span>+38.4% CVR</span>
        </div>
        <div className="landing-stage__badge-float landing-stage__badge-float--2">
          <span>0.4s FCP</span>
        </div>

        {/* Magnetic Animated CTA Trigger */}
        <div className="landing-stage__cta">
          <span className="landing-stage__cta-text">START CONVERTING</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="landing-stage__cta-arrow">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </div>
  );
}
