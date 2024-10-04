export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Blog Title',
        },
        {
            name: 'images',
            type: 'array',
            title: 'Image',
            of: [{type: 'image'}],
        },
        {
            name: 'post',
            type: 'blockContent',
            title: 'Blog Post',
            
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name'
            }
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [
                {
                    type: 'blogcategory'
                }
            ]
        }
    ]
}