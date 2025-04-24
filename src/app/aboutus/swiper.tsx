'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

import Logos from '../components/logos'; // Capitalized component name

const slides = [
  { image: '/ignite.png' },
  { image: '/gala.png' },
  { image: '/gamecraft.png' },
  { image: '/masterclass.png' },
  { image: '/spellingbee.png' },
  { image: '/aec.png' },
];

export default function ImageSwiper() {
  return (
    <div className="w-full h-screen px-4 flex items-center justify-center">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full  "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Logos image={slide.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
