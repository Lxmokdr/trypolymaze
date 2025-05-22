'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

import Comment from '../components/comments'; 

const slides = [
  { name: 'Youssra ghemari', image: '/young.jpg', comment: 'Polymaze was a truly unforgettable experience. From the incredible guidance we received throughout the robot-building journey to the excitement and energy of the ddya, every moment was special. The Polymaze bot was the first robot I ever built. It wasn’t just a project; it was the beginning of a journey I’ll never forget..' },
  { name: 'Lyna bouchama', image: '/young.jpg', comment: 'Polymaze was the best experience for 2024, that marked my year and all my years as student.It was an experience full of good memories meme si on a vécu des moments de stress.I would say gestion de stress as first thing XD especially when you don’t start working early and u have 0 experience . It was a good occasion too to link between what we learned at school comme des notions théoriques , and la pratique in this funny and competitive way. ' },
  { name: 'Mohamed morsli', image: '/young.jpg', comment: 'Hope is the key to survive in a Maze ! in simple words, Polymaze was unexpectedly a wonderful experiance.' },
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
    <div className="w-full px-4 flex justify-start">
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
          480: { slidesPerView: 1.1 },
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3},
        }}
        className="w-[80%] ml-0 self-start"
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