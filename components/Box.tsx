import React from 'react'

const Box = () => {
  return (
    <div >
        <div className='max-w-7xl mx-auto p-4 mb-10 flex items-center justify-center gap-2'>
            <div className='text-center py-1'>
                <div className='w-[200px] h-[200px] bg-red-400 rounded-xl'>
                    <img src="https://ng.jumia.is/cms/0-1-initiatives/jumia-global/2024/August/New_arrival/6.gif" alt="Arrival"
                    className='rounded-xl pb-1'
                    /></div>
                <p className='text-gray-500 pt-2 '>New Arrival</p>
            </div>
            <div className='text-center py-1'>
                <div className='w-[200px] h-[200px] bg-red-400 rounded-xl'>
                    <img src="https://ng.jumia.is/cms/0-5-brand-festival/2024/Collection/homepage-thumbnails/clearance-sales.png" 
                    alt="clearance deal"
                    className='rounded-xl '
                    />
                </div>
                <p className='text-gray-500 pt-2'>Clearance Sale</p>
            </div>
            <div className='text-center py-1'>
                <div className='w-[200px] h-[200px] bg-red-400 rounded-xl'>
                    <img src="https://ng.jumia.is/cms/0-5-brand-festival/2024/Collection/homepage-thumbnails/appliances.png" 
                    alt="Images of appliance" className='rounded-xl'/>
                </div>
                <p className='text-gray-500 pt-2'>Appliance Deals</p>
            </div>
            <div className='text-center py-1'>
                <div className='w-[200px] h-[200px] bg-red-400 rounded-xl'>
                    <img src="https://ng.jumia.is/cms/0-5-brand-festival/2024/Collection/homepage-thumbnails/phones.png"
                     alt="phones"  className='rounded-xl'/>
                </div>
                <p className='text-gray-500 pt-2'>Phone & Tablet Deals</p>
            </div>
            <div className='text-center py-1'>
                <div className='w-[200px] h-[200px] bg-red-400 rounded-xl'>
                    <img src="https://ng.jumia.is/cms/0-5-brand-festival/2024/Collection/homepage-thumbnails/home-essentials.png" 
                    alt="Home essentials"  className='rounded-xl'/>
                </div>
                <p className='text-gray-500 pt-2'>Home Essentials</p>
            </div>
            <div className='text-center py-1'>
                <div className='w-[200px] h-[200px] bg-red-400 rounded-xl'>
                    <img src="https://ng.jumia.is/cms/0-5-brand-festival/2024/Collection/homepage-thumbnails/home-essentials.png" 
                    alt="Home essentials"  className='rounded-xl'/>
                </div>
                <p className='text-gray-500 pt-2'>Home Essentials</p>
            </div>
           
        </div>
    </div>
  )
}

export default Box