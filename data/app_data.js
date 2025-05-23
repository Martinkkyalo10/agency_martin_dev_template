// app_data.js
export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  __experimental_actions: ["update", "publish", "create", "delete"],

  fields: [
    {
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      description: "Main site title, used in header and SEO title tag",
      validation: (Rule) => Rule.required(),
      initialValue: "Martin Devs",
    },
    {
      name: "siteDescription",
      title: "Site Description",
      type: "text",
      description: "Tagline or short description for SEO and social sharing",
      validation: (Rule) => Rule.required().max(160),
      initialValue:
        "Flexible and solution-focused DevOps Engineer with expertise in cloud technologies, CI/CD processes, and containerization.",
    },
    {
      name: "brandingAssets",
      title: "Branding Assets",
      type: "object",
      fields: [
        {
          name: "logo",
          title: "Company Logo",
          type: "image",
          options: { hotspot: true },
          description: "Main logo for header and branding",
        },
        {
          name: "favicon",
          title: "Favicon",
          type: "image",
          description: "Browser tab icon (usually 32x32 or 48x48 px)",
        },
        {
          name: "siteIcon",
          title: "Site Icon / Touch Icon",
          type: "image",
          description: "Site icon used for mobile devices and web apps",
        },
        {
          name: "defaultOGImage",
          title: "Default Open Graph Image",
          type: "image",
          options: { hotspot: true },
          description:
            "Image used for social sharing when no other image specified",
        },
        {
          name: "siteBanner",
          title: "Site Banner / Hero Image",
          type: "image",
          options: { hotspot: true },
          description:
            "Optional main banner image for homepage or hero section",
        },
      ],
    },
    {
      name: "companyProfile",
      title: "Company Profile",
      type: "object",
      fields: [
        {
          name: "companyName",
          title: "Company Name",
          type: "string",
          validation: (Rule) => Rule.required(),
          initialValue: "Martin Devs",
        },
        {
          name: "companyTagline",
          title: "Company Tagline",
          type: "string",
          initialValue: "DevOps & Full-Stack Development Solutions",
        },
        {
          name: "aboutText",
          title: "About Text",
          type: "text",
          description: "Brief about the company",
          initialValue:
            "Professional DevOps Engineer with experience in AWS, Docker, Kubernetes, and CI/CD pipelines. Also skilled in full-stack development with React, Node.js, and various databases.",
        },
        {
          name: "address",
          title: "Company Address",
          type: "text",
          initialValue: "Moi Avenue 4663, Nairobi, Kenya",
        },
        {
          name: "phone",
          title: "Phone Number",
          type: "string",
          initialValue: "+254-715-836-392 / +254-759-669-324",
        },
        {
          name: "email",
          title: "Contact Email",
          type: "email",
          initialValue: "martinkkyalo10@gmail.com",
        },
        {
          name: "socialLinks",
          title: "Social Media Links",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "platform", type: "string", title: "Platform" },
                { name: "url", type: "url", title: "URL" },
              ],
            },
          ],
          initialValue: [
            {
              platform: "LinkedIn",
              url: "https://www.linkedin.com/in/martin-kyalo-654111239/",
            },
            { platform: "GitHub", url: "https://github.com/Martinkkyalo10" },
            { platform: "Website", url: "https://www.martinkyalo.info" },
          ],
        },
      ],
    },
    {
      name: "brandingColors",
      title: "Branding Colors",
      type: "object",
      fields: [
        {
          name: "primary",
          title: "Primary Color",
          type: "color",
          initialValue: {
            hex: "#f74780",
            alpha: 1,
            hsl: { h: 341.538, s: 0.916, l: 0.624, a: 1 },
            hsv: { h: 341.538, s: 0.916, v: 0.969, a: 1 },
            rgb: { r: 247, g: 71, b: 128, a: 1 },
          },
        },
        {
          name: "secondary",
          title: "Secondary Color",
          type: "color",
          initialValue: {
            hex: "#6610f2",
            alpha: 1,
            hsl: { h: 261.538, s: 0.904, l: 0.502, a: 1 },
            hsv: { h: 261.538, s: 0.904, v: 0.949, a: 1 },
            rgb: { r: 102, g: 16, b: 242, a: 1 },
          },
        },
        {
          name: "accent",
          title: "Accent Color",
          type: "color",
          initialValue: {
            hex: "#353f4f",
            alpha: 1,
            hsl: { h: 216, s: 0.2, l: 0.259, a: 1 },
            hsv: { h: 216, s: 0.2, v: 0.31, a: 1 },
            rgb: { r: 53, g: 63, b: 79, a: 1 },
          },
        },
        {
          name: "background",
          title: "Background Color",
          type: "color",
          initialValue: {
            hex: "#F6F6FA",
            alpha: 1,
            hsl: { h: 240, s: 0.286, l: 0.961, a: 1 },
            hsv: { h: 240, s: 0.286, v: 0.98, a: 1 },
            rgb: { r: 246, g: 246, b: 250, a: 1 },
          },
        },
        {
          name: "text",
          title: "Text Color",
          type: "color",
          initialValue: {
            hex: "#757575",
            alpha: 1,
            hsl: { h: 0, s: 0, l: 0.459, a: 1 },
            hsv: { h: 0, s: 0, v: 0.459, a: 1 },
            rgb: { r: 117, g: 117, b: 117, a: 1 },
          },
        },
      ],
    },
    {
      name: "footer",
      title: "Footer Information",
      type: "object",
      fields: [
        {
          name: "footerText",
          title: "Footer Text",
          type: "text",
          description: "Copyright or footer notes",
          initialValue: "© 2023 Martin Devs. All rights reserved.",
        },
        {
          name: "footerLinks",
          title: "Footer Links",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", type: "string", title: "Link Title" },
                { name: "url", type: "url", title: "URL" },
              ],
            },
          ],
          initialValue: [
            { title: "Projects", url: "https://github.com/Martinkkvalo10" },
            { title: "Resume", url: "https://www.martinkyalo.info" },
            { title: "Contact", url: "mailto:martinkkyalo10@gmail.com" },
          ],
        },
      ],
    },
    {
      name: "seoSettings",
      title: "SEO Settings",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
          description: "SEO title tag, defaults to site title if empty",
          initialValue: "Martin Kyalo - DevOps Engineer & Full-Stack Developer",
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          description: "SEO meta description",
          validation: (Rule) => Rule.max(160),
          initialValue:
            "Professional DevOps Engineer with expertise in AWS, Docker, Kubernetes, CI/CD, and full-stack web development.",
        },
        {
          name: "metaKeywords",
          title: "Meta Keywords",
          type: "array",
          of: [{ type: "string" }],
          description: "Comma separated keywords",
          initialValue: [
            "DevOps",
            "AWS",
            "Docker",
            "Kubernetes",
            "CI/CD",
            "React",
            "Node.js",
            "Full-Stack Development",
          ],
        },
        {
          name: "robotsTxt",
          title: "Robots.txt Content",
          type: "text",
          description: "Optional robots.txt content",
        },
      ],
    },
    {
      name: "essayIdentification",
      title: "Essay Identification",
      type: "object",
      fields: [
        {
          name: "essayId",
          title: "Essay ID",
          type: "string",
          description: "Unique essay/article identifier",
        },
        {
          name: "essayAuthor",
          title: "Essay Author",
          type: "string",
          initialValue: "Martin Kyalo Kinyili",
        },
        { name: "essayDate", title: "Essay Publication Date", type: "date" },
        {
          name: "essayTags",
          title: "Essay Tags",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "siteTitle",
      subtitle: "companyProfile.companyName",
    },
  },
};
