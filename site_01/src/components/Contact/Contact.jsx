import React, { useState } from 'react'
import "./contact.css";
import { useDispatch,useSelector } from 'react-redux';
import { newVideo, videoGet } from '../../redux/slices/learn';
const Contact = () => {
  const dispatch =useDispatch();
  const [vid,setVid]=useState("");
  // const {}=useSelector((state)=>state.learn);
  const learnId="646c93c4edadff9246f5e708"
  const videoCode="0001s"
  const handleChange=(e)=>{
    setVid(URL.createObjectURL(e.target.files[0]));
  }
  const {getVideo}=useSelector((state)=>state.learn)
  console.log(getVideo)
const handleClick=()=>{
  // dispatch(newVideo(videoCode,vid,learnId))
  dispatch(videoGet(learnId));
}
  return (
    <section className='contact container section' id='contact'>
      <h2 className='section__title'>Бидэнтэй холбогдох</h2>
      <div className='contact__container grid'>
      <div className='contact_info'>
      <h3 className='contact__title'>Хүсэлт илгээх</h3>
      <p className='contact__details'>Манай вэб сайт нь бүжиглэх дуртай хэн бүхэнд нээлттэй юм. Та манай вэб сайтаас өөрийн хүссэн бүжгийн төрлөөр сургалт авах боломжтой бөгөөд сургалтаа танхимаар болон онлайн хэлбэрээр сонгох боломжтой.</p>


      </div>
      <form action='' className='contact_form'>
      <div className='contact__form-group'>
      <div className='contact-form-div'>
      <input type='text' className='contact__form-input' placeholder='Таны нэр'/>
      </div>
      <div className='contact-form-div'>
      <input type='text' className='contact__form-input' placeholder='Таны нэр'/>
      </div>

      </div>
      <div className='contact-form-div'>
      <input type='text' className='contact__form-input' placeholder='Таны и-мэйл'/>
      </div>
      <div className='contact-form-div contact__form-area'>
      <textarea cols="20" rows="10" type='text' className='contact__form-input' placeholder='Хүсэлт.....'></textarea>
      </div>
 
      <button className='btn' onClick={handleClick} >Илгээх</button>
   
     
  </form>
      </div>

    </section>
  )
}

export default Contact
