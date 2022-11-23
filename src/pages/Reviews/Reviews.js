import React from 'react';
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
// import "./Review.css";
// import "swiper/css";
// import "./Review.css";
import "./Review.css";
import "swiper/css";
import { HiStar } from "react-icons/hi";



const Reviews = () => {
  return (
    <div className='swiper-container '>
      <h1 className='uppercase text-4xl text-center my-10'>Reviews</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card bg-gray-600 shadow-xl">
            <figure className="px-5 pt-5">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-gray-600 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-gray-600 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-gray-600 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-gray-600 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-gray-600 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-gray-600 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-gray-600 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-gray-600 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
                <span><HiStar className='text-red-700' /></span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;