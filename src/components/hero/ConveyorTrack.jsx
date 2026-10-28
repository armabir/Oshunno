import { WireframeWebsiteCard } from "./HeroCards";
import { HERO_CARDS } from "./heroData";

/**
 * ConveyorTrack Component
 * 
 * Right-side continuous horizontal conveyor:
 * - Simple website wireframe cards emerge from behind the center card (50% mark).
 * - Smooth continuous marquee flowing seamlessly towards the right edge.
 */
export default function ConveyorTrack() {
  // Quadruple cards list to guarantee infinite, gap-free marquee across all screen resolutions
  const trackItems = [...HERO_CARDS, ...HERO_CARDS, ...HERO_CARDS, ...HERO_CARDS];

  return (
    <div className="conveyor-viewport" aria-hidden="true">
      {/* Website Wireframe Cards Track (Emerging from Center Card, Clipped to Right 50%) */}
      <div className="conveyor-track conveyor-track--polished">
        <div className="conveyor-track__inner">
          {trackItems.map((item, index) => (
            <div key={`wireframe-${item.id}-${index}`} className="conveyor-item">
              <WireframeWebsiteCard data={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Edge Vignette Gradient Fade */}
      <div className="conveyor-vignette conveyor-vignette--right" />
    </div>
  );
}

