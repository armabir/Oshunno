import React from "react";
import CircuitCore from "./CircuitCore";

/**
 * TransformationChamber Component
 * 
 * Center box/card of the hero section:
 * - Styled with frosted dark obsidian glass and smooth, unnoticeable top/bottom borders.
 * - Houses the cybernetic circuit motherboard with central Pointfex logo chip,
 *   orthogonal circuit traces, peripheral node boxes, and pulsing data signals.
 */
export default function TransformationChamber() {
  return (
    <div className="transformation-chamber" aria-label="Transformation Chamber">
      {/* Center Card with Smooth Seamless Edge Integration */}
      <div className="hero-center-card">
        {/* Idle Radiant Border Glow along left edge matching plasma */}
        <div className="hero-center-card__idle-glow" aria-hidden="true" />

        {/* Dynamic Circuit Architecture with Center Logo & Animated Signal Pulses */}
        <CircuitCore />
      </div>
    </div>
  );
}
