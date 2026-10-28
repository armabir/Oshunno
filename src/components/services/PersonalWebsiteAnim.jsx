/**
 * PersonalWebsiteAnim Component
 * 
 * Animation for Service 02: Personal Website
 * Features an executive profile / person in the center surrounded by
 * two animated orbital rings with rotating satellite dots.
 */
export default function PersonalWebsiteAnim() {
  return (
    <div className="service-visual service-visual--personal" aria-hidden="true">
      <div className="personal-orbit-stage">
        {/* Orbital Ring 1: Inner Orbit with Rotating Satellite Dot */}
        <div className="personal-orbit personal-orbit--inner">
          <div className="personal-orbit__track" />
          <div className="personal-orbit__satellite personal-orbit__satellite--1">
            <span className="personal-satellite-dot personal-satellite-dot--cyan" />
          </div>
        </div>

        {/* Orbital Ring 2: Outer Orbit with 2 Rotating Satellite Dots */}
        <div className="personal-orbit personal-orbit--outer">
          <div className="personal-orbit__track personal-orbit__track--dashed" />
          <div className="personal-orbit__satellite personal-orbit__satellite--2">
            <span className="personal-satellite-dot personal-satellite-dot--white" />
          </div>
          <div className="personal-orbit__satellite personal-orbit__satellite--3">
            <span className="personal-satellite-dot personal-satellite-dot--blue" />
          </div>
        </div>

        {/* Center Profile / Person Avatar Crest */}
        <div className="personal-center-profile">
          <div className="personal-center-profile__inner">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              className="personal-center-profile__icon"
            >
              {/* Refined Executive Silhouette */}
              <circle cx="12" cy="7.5" r="4" stroke="#ffffff" strokeWidth="1.8" />
              <path
                d="M4.5 20.5C4.5 16.634 7.85786 13.5 12 13.5C16.1421 13.5 19.5 16.634 19.5 20.5"
                stroke="#38bdf8"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="personal-center-profile__glow" />
        </div>

        {/* Ambient Cosmic Spark Points */}
        <span className="personal-spark personal-spark--1" />
        <span className="personal-spark personal-spark--2" />
        <span className="personal-spark personal-spark--3" />
      </div>
    </div>
  );
}
