import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleArt = () => {
  const{_id,art_title,artist_name,image_url,category,Size,art_description,price}=useLoaderData();
  return (
    <div className='flex justify-between items-center gap-10 px-14'>
       <img  className="h-[35%] w-[35%] mt-[10%]" src={image_url} alt=""/>
      <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-3xl font-bold text-red-700'>{art_title}</h2>
      <h2 className='text-2xl font-medium text-red-500'>By: {artist_name}</h2>
      <h3 className=''></h3>
      <h3>Category: {category}</h3>
      <h3>Size: {Size}</h3>
      <h3 className='text-2xl font-semibold text-red-700'>Rs.{price}</h3>
      <p className='mt-[3%]'>{art_description}</p>
    </div>
    </div>
    
  )
}

export default SingleArt