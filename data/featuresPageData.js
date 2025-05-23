// data/featuresPageData.js
import { v4 as uuidv4 } from "uuid";

let featuresPages = [
  {
    id: "1",
    title: "Our Features",
    metaDescription: "Overview of our product features",
    metaKeywords: "features, product, benefits",
    heroHeading: "Welcome to Features",
    heroSubheading: "Discover what makes us great",
    heroText: "Our platform offers unique features to boost your workflow.",
    features: [
      {
        title: "Fast Performance",
        icon: "fas fa-tachometer-alt",
        description: "Our app is optimized for speed and reliability.",
      },
    ],
    navbarLinks: [
      { label: "Home", url: "/", active: false },
      { label: "Features", url: "/features", active: true },
    ],
    loginLink: { label: "Login", url: "/login" },
  },
];

export { featuresPages, uuidv4 };
