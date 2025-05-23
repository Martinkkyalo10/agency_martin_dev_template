// data/pricingPlansData.js

import { v4 as uuidv4 } from "uuid";

let pricingPlans = [
  {
    id: "1",
    name: "Basic Plan",
    price: "$9.99",
    description: "Ideal for individuals",
    features: [
      { text: "Feature A", included: true },
      { text: "Feature B", included: false },
    ],
    isPopular: false,
    ctaText: "Sign Up",
  },
  {
    id: "2",
    name: "Pro Plan",
    price: "$29.99",
    description: "Perfect for professionals",
    features: [
      { text: "Feature A", included: true },
      { text: "Feature B", included: true },
      { text: "Feature C", included: true },
    ],
    isPopular: true,
    ctaText: "Get Started",
  },
];

export { pricingPlans, uuidv4 };
