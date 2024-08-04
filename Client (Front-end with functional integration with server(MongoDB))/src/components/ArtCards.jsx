import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import{ FaCartShopping } from 'react-icons/fa6';
const ArtCards = ({headline,arts}) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
        <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
        {/*card*/}
        <div className='mt-12'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >{
        arts.map(art=> <SwiperSlide key={art._id}>
            <Link to={`/art/${art._id}`}>
                <div className='relative'>
                    <img  className="h-[260px] w-[300px] rounded-[20px]" src={art.image_url} alt=''/>
                    <div className=' absolute top-3 right-3 bg-red-600 hover:bg-black p-2 rounded'>
                        <FaCartShopping className='w-4 h-4 text-white'/>
                    </div>
                </div>
                <div>
                    <h3>{art.art_title}</h3>
                    <p>{art.artist_name}</p>
                    <div>
                        <p>{art.price}</p>
                    </div>
                </div>
            </Link>
        </SwiperSlide>)

      }
        
      </Swiper>
        </div>
    </div>
  )
}

export default ArtCards