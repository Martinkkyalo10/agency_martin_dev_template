export default {
  name: "servicesPage",
  title: "Services Page",
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
      name: "servicesOverview",
      title: "Services Overview",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "serviceCategories",
      title: "Service Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Category Title",
              type: "string",
            },
            {
              name: "services",
              title: "Services",
              type: "array",
              of: [{ type: "serviceItem" }],
            },
          ],
        },
      ],
    },
    {
      name: "process",
      title: "Our Process",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "step",
              title: "Step Number",
              type: "number",
            },
            {
              name: "title",
              title: "Step Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(6),
    },
  ],
};
