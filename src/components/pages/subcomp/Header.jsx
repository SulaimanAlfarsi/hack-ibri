import React from 'react';
import { RiFilter2Line } from 'react-icons/ri';
import { BiTrash } from 'react-icons/bi';

const Header = () => {
  return (
    <div className="bg-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Filters */}
        <div className="flex space-x-4">
          <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
            All Categories
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
            Price Range
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
            All Oman
          </button>
        </div>

        {/* Clear Filters */}
        <div className="flex space-x-2">
          <button className="text-gray-500 hover:text-gray-700">
            <BiTrash /> Clear All
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            Seeds
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;