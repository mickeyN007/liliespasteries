import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'; // Import the SearchIcon from your icon library

const SearchBox: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setFocused(true);
  };

  return (
    <div className="w-full w-[122px] h-[42px] md:w-[316px] md:h-[52px] relative border border-gray-300 rounded-md">
      <div
        className={`relative bg-${
          focused ? '' : 'gray'
        } rounded-lg h-full p-2 pl-4 pr-12 transition-all duration-300`}
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-full outline-none bg-transparent"
          value={searchText}
          onChange={handleInputChange}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <MagnifyingGlassIcon className="h-6 w-6 text-black" />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;