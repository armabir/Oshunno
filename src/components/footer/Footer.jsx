import ParticleTextCanvas from "./ParticleTextCanvas";
import "./Footer.css";

/**
 * Footer Component
 * 
 * Editorial minimalist dark-mode agency footer & contact section for Oshunno.com.
 * - Part A: High-impact editorial headline ("Let’s Collaborate!").
 * - Part B: 3-column metadata & navigation grid (MENU, CONNECT, SAY HELLO).
 * - Part C: Copyright & "BACK TO TOP ↑" utility action.
 * - Part D: Interactive rasterized dot/particle matrix canvas ("OSHUNNO").
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="site-footer" aria-label="Footer and Contact">
      {/* Upper Editorial Content Wrapper */}
      <div className="site-footer__inner">
        {/* Part A: Editorial Contact Block */}
        <div className="footer-hero">
          <h2 className="footer-hero__title">
            <a
              href="mailto:hello@oshunno.com"
              className="footer-hero__title-link"
              aria-label="Send email to hello@oshunno.com to collaborate"
            >
              Let’s Collaborate!
            </a>
          </h2>
        </div>

        {/* Hairline Divider */}
        <div className="footer-divider" aria-hidden="true" />

        {/* Part B: Metadata & Navigation Grid */}
        <div className="footer-grid">
          {/* Column 1: MENU */}
          <div className="footer-col footer-col--menu">
            <h3 className="footer-col__heading">MENU</h3>
            <ul className="footer-col__list" role="list">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                  className="footer-col__link"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#selected-projects"
                  onClick={(e) => scrollToSection(e, "selected-projects")}
                  className="footer-col__link"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="footer-col__link"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => scrollToSection(e, "pricing")}
                  className="footer-col__link"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="footer-col__link"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: CONNECT */}
          <div className="footer-col footer-col--connect">
            <h3 className="footer-col__heading">CONNECT</h3>
            <ul className="footer-col__list" role="list">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-col__link footer-col__link--arrow"
                >
                  <span>LinkedIn</span>
                  <span className="footer-col__arrow" aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-col__link footer-col__link--arrow"
                >
                  <span>X / Twitter</span>
                  <span className="footer-col__arrow" aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-col__link footer-col__link--arrow"
                >
                  <span>GitHub</span>
                  <span className="footer-col__arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: SAY HELLO / CONTACT */}
          <div className="footer-col footer-col--contact">
            <h3 className="footer-col__heading">SAY HELLO</h3>
            <div className="footer-contact-block">
              <a
                href="mailto:hello@oshunno.com"
                className="footer-email-link"
                aria-label="Send email to hello@oshunno.com"
              >
                hello@oshunno.com
              </a>
            </div>
          </div>
        </div>

        {/* Part C: Copyright & Utilities Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-bottom-bar__copy">
            © 2026 Oshunno. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Scroll back to top of the page"
          >
            <span>BACK TO TOP</span>
            <span className="footer-back-to-top__arrow" aria-hidden="true">↑</span>
          </button>
        </div>
      </div>

      {/* Part D: Bottom Interactive Particle Matrix Banner ("OSHUNNO") */}
      <div className="footer-canvas-wrapper">
        <ParticleTextCanvas text="OSHUNNO" />
      </div>
    </footer>
  );
}
