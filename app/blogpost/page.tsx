import { client } from '@/lib/sanity'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import Link from 'next/link'
import clsx from 'clsx'
import Head from 'next/head'

interface BlogPost {
    _id: string;
    name: string;
    description: string;
    post: string;
    category: string;
    slug: string;
}

async function getData(): Promise<BlogPost[]> {
    const query = `*[_type == 'blog']{
        _id,
        name,
        description,
        post,
        "category": category -> name,
        "slug": slug.current,
    }`

    const data = await client.fetch(query)
    return data
}

const Blogpost = async () => {

    const data: BlogPost[] = await getData()

    return (
        <>
            <Head>
                <title>Articles - My Blog</title>
                <meta name="description" content="Browse through our latest blog articles" />
            </Head>
            <div>
                <div className='max-w-7xl mx-auto'>
                    <h1 className='text-center text-[3rem] font-[400]'>Articles</h1>
                    <div className='flex justify-between gap-4 py-20'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            {data.length > 0 ? (
                                data.map((items) => (
                                    <Link
                                        href={`/blog/${items.slug}`}
                                        key={items._id} 
                                        className='bg-slate-50 border rounded-xl p-8'
                                    >
                                        <h1 className='text-[1.3rem] font-[400]'>{items.name}</h1>
                                        <hr className='mt-7' />
                                        <p className='py-6 text-gray-500 text-sm font-light'>{items.description}</p>
                                        <p className='text-red-400 flex items-center text-sm pb-10 gap-2'>
                                            Read more <FaArrowRight />
                                        </p>
                                        <hr className='my-4' />
                                        <div className='w-16 items-center flex justify-center'>
                                            <p 
                                                className={clsx(
                                                    "text-xs rounded-[8px] text-white px-2 p-2",
                                                    {
                                                        "bg-green-400": items.category === "Safety",
                                                        "bg-blue-400": items.category === "Laptops",
                                                        "bg-red-400": items.category !== "Safety" && items.category !== "Laptops",
                                                    }
                                                )}
                                            >
                                                {items.category}
                                            </p>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <p>No blog posts found</p>
                            )}
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogpost
