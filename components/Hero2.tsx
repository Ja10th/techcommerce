'use client'

import React, { useState } from 'react';
import { 
  RiFridgeLine, 
  RiSmartphoneLine, 
  RiTvLine, 
  RiShoppingCartLine, 
  RiComputerLine, 
  RiGamepadLine, 
  RiHome2Line 
} from 'react-icons/ri';
import MainHero from './MainHero';

const SidebarDemo = ({ data }: any) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle mouse events to open/close the dropdown
  const handleMouseEnter = (item: string) => {
    setActiveDropdown(item);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div>
      <div className='max-w-7xl mx-auto flex p-8 mb-10 rounded-xl py-10'>
        <div className='list-none text-sm bg-slate-100 rounded-xl py-10 justify-start flex'>
        <div className='relative text-left px-10 w-[220px]'>
          {/* Appliances */}
          <li 
            className='flex items-center py-2 cursor-pointer text-gray-500 hover:text-black' 
            onMouseEnter={() => handleMouseEnter('Appliances')}
            onMouseLeave={handleMouseLeave}
          >
            <RiFridgeLine className='mr-2' size={20} /> Appliances
          </li>
          {activeDropdown === 'Appliances' && (
            <ul className='absolute left-full top-0 p-10 ml-4 w-48 bg-white shadow-lg rounded-lg z-10'> {/* Changed top-0 to top-full */}
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                <a href='/category/refrigerators'>Refrigerators</a>
              </li>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                <a href='/category/microwaves'>Microwaves</a>
              </li>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                <a href='/category/washing-machines'>Washing Machines</a>
              </li>
            </ul>
          )}

          {/* Phones & Tablet */}
          <li 
            className='flex items-center py-2 cursor-pointer text-gray-500 hover:text-black' // Removed relative from li
            onMouseEnter={() => handleMouseEnter('Phones')}
            onMouseLeave={handleMouseLeave}
          >
            <RiSmartphoneLine className='mr-2' size={20} /> Phones & Tablet
          </li>
          {activeDropdown === 'Phones' && (
            <ul className='absolute left-full top-full ml-4 w-48 bg-white shadow-lg rounded-lg z-10'> {/* Changed top-1 to top-full */}
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                <a href='/category/iphones'>iPhones</a>
              </li>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                <a href='/category/samsung'>Samsung</a>
              </li>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                <a href='/category/techno'>Techno</a>
              </li>
            </ul>
          )}


            {/* Electronics */}
            <li 
              className='flex items-center py-2 cursor-pointer text-gray-500 hover:text-black'
              onMouseEnter={() => handleMouseEnter('Electronics')}
              onMouseLeave={handleMouseLeave}
            >
              <RiTvLine className='mr-2' size={20} /> Electronics
            </li>
            {activeDropdown === 'Electronics' && (
              <ul className='absolute left-full top-0 ml-4 w-48 bg-white shadow-lg rounded-lg z-10'>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                  <a href='/category/televisions'>Televisions</a>
                </li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                  <a href='/category/speakers'>Speakers</a>
                </li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                  <a href='/category/headphones'>Headphones</a>
                </li>
              </ul>
            )}

            {/* Supermarket */}
            <li className='flex items-center py-2 cursor-pointer text-gray-500 hover:text-black'>
              <RiShoppingCartLine className='mr-2' size={20} /> Supermarket
            </li>

            {/* Computing */}
            <li className='flex items-center py-2 cursor-pointer text-gray-500 hover:text-black'>
              <RiComputerLine className='mr-2' size={20} /> Computing
            </li>

            {/* Gaming */}
            <li className='flex items-center py-2 cursor-pointer text-gray-500 hover:text-black'>
              <RiGamepadLine className='mr-2' size={20} /> Gaming
            </li>

            {/* Home & Office */}
            <li className='flex items-center py-2 cursor-pointer text-gray-500 hover:text-black'>
              <RiHome2Line className='mr-2' size={20} /> Home & Office
            </li>
          </div>
        </div>
        <MainHero />
      </div>
    </div>
  );
};

export default SidebarDemo;
