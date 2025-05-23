export default {
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    { name: "clientName", type: "string" },
    { name: "slug", type: "slug", options: { source: "clientName" } },
    { name: "projectTitle", type: "string" },
    {
      name: "challenge",
      type: "text",
      validation: (Rule) => Rule.max(300),
    },
    {
      name: "solution",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.max(5),
    },
    {
      name: "results",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "metric", type: "string" },
            { name: "value", type: "string" },
            { name: "isImprovement", type: "boolean", initialValue: true },
          ],
        },
      ],
      validation: (Rule) => Rule.max(4),
    },
    { name: "coverImage", type: "image", options: { hotspot: true } },
    { name: "projectLink", type: "url" },
    {
      name: "technologies",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
    {
      name: "content",
      type: "array",
      of: [
        { type: "block" },
        { type: "image" },
        {
          type: "object",
          name: "metricHighlight",
          fields: [
            { name: "value", type: "string" },
            { name: "label", type: "string" },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "clientName",
      subtitle: "projectTitle",
      media: "coverImage",
    },
  },
};
