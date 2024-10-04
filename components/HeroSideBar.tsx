import React, { useState } from 'react';
import { RiAccountCircleLine, RiQuestionLine, RiShoppingCartLine } from 'react-icons/ri';

const DropdownSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Dropdown Toggle Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-gray-200"
      >
        <RiAccountCircleLine size={24} />
        <span className="text-normal">Menu</span>
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg w-64">
          <div className="flex flex-col p-4">
            <h3 className="text-lg font-semibold mb-2">Options</h3>

            {/* Sidebar-like options */}
            <div className="flex flex-col space-y-2">
              {/* Account Option */}
              <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-500 p-2 rounded-lg">
                <RiAccountCircleLine size={24} />
                <span className="text-normal">Account</span>
              </div>

              {/* Help Option */}
              <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-500 p-2 rounded-lg">
                <RiQuestionLine size={24} />
                <span className="text-normal">Help</span>
              </div>

              {/* Blog Option */}
              <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-500 p-2 rounded-lg">
                <RiAccountCircleLine size={24} />
                <span className="text-normal">Blog</span>
              </div>

              {/* Cart Option */}
              <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-500 p-2 rounded-lg">
                <RiShoppingCartLine size={24} />
                <span className="text-normal">Cart</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownSidebar;
