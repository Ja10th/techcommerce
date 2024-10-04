import { PinContainer } from '@/components/ui/3d-pin'
import { client } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface dataFact {
    _id: string,
    slug: string,
    name: string,
    price: number,
    category: string,
    image: any,
}

async function getData(category: string){
    const query = `*[_type == 'product' && category -> name == '${category}']{
  _id,
    price,
    name,
    "slug": slug.current,
    "image": images[0].asset -> url,
    "category": category -> name
}`

    const data = await client.fetch(query)

    return data
}

export const dynamic = 'force-dynamic'

const page = async ({params}: {params: {category:string}}) => {
    const data: dataFact[] = await getData(params.category)
  return (
    <div className='bg-white h-full'>
    <div className='max-w-2xl md:max-w-7xl px-10 mx-auto '>
        <div className='flex justify-center py-20 items-center'>
            <h2 className='text-6xl font-bold text-black '>{params.category} Products</h2>
        </div>
        <div className='grid mt-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10'>
               {data.map((product) => (
                  <PinContainer title={product.name} href={`/product/${product.slug}`} key={product._id}>
                    <div className='aspect-square w-full overflow-hidden rounded-xl p-8 border-gray-300 border bg-white group-hover:opacity-75'>
                        <Image src={product.image} alt='image url'
                        className='w-[15rem] h-full object-contain object-center '
                        width={300}
                        height={300}
                        />

                    </div>
                  
                    <div className='mt-4  flex justify-between'>
                        <div className=''>
                            <Link href={`/product/${product.slug}`}>
                             <h3 className='text-black font-semibold'>{product.name}</h3>
                            </Link>
                            <p className='text-xs mt-1 text-gray-500'>{product.category}</p>
                        </div>
                        <p className='font-bold text-indigo-400'>${product.price}</p>
                    </div>
                    
                </PinContainer>
               ))}
            </div>
    </div>
</div>
  )
}

export default page