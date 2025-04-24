'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

import Comment from '../components/comments'; // Make sure this path is correct

const slides = [
  { name: 'Young', image: '/young.jpg', comment: 'This is a sample comment for Young rgerggrg.' },
  { name: 'Sarah', image: '/young.jpg', comment: 'Loved the experience!rggrbrbrbrbr' },
  { name: 'Ahmed', image: '/young.jpg', comment: 'Highly recommended.rbrtbgdbtttesegtrhh(tzrghrbhtrhrthh' },
  { name: 'Lina', image: '/young.jpg', comment: 'Very intuitive and useful.hreherfberhjbervhrvruvhbrrhvjrhgirgbrughghrviur' },
  { name: 'Youssef', image: '/young.jpg', comment: 'I enjoyed using this service.fjriegrubgrghrbgryuhghrtghrjbgrigrbgrhjbrgruhbgrhgjrkgbr' },
  { name: 'Sana', image: '/young.jpg', comment: 'Amazing work!rtgkjgnueigjbregherjbgreghtrjbgrkgnlelkg' },
  { name: 'Khaled', image: '/young.jpg', comment: 'Clean and fast UI.rgkrengjirgnjregiuzgrggtrehetgtrgtrehrtgthtrhrgrhrth' },
  { name: 'Nour', image: '/young.jpg', comment: 'Great customer support.tghrtgerggrtgrtgrkgnjgbrgejbjgbrjgrgbirjekbgrjgkr' },
  { name: 'Ali', image: '/young.jpg', comment: 'I will recommend this to friends.rgnrjhebrgierhgbhegbjerghhgehebgerhjgbeghebfhdvjbfvhjgvbughberghj' },
  { name: 'Rania', image: '/young.jpg', comment: 'This saved me a lot of time.ergjjergberjgerbfhzjrbfrehebgrthbrghrvbgurhvrbghervguerhjegguhegbehrgberhjgerughj' },
];

export default function ImageSwiper() {
  return (
    <div className="w-full h-screen  px-4">
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
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Comment name={slide.name} image={slide.image} comment={slide.comment} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
