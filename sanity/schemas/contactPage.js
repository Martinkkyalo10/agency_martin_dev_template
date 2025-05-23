export default {
  name: "contactPage",
  title: "Contact Page",
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
      name: "contactForm",
      title: "Contact Form",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Form Title",
          type: "string",
        },
        {
          name: "description",
          title: "Form Description",
          type: "text",
        },
        {
          name: "fields",
          title: "Form Fields",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "label",
                  title: "Field Label",
                  type: "string",
                },
                {
                  name: "type",
                  title: "Field Type",
                  type: "string",
                  options: {
                    list: [
                      { title: "Text", value: "text" },
                      { title: "Email", value: "email" },
                      { title: "Phone", value: "tel" },
                      { title: "Textarea", value: "textarea" },
                    ],
                  },
                },
                {
                  name: "required",
                  title: "Required",
                  type: "boolean",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "contactInfo",
      title: "Contact Information",
      type: "object",
      fields: [
        {
          name: "address",
          title: "Address",
          type: "string",
        },
        {
          name: "email",
          title: "Email",
          type: "string",
        },
        {
          name: "phone",
          title: "Phone",
          type: "string",
        },
        {
          name: "socialLinks",
          title: "Social Links",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "platform",
                  title: "Platform",
                  type: "string",
                },
                {
                  name: "url",
                  title: "URL",
                  type: "url",
                },
                {
                  name: "icon",
                  title: "Icon Class",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
