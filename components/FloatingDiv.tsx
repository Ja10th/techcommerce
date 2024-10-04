import React from 'react'
import { FaInstagram, FaLinkedin, FaMailchimp, FaTwitter, FaWifi, FaYoutube } from 'react-icons/fa6'
import { TbMailFilled } from "react-icons/tb";

const FloatingDiv = () => {
  return (
    <div>
        <div className='max-w-7xl mx-auto bg-red-400 py-28 my-20 rounded-xl'>
            <div className='relative'>
                <div className="w-full absolute top-0 -mt-[7rem] rounded-t-xl overflow-hidden bg-purple">
                    <div className="relative whitespace-nowrap animate-marquee">
                        <p className="inline-block px-4 py-4 text-sm  text-white">
                        Stay Safe Online | Protect your privacy with the best security apps | Explore the future of technology | Innovations that change the world | Stay connected with fast and reliable devices | Upgrade your workspace with the latest laptops and accessories | Order now and get special deals!
                        </p>
                    </div>
                </div>
                <p className='text-center text-sm text-gray-200'>Join +40 Sellers </p>
                <h2 className='text-center text-white font-[400] text-[1.5rem] py-2'> The best and the latest in Town</h2>
                <div className="flex justify-center items-center space-x-1">
                        <input
                            type="text"
                            placeholder="Search products, brands"
                            className="border rounded-xl py-2 px-3 w-[150px] lg:w-[400px]  focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            className="bg-blue-500 text-white px-4 py-2 placeholder:font-light rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Subscribe Now
                        </button>
                </div>
                <div className="w-full absolute bottom-0 -mb-[7rem] rounded-b-xl overflow-hidden bg-green-300">
                    <div className="relative whitespace-nowrap animate-marquee-right">
                        <p className="inline-block px-4 py-4 text-sm text-black">
                        Welcome to our online store! | Latest Offers | Big Discounts on Electronics | Buy 1 Get 1 Free on selected items | Free shipping on all orders over $100! | New products just arrived, check them out now! | Limited time offer, don&apos;t miss out!
                        </p>
                    </div>
                </div>
            </div>
        </div>
            <div className='max-w-7xl mx-auto pb-10'>
                <div className='flex gap-4'>
                    <div className='px-10 py-8 flex items-center justify-center gap-3 rounded-xl border w-[600px] bg-slate-100'>
                        <div className='bg-white p-4 rounded-xl border'>
                        <TbMailFilled className='text-3xl '/>
                        </div>
                        <div className='flex flex-col '>
                            <h2 className='md font-[400]'>Contact</h2>
                            <p className='text-sm font-light'>Jamesoluwaleye@gmail.com</p>
                        </div>
                    </div>
                    <div className='px-10 flex justify-center items-center bg-slate-100 rounded-xl border'>
                        <FaInstagram className='text-3xl'/>
                    </div>
                    <div className='px-10 flex justify-center items-center bg-slate-100 rounded-xl border'>
                        <FaTwitter className='text-3xl'/>
                    </div>
                    <div className='px-10 flex justify-center items-center bg-slate-100 rounded-xl border'>
                        <FaYoutube className='text-3xl'/>
                    </div>
                    <div className='px-10 flex justify-center items-center bg-slate-100 rounded-xl border'>
                        <FaLinkedin className='text-3xl'/>
                    </div>
                    <div className='px-10 flex justify-center items-center bg-slate-100 rounded-xl border'> 
                        <FaWifi className='text-4xl'/>
                    </div>
                </div>
            </div>
            <div className='flex border justify-between max-w-7xl mx-auto bg-slate-100 py-3 px-4 my-3 font-light text-sm rounded-xl'>
                <p>© InfoWorld Global. All rights reserved.</p>
                <p>Privacy Policy</p>
            </div>
    </div>
  )
}

export default FloatingDiv