/**
 * Pricing Tiers Data for Oshunno.com
 * Formatted with exact client requirements and tier structure.
 */
export const PRICING_TIERS = [
  {
    id: "essential",
    tierName: "Essential",
    badge: "Starter",
    isPopular: false,
    priceDisplay: "৳5,000–৳12,000",
    bestFor: "For individuals and small businesses starting online.",
    features: [
      { text: "Personal portfolio or simple business website" },
      { text: "1–3 pages" },
      { text: "Responsive design" },
      { text: "Contact form and social links" },
      { text: "Basic on-page SEO" },
      { text: "Standard animations" },
    ],
    buttonText: "Choose Essential",
    activeDots: 2,
  },
  {
    id: "professional",
    tierName: "Professional",
    badge: "Most Popular",
    isPopular: true,
    priceDisplay: "৳15,000–৳35,000",
    bestFor: "For growing brands that need a polished online presence.",
    features: [
      { text: "4–7 pages", highlight: true },
      { text: "Custom UI/UX design", highlight: true },
      { text: "Advanced responsive layouts", highlight: true },
      { text: "Premium interactions and animations", highlight: true },
      { text: "CMS integration for editable content", highlight: true },
      { text: "SEO and performance optimization", highlight: true },
      { text: "Contact forms and third-party integrations", highlight: true },
    ],
    buttonText: "Start Professional",
    activeDots: 4,
  },
  {
    id: "signature",
    tierName: "Signature",
    badge: "Premium",
    isPopular: false,
    priceDisplay: "৳40,000–৳100,000+",
    bestFor: "For ambitious brands requiring a distinctive, tailored digital experience.",
    features: [
      { text: "Fully custom design and development", highlight: true },
      { text: "Complex layouts and interactions", highlight: true },
      { text: "Advanced CMS or e-commerce functionality", highlight: true },
      { text: "API and third-party integrations", highlight: true },
      { text: "Advanced performance and technical SEO", highlight: true },
      { text: "Priority support during the project", highlight: true },
      { text: "Extended testing and launch assistance", highlight: true },
    ],
    buttonText: "Inquire Signature",
    activeDots: 5,
  },
];
