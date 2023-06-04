import React, { useState } from 'react'
import "./sidebar.css";
// import 
import { Tooltip } from '@mui/material';
import Logo from "../../assets/logo1.png"
import { useDispatch, useSelector } from '../../redux/store';
import { ToggleSidebar } from '../../redux/slices/app';
import { LogoutUser } from '../../redux/slices/auth';
import { NavLink, useNavigate,Link } from 'react-router-dom';
// import {NavLink} from 'react-router-dom';
import { Category, getLearnUser, learnData } from '../../redux/slices/learn';
const SideBar = ({children}) => {
const dispatch=useDispatch();
const usr_id =localStorage.getItem("user_id")
// console.log(usr_id)
// const {open}=useSelector((state)=>state.app.sideBar)
const handleClick=()=>{

  dispatch(ToggleSidebar())
  dispatch(getLearnUser(usr_id))

}
const handleSchedule=()=>{
  // axios.get("schedule/student")
}
const dataClick=()=>{

  dispatch(Category())
}
const navigate =useNavigate()
  const [toggle,showMenu]=useState(true);
  const {role,isLoggedIn}=useSelector((state)=>state.auth)
  return (
    <>
    <div className={toggle ? "aside show-menu" :"aside"}>
    <a href='#home' className='nav__logo'>
      <img src={Logo} alt=""/>
    </a>
  <nav className='nav'>
  <div className='nav_menu'>
    <ul className='nav_list'>
    <Tooltip title="Нүүр" placement="right-start">

    <li className='nav_item'>
    <NavLink to="/">
    <a href='#home' className='nav_link'>
    <i className='icon-home'></i>
    </a>
    </NavLink>
    </li>
    </Tooltip>
    {
       role==="admin" &&
       <Tooltip title="Категори нэмэх" placement="right-start">

       <li className='nav_item'>
       <NavLink to="/admin">
       <div className='nav_link'>
       <i className='icon-note'></i>
       </div>
       </NavLink>
       </li>
       </Tooltip>
    }
    {
       role==="admin" &&
       <>
       <Tooltip title="Багш нэмэх" placement="right-start">

       <li className='nav_item'>
       <NavLink to="/teach">
       <div className='nav_link'>
       <i className='icon-people'></i>
       </div>
       </NavLink>
       </li>
       </Tooltip>
       <Tooltip title="Хичээлийн хуваарь нэмэх" placement="right-start">

       <li className='nav_item'>
       <NavLink to="/learnSchedule">
       <div className='nav_link'>
       <i className='icon-people'></i>
       </div>
       </NavLink>
       </li>
       </Tooltip>
       <Tooltip title="Суралцагчдын мэдээлэл" placement="right-start">

       <li className='nav_item'>
       <NavLink to="/users">
       <div className='nav_link'>
       <i className='icon-user'></i>
       </div>
       </NavLink>
       </li>
       </Tooltip>
       
       </>

    }

    {
       role==="teacher" &&
       <Tooltip title="Видео хичээл оруулах" placement="right-start">

       <li className='nav_item'>
       <NavLink to="/video">
       <div className='nav_link'>
       <i className='icon-user'></i>
       </div>
       </NavLink>
       </li>
       </Tooltip>
    }
    {
       role==="teacher" &&
       <Tooltip title="Хичээл нэмэх" placement="right-start">

       <li className='nav_item'>
       <NavLink to="/learn">
       <div className='nav_link'>
       <i className='icon-user'></i>
       </div>
       </NavLink>
       </li>
       </Tooltip>
    }
    {
       role==="teacher" &&
       <>
       <Tooltip title="Хосолсон суралцагч" placement="right-start">

       <li className='nav_item'>
       <NavLink to="/tstudent">
       <div className='nav_link'>
       <i className='icon-user'></i>
       </div>
       </NavLink>
       </li>
       </Tooltip>
       </>
      
    }
  {
    role==="user" || !role &&
    <>
    <Tooltip title="Онцлох сургалт" placement="right-start">
    <li className='nav_item'>
    <NavLink to="/ontsloh">
    
    <a href='#ontsloh' className='nav_link'>
    
    <i className='icon-graduation'></i>
    </a>
    </NavLink>

    </li>
    </Tooltip>
 
    <Tooltip title="Сургалтууд" placement="right-start">
    <li className='nav_item'>
    <NavLink to="/surgalt">
    <a href='#learns' className='nav_link' onClick={dataClick}>
    <i className='icon-layers'></i>
    </a>
    </NavLink>

    </li>
    </Tooltip>

    <Tooltip title="Сэтгэгдэл" placement="right-start">
    <li className='nav_item'>
    <NavLink to="/comment">
    <a href='#comment' className='nav_link'>
    <i className='icon-bubble'></i>
    </a>
    </NavLink>
  
    </li>
    </Tooltip>
  <Tooltip title="Бидэнтэй холбогдох" placement='right-start'>
  <li className='nav_item'>
  <NavLink to="/contact">
  
  <a href=' #contact' className='nav_link'>
  <i className='icon-note'></i>
  </a>
  </NavLink>

  </li>
  
  </Tooltip>
    
    </>
  }

   

    {
      role ==="user" && 
      <>
      <Tooltip title="Миний хуудас" placement='right-start'>
      <li className='nav_item' onClick={handleClick}>
      <NavLink to='/Mylearn' className='nav_link'>
      <i className='icon-notebook'></i>
      </NavLink>
      </li>
      
      </Tooltip>
      <Tooltip title="Хичээлийн хуваарь" placement='right-start'>
      <li className='nav_item' onClick={handleSchedule}>
      <NavLink to='/schedule' className='nav_link'>
      <i className='icon-calendar'></i>
      </NavLink>
      </li>
      
      </Tooltip>
   
      </>
    }
    {
      isLoggedIn ?  <Tooltip title="Гарах" placement='right-start'>
      <li className='nav_item' onClick={()=>{dispatch(LogoutUser())
      
      navigate("/")
      }}>
      <a href='#home' className='nav_link'>
      <i className='icon-logout'></i>
      </a>
      </li>
      
      </Tooltip> : <Tooltip title="Нэвтрэх | Бүртгүүлэх" placement='right-start'>
      <li className='nav_item' onClick={()=>dispatch(ToggleSidebar())}>
      <NavLink to="/login">
      <div className='nav_link'>
      <i className='icon-login'></i>
      </div>
      </NavLink>
   
      </li>
      
      </Tooltip>
    }

   
   
  
  


    </ul>
  </div>
  </nav>    
  <div className='nav_footer'>
  <span className='copyright'> &copy; 2022 - 2023.</span>
  </div>
 </div>
 <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={()=>showMenu(!toggle)}>
    <i className='icon-menu'></i>
 </div>

 <main className="main">
 {children}
 </main>
    </>

  )
}

export default SideBar
