/**
 * PersonalWebsiteAnim Component
 * 
 * Animation for Service 02: Personal Website
 * Features an editorial personal digital residence card with floating holographic presence badge
 * and live audio/voice frequency waveform.
 */
export default function PersonalWebsiteAnim() {
  return (
    <div className="service-visual service-visual--personal" aria-hidden="true">
      <div className="personal-card">
        {/* Holographic Avatar / Crest Emblem */}
        <div className="personal-card__avatar">
          <div className="personal-card__avatar-glow" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="personal-card__avatar-icon">
            <circle cx="12" cy="8" r="4" stroke="#38bdf8" strokeWidth="1.8" />
            <path d="M5 20C5 16.5 8 14 12 14C16 14 19 16.5 19 20" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span className="personal-card__online-dot" />
        </div>

        {/* Live Audio / Frequency Waveform */}
        <div className="personal-card__presence">
          <div className="personal-card__meta">
            <span className="personal-card__handle">AUTHORITY / RESIDENCE</span>
            <span className="personal-card__status">LIVE • Q1</span>
          </div>

          <div className="personal-card__waveform">
            <span className="personal-card__bar personal-card__bar--1" />
            <span className="personal-card__bar personal-card__bar--2" />
            <span className="personal-card__bar personal-card__bar--3" />
            <span className="personal-card__bar personal-card__bar--4" />
            <span className="personal-card__bar personal-card__bar--5" />
            <span className="personal-card__bar personal-card__bar--6" />
            <span className="personal-card__bar personal-card__bar--7" />
            <span className="personal-card__bar personal-card__bar--8" />
          </div>
        </div>
      </div>
    </div>
  );
}
