import { v4 as uuid } from "uuid";

// BLOGS
export const getBlogs = (count = 6) =>
  Array.from({ length: count }, (_, i) => ({
    id: uuid(),
    title: `Sample Blog Post ${i + 1}`,
    slug: `sample-blog-post-${i + 1}`,
    author: `Author ${i + 1}`,
    content: `This is the content for blog post ${i + 1}.`,
    tags: ["tech", "code", "web"],
    createdAt: new Date(),
  }));

// USERS
export const getUsers = (count = 6) =>
  Array.from({ length: count }, (_, i) => ({
    id: uuid(),
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i === 0 ? "admin" : "user",
  }));

// ABOUT
export const getAbout = () => ({
  title: "About Us",
  description: "We are a modern digital agency committed to innovation.",
  team: Array.from({ length: 6 }, (_, i) => ({
    name: `Team Member ${i + 1}`,
    role: `Role ${i + 1}`,
    bio: `Bio of team member ${i + 1}`,
  })),
});

// HOME
export const getHome = () => ({
  heroHeading: "Welcome to Our Agency",
  heroSubheading: "We build modern digital solutions.",
  sections: [
    "Our Mission",
    "Our Vision",
    "What We Do",
    "Testimonials",
    "Our Values",
    "Why Choose Us",
  ],
});

// CONTACT
export const getContact = () => ({
  email: "contact@example.com",
  phone: "+1234567890",
  address: "123 Main St, Nairobi, Kenya",
  socials: [
    { platform: "Facebook", link: "https://facebook.com" },
    { platform: "Twitter", link: "https://twitter.com" },
    { platform: "Instagram", link: "https://instagram.com" },
    { platform: "LinkedIn", link: "https://linkedin.com" },
    { platform: "GitHub", link: "https://github.com" },
    { platform: "YouTube", link: "https://youtube.com" },
  ],
});

// SERVICES
export const getServices = (count = 6) =>
  Array.from({ length: count }, (_, i) => ({
    id: uuid(),
    title: `Service ${i + 1}`,
    description: `This is the description for service ${i + 1}.`,
  }));

// FEATURES
export const getFeatures = (count = 6) =>
  Array.from({ length: count }, (_, i) => ({
    title: `Feature ${i + 1}`,
    icon: "fas fa-bolt",
    description: `Description of feature ${i + 1}.`,
  }));

// PRICING PLANS
export const getPricingPlans = (count = 6) =>
  Array.from({ length: count }, (_, i) => ({
    id: uuid(),
    name: `Plan ${i + 1}`,
    price: `$${(i + 1) * 10}.00`,
    description: `Plan ${i + 1} for customers`,
    features: [
      { text: "Basic Support", included: true },
      { text: "Advanced Tools", included: i % 2 === 0 },
      { text: "Analytics", included: i >= 3 },
    ],
    isPopular: i === 2,
    ctaText: "Subscribe",
  }));

// PORTFOLIO
export const getPortfolio = (count = 6) =>
  Array.from({ length: count }, (_, i) => ({
    id: uuid(),
    title: `Project ${i + 1}`,
    slug: `project-${i + 1}`,
    client: `Client ${i + 1}`,
    challenge: `Challenge description for project ${i + 1}`,
    solution: ["Research", "Design", "Deploy"],
    results: [
      { metric: "Conversion Rate", value: `${30 + i}%` },
      { metric: "Bounce Rate", value: `${20 - i}%` },
    ],
    technologies: ["React", "Node.js", "MongoDB"],
    images: [],
    content: [],
  }));

// CLIENTS
export const getClients = (count = 6) =>
  Array.from({ length: count }, (_, i) => ({
    name: `Client ${i + 1}`,
    logo: `https://via.placeholder.com/150?text=Logo+${i + 1}`,
    website: `https://client${i + 1}.com`,
    category: ["startup", "enterprise", "agency"][i % 3],
  }));

// CATEGORIES
export const getCategories = (count = 6) =>
  Array.from({ length: count }, (_, i) => ({
    title: `Category ${i + 1}`,
    description: `Description for category ${i + 1}`,
  }));
