import React from 'react'
import PopularArtImg from "../assets/photo-collage.png.png"
const PopularArt = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center'>
    <div className='md:w-1/2'>
        <img src={PopularArtImg}  alt="" className='md:w-10/12 rounded-[20px]'/>
    </div>
    <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug text-[#15212F]'>Find Your Desired <span className='text-red-700'>Artwork Here!</span></h2>
        <p className='mb-10 text-lg md:w-5/6'>Minim excepteur excepteur cupidatat nostrud Lorem sint qui ea sint nisi ea exercitation ea aliqua. Ex ex eiusmod sunt excepteur nisi non adipisicing. Proident et exercitation culpa aliqua Lorem nostrud. Laboris adipisicing deserunt irure excepteur deserunt tempor exercitation excepteur consectetur quis enim et id. Anim commodo labore consequat eu enim dolore sit incididunt eiusmod sit consectetur. Sunt laboris consequat duis mollit Lorem ut.</p>
  
    <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-12'>
        <div>
        <h3 className='text-3xl font-bold'>500+</h3>
        <p className='text-base'>Artwork Listing</p>
     </div>
    <div>
        <h3 className='text-3xl font-bold'>350+</h3>
        <p className='text-base'>Registered Users</p>
    </div>
    <div>
        <h3 className='text-3xl font-bold'>1000+</h3>
        <p className='text-base'>Artwork Sold</p>
    </div>
</div>
  </div>
</div>
  )
}

export default PopularArt