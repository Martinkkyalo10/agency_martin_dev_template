export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
    {
      name: "hero",
      title: "Hero Section",
      type: "hero",
    },
    {
      name: "services",
      title: "Services Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "services",
          title: "Services",
          type: "array",
          of: [{ type: "serviceItem" }],
          validation: (Rule) => Rule.max(6),
        },
      ],
    },
    {
      name: "caseStudies",
      title: "Case Studies Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
        {
          name: "items",
          title: "Case Studies",
          type: "array",
          of: [{ type: "reference", to: [{ type: "caseStudy" }] }],
          validation: (Rule) => Rule.max(3),
        },
      ],
    },
    {
      name: "pricing",
      title: "Pricing Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
        {
          name: "plans",
          title: "Pricing Plans",
          type: "array",
          of: [{ type: "pricingPlan" }],
          validation: (Rule) => Rule.length(3),
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "hero.headline",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Home Page",
        subtitle: subtitle || "No headline set",
      };
    },
  },
};
