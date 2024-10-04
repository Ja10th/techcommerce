import React from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'

const MainHero = () => {
  return (
    <div>
        <div className='text-center'>
          <h1 className='text-[4.5rem] px-4 font-[400] pt-10 pb-6 leading-[110%]'>Your One-Stop Shop for Everything Tech and Home!</h1>
          <p className='text-gray-500 pb-4'>We&apos;ve got you covered with unbeatable prices and fast delivery.</p>
          <button
            className="bg-blue-500  text-white px-4 py-2 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" // Styling for the button
             >
               <div className='flex items-center text-center justify-center gap-2 '>
               Order Now <span><RiShoppingCartLine /></span> {/* Button text */}
                </div> 
             </button>
        </div>

    </div>
  )
}

export default MainHero