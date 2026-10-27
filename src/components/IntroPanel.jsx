/**
 * IntroPanel Component
 * 
 * Far-left introductory panel of the horizontal showcase.
 * Occupies 55-70% of the desktop viewport width and travels left as the visitor scrolls.
 */
export default function IntroPanel({ intro }) {
  return (
    <div className="showcase-intro" aria-label="Selected Work Introduction">
      <div className="showcase-intro__inner">
        <h1 className="showcase-intro__headline">
          <span className="showcase-intro__line">{intro.headlineLine1}</span>
          <span className="showcase-intro__line showcase-intro__line--dim">
            {intro.headlineLine2}
          </span>
        </h1>

        <p className="showcase-intro__description">{intro.description}</p>
      </div>
    </div>
  );
}
