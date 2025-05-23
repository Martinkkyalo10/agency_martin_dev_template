export default {
  name: "aboutPage",
  title: "About Page",
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
      name: "mission",
      title: "Mission Statement",
      type: "object",
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
        },
        {
          name: "content",
          title: "Content",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "team",
      title: "Team Section",
      type: "object",
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
        },
        {
          name: "members",
          title: "Team Members",
          type: "array",
          of: [
            {
              type: "reference",
              to: [{ type: "author" }],
            },
          ],
        },
      ],
    },
    {
      name: "values",
      title: "Core Values",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Value Title",
              type: "string",
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
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(6),
    },
  ],
};
