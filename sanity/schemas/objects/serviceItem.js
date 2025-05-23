export default {
  name: "serviceItem",
  title: "Service Item",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Font Awesome icon class (e.g., fa-cloud)",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
