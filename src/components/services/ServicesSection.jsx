import BrandWebsiteAnim from "./BrandWebsiteAnim";
import PersonalWebsiteAnim from "./PersonalWebsiteAnim";
import StartupAnim from "./StartupAnim";
import LandingPageAnim from "./LandingPageAnim";
import "./ServicesSection.css";

/**
 * ServicesSection Component
 * 
 * 4-Card Pinwheel Architecture with:
 * - Glowing & light-emitting central Pointfex squircle emblem.
 * - Matching rich corner glow across all 4 cards in idle state.
 * - Broad corner highlight spread along edges.
 * - Clean hover without extra flare blobs (just the corner highlight).
 */
export default function ServicesSection() {
  return (
    <section id="services" className="services-section" aria-label="Our Services">
      {/* Editorial Section Header */}
      <div className="services-header">
        {/* <span className="services-header__eyebrow">WHAT WE DELIVER</span> */}
        <h2 className="services-header__title">
          WHAT  WE  DELIVER.
        </h2>
        <p className="services-header__description">
          We engineer high-impact digital flagships, tailored personal residences, hypergrowth startups, and conversion-optimized landing pages.
        </p>
      </div>

      {/* Interlocking 3x3 Pinwheel Grid */}
      <div className="services-pinwheel-wrapper">
        <div className="services-pinwheel">
          {/* Card 1: Brand Website (Top-Left / Tall) - Highlighted corner: Bottom-Right */}
          <article className="service-card service-card--1 service-card--tall" id="service-card-brand">
            <div className="service-card__idle-corner-glow service-card__idle-corner-glow--br" aria-hidden="true" />
            <BrandWebsiteAnim />
            <div className="service-card__content">
              <h3 className="service-card__title">Brand Website</h3>
              <p className="service-card__description">
                Flagship digital identities engineered for prestige, emotional resonance, and category leadership.
              </p>
            </div>
          </article>

          {/* Card 2: Personal Website (Top-Right / Wide) - Highlighted corner: Bottom-Left */}
          <article className="service-card service-card--2 service-card--wide" id="service-card-personal">
            <div className="service-card__idle-corner-glow service-card__idle-corner-glow--bl" aria-hidden="true" />
            <PersonalWebsiteAnim />
            <div className="service-card__content">
              <h3 className="service-card__title">Personal Website</h3>
              <p className="service-card__description">
                Tailored editorial portfolios and digital residences that establish undeniable personal authority.
              </p>
            </div>
          </article>

          {/* Central Pointfex Brand Emblem Squircle Box - Glowing and Emitting Light */}
          <div className="services-central-hub" aria-label="Pointfex Central Emblem">
            <div className="services-central-hub__aura" aria-hidden="true" />
            <div className="services-central-hub__glow" aria-hidden="true" />
            <div className="services-central-hub__node">
              <img
                src="/logo.png"
                alt="Pointfex Logo"
                className="services-central-hub__img"
              />
            </div>
          </div>

          {/* Card 3: Startup (Bottom-Right / Tall) - Highlighted corner: Top-Left */}
          <article className="service-card service-card--3 service-card--tall" id="service-card-startup">
            <div className="service-card__idle-corner-glow service-card__idle-corner-glow--tl" aria-hidden="true" />
            <StartupAnim />
            <div className="service-card__content">
              <h3 className="service-card__title">Startup</h3>
              <p className="service-card__description">
                High-velocity web platforms and product launches built to attract capital and scale effortlessly.
              </p>
            </div>
          </article>

          {/* Card 4: Landing Page (Bottom-Left / Wide) - Highlighted corner: Top-Right */}
          <article className="service-card service-card--4 service-card--wide" id="service-card-landing">
            <div className="service-card__idle-corner-glow service-card__idle-corner-glow--tr" aria-hidden="true" />
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
