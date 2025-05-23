export default {
  name: "client",
  title: "Client",
  type: "document",
  fields: [
    { name: "name", type: "string" },
    {
      name: "logo",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
    { name: "website", type: "url" },
    {
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Startup", value: "startup" },
          { title: "Enterprise", value: "enterprise" },
          { title: "Agency", value: "agency" },
        ],
      },
    },
  ],
};
