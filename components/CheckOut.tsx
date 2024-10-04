'use client'

import { urlForImage } from '@/lib/sanity'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { ProductCart } from './AddtoCart'
import { FaArrowRight } from 'react-icons/fa6'


    
const CheckOut = ({name, description, price, currency, price_id ,image}: ProductCart) => {
    const { checkoutSingleItem} = useShoppingCart()

    const product = {
        name: name,
        description: description,
        price:price,
        currency: currency,
        image: urlForImage(image).url(),
        price_id: price_id
    }

    const buyNow = (price_id : string) =>{
        checkoutSingleItem(price_id)
    }
  return (
    <button 
    onClick={() => buyNow(product.price_id)}
    className='underline flex gap-x-2 items-center text-red-400 '>
          Checkout <FaArrowRight className='text-red-400 text-lg'/>
    </button>
  )
}

export default CheckOut