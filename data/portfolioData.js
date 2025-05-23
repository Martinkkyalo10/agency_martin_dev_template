// data/portfolioData.js
import { v4 as uuidv4 } from "uuid";

let portfolios = [
  {
    id: "1",
    title: "Website Redesign",
    slug: "website-redesign",
    client: "Acme Corp",
    challenge: "Outdated UI and low engagement",
    solution: ["Redesigned UI", "Improved UX", "Added new features"],
    results: [
      { metric: "Bounce Rate", value: "Reduced by 25%" },
      { metric: "Conversion Rate", value: "Increased by 15%" },
    ],
    technologies: ["React", "Node.js", "GraphQL"],
    images: [], // You can add image URLs or references here
    content: [
      { _type: "block", children: [{ text: "Detailed project overview..." }] },
    ],
  },
];

export { portfolios, uuidv4 };
