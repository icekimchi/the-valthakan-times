export type BillingCycle = "monthly" | "annual";

export type Plan = {
  id: string;
  badge: string;
  title: string;
  price: number;
  periodLabel: string;
  descriptions: string[];
  ctaLabel: string;
  buttonType: "primary" | "secondary"; 
};

/* Upgrade Plans */
export const PLANS: Record<BillingCycle, Plan[]> = {
  monthly: [
    {
      id: "eldritch",
      badge: "Eldritch",
      title: "Get a little more Valthaka in your life",
      price: 10,
      periodLabel: "/ month",
      descriptions: [
        "Get 2 months free with an annual purchase",
        "Instant Access to All Previous Editions",
        "Access to The Library Discord",
        "Biweekly Deep Dives",
        "Biweekly Episodes of The Wanderings of the Crone",
        "Biweekly Chapters from Daniel's Writers' Workshop",
      ],
      ctaLabel: "Upgrade Now",
      buttonType: "primary",
    },
    {
      id: "old-witch",
      badge: "Old Witch",
      title: "Support The Valthakam Times",
      price: 6,
      periodLabel: "/ month",
      descriptions: [
        "Support The Valthakan Times",
        "Access to The Library Discord",
      ],
      ctaLabel: "Pledge Today",
      buttonType: "secondary",
    },
  ],
  annual: [
    {
      id: "eldritch",
      badge: "Eldritch",
      title: "Get a little more Valthaka in your life",
      price: 100,
      periodLabel: "/ year",
      descriptions: [
        "Get 2 months free with an annual purchase",
        "Instant Access to All Previous Editions",
        "Access to The Library Discord",
        "Biweekly Deep Dives",
        "Biweekly Episodes of The Wanderings of the Crone",
        "Biweekly Chapters from Daniel's Writers' Workshop",
      ],
      ctaLabel: "Upgrade Now",
      buttonType: "primary",
    },
    {
      id: "old-witch",
      badge: "Old Witch",
      title: "Support The Valthakan Times with a small monthly or annual pledge!",
      price: 60,
      periodLabel: "/ year",
      descriptions: [
        "Support The Valthakan Times",
        "Access to The Library Discord",
      ],
      ctaLabel: "Pledge Today",
      buttonType: "secondary",
    },
  ],
};
