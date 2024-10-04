'use client'

import React from 'react'
import { Sheet, SheetHeader, SheetTitle, SheetContent } from './ui/Sheet'
import { useShoppingCart } from 'use-shopping-cart'
import Image from 'next/image'


const ShoppingCartModule = () => {

    const {cartCount, shouldDisplayCart, handleCartClick, cartDetails, removeItem, totalPrice, redirectToCheckout} = useShoppingCart()

    async function handleCheckoutNow (e:  any) {
        e.preventDefault()
        try {
            const result = await redirectToCheckout();
            console.log("result")
        } catch (error) {
            console.log(error)
        }
    }
  return (
        <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
            <SheetContent className='sm:max-w-lg w-[90vw] bg-white'>
                <SheetHeader>
                <SheetTitle className='text-indigo-400 text-3xl'>Shopping Cart</SheetTitle>
                </SheetHeader>

                <div className='h-full flex flex-col justify-between'>
                    <div className='mt-8 flex-1 overflow-y-auto'>
                        <ul className='my-6 divide-y divide-gray-200'>
                            {cartCount == 0 ? (
                                <h1 className='text-3xl'>Empty Cart</h1>
                            ) : (
                                <>
                                {Object.values(cartDetails ?? {}).map((entry) => (
                                    <li key={entry.id} className='flex py-6 '>
                                        <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                            <Image src={entry.image as string} alt='Product image' width={100} height={100}/>
                                        </div>

                                        <div className='ml-4 flex-1 flex-col'>
                                            <div>
                                                <div className='flex justify-between text-base font-medium text-gray-900'>
                                                    <h3>{entry.name}</h3>
                                                    <p className='ml-4'>${entry.price}</p>
                                                </div>
                                                <p className='mt-1 text-sm text-gray-500 line-clamp-2'>{entry.description}</p>
                                            </div>
                                            <div className='flex flex-1 items-end justify-between text-sm'>
                                                <p className='text-indigo-400'>QTY: {entry.quantity}</p>
                                                <div className='flex'>
                                                    <button
                                                    type='button'
                                                    onClick={() => removeItem(entry.id)}
                                                    className='font-medium text-indigo-400'
                                                    >
                                                    Remove
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </li>
                                ))}
                                </>
                            )}
                        </ul>

                    </div>
                    <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                        <div className='flex justify-between text-base font-medium text-gray-900'>
                            <p>Subtotal: </p>
                            <p>${totalPrice}</p>
                        </div>
                        <p className='mt-0.5 text-gray-500 text-sm'>Shipping and taxes are calculated at checkout</p>
                        <div className='mt-6'>
                         <button 
                         onClick={handleCheckoutNow}
                         className='bg-indigo-400 w-full p-2 rounded-xl'>
                            Checkout
                         </button>
                        </div>
                            <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                                <p>OR <button 
                                onClick={() => handleCartClick()}
                                className='font-medium text-indigo-400 hover:opacity-80 ml-2 '>Continue Shopping</button></p>
                            </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
  )
}

export default ShoppingCartModule