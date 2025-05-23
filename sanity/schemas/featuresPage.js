export default {
  name: "featuresPage",
  type: "document",
  title: "Features Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Page Title",
    },
    {
      name: "metaDescription",
      type: "string",
      title: "Meta Description",
    },
    {
      name: "metaKeywords",
      type: "string",
      title: "Meta Keywords",
    },
    {
      name: "heroHeading",
      type: "string",
      title: "Hero Heading",
    },
    {
      name: "heroSubheading",
      type: "string",
      title: "Hero Subheading",
    },
    {
      name: "heroText",
      type: "text",
      title: "Hero Description",
    },
    {
      name: "features",
      type: "array",
      title: "Features",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Feature Title",
            },
            {
              name: "icon",
              type: "string",
              title: "FontAwesome Icon Class",
              description: 'e.g., "fas fa-code"',
            },
            {
              name: "description",
              type: "text",
              title: "Feature Description",
            },
          ],
        },
      ],
    },
    {
      name: "navbarLinks",
      type: "array",
      title: "Navbar Links",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "url", type: "url", title: "URL" },
            { name: "active", type: "boolean", title: "Is Active?" },
          ],
        },
      ],
    },
    {
      name: "loginLink",
      type: "object",
      title: "Login Button",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "url", type: "url", title: "URL" },
      ],
    },
  ],
};
