export default {
  name: "pricingPlan",
  title: "Pricing Plan",
  type: "object",
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "period",
      title: "Billing Period",
      type: "string",
      initialValue: "/mo",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.max(10),
    },
    {
      name: "isPopular",
      title: "Mark as Popular",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "ctaText",
      title: "CTA Text",
      type: "string",
      initialValue: "Get Started",
    },
  ],
};
