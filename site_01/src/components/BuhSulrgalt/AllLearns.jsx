import React, { useEffect, useState } from 'react'
import "./portfolio.css";
// import FileBase from "react-file-base64"
// import Menu from "./Menu";
// import { Button } from '@mui/material';
import { useDispatch, useSelector } from '../../redux/store';
import { LearnDatas,learnData } from '../../redux/slices/learn';
import Image from "../../assets/ardiinbujig.jpg"
// import KeepMountedModal from '../../modal/Modal';
import Modale from '../../modal/Modal';
const Portfolio = () => {
  const  {category,onelearn,allLearns}=useSelector((state)=>state.learn)
  const [value,setValues]=useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = (learn) => {
    // console.log(learn,"aa")
    console.log(onelearn,"ds")
    
    if(learn)
    {
      setValues(learn);
       dispatch(LearnDatas(learn))
    }
     
    setOpen(true);
  
  };
  // console.log(value,"value")
  const handleClose = () => setOpen(false);
  // console.log(allLearns)
  
  const [items,setItems]=useState(allLearns);
  const dispatch=useDispatch();
  const filterItem=(categoryId)=>{
    // console.log(categoryId)
    const updatedItems =allLearns.filter((curElem)=>{
      return curElem.Category === categoryId
    })
    // console.log(updatedItems,"up")
    setItems(updatedItems);
  }

// const  {category}=useSelector((state)=>state.learn)
// console.log(category)
useEffect(()=>{
  // setItems(learn);
return ()=>{
  setItems(allLearns)
}
},[allLearns])
console.log(category,"cat");
// const learnDatass=async(id)=>{


// // setItems(learn)
// }
// console.log(items,"item");
  return (
    <>
    <section className='work container section' id='learns'>
    <h2 className='section__title'>
    Үндсэн сургалтууд
    </h2>
   
<div className='work_filters'>
<span className='work_item' onClick={()=> dispatch(learnData())}>Бүх сургалт</span>
{
 category && category.map((data)=>{
    return(
      <span className='work_item' onClick={()=>filterItem(data._id)}>{data.CategryName}</span>
    )
  })
}


</div>      
<div className='work_container grid'>
{ items && items.map((elem)=>{
  const {_id,LearnName,Category,LearnDescription}=elem;
  return(
    <div className='work__card' key={_id}>
      <div className='work__thumbnail'>
      <img src={Image} alt='' className='work_img'/>
      <div className='work__mask'></div>
      </div>
      
      <span className='work__category'>{LearnName}</span>
      <h3 className='work__title'>{LearnDescription}</h3>
  
    
    <a href='#ffssasaf' className='work_button'>
    <i onClick={()=>handleOpen(_id)} className='work_button-icon'>
Дэлгэрэнгүй
    </i>
  
    </a>

    
    
   
    
    

    </div>
  )
})}
</div>
  </section>
  <Modale open={open} img={Image} data={onelearn} handleClose={handleClose}/>
    </>

  )
}

export default Portfolio

//  <span className='work_item' onClick={()=>filterItem("Баллет")}>Баллет</span>
// <span className='work_item' onClick={()=>filterItem("Үндэсний бүжиг")}>Үндэсний бүжиг</span>
// <span className='work_item' onClick={()=>filterItem("Чөлөөт")}>Чөлөөт бүжиг</span>
// <span className='work_item' onClick={()=>filterItem("Уран нугаралт")}>Уран нугаралт</span>