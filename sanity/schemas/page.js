import { Rule } from "sanity";

export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pageType",
      title: "Page Type",
      type: "string",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "About", value: "about" },
          { title: "Services", value: "services" },
          { title: "Portfolio", value: "portfolio" },
          { title: "Blog", value: "blog" },
          { title: "Contact", value: "contact" },
          { title: "Login", value: "login" },
          { title: "Register", value: "register" },
          { title: "Pricing", value: "pricing" },
          { title: "Testimonials", value: "testimonials" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
        },
        {
          name: "keywords",
          title: "Keywords",
          type: "array",
          of: [{ type: "string" }],
          options: {
            layout: "tags",
          },
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        { type: "image" },
        { type: "serviceGrid" },
        { type: "testimonialCarousel" },
        { type: "portfolioGrid" },
        { type: "pricingTable" },
        { type: "loginForm" },
        { type: "registerForm" },
      ],
    },
  ],
};
