'use client';

import React, { useState } from 'react';
import { Sheet, SheetHeader, SheetTitle, SheetContent } from './ui/Sheet';
import { useShoppingCart } from 'use-shopping-cart';
import Image from 'next/image';
import { PaystackButton } from 'react-paystack';
import { useAuth0 } from '@auth0/auth0-react';

const ShoppingCartModule = () => {
    const { cartCount, shouldDisplayCart, handleCartClick, cartDetails, decrementItem, incrementItem, totalPrice } = useShoppingCart();
    const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    const [address, setAddress] = useState('');

    // Safely use cartCount and totalPrice
    const safeCartCount = cartCount ?? 0; // Defaults to 0 if cartCount is undefined
    const safeTotalPrice = totalPrice ?? 0; // Defaults to 0 if totalPrice is undefined
    // If user is authenticated, grab their details (email) for Paystack
    const userEmail = isAuthenticated ? user?.email : '';

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    };

    const paystackConfig = {
        email: userEmail || 'customer@example.com',  // User email from Auth0 or default
        amount: safeTotalPrice * 100,  // Paystack expects amount in kobo
        publicKey: 'pk_test_110f5d5fffad6bc1dae024858bb6e25cb2924994', // Your Paystack public key
        metadata: {
          custom_fields: [
            {
              display_name: "Customer Name",
              variable_name: "customer_name",
              value: user?.name || 'Anonymous User',  // User's name from Auth0
            },
            {
              display_name: "Delivery Address",
              variable_name: "delivery_address",
              value: address || 'No address provided',  // User's provided address
            },
          ],
        },
      };

    const handleSuccess = (reference: any) => {
        console.log('Payment Successful, reference:', reference);
    };

    const handleClose = () => {
        console.log('Payment dialog closed');
    };

    return (
        <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
            <SheetContent className='sm:max-w-lg w-[90vw] px-8 bg-slate-100 shadow-lg rounded-lg'>
                <SheetHeader>
                  <SheetTitle className='text-blue-500 text-3xl font-semibold mb-4'>Your Shopping Cart</SheetTitle>
                </SheetHeader>

                <div className='h-full flex flex-col justify-between'>
                    <div className='flex-1 overflow-y-auto'>
                        <ul className='my-6 divide-y divide-gray-300'>
                            {cartCount === 0 ? (
                                <h1 className='text-xl text-gray-500 text-center'>Your cart is empty.</h1>
                            ) : (
                                <>
                                {Object.values(cartDetails ?? {}).map((entry) => (
                                    <li key={entry.id} className='flex py-6 items-center'>
                                        <div className='h-16 w-16 flex-shrink-0 overflow-hidden border rounded-xl p-3 border-gray-300'>
                                            <Image src={entry.image as string} alt='Product image' width={100} height={100} />
                                        </div>

                                        <div className='ml-6 flex-1'>
                                            <div className='flex justify-between text-lg font-semibold text-gray-800'>
                                                <h3>{entry.name}</h3>
                                                <p className='ml-4'>₦{entry.price.toLocaleString()}</p>
                                            </div>
                                            <p className='text-sm text-gray-500 mt-1 line-clamp-2'>{entry.description}</p>
                                            
                                            <div className='flex justify-between items-center mt-4'>
                                                <div className='flex items-center'>
                                                    <button
                                                        type='button'
                                                        onClick={() => decrementItem(entry.id)}
                                                        className='text-white bg-blue-500 hover:bg-blue-600 rounded-md px-3 py-1 text-lg font-medium'
                                                    >
                                                        -
                                                    </button>
                                                    <p className='mx-3 text-gray-700'>Qty: {entry.quantity}</p>
                                                    <button
                                                        type='button'
                                                        onClick={() => incrementItem(entry.id)}
                                                        className='text-white bg-blue-500 hover:bg-blue-600 rounded-md px-3 py-1 text-lg font-medium'
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <button
                                                    type='button'
                                                    onClick={() => decrementItem(entry.id, { count: entry.quantity })}
                                                    className='text-sm text-red-500 hover:underline'
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                                </>
                            )}
                        </ul>
                    </div>
                    
                    {safeCartCount > 0 && (
                      <div className='border-t border-gray-300 pt-6'>
                          <div className='flex justify-between text-lg font-medium text-gray-900'>
                              <p>Subtotal:</p>
                              <p>₦{safeTotalPrice.toLocaleString()}</p>
                          </div>
                          <p className='mt-1 text-sm text-gray-500'>Shipping and taxes calculated at checkout.</p>

                          {/* Address input field */}
                          <div className='mt-4'>
                            <label className='block text-gray-700'>Delivery Address:</label>
                            <input
                                type='text'
                                value={address}
                                onChange={handleAddressChange}
                                className='border rounded-lg py-2 px-4 w-full'
                                placeholder='Enter your delivery address'
                            />
                          </div>

                          {/* Paystack button or redirect to login */}
                          <div className='mt-6'>
                            {isAuthenticated ? (
                              <PaystackButton 
                                className='bg-blue-500 hover:bg-blue-600 text-white w-full p-3 rounded-lg'
                                {...paystackConfig}
                                text="Checkout with Paystack"
                                onSuccess={handleSuccess}
                                onClose={handleClose}
                              />
                            ) : (
                              <button
                                onClick={() => loginWithRedirect()}
                                className='bg-blue-500 hover:bg-blue-600 text-white w-full p-3 rounded-lg'
                              >
                                Sign in to Checkout
                              </button>
                            )}
                          </div>

                          <div className='mt-4 text-center'>
                              <button 
                                onClick={() => handleCartClick()}
                                className='text-blue-500 hover:underline text-sm'
                              >
                                  Continue Shopping
                              </button>
                          </div>
                      </div>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default ShoppingCartModule;
