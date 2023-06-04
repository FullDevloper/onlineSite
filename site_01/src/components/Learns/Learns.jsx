import React from 'react'
import "./learns.css";
import image3 from "../../assets/trending-011.jpg"
import image1 from "../../assets/trending-021.jpg"
import image2 from "../../assets/trending-041.jpg"
import {  Pagination} from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/pagination';
// import image1 from "../../assets/blog-3.svg"
const data = [
  {
    id: 1,
    image: image1,
    Category: "Баллет",
    subtitle: "Баллет бүжгийн гайхамшгийн хүсвэл энэхүү сургалтыг ",
    create:"09 February, 2022",
  },
  {
    id: 2,
    image: image2,
    Category: "Чөлөөт бүжиг",
    subtitle: "Чөлөөн хамт олон тэст 01 Хамтдаа лаг мундаг хахахааха",
    create:
      "09 February, 202",
  },
  {
    id: 3,
    image: image2,
    Category: "Үндэсний бүжиг",
    subtitle: "Common Misconceptions About Payment",
    create:
      "09 February, 202",
      teach:"Rentsen"
  },
  {
    id: 4,
    image: image3,
    Category: "Хип хоп бүжиг",
    subtitle: "Common Misconceptions About Payment",
    create:
      "09 February, 202",
  },
  // {
  //   id: 4,
  //   image: image3,
  //   Category: "Хип хоп бүжиг",
  //   subtitle: "Common Misconceptions About Payment",
  //   create:
  //     "09 February, 202",
  // },
];
const Blog = () => {
  return (
    <section className='blog container section ' id='ontsloh'>
        <h2 className='section__title'>Онцлох сургалтууд</h2>
        <div    modules={[Pagination]}
       className='blog__container grid'>
        {
          data.map(({id,image,Category,subtitle,create,teach})=>{
            return (
            <div className='blog__card'>
            <div className='blog__thumb'>
            <a href='#home'>
            <span className='blog__category'>{Category}</span>
            </a>
            <a href='#home'>
            <img src={image} alt='' className='blog_img'/>
            </a>
            </div>
            <div className='blog__details'>
            <h3 className='blog_title'>
            {subtitle}
            </h3>
            <div className='blog_meta'>
            <span>{create}</span>
            <span className='blog__dot'>.</span>
            <span>{teach}</span>
            </div>
  
            </div>
            </div>)
          })
        }
        
   
        </div>
    </section>
  )
}

export default Blog
 
// <div className='blog__card'>
// <div className='blog__thumb'>
// <a href='#'>
// <span className='blog__category'>
// Art
// </span>
// </a>
// <a href='#'>
// <img src={image3} alt='' className='blog_img'/>
// </a>
// </div>
// <div className='blog__details'>
// <h3 className='blog_title'>
// Common Misconceptions About Payment
// </h3>
// <div className='blog_meta'>
// <span></span>
// <span className='blog__dot'>.</span>
// <span>Reee</span>
// </div>

// </div>
// </div>
// <div className='blog__card'>
// <div className='blog__thumb'>
// <a href='#'>
// <span className='blog__category'>
// Design
// </span>
// </a>
// <a href='#'>
// <img src={image2} alt='' className='blog_img'/>
// </a>
// </div>
// <div className='blog__details'>
// <h3 className='blog_title'>
// Common Misconceptions About Payment
// </h3>
// <div className='blog_meta'>
// <span></span>
// <span className='blog__dot'>.</span>
// <span>Reee</span>
// </div>

// </div>
// </div>