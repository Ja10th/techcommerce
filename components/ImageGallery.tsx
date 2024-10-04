"use client"

import { urlForImage } from '@/lib/sanity'
import Image from 'next/image'
import React, { useState } from 'react'

interface imageGalleryProps{
    images:any
}

const ImageGallery = ({images} : imageGalleryProps) => {
  const [bigImage, setBigImage] = useState(images[0])


  const handlebigImageChange = (image: any) => {
    setBigImage(image)
  }
  
  return (
    <div className='grid gap-4 lg:grid-cols-5'>
      <div className='order-last flex gap-4 lg:order-none lg:flex-col'>
            {images.map((image:any, idx:any) => (
                <div key={idx} className='overflow-hidden border rounded-xl p-4 bg-slate-100'>
                    <Image src={urlForImage(image).url()} width={300} height={300} alt='photo'
                    className='h-full w-full object-cover rounded-xl object-center cursor-pointer'
                    onClick={() => handlebigImageChange(image)}
                    />
                </div>
            ))}
        </div>
        <div className='relative overflow-hidden rounded-xl bg-slate-100 border p-2 h-[18rem] items-center flex lg:col-span-3'>
            <Image src={urlForImage(bigImage).url()} alt='photo' width={400} height={400}
            className='w-full h-[full] object-cover object-center p-20 rounded-2xl'
            />
            
        </div>
    </div>
  )
}

export default ImageGallery