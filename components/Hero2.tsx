'use client';

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

// Define the type for dropdown item
interface DropdownItem {
  name: string;
  link: string;
}

// Define the type for dropdown content
interface DropdownContent {
  [key: string]: DropdownItem[];
}

// Define the type for keys in dropdownContent
type DropdownKeys = 'Appliances' | 'Phones' | 'Electronics' | 'Supermarket' | 'Computing' | 'Gaming' | 'Home & Office';

const SidebarDemo = ({ data }: any) => {
  const [activeDropdown, setActiveDropdown] = useState<DropdownKeys | null>(null);

  // Handle mouse events to open/close the dropdown
  const handleMouseEnter = (item: DropdownKeys) => {
    setActiveDropdown(item);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Dropdown data structure
  const dropdownContent: DropdownContent = {
    Appliances: [
      { name: 'Refrigerators', link: '/category/refrigerators' },
      { name: 'Microwaves', link: '/category/microwaves' },
      { name: 'Washing Machines', link: '/category/washing-machines' }
    ],
    Phones: [
      { name: 'iPhones', link: '/category/iphones' },
      { name: 'Samsung', link: '/category/samsung' },
      { name: 'Techno', link: '/category/techno' }
    ],
    Electronics: [
      { name: 'Televisions', link: '/category/televisions' },
      { name: 'Speakers', link: '/category/speakers' },
      { name: 'Headphones', link: '/category/headphones' }
    ],
    Supermarket: [
      { name: 'Groceries', link: '/category/groceries' },
      { name: 'Snacks', link: '/category/snacks' },
      { name: 'Beverages', link: '/category/beverages' }
    ],
    Computing: [
      { name: 'Laptops', link: '/category/laptops' },
      { name: 'Desktops', link: '/category/desktops' },
      { name: 'Accessories', link: '/category/accessories' }
    ],
    Gaming: [
      { name: 'Consoles', link: '/category/consoles' },
      { name: 'Games', link: '/category/games' },
      { name: 'Accessories', link: '/category/gaming-accessories' }
    ],
    'Home & Office': [
      { name: 'Furniture', link: '/category/furniture' },
      { name: 'Office Supplies', link: '/category/office-supplies' },
      { name: 'Decor', link: '/category/decor' }
    ],
  };

  return (
    <div>
      <div className='max-w-7xl mx-auto flex p-8 mb-10 rounded-xl py-10'>
        <div className='list-none text-sm bg-slate-100 rounded-xl py-10 flex'>
          <div className='relative text-left px-10 w-[220px]'>
            {Object.keys(dropdownContent).map((item) => (
              <div 
                key={item}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item as DropdownKeys)} 
                onMouseLeave={handleMouseLeave}
              >
                <li className='flex items-center py-2 cursor-pointer text-gray-500 hover:text-black'> 
                  {item === 'Appliances' && <RiFridgeLine className='mr-2' size={20} />}
                  {item === 'Phones' && <RiSmartphoneLine className='mr-2' size={20} />}
                  {item === 'Electronics' && <RiTvLine className='mr-2' size={20} />}
                  {item === 'Supermarket' && <RiShoppingCartLine className='mr-2' size={20} />}
                  {item === 'Computing' && <RiComputerLine className='mr-2' size={20} />}
                  {item === 'Gaming' && <RiGamepadLine className='mr-2' size={20} />}
                  {item === 'Home & Office' && <RiHome2Line className='mr-2' size={20} />}
                  {item}
                </li>
                {activeDropdown === item && (
                  <div className='absolute left-full top-0 mt-1 w-[500px] rounded-xl px-10 bg-white shadow-lg z-10 p-4'>
                    <h2 className='text-lg text-center font-[400] py-10 '>{item} Categories</h2>
                    <div className='flex'>
                    <ul>
                      {dropdownContent[item].map((subItem) => (
                        <li key={subItem.name} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                          <a href={subItem.link}>{subItem.name}</a>
                        </li>
                      ))}
                    </ul>
                    <ul>
                      {dropdownContent[item].map((subItem) => (
                        <li key={subItem.name} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                          <a href={subItem.link}>{subItem.name}</a>
                        </li>
                      ))}
                    </ul>
                    <ul>
                      {dropdownContent[item].map((subItem) => (
                        <li key={subItem.name} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                          <a href={subItem.link}>{subItem.name}</a>
                        </li>
                      ))}
                    </ul>
                    <ul>
                      {dropdownContent[item].map((subItem) => (
                        <li key={subItem.name} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                          <a href={subItem.link}>{subItem.name}</a>
                        </li>
                      ))}
                    </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <MainHero />
      </div>
    </div>
  );
};

export default SidebarDemo;
