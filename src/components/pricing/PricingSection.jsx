import FolderTabCard from "./FolderTabCard";
import { PRICING_TIERS } from "./pricingData";
import "./PricingSection.css";

/**
 * PricingSection Component
 * 
 * Recreated from armabir-portfolio with Oshunno cyan brand styling:
 * - Full-width tall condensed SVG watermark "PRICING" with 10-15% card overlap.
 * - 3-column asymmetric folder-tab card grid.
 * - Essential, Professional (Most Popular), and Signature tiers.
 * - Interactive 3D tilt physics and directional cyan rim light glow.
 */
export default function PricingSection() {
  const handleTierClick = (tier) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(`mailto:hello@oshunno.com?subject=Inquiry regarding ${tier.tierName} Tier`, "_self");
    }
  };

  return (
    <section id="pricing" className="pricing-section" aria-label="Pricing Packages">
      <div className="pricing-section__container">
        {/* Full-Width Tall Condensed Watermark "PRICING" Title with Card Overlap */}
        <div className="pricing-watermark" aria-hidden="true">
          <svg
            viewBox="0 0 1100 230"
            className="pricing-watermark__svg"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pricingWatermarkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.26" />
                <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.14" />
                <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.00" />
              </linearGradient>
            </defs>
            <text
              x="20"
              y="190"
              fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
              fontSize="240"
              fontWeight="900"
              letterSpacing="0.06em"
              textLength="1060"
              lengthAdjust="spacing"
              fill="url(#pricingWatermarkGrad)"
              className="pricing-watermark__text"
            >
              PRICING
            </text>
          </svg>
        </div>

        {/* 3-Card Responsive Grid */}
        <div className="pricing-grid">
          {PRICING_TIERS.map((tier) => {
            const isFeatured = tier.isPopular;

            return (
              <div key={tier.id} className="pricing-grid__item">
                <FolderTabCard
                  isPopular={isFeatured}
                  activeDots={tier.activeDots}
                  totalDots={5}
                  badge={tier.badge}
                  className="pricing-card"
                >
                  {/* Card Header Content */}
                  <div className="pricing-card__header">
                    <h3 className="pricing-card__title">{tier.tierName}</h3>

                    {/* Price Block */}
                    <div className="pricing-card__price-row">
                      <span
                        className={`pricing-card__price ${
                          isFeatured ? "pricing-card__price--popular" : ""
                        }`}
                      >
                        {tier.priceDisplay}
                      </span>
                    </div>

                    {/* Best For (Soft & Clean) */}
                    <div className="pricing-card__best-for">
                      <span className="pricing-card__best-for-label">Best for:</span>
                      <span className="pricing-card__best-for-text">{tier.bestFor}</span>
                    </div>

                    {/* Feature Bullet List */}
                    <ul className="pricing-card__features" role="list">
                      {tier.features.map((feat, idx) => {
                        const isHighlighted = isFeatured || feat.highlight;

                        return (
                          <li key={idx} className="pricing-card__feature-item">
                            <div
                              className={`pricing-card__feature-check ${
                                isHighlighted
                                  ? "pricing-card__feature-check--highlight"
                                  : ""
                              }`}
                            >
                              <svg
                                width="11"
                                height="11"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <span
                              className={`pricing-card__feature-text ${
                                isHighlighted
                                  ? "pricing-card__feature-text--highlight"
                                  : ""
                              }`}
                            >
                              {feat.text}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Primary CTA Button */}
                  <div className="pricing-card__cta-wrap">
                    <button
                      type="button"
                      onClick={() => handleTierClick(tier)}
                      className={`pricing-card__cta ${
                        isFeatured ? "pricing-card__cta--popular" : ""
                      }`}
                    >
                      <span>{tier.buttonText}</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="pricing-card__cta-arrow"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </FolderTabCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
