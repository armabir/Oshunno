/**
 * Navbar Component
 * 
 * Top Tier Header:
 * - Left: "OSHUNNO" logo with radiant cyan mark.
 * - Center: Floating minimal pill navbar with backdrop-blur.
 * - Right: "Start a Project →" button with soft cyan hover aura.
 */
export default function Navbar() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    if (!id || id === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="hero-nav-wrapper">
      <div className="hero-nav">
        {/* Left: Brand Logo */}
        <a
          href="#"
          onClick={(e) => scrollTo(e, "#")}
          className="hero-nav__logo"
          aria-label="Oshunno Home"
        >
          <span className="hero-nav__logo-text">OSHUNNO</span>
          <span className="hero-nav__logo-dot" aria-hidden="true" />
        </a>

        {/* Center: Floating Minimal Pill Navbar */}
        <nav className="hero-nav__pill" aria-label="Main Navigation">
          <ul className="hero-nav__list" role="list">
            <li>
              <a
                href="#selected-projects"
                onClick={(e) => scrollTo(e, "selected-projects")}
                className="hero-nav__link"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => scrollTo(e, "services")}
                className="hero-nav__link"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                onClick={(e) => scrollTo(e, "pricing")}
                className="hero-nav__link"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, "contact")}
                className="hero-nav__link"
              >
                About
              </a>
            </li>
          </ul>
        </nav>

        {/* Right: CTA Button */}
        <div className="hero-nav__action">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "contact")}
            className="hero-nav__cta"
          >
            <span>Start a Project</span>
            <span className="hero-nav__cta-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
