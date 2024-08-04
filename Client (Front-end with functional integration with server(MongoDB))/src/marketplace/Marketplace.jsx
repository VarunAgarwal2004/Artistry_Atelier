import React, { useEffect, useState } from 'react'
import Card from '../components/Cards';
const Marketplace = () => {
  const [arts,setArts]=useState([]);
  useEffect(()=>{
    fetch("http//localhost:5000/all-arts").then(res=>res.json()).then(data=>setArts(data))
  },[])


  return (
    <div className='mt-28 px-4 lg:px-24 flex flex-col items-center'>
      <h2 className='text-5xl font-bold text-ceneter'>Find Creations That Pleases You</h2>
      <Card/>
      
    </div>
  )

}
export default Marketplace