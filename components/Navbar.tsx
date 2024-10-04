'use client';

import Link from 'next/link'; 
import { usePathname } from 'next/navigation'; 
import React, { useState } from 'react'; 
import { AiFillDownCircle } from 'react-icons/ai'; 
import { useShoppingCart } from 'use-shopping-cart'; 
import Banner from './Banner'; 
import { useAuth0 } from '@auth0/auth0-react';
import { RiAccountCircleLine, RiQuestionLine, RiShoppingCartLine } from 'react-icons/ri'; 

const links = [
    {name: 'Phones', href: '/Phones'},
    {name: 'Laptops', href: '/Laptops'},
    {name: 'Desktops', href: '/Desktops'},
];

const Navbar = () => { 
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const pathname = usePathname(); 
    const { handleCartClick } = useShoppingCart(); 

    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false); 

    const handleMenuToggle = () => {
        setIsOpen((prev) => !prev); 
    };

    const handleSearch = () => {
        if (searchTerm) {
            window.location.href = `/search?query=${encodeURIComponent(searchTerm)}`;
        } else {
            alert('Please enter a product to search for');
        }
    };

    const handleLogout = () => {
        logout(); 
        window.location.href = '/'; 
    };

    const handleAccountClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault(); // Prevent any default action
        if (isAuthenticated) {
            handleLogout(); // Call your logout function
        } else {
            loginWithRedirect(); // Call your login function
        }
    };

    return (
        <>
            <Banner />
            <Link href='/'>
                <div className='bg-slate-100 p-2 flex justify-center cursor-pointer items-center text-center'>
                    <AiFillDownCircle className='text-sm text-red-300'/>
                    <p className='text-red-300 text-sm pl-1'> Sell on Infoworld</p>
                </div>
            </Link>

            <div className='md:sticky w-full'> 
                <div className='flex p-8 justify-between items-center max-w-7xl mx-auto'>
                    <div>
                        <Link href='/' className='flex lg:text-[1.5rem] justify-center items-center'>
                            <AiFillDownCircle className='text-red-300 text-4xl lg:text-3xl mr-1'/>
                            <p className='hidden lg:flex'>Infoworld Global</p>
                        </Link>
                    </div>

                    <div className="flex justify-center items-center space-x-1">
                        <input
                            type="text"
                            placeholder="Search products, brands"
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="border rounded-xl py-2 px-3 w-[150px] lg:w-[400px]  focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Search
                        </button>
                    </div>

                    <div className="relative">
                        <button 
                            onClick={handleMenuToggle} 
                            className="md:hidden p-2 rounded-lg bg-gray-300 hover:bg-gray-400">
                            Menu
                        </button>

                        {isOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center z-50">
                                <div 
                                    onClick={handleMenuToggle} 
                                    className="absolute top-4 right-4 text-white cursor-pointer">
                                    &times; 
                                </div>

                                <div className="flex flex-col space-y-4 text-lg">
                                    <div className="flex items-center space-x-2 cursor-pointer text-gray-400 hover:text-black" onClick={handleAccountClick}>
                                        <RiAccountCircleLine size={24} />
                                        <span>{isAuthenticated ? user?.name || 'User' : 'Account'}</span>
                                    </div>

                                    <Link
                                    href='/'
                                    className="flex items-center space-x-2 cursor-pointer hover:text-black">
                                        <RiQuestionLine size={24} />
                                        <span className="text-normal hover:text-black">Help</span>
                                    </Link>

                                    <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
                                        <RiAccountCircleLine size={24} />
                                        <span className="text-normal">Blog</span>
                                    </div>

                                    <div 
                                        onClick={handleCartClick} 
                                        className="flex items-center space-x-2 cursor-pointer hover:text-gray-300">
                                        <RiShoppingCartLine size={24} /> 
                                        <span className="text-normal">Cart</span> 
                                    </div>
                                </div>
                            </div>
                        )}
                        
                    </div>

                    <div className="hidden md:flex justify-between ">
                        <div 
                            className="flex items-center space-x-2 cursor-pointer hover:text-black group p-2 rounded-lg" 
                            onClick={handleAccountClick}
                        >
                            <RiAccountCircleLine size={24} className='text-gray-500 group-hover:text-black'/>
                            <p className="text-normal text-gray-500 group-hover:text-black">{isAuthenticated ? user?.name || 'User' : 'Account'}</p>
                        </div>

                        <Link 
                        href='/help'
                        className="flex items-center space-x-2 cursor-pointer p-2 group rounded-lg">
                            <RiQuestionLine size={24} className='text-gray-500 group-hover:text-black'/>
                            <span className="text-normal text-gray-500 group-hover:text-black">Help</span>
                        </Link>

                        <Link 
                        href='/blogpost'
                        className="flex items-center space-x-2 cursor-pointer group p-2 rounded-lg">
                            <RiAccountCircleLine size={24} className='text-gray-500 group-hover:text-black'/>
                            <span className="text-normal text-gray-500 group-hover:text-black ">Blog</span>
                        </Link>

                        <div 
                            onClick={handleCartClick} 
                            className="flex items-center space-x-2 cursor-pointer group p-2 rounded-lg">
                            <RiShoppingCartLine size={24} className='text-gray-500 group-hover:text-black'/>
                            <span className="text-normal text-gray-500 group-hover:text-black">Cart</span> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar; 
