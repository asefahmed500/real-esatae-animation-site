"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";  
import "swiper/css";
import "swiper/css/pagination";

const CustomSwiper = ({ slides }) => {
  return (
    <div className="w-full h-[80vh] relative">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,  // optional: add delay for autoplay
        }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center bg-black text-white">
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
