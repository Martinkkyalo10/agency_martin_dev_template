export default {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "challenge",
      title: "Challenge",
      type: "text",
    },
    {
      name: "solution",
      title: "Solution",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "results",
      title: "Results",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "metric",
              title: "Metric",
              type: "string",
            },
            {
              name: "value",
              title: "Value",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "images",
      title: "Project Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "content",
      title: "Detailed Content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};
