import React from 'react'
import Banner from '../components/Banner'
import WinningArts from './WinningArts'
import PopularArt from './PopularArt'
import PromoBanner from './PromoBanner'
import { useState } from 'react'
const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  }
  return (
    <div>
   <Banner handleSearch={handleSearch} />
      <WinningArts searchQuery={searchQuery} />
    <PopularArt/>
    <PromoBanner/>
    </div>
  
  )
}

export default Home