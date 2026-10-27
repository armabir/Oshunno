/**
 * Hero Conveyor Cards Data
 * 
 * 4 Archetypes demonstrating the before-and-after transformation:
 * 1. SaaS Dashboard
 * 2. E-Commerce Storefront
 * 3. Editorial Portfolio / Residence
 * 4. High-Frequency Fintech
 */
export const HERO_CARDS = [
  {
    id: "saas",
    broken: {
      tag: "404: Layout Shift",
      tagType: "error",
      title: "Legacy Cloud Portal",
      subtitle: "Uncached SQL • 14s Load",
      metricLabel: "Core Web Vitals",
      metricValue: "CLS: 0.84 (Poor)",
      uiType: "broken-table",
      tilt: "tilt-left",
    },
    polished: {
      tag: "99 Performance",
      tagType: "success",
      title: "Next-Gen SaaS Engine",
      subtitle: "Sub-Second Edge Runtime",
      metricLabel: "Monthly Velocity",
      metricValue: "$240K ARR (+182%)",
      uiType: "polished-chart",
    },
  },
  {
    id: "ecommerce",
    broken: {
      tag: "High Latency: 4.8s",
      tagType: "warning",
      title: "Discount Shop V1",
      subtitle: "Stalled Cart • TTFB: 3200ms",
      metricLabel: "Checkout Drop-off",
      metricValue: "-78% Funnel Abandon",
      uiType: "broken-cart",
      tilt: "tilt-right",
    },
    polished: {
      tag: "60 FPS Checkout",
      tagType: "success",
      title: "Flagship Commerce",
      subtitle: "Instant Universal Cart",
      metricLabel: "Checkout Velocity",
      metricValue: "0.3s Instant Buy ↗",
      uiType: "polished-product",
    },
  },
  {
    id: "agency",
    broken: {
      tag: "Broken Mobile CSS",
      tagType: "error",
      title: "Template Portfolio",
      subtitle: "Unlicensed Fonts • Overflow Bug",
      metricLabel: "Lighthouse Score",
      metricValue: "FCP: 5.2s (Failing)",
      uiType: "broken-layout",
      tilt: "tilt-left",
    },
    polished: {
      tag: "Award-Winning UI",
      tagType: "success",
      title: "Digital Residence",
      subtitle: "Tailored Brand Authority",
      metricLabel: "Frame Budget",
      metricValue: "120Hz ProMotion Sync",
      uiType: "polished-waveform",
    },
  },
  {
    id: "fintech",
    broken: {
      tag: "Memory Leak Detected",
      tagType: "error",
      title: "Crypto Ledger V0.2",
      subtitle: "12,400 Unmanaged DOM Nodes",
      metricLabel: "Heap Consumption",
      metricValue: "OOM Crash Warning",
      uiType: "broken-terminal",
      tilt: "tilt-right",
    },
    polished: {
      tag: "Zero-Latency Core",
      tagType: "success",
      title: "Institutional Platform",
      subtitle: "Cryptographic Telemetry",
      metricLabel: "Execution Speed",
      metricValue: "0.14ms Micro-Batch",
      uiType: "polished-crypto",
    },
  },
];
