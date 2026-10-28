import "./SectionDivider.css";

/**
 * SectionDivider Component
 * 
 * Luminous laser-line separator with intense hot-white center and soft tapered fade.
 * Placed between website sections with increased vertical breathing room.
 */
export default function SectionDivider({ from = "dark", to = "light", className = "" }) {
  const variantClass = `section-gap-divider--${from}-to-${to}`;
  return (
    <div className={`section-gap-divider ${variantClass} ${className}`} aria-hidden="true">
      <div className="glowing-separator">
        <div className="glowing-separator__core" />
        <div className="glowing-separator__flare" />
      </div>
    </div>
  );
}
