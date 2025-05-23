export default {
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      validation: (Rule) =>
        Rule.max(70).warning("Optimal for SEO: under 70 chars"),
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      validation: (Rule) =>
        Rule.max(160).warning("Optimal for SEO: under 160 chars"),
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
    {
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      description: "Recommended size: 1200x630px",
    },
  ],
};
