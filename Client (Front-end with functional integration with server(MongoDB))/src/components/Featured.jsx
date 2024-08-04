
import collagehead from "../assets/collage2.png";
import { HiOutlineLifebuoy } from "react-icons/hi2";
import person1 from "../assets/person1(1).png";
import person2 from "../assets/person2(1).png";
import { FaLocationDot } from "react-icons/fa6";
import React, { useRef, useState } from 'react';
import { IoPerson } from "react-icons/io5";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
const Featured = () => {
  return (
    <div className="">
      <div className="relative">
        <img
          src={collagehead}
          className="w-[100%] h-[5%] blur-[5px] mt-[5%] z-[10]"
          alt="Collage"
        />
        <h2 className="text-[120px] font-extrabold drop-shadow-2xl text-white z-[20] absolute bottom-[4%] right-[4%]">
          <HiOutlineLifebuoy className="absolute right-[100%] bottom-[10%] text-[130px] font-extrabold" />
          Artistry Atelier
        </h2>
      </div>
      <div>
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-5xl font-bold mt-[5%] mb-[4%]">
            Featured Artists
          </h2>
          <div className="flex items-center gap-12">
            <img className="w-[30%]" src={person1} />
            <div className="flex flex-col items-center">
              <h2 className="text-2xl">Peter Mason</h2>
              <div className="flex ">
                <FaLocationDot className="text-red-700 mt-1 mr-2" />
                <h2>United Kingdom</h2>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-12">
            <img className="w-[30%]" src={person1} />
            <div className="flex flex-col items-center">
              <h2 className="text-2xl">Ford Henry</h2>
              <div className="flex ">
                <FaLocationDot className="text-red-700 mt-1 mr-2" />
                <h2>United States</h2>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-12">
            <img className="w-[25%] ml-10" src={person2} />
            <div className="flex flex-col items-center">
              <h2 className="text-2xl">Radhika Sharma</h2>
              <div className="flex ">
                <FaLocationDot className="text-red-700 mt-1 mr-2" />
                <h2>India</h2>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-12">
            <img className="w-[30%] " src={person1} />
            <div className="flex flex-col items-center">
              <h2 className="text-2xl">J.K Watson</h2>
              <div className="flex ">
                <FaLocationDot className="text-red-700 mt-1 mr-2" />
                <h2>Australia</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="  relative  mt-[5%] mb-[4%] left-[40%] text-5xl text-[#15121F] font-bold">Customer Stories</h2>
          <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: false,
        }}
        modules={[Pagination]}
        className="mySwiper mb-[4%]"
        initialSlide={2}
      >
        <SwiperSlide>
          <div className="flex flex-col items-center gap-10">
          <IoPerson className="text-4xl"/>
          <h2 className="text-2xl font-semibold">Theresa Jabocs</h2>
          <p className="text-center">Culpa aliquip laboris enim fugiat consequat proident non duis laboris minim consectetur dolore est enim.Culpa aliquip laboris enim fugiat consequat proident non duis laboris minim consectetur dolore est enim.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-center gap-10">
          <IoPerson className="text-4xl"/>
          <h2 className="text-2xl font-semibold">Varun Agarwal</h2>
          <p className="text-center">Culpa aliquip laboris enim fugiat consequat proident non duis laboris minim consectetur dolore est enim.Culpa aliquip laboris enim fugiat consequat proident non duis laboris minim consectetur dolore est enim.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-center gap-10">
          <IoPerson className="text-4xl"/>
          <h2 className="text-2xl font-semibold">Keshav Aneja</h2>
          <p className="text-center">Culpa aliquip laboris enim fugiat consequat proident non duis laboris minim consectetur dolore est enim.Culpa aliquip laboris enim fugiat consequat proident non duis laboris minim consectetur dolore est enim.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-center gap-10">
          <IoPerson className="text-4xl"/>
          <h2 className="text-2xl font-semibold">Maria Johns</h2>
          <p className="text-center">Culpa aliquip laboris enim fugiat consequat proident non duis laboris minim consectetur dolore est enim.Culpa aliquip laboris enim fugiat consequat proident non duis laboris minim consectetur dolore est enim.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-center gap-10">
          <IoPerson className="text-4xl"/>
          <h2 className="text-2xl font-semibold">M.S Dhoni</h2>
          <p className="text-center">Culpa aliquip laboris enim fugiat consequat proident non duis laboris minim consectetur dolore est enim.Culpa aliquip laboris enim fugiat consequat proident non duis laboris minim consectetur dolore est enim.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-center gap-10">
          <IoPerson className="text-4xl"/>
          <h2 className="text-2xl font-semibold">Lewis Hamilton</h2>
          <p className="text-center">Culpa aliquip laboris enim fugiat consequat proident non duis laboris minim consectetur dolore est enim.Culpa aliquip laboris enim fugiat consequat proident non duis laboris minim consectetur dolore est enim.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-center gap-10">
          <IoPerson className="text-4xl"/>
          <h2 className="text-2xl font-semibold">Lucia Roberts</h2>
          <p className="text-center">Culpa aliquip laboris enim fugiat consequat proident non duis laboris minim consectetur dolore est enim.Culpa aliquip laboris enim fugiat consequat proident non duis laboris minim consectetur dolore est enim.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-center gap-10">
          <IoPerson className="text-4xl"/>
          <h2 className="text-2xl font-semibold">Tony Stark</h2>
          <p className="text-center">Culpa aliquip laboris enim fugiat consequat proident non duis laboris minim consectetur dolore est enim.Culpa aliquip laboris enim fugiat consequat proident non duis laboris minim consectetur dolore est enim.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-center gap-10">
          <IoPerson className="text-4xl"/>
          <h2 className="text-2xl font-semibold">Shreya Singh</h2>
          <p className="text-center">Culpa aliquip laboris enim fugiat consequat proident non duis laboris minim consectetur dolore est enim.Culpa aliquip laboris enim fugiat consequat proident non duis laboris minim consectetur dolore est enim.</p>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Featured;
