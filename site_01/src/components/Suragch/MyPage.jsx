import React from 'react'
import  "./MyPage.css";
// import Menu from "../BuhSulrgalt/Menu"
import Image from "../../assets/ardiinbujig.jpg"
import { useNavigate } from 'react-router-dom';
import { useSelector } from '../../redux/store';
const MyPage = () => {
    const {userLearn}=useSelector((state)=>state.learn)
    // console.log(userLearn,"My")
    const navigate=useNavigate();
    const handleClick=(id)=>{
        console.log("ddd",id);
        navigate(`/movie/${id}`)
    }
  return (
    <section className='container section'>
      <div className='my-learn-container'>
        <h3>Миний сургалт</h3>
        <div className='my-learns'>
        <div className='workcontainer grid'>
        { userLearn && userLearn.map((elem)=>{
          const {_id,image,LearnDescription,LearnName}=elem;
          return(
            <div className='workcard' key={_id}>
              <div className='work__thumbnail'>
              <img src={Image} alt='' className='work_img'/>
              <div className='work__mask'></div>
              </div>
              
              <span className='workcategory'>{LearnName}</span>
              <h3 className='worktitle'>{LearnDescription}</h3>
          
            
            <div onClick={()=>handleClick(_id,LearnName)} className='workbutton'>
            <i  className='work_button-icon'>
        Сургалтаа үзэх
            </i>
          
            </div>
        
            
            
           
            
            
        
            </div>
          )
        })}
        </div>
        </div>
      </div>
    </section>
  )
}

export default MyPage
