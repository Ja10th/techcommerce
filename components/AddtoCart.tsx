'use client'

import { urlForImage } from '@/lib/sanity'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'


export interface ProductCart {
    name: string,
    description: string,
    price: number,
    currency: string,
    image: any,
    price_id: string,
}
    
const AddtoCart = ({name, description, price, currency, price_id ,image}:ProductCart) => {
    const { addItem, handleCartClick} = useShoppingCart()

    const product = {
        name: name,
        description: description,
        price:price,
        currency: currency,
        image: urlForImage(image).url(),
        price_id: price_id,
    }
  return (
    <button 
    onClick={() => {
        addItem(product), handleCartClick();
    }}
    className="px-8 bg-indigo-400 py-2 text-gray-100 rounded-2xl">
    Add to Cart
  </button>
  )
}

export default AddtoCart