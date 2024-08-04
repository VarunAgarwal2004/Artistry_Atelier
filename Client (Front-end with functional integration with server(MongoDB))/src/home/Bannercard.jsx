import React from 'react'
//import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './Bannercard.css';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

const Bannercard = () => {
  return (
    <div className='banner'>
        <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://d3rf6j5nx5r04a.cloudfront.net/iNEK1IoVsD7-BJXSsMDObww9APQ=/900x0/product/2/0/7323e795a0aa4a42bc48ebc71cca5c0b_opt.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://d3rf6j5nx5r04a.cloudfront.net/1Ya_rvMRQbRbPizfb45sSnTsC-U=/1120x0/product/2/4/1ad1934b97f349b5bf3f54c4c26fb292_opt.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://d3rf6j5nx5r04a.cloudfront.net/jyHgus1aollT9_B1Tl0EtpscFO0=/1120x0/product/4/4/de3735e93f634415b79d0d4fbcb1ba88_opt.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://d3rf6j5nx5r04a.cloudfront.net/JW2kx5Fkh3Bn-zPQNhZTHWknvOo=/1120x0/product/3/b/c7fdf8ce67f2406080a31a2a6282dbe0_opt.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Bannercard