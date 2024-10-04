import AddtoCart from '@/components/AddtoCart'
import ImageGallery from '@/components/ImageGallery'
import { client } from '@/lib/sanity'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaStar, FaTruck } from 'react-icons/fa6'


interface dataFact {
  _id: string,
  images: any,
  price: number,
  name: string,
  description: string,
  slug: string,
  category: string,
  price_id: string,
}



async function getData(slug: string){
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
  _id,
    name,
    images,
    price,
    description,
    "category": category -> name,
    "slug": slug.current,
    price_id
}`


  const data = await client.fetch(query)

  return data

}

export const dynamic = 'force-dynamic'

const page = async ({params}: {params: {slug: string}}) => {

    const data: dataFact = await getData(params.slug)

  return (
    <div className='bg-white h-[90rem] md:h-screen py-20 md:py-0'>
      <div className='max-w-7xl mx-auto px-8 py-20'>
        <div className='grid gap-8 md:grid-cols-2'>
          <ImageGallery images={data.images}/>
          <div className='md:py-8'> 
            <div className='mb-2 md:mb-3'>
                  <span className='inline-block text-gray-500 mb-0.5'>
                    {data.category}
                  </span>
                  <h2 className='text-2xl font-bold text-gray-800 lg:text-4xl'>{data.name}</h2>

            </div>
            <div className='mb-6 flex items-center  gap-x-2 md:mb-10'>
              <button className='text-indigo-400 justify-center  rounded-xl px-4 py-2 flex items-center'>
                <span>4.2</span>
                <FaStar className='ml-1'/>
              </button>
              <span className='text-sm text-gray-500 transition duration-100'>50 Ratings</span>
               
            <div className='flex items-center gap-x-2'>
            <FaTruck className='text-lg text-indigo-400'/>
            <p className='text-sm text-gray-500'>2-4 days shipping</p>  
            </div>        
            </div>
            <p className='text-gray-500 tracking-wide text-sm pb-10'>{data.description}</p>
            <div className=''>
                <div className='flex gap-2 items-end'>
                  <span className='text-xl font-bold text-gray-800 md:text-2xl'>
                    ${data.price}
                  </span>
                  <span className='text-xl line-through text-indigo-400'>
                    ${data.price + 30}
                  </span>
                </div>
                <span className='text-xs text-gray-500'>Incl. Vat plus shipping</span>
            </div>  
          <div className='flex gap-x-4 pt-2'>
          <AddtoCart currency='USD' name={data.name} description={data.description} price={data.price} image={data.images[0]} key={data._id} price_id={data.price_id}/>
          <Link href="/" className='underline flex gap-x-2 items-center text-indigo-400 '>
          Checkout <FaArrowRight className='text-indigo-400 text-lg'/>
          </Link>
          </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page