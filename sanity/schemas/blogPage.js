export default {
  name: "blogPage",
  title: "Blog Page",
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
      name: "featuredPosts",
      title: "Featured Posts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "blogPost" }] }],
      validation: (Rule) => Rule.max(4),
    },
    {
      name: "categories",
      title: "Featured Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "category",
              title: "Category",
              type: "reference",
              to: [{ type: "category" }],
            },
            {
              name: "featuredImage",
              title: "Featured Image",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    },
  ],
};
