import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Banner = () => {
  
  return (
      <div>
        <Link href='/'className='cursor-pointer'>
            <div className=" w-full bg-red-400 h-[65px] text-white text-center justify-center items-center flex px-10 py-2 overflow-hidden">
                    <div className="flex justify-between items-center space-x-6 ">
                        {/* Phone Offer */}
                        <div className="flex items-center justify-center gap-1 animate-bounce-x">
                            <img 
                                src="https://crdms.images.consumerreports.org/f_auto,w_600/prod/products/cr/models/402431-smartphones-apple-iphone-12-10016496.png" 
                                alt="Phone" 
                                className="h-12 w-20 animate-pop-up" />
                            <div className="flex gap-4 items-center">
                                <div>
                                <h3 className="font-[400] text-xs">Best Smartphone Deals</h3>
                                <p className="text-sm font-thin">Up to 40% Off!</p>
                                </div>
                                <div className="bg-purple p-2 rounded-2xl text-sm animate-bounce-y">Starting from 
                                <span className="lg:text-xl text-black pl-2 mt-1">{'\u20A6'}103,000</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Laptop Offer */}
                        <div className="hidden lg:flex items-center space-x-4 animate-bounce-y">
                            <img 
                                src="https://www.asus.com/media/Odin/Websites/global/Series/9.png" 
                                alt="Laptop" 
                                className="h-14 w-14 animate-pop-up" />
                            <div className="flex items-center gap-4">
                                <div>
                                <h3 className="text-xs font-[400]">Laptops on Sale!</h3>
                                <p className="text-sm font-thin">Save 50% on top brands</p>
                                </div>
                                <div className="bg-green-300 p-2 rounded-2xl text-gray-500 text-sm animate-wiggle">Starting from 
                                <span className="text-xl text-black pl-2 mt-1">{'\u20A6'}150,000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Link>
    </div>
  )
}

export default Banner