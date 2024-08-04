import React from 'react'
import { Link } from 'react-router-dom'
import awardImg from "../assets/award-1.png"
const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-[#15121F] px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-6xl font-bold mb-6 leading-snug text-white'>2024 Gallery Awards Shortlist</h2>
                <Link to="/marketplace" className=" block "><button className='bg-red-700 text-white font-semibold px-5 py-2 rounded hover:bg-white hover:text-[#15121F] transition-all duration-300'>Explore More</button></Link>
            </div>
            <div>
                <img src={awardImg} alt="" className='w-80 bg-[#15121F]'/>
            </div>
        </div>
    </div>
  )
}

export default PromoBanner