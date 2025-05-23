export default {
    name: 'blog',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
        description: 'Short summary of the blog post'
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: { type: 'author' },
        validation: Rule => Rule.required()
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'category' } }]
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
        validation: Rule => Rule.required()
      },
      {
        name: 'readingTime',
        title: 'Reading Time (minutes)',
        type: 'number',
        validation: Rule => Rule.min(1).max(60)
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
        validation: Rule => Rule.required()
      }
    ],
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage'
      },
      prepare(selection) {
        const { author } = selection
        return {
          ...selection,
          subtitle: author ? `by ${author}` : ''
        }
      }
    }
  }
  