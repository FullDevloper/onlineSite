import React from 'react'
import "./Home.css"
// import Me from "../../assets/avatar-1.svg"
// import HeaderSocials from './HeaderSocials'
// import ScrollDown from './ScrollDown'
// import Shapes from './Shapes'
import HeroImage from "../../assets/categories-011.jpg"
import Auth from '../Auth/Auth';
import { useSelector } from '../../redux/store';
export const heroData = {
  title: ` БҮЖИГЛЭХ ДУРТАЙ ХЭН БҮХЭНД ЗОРИУЛАВ`,
  subtitle:
    'Та өөрийн хүссэн бүжгийн төрлийг онлайнаар болон танхимаар, боломжтой цагаа сонгон, хүссэн багш дээрээ бүртгүүлэн сургалтанд хамрагдах бүрэн боломжтой.',
  btnText: 'Эхлэх',
  image: HeroImage,
};
const Home = () => {
  const {title,subtitle,btnText,image}=heroData;
  const {sideBar}=useSelector((state)=>state.app)
  const {isLoggedIn}=useSelector((state)=>state.auth)
  // console.log(sideBar.open,"zaa")
  return (
    <section  id='home' className='lg:h-[820px] container section'>

      <div className=' mx-auto  h-full relative '>
      <div className=' flex flex-col xl:flex-row items-center h-full md:py-14'>

 <>
  <div className='text-center xl:text-left'>
 <h1 className='h11 xl:max-w-[700px] mb-6 lg:mb-12' data-aos="fade-down" data-aos-delay="400">{title}</h1>
  <p className="lead xl:max-w-[380px] mb-6 lg:mb-12" data-aos="fade-down" data-aos-delay="500">{subtitle}</p>
   <a href='/ontsloh'> <button  className='btn btn-primary mb-8 xl:mb-0' data-aos="fade-down" data-aos-delay="600">{btnText} </button></a>
  </div>
  <div className='xl:absolute mt-22 rounded xl:-right-20 xl:bottom-16' data-aos="fade-left" data-aos-delay="700">
  <img src={image} alt=""/>
</div>
  </>   
    {/*Imags*/}
    <div className='xl:absolute mt-22 rounded xl:-right-20 xl:bottom-16' data-aos="fade-left" data-aos-delay="700">
  <img src={image} alt=""/>
</div>
      </div>
      </div>
    </section>
  )
}

export default Home



// <section className='home container' id='home'>
//   <div className='intro'>
//   <img src={Me} alt="" className='home_img'/>
//   <h1 className='home_name'>Killer Boy</h1>
//   <span className='home_education'>I'm a Front-End developers</span>
// <HeaderSocials/>
// <a href='#contact' className='btn'>Click Me</a>
// <ScrollDown/>
//   </div>
// <Shapes/>
//   </section>


// <div className='text-center xl:text-left'>
// <h1 className='h11 xl:max-w-[700px] mb-6 lg:mb-12' data-aos="fade-down" data-aos-delay="400">{title}</h1>
// <p className="lead xl:max-w-[380px] mb-6 lg:mb-12" data-aos="fade-down" data-aos-delay="500">{subtitle}</p>
//  <a href='#ontsloh'> <button  className='btn btn-primary mb-8 xl:mb-0' data-aos="fade-down" data-aos-delay="600">{btnText} </button></a>
// </div>