import BrandWebsiteAnim from "./BrandWebsiteAnim";
import PersonalWebsiteAnim from "./PersonalWebsiteAnim";
import StartupAnim from "./StartupAnim";
import LandingPageAnim from "./LandingPageAnim";
import "./ServicesSection.css";

/**
 * ServicesSection Component
 * 
 * 4-Card Pinwheel Architecture with:
 * - Simple, elegant glowing circular brand node in the center.
 * - Directional corner glow ONLY on the side facing the central icon.
 * - Height optimized for spacious visual presentation.
 */
export default function ServicesSection() {
  return (
    <section id="services" className="services-section" aria-label="Our Services">
      {/* Editorial Section Header */}
      <div className="services-header">
        <span className="services-header__eyebrow">WHAT WE DELIVER</span>
        <h2 className="services-header__title">
          Bespoke digital architecture.
        </h2>
        <p className="services-header__description">
          We engineer high-impact digital flagships, tailored personal residences, hypergrowth startups, and conversion-optimized landing pages.
        </p>
      </div>

      {/* Interlocking 3x3 Pinwheel Grid */}
      <div className="services-pinwheel-wrapper">
        <div className="services-pinwheel">
          {/* Card 1: Brand Website (Top-Left / Tall) - Glow on bottom-right corner */}
          <article className="service-card service-card--1 service-card--tall" id="service-card-brand">
            <BrandWebsiteAnim />
            <div className="service-card__content">
              <h3 className="service-card__title">Brand Website</h3>
              <p className="service-card__description">
                Flagship digital identities engineered for prestige, emotional resonance, and category leadership.
              </p>
            </div>
          </article>

          {/* Card 2: Personal Website (Top-Right / Wide) - Glow on bottom-left corner */}
          <article className="service-card service-card--2 service-card--wide" id="service-card-personal">
            <PersonalWebsiteAnim />
            <div className="service-card__content">
              <h3 className="service-card__title">Personal Website</h3>
              <p className="service-card__description">
                Tailored editorial portfolios and digital residences that establish undeniable personal authority.
              </p>
            </div>
          </article>

          {/* Central Illuminating Brand Node (Simple, Clean Circular Icon) */}
          <div className="services-central-hub" aria-label="Oshunno Central Emblem">
            <div className="services-central-hub__aura" aria-hidden="true" />
            <div className="services-central-hub__glow" aria-hidden="true" />
            <div className="services-central-hub__node">
              <svg
                className="services-central-hub__logo"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                {/* Outer delicate circular ring */}
                <circle cx="24" cy="24" r="17" stroke="#38bdf8" strokeWidth="1.8" strokeOpacity="0.45" />
                {/* Primary luminous circular ring */}
                <circle cx="24" cy="24" r="11" stroke="#38bdf8" strokeWidth="2.4" />
                {/* Center radiant white core dot */}
                <circle cx="24" cy="24" r="4" fill="#ffffff" />
              </svg>
            </div>
          </div>

          {/* Card 3: Startup (Bottom-Right / Tall) - Glow on top-left corner */}
          <article className="service-card service-card--3 service-card--tall" id="service-card-startup">
            <StartupAnim />
            <div className="service-card__content">
              <h3 className="service-card__title">Startup</h3>
              <p className="service-card__description">
                High-velocity web platforms and product launches built to attract capital and scale effortlessly.
              </p>
            </div>
          </article>

          {/* Card 4: Landing Page (Bottom-Left / Wide) - Glow on top-right corner */}
          <article className="service-card service-card--4 service-card--wide" id="service-card-landing">
            <LandingPageAnim />
            <div className="service-card__content">
              <h3 className="service-card__title">Landing Page</h3>
              <p className="service-card__description">
                Hyper-optimized conversion experiences engineered with surgical precision to turn visitors into revenue.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
