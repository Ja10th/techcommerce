import { RichTextComponent } from '@/components/RichTextComponent';
import { client } from '@/lib/sanity'
import { PortableText } from "@portabletext/react";
import React from 'react'

export interface blogData {
    _id: string,
    post: any,
    name: string,
    description: string,
    category: string,
    slug: string,
}

async function getData( slug : string){
    const query = `*[_type == "blog" && slug.current == "${slug}"][0]{
    _id,
    name,
    post,
    description,
    "category": category -> name,
    "slug": slug.current,
    }`

    const data = await client.fetch(query)

    return data
}

const Blog = async ({ params} : {params: {slug : string}}) => {
    
    const data: blogData = await getData(params.slug)

  return (
    <div>
      <div>
        <h1 className='py-20 text-center font-[400] text-[3rem] max-w-5xl mx-auto'>{data.name}</h1>

        <div className='max-w-4xl mx-auto'>
        <PortableText value={data.post} components={RichTextComponent} />
        </div>
      </div>
    </div>
  )
}

export default Blog