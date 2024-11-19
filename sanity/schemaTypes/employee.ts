

export default {
  name: 'employee',
  type: 'document',
  title: 'Employee',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
        name: 'slug',
        type: 'slug',
        title: 'slug of the employee',
        options: {
            source: 'name',
        }
    },
    {
        name: 'jobTitle',
        type: 'string',
        title: 'Job Title',
    },
    {
        name: 'cardImage',
        type: 'image',
        title: 'Card Image',
    },
    {
        name: 'smallBio',
        type: 'text',
        title: 'Small Bio',
    },
    {
        name: 'longBio',
        type: 'array',
        title: 'Long Bio',
        of: [
            {
            type: 'block',
            }
            ],
        },
    ]
}