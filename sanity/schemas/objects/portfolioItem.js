export default {
  name: "portfolioItem",
  title: "Portfolio Item",
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
      name: "overview",
      title: "Project Overview",
      type: "text",
    },
    {
      name: "challenges",
      title: "Challenges",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "solutions",
      title: "Solutions Provided",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "results",
      title: "Key Results",
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
            {
              name: "improvement",
              title: "Improvement?",
              type: "boolean",
            },
          ],
        },
      ],
    },
    {
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "gallery",
      title: "Project Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
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
