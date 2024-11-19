import { defineField, defineType } from "sanity";

export default defineType({
  name: 'carouselImage',
  title: 'Carousel Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Image Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(50),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Alt text for accessibility',
      validation: (Rule) => Rule.required().min(1).max(100),
    })
  ]
})