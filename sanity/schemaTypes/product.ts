export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of Product'
        },
        {
            name: 'images',
            type: 'array',
            title: 'Product Images',
            of: [{ type: 'image'}],
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description of Product',
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'itemleft',
            type: 'number',
            title: 'Item Left'
        },
        {
            name: 'price_id',
            type: "string",
            title: "Stripe Price ID"
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
                    type: 'category'
                }
            ]
        }
    ]
}