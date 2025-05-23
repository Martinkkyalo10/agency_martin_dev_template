export default {
  name: "testimonialItem",
  title: "Testimonial",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "role",
      title: "Role/Company",
      type: "string",
    },
    {
      name: "content",
      title: "Testimonial Content",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    },
  ],
};
