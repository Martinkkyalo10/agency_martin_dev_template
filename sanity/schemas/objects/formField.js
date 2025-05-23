export default {
  name: "formField",
  title: "Form Field",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Field Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Input Type",
      type: "string",
      options: {
        list: [
          "text",
          "email",
          "password",
          "number",
          "tel",
          "textarea",
          "select",
          "checkbox",
        ],
      },
      initialValue: "text",
    },
    {
      name: "placeholder",
      title: "Placeholder",
      type: "string",
    },
    {
      name: "required",
      title: "Required",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "options",
      title: "Options (for select)",
      type: "array",
      of: [{ type: "string" }],
      hidden: ({ parent }) => parent?.type !== "select",
    },
  ],
};
