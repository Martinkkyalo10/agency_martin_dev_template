export default {
  name: "pricingPlan",
  title: "Pricing Plan",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Plan Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "text",
              title: "Feature",
              type: "string",
            },
            {
              name: "included",
              title: "Included",
              type: "boolean",
            },
          ],
        },
      ],
    },
    {
      name: "isPopular",
      title: "Popular Plan?",
      type: "boolean",
    },
    {
      name: "ctaText",
      title: "CTA Text",
      type: "string",
    },
  ],
};
