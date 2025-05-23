export default {
  name: "testimonialCarousel",
  title: "Testimonial Carousel",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      initialValue: "What Our Clients Say",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      initialValue:
        "Discover how our expert solutions have helped businesses grow and succeed.",
    },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "testimonial" }],
        },
      ],
    },
    {
      name: "displayOptions",
      title: "Display Options",
      type: "object",
      fields: [
        {
          name: "showRating",
          title: "Show Star Rating",
          type: "boolean",
          initialValue: true,
        },
        {
          name: "showAvatar",
          title: "Show Client Avatar",
          type: "boolean",
          initialValue: true,
        },
        {
          name: "showCompany",
          title: "Show Company Info",
          type: "boolean",
          initialValue: true,
        },
      ],
    },
  ],
};
