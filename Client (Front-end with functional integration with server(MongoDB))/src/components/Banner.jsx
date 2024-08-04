import React, { useState } from 'react';
import Bannercard from '../home/Bannercard';

const Banner = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchQuery);
  };

  return (
    <div className='px-4 lg:px-24 bg-[#F1E9D2] flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/*left side*/}
        <div className='flex flex-col justify-between md:w-[60%] space-y-8 h-full'>
          <h2 className='text-5xl font-bold leading-snug text-[#15121F]'>
            Buy and Sell Your Creations{' '}
            <span className='text-red-700'>for the Best Value</span>
          </h2>
          <p1 className='md:w-4/5 text-[#15121F] text-[20px]'>
            lorem Aliqua aliquip esse sit officia veniam do irure commodo
            ullamco nisi est nostrud. Occaecat deserunt ut officia nisi ut culpa
            ad laboris nisi aliqua duis aliquip est. Quis nisi irure pariatur
            nisi velit duis laborum Lorem do ullamco. Adipisicing consequat
            ipsum id eu aliqua dolor.
          </p1>
          <div>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search a Creation...'
              className='py-2 px-2  outline-none rounded-full'
              value={searchQuery}
              onChange={handleInputChange}
              
            />
            <button
              className='bg-red-700 px-6 py-2 h-[2.64rem] rounded-full border-black border-1 text-white font-medium hover:bg-[#15121F] transition-all ease-in duration-200 '
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
        </div>
        {/*right side*/}
        <div className=''>
          <Bannercard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
