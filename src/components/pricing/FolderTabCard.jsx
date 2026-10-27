import { useRef, useState, useId } from "react";

/**
 * FolderTabCard Component
 * 
 * Recreated from armabir-portfolio with Oshunno cyan brand styling:
 * - Asymmetric vector folder-tab geometry with precise corner radius and notch.
 * - 3D mouse parallax tilt physics.
 * - Directional cyan rim light stroke concentrated at top-right and bottom-left.
 * - Soft luminous ambient and specular glow halos.
 * - Integrated 5-LED bottom telemetry tray.
 */
export default function FolderTabCard({
  children,
  isPopular = false,
  activeDots = 3,
  totalDots = 5,
  badge,
  className = "",
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const uniqueId = useId().replace(/:/g, "");

  // 3D Parallax Tilt Physics
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Subtle tilt: -4.5deg to +4.5deg
    const rotateX = (0.5 - y) * 9;
    const rotateY = (x - 0.5) * 9;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const cardPathD =
    "M 0 42 A 20 20 0 0 1 20 22 L 195 22 C 207 22 207 0 220 0 L 380 0 A 20 20 0 0 1 400 20 L 400 560 A 20 20 0 0 1 380 580 L 195 580 C 182 580 182 600 170 600 L 20 600 A 20 20 0 0 1 0 580 Z";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`folder-tab-card ${isPopular ? "folder-tab-card--popular" : ""} ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${
          isHovered ? 1.02 : isPopular ? 1.03 : 1
        }, ${isHovered ? 1.02 : isPopular ? 1.03 : 1}, 1)`,
      }}
    >
      {/* Top-Right & Bottom-Left Luminous Dual Halos */}
      <div
        className={`folder-tab-card__glow-wrap ${
          isHovered || isPopular ? "folder-tab-card__glow-wrap--active" : ""
        }`}
        aria-hidden="true"
      >
        {/* Top-Right Glow: Ambient Halo */}
        <div className="folder-tab-card__glow folder-tab-card__glow--tr-ambient" />
        {/* Top-Right Glow: Specular Core */}
        <div className="folder-tab-card__glow folder-tab-card__glow--tr-core" />

        {/* Bottom-Left Glow: Ambient Halo */}
        <div className="folder-tab-card__glow folder-tab-card__glow--bl-ambient" />
        {/* Bottom-Left Glow: Specular Core */}
        <div className="folder-tab-card__glow folder-tab-card__glow--bl-core" />
      </div>

      {/* SVG Canvas for Asymmetric Card Background & Directional Rim Light */}
      <svg
        className="folder-tab-card__svg"
        viewBox="0 0 400 600"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Card Glass Gradient */}
          <linearGradient id={`cardBgGrad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#101827" stopOpacity={isPopular ? "0.94" : "0.90"} />
            <stop offset="50%" stopColor="#0a0f19" stopOpacity={isPopular ? "0.96" : "0.93"} />
            <stop offset="100%" stopColor="#05080f" stopOpacity="0.98" />
          </linearGradient>

          {/* Directional Cyan Accent Stroke: Concentrated on Top-Right and Bottom-Left */}
          <linearGradient id={`thickCyanStrokeGrad-${uniqueId}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop
              offset="0%"
              stopColor="#38bdf8"
              stopOpacity={isHovered ? "1.0" : isPopular ? "0.95" : "0"}
            />
            <stop
              offset="18%"
              stopColor="#60a5fa"
              stopOpacity={isHovered ? "0.9" : isPopular ? "0.85" : "0"}
            />
            <stop offset="36%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="64%" stopColor="#38bdf8" stopOpacity="0" />
            <stop
              offset="82%"
              stopColor="#2563eb"
              stopOpacity={isHovered ? "0.9" : isPopular ? "0.85" : "0"}
            />
            <stop
              offset="100%"
              stopColor="#38bdf8"
              stopOpacity={isHovered ? "1.0" : isPopular ? "0.95" : "0"}
            />
          </linearGradient>
        </defs>

        {/* 1. Card Body Path */}
        <path d={cardPathD} fill={`url(#cardBgGrad-${uniqueId})`} />

        {/* 2. Base 1px Subtle Stroke */}
        <path
          d={cardPathD}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          fill="none"
        />

        {/* 3. Thick Cyan Accent Stroke */}
        <path
          d={cardPathD}
          stroke={`url(#thickCyanStrokeGrad-${uniqueId})`}
          strokeWidth={isHovered ? "2.6" : isPopular ? "2.2" : "0"}
          vectorEffect="non-scaling-stroke"
          fill="none"
          className="folder-tab-card__accent-stroke"
        />
      </svg>

      {/* Card Inner Content Container */}
      <div className="folder-tab-card__content">
        {/* Top Header Badge Slot */}
        <div className="folder-tab-card__header-slot">
          {badge && (
            <span
              className={`folder-tab-card__badge ${
                isPopular ? "folder-tab-card__badge--popular" : ""
              }`}
            >
              <span className="folder-tab-card__badge-dot" />
              {badge}
            </span>
          )}
        </div>

        {/* Injected Tier Content */}
        <div className="folder-tab-card__body">{children}</div>

        {/* Bottom Tray: 5 Sleek Indicator LEDs */}
        <div className="folder-tab-card__tray">
          <div className="folder-tab-card__led-group">
            {Array.from({ length: totalDots }).map((_, idx) => {
              const isActive = idx < activeDots;
              return (
                <span
                  key={idx}
                  className={`folder-tab-card__led ${
                    isActive ? "folder-tab-card__led--active" : ""
                  }`}
                />
              );
            })}
          </div>
          <span className="folder-tab-card__tray-label">
            {activeDots}/{totalDots} TIER INTENSITY
          </span>
        </div>
      </div>
    </div>
  );
}
