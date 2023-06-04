import React, { useState } from "react";
import "./Auth.css";
import { useDispatch ,useSelector} from "../../redux/store";
import { RegisterUser ,LoginUser} from "../../redux/slices/auth";
import { AuthToggle } from "../../redux/slices/app";
// import Logo from "../../assets/logo1.png";
// impotr {RegisterUser}
const Auth = () => {

  const {open}=useSelector((state=>state.app))
  // const handleChange=(e)=>{
  //   const {value,name}=e.target;
  //   setFormValues({...formValues,[name]:value})
  // }
  // console.log(formValues)


  return (
    <div className="Auth" id="auth">
 {
  open ? <SignUp/> : <LogIn/>
 }

    </div>
  );
};
function LogIn() {
  const initialState={phone:"",password:""};
  const [formValues,setFormValues]=useState(initialState)
  const handleChange=(e)=>{
    const {value,name}=e.target;
    setFormValues({...formValues,[name]:value})
  }
  const handleClick=async(e)=>{
    e.preventDefault();
      await  dispatch(LoginUser(formValues))
      }
  const dispatch=useDispatch()
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Нэвтрэх</h3>
  
          <div>
            <input
            onChange={handleChange}
              type="text"
              placeholder="Утасны дугаар"
              className="infoInput"
              name="phone"
            />
          </div>
  
          <div>
            <input
            onChange={handleChange}
              type="password"
              className="infoInput"
              placeholder="Нууц үг"
              name="password"
            />
          </div>
  
          <div>
              <span onClick={()=>dispatch(AuthToggle())} style={{ fontSize: "12px" ,cursor:"pointer"}}>
            Шинээр Бүртгүүлэх энд дар
              </span>
            <button className="button infoButton" onClick={handleClick} >Нэвтрэх</button>
          </div>
        </form>
      </div>
    );
  }
function SignUp() {
  const initialState={Fname:"",Lname:"",phone:"",password:"",confirmpass:""};
  const [formValues,setFormValues]=useState(initialState)
  const handleChange=(e)=>{
    const {value,name}=e.target;
    setFormValues({...formValues,[name]:value})
  }
  const handleClick=async(e)=>{
    e.preventDefault();
      await  dispatch(RegisterUser(formValues))
      }
  // console.log(formValues)
  const dispatch=useDispatch();
  return (
    <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleClick}>
        <h3>Шинээр Бүртгүүлэх</h3>

        <div>
          <input
          onChange={handleChange}
            type="text"
            placeholder="Овог нэр"
            className="infoInput"
            
            name="Fname"
          />
          <input
            type="text"
            placeholder="Өөрийн нэр"
            className="infoInput"
            onChange={handleChange}
            name="Lname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="phone"
            placeholder="Утасны дугаар"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Нууц үг"
            onChange={handleChange}
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Нууц үг давтах"
            onChange={handleChange}
          />
        </div>

        <div>
            <span onClick={()=>dispatch(AuthToggle())} style={{fontSize: '12px', cursor:"pointer"}}>Бүртгэлтэй бол энд дар</span>
        </div>
        <button className="button infoButton" type="submit" >Бүртгүүлэх</button>
      </form>
    </div>
  );
}

export default Auth;