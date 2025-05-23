export default {
  name: "hero",
  title: "Hero Section",
  type: "object",
  fields: [
    {
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subheadline",
      title: "Subheadline",
      type: "text",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "primaryCta",
      title: "Primary CTA",
      type: "object",
      fields: [
        { name: "text", type: "string", validation: (Rule) => Rule.required() },
        { name: "link", type: "string", validation: (Rule) => Rule.required() },
        { name: "isHighlighted", type: "boolean", initialValue: true },
      ],
    },
    {
      name: "secondaryCta",
      title: "Secondary CTA",
      type: "object",
      fields: [
        { name: "text", type: "string" },
        { name: "link", type: "string" },
      ],
    },
    {
      name: "image",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      name: "trustBadges",
      title: "Trust Badges",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.max(3),
    },
  ],
};
