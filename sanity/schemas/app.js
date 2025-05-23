// /schemas/siteSettings.js

export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    __experimental_actions: ['update', 'publish', 'create', 'delete'],
  
    fields: [
      {
        name: 'siteTitle',
        title: 'Site Title',
        type: 'string',
        description: 'Main site title, used in header and SEO title tag',
        validation: Rule => Rule.required()
      },
      {
        name: 'siteDescription',
        title: 'Site Description',
        type: 'text',
        description: 'Tagline or short description for SEO and social sharing',
        validation: Rule => Rule.required().max(160)
      },
      {
        name: 'brandingAssets',
        title: 'Branding Assets',
        type: 'object',
        fields: [
          {
            name: 'logo',
            title: 'Company Logo',
            type: 'image',
            options: { hotspot: true },
            description: 'Main logo for header and branding'
          },
          {
            name: 'favicon',
            title: 'Favicon',
            type: 'image',
            description: 'Browser tab icon (usually 32x32 or 48x48 px)'
          },
          {
            name: 'siteIcon',
            title: 'Site Icon / Touch Icon',
            type: 'image',
            description: 'Site icon used for mobile devices and web apps'
          },
          {
            name: 'defaultOGImage',
            title: 'Default Open Graph Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Image used for social sharing when no other image specified'
          },
          {
            name: 'siteBanner',
            title: 'Site Banner / Hero Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Optional main banner image for homepage or hero section'
          }
        ]
      },
      {
        name: 'companyProfile',
        title: 'Company Profile',
        type: 'object',
        fields: [
          { name: 'companyName', title: 'Company Name', type: 'string', validation: Rule => Rule.required() },
          { name: 'companyTagline', title: 'Company Tagline', type: 'string' },
          { name: 'aboutText', title: 'About Text', type: 'text', description: 'Brief about the company' },
          { name: 'address', title: 'Company Address', type: 'text' },
          { name: 'phone', title: 'Phone Number', type: 'string' },
          { name: 'email', title: 'Contact Email', type: 'email' },
          {
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'platform', type: 'string', title: 'Platform' },
                  { name: 'url', type: 'url', title: 'URL' }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'brandingColors',
        title: 'Branding Colors',
        type: 'object',
        fields: [
          { name: 'primary', title: 'Primary Color', type: 'color' },
          { name: 'secondary', title: 'Secondary Color', type: 'color' },
          { name: 'accent', title: 'Accent Color', type: 'color' },
          { name: 'background', title: 'Background Color', type: 'color' },
          { name: 'text', title: 'Text Color', type: 'color' }
        ]
      },
      {
        name: 'footer',
        title: 'Footer Information',
        type: 'object',
        fields: [
          { name: 'footerText', title: 'Footer Text', type: 'text', description: 'Copyright or footer notes' },
          {
            name: 'footerLinks',
            title: 'Footer Links',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'title', type: 'string', title: 'Link Title' },
                  { name: 'url', type: 'url', title: 'URL' }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'seoSettings',
        title: 'SEO Settings',
        type: 'object',
        fields: [
          { name: 'metaTitle', title: 'Meta Title', type: 'string', description: 'SEO title tag, defaults to site title if empty' },
          { name: 'metaDescription', title: 'Meta Description', type: 'text', description: 'SEO meta description', validation: Rule => Rule.max(160) },
          { name: 'metaKeywords', title: 'Meta Keywords', type: 'array', of: [{ type: 'string' }], description: 'Comma separated keywords' },
          { name: 'robotsTxt', title: 'Robots.txt Content', type: 'text', description: 'Optional robots.txt content' }
        ]
      },
      {
        name: 'essayIdentification',
        title: 'Essay Identification',
        type: 'object',
        fields: [
          { name: 'essayId', title: 'Essay ID', type: 'string', description: 'Unique essay/article identifier' },
          { name: 'essayAuthor', title: 'Essay Author', type: 'string' },
          { name: 'essayDate', title: 'Essay Publication Date', type: 'date' },
          { name: 'essayTags', title: 'Essay Tags', type: 'array', of: [{ type: 'string' }] }
        ]
      }
    ],
  
    preview: {
      select: {
        title: 'siteTitle',
        subtitle: 'companyProfile.companyName'
      }
    }
  }
  