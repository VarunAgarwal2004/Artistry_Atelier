import React, { useEffect, useState } from 'react';
import ArtCards from '../components/ArtCards';

const WinningArts = ({ searchQuery }) => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    let url = "http://localhost:5000/all-arts";
    if (searchQuery) {
      url += `?category=${searchQuery}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArts(data.slice(0)));
  }, [searchQuery]);

  return (
    <div className='w-full flex flex-col'>
      <div className='bg-[#15121F]'>
        <h2 className='text-5xl font-bold text-white ml-[35%] mt-[2%] mb-[2%]'>
          Search Our Award Winners
        </h2>
      </div>
      <div className='bg-white'>
        <ArtCards arts={arts} />
      </div>
    </div>
  );
};

export default WinningArts;
