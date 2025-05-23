// data/servicesPageData.js

let servicesPage = {
  id: "1",
  title: "Our Awesome Services",
  seo: {
    title: "Services SEO Title",
    description: "SEO description for services page",
    keywords: ["services", "business", "solutions"],
  },
  hero: {
    heading: "Welcome to Our Services",
    subheading: "We offer the best solutions for your business",
    image: "/images/hero-services.jpg",
  },
  servicesOverview: [
    {
      _type: "block",
      children: [
        { text: "We provide top-notch services to elevate your business." },
      ],
    },
  ],
  serviceCategories: [
    {
      title: "Consulting",
      services: [
        {
          name: "Business Strategy",
          description: "We help you plan your business growth.",
        },
        {
          name: "Technology Consulting",
          description: "Tech solutions tailored for you.",
        },
      ],
    },
    {
      title: "Development",
      services: [
        {
          name: "Web Development",
          description: "Custom websites and applications.",
        },
      ],
    },
  ],
  process: [
    { step: 1, title: "Discovery", description: "Understanding your needs." },
    { step: 2, title: "Planning", description: "Mapping out the project." },
  ],
};
export default servicesPage;
