import React from 'react'
import "./comment.css";
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/pagination';

import Image1 from "../../assets/avatar-1.svg"
import Image3 from "../../assets/avatar-3.svg"
const data = [
  {
    id: 1,
    image: Image1,
    title: "Дорж Бат",
    subtitle: "Баллет сургалт",
    comment:
      "Энэхүү сургалт үнэхээр гайхалтай байсан Дараагийн сургалтыг хүлээж байна. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "Бат Дорж ",
    subtitle: "Үндэсний бүжиг",
    comment:
      "Монголын үндэсний бүжгийн сургалтыг онлайн цахим хослуулан авч суралцсан үнэхээр гоё байлаа.   Good luck! 👍",
  },
];

const Comment = () => {
  return (
    <section className='testmonials container section' id='comment'>
    <h2 className='section__title'>Суралцагчдын сэтгэгдэл</h2>
    <Swiper 
    modules={[Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    loop={true}
    grabCursor={true}
    pagination={{ clickable: true }}

 className='testmonials__container grid'>
    {
      data.map(({id,image,title,subtitle,comment})=>{
        return(
          <SwiperSlide className='testimonial__item' key={id}>
          
          <div className='thumb'>
          <img src={image} alt=''/>
          </div>
          <h3 className='testimonials__title'>
          {title}
          </h3>
          <span className='subtitle'>{subtitle}</span>
          <div className='comment'>{comment}</div>
          </SwiperSlide>
        )
      })
    }
    </Swiper>
    </section>
  )
}

export default Comment

