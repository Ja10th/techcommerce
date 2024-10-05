import React from 'react'

const Box = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto p-4 mb-10 flex flex-wrap items-center justify-center gap-4 lg:gap-2'>
        {/* Item 1 */}
        <div className='flex flex-col items-center py-1'>
          <div className='w-[90px] sm:w-[100px] lg:w-[200px] h-[70px] sm:h-[100px] lg:h-[200px] bg-red-400 rounded-xl flex items-center justify-center'>
            <img
              src="https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/August/New_arrival/6.gif"
              alt="Arrival"
              className='rounded-xl h-full w-full object-cover'
            />
          </div>
          <p className='text-gray-500 pt-2 text-xs sm:text-sm lg:text-base text-center'>New Arrival</p>
        </div>

        {/* Item 2 */}
        <div className='flex flex-col items-center py-1'>
          <div className='w-[90px] sm:w-[100px] lg:w-[200px] h-[70px] sm:h-[100px] lg:h-[200px] bg-red-400 rounded-xl flex items-center justify-center'>
            <img
              src="https://ng.jumia.is/cms/0-5-brand-festival/2024/Collection/homepage-thumbnails/clearance-sales.png"
              alt="Clearance Sale"
              className='rounded-xl h-full w-full object-cover'
            />
          </div>
          <p className='text-gray-500 text-xs sm:text-sm lg:text-base pt-2 text-center'>Clearance Sale</p>
        </div>

        {/* Item 3 */}
        <div className='flex flex-col items-center py-1'>
          <div className='w-[90px] sm:w-[100px] lg:w-[200px] h-[70px] sm:h-[100px] lg:h-[200px] bg-red-400 rounded-xl flex items-center justify-center'>
            <img
              src="https://ng.jumia.is/cms/0-5-brand-festival/2024/Collection/homepage-thumbnails/appliances.png"
              alt="Appliance Deals"
              className='rounded-xl h-full w-full object-cover'
            />
          </div>
          <p className='text-gray-500 text-xs sm:text-sm lg:text-base pt-2 text-center'>Appliance Deals</p>
        </div>

        {/* Item 4 */}
        <div className='flex flex-col items-center py-1'>
          <div className='w-[90px] sm:w-[100px] lg:w-[200px] h-[70px] sm:h-[100px] lg:h-[200px] bg-red-400 rounded-xl flex items-center justify-center'>
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/590/172/non_2x/dynamic-final-sale-banner-up-to-50-off-vector-illustration-modern-flash-sale-banners-sale-banner-template-design.jpg"
              alt="Phone & Tablet Deals"
              className='rounded-xl h-full w-full object-cover'
            />
          </div>
          <p className='text-gray-500 text-xs sm:text-sm lg:text-base pt-2 text-center'>Phone & Tablet Deals</p>
        </div>

        {/* Item 5 */}
        <div className='flex flex-col items-center py-1'>
          <div className='w-[90px] sm:w-[100px] lg:w-[200px] h-[70px] sm:h-[100px] lg:h-[200px] bg-red-400 rounded-xl flex items-center justify-center'>
            <img
              src="https://ng.jumia.is/cms/0-5-brand-festival/2024/Collection/homepage-thumbnails/home-essentials.png"
              alt="Home Essentials"
              className='rounded-xl h-full w-full object-cover'
            />
          </div>
          <p className='text-gray-500 text-xs sm:text-sm lg:text-base pt-2 text-center'>Home Essentials</p>
        </div>

        {/* Item 6 */}
        <div className='flex flex-col items-center py-1'>
          <div className='w-[90px] sm:w-[100px] lg:w-[200px] h-[70px] sm:h-[100px] lg:h-[200px] bg-red-400 rounded-xl flex items-center justify-center'>
            <img
              src="https://img.pikbest.com/origin/10/06/21/48IpIkbEsT32S.jpg!sw800"
              alt="Office Essentials"
              className='rounded-xl h-full w-full object-cover'
            />
          </div>
          <p className='text-gray-500 text-xs sm:text-sm lg:text-base pt-2 text-center'>Office Essentials</p>
        </div>
      </div>
    </div>
  )
}

export default Box;
