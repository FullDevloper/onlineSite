
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Home from './components/Home/Home';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Routes, Route}from "react-router-dom"
// import {} from useSelector()
// import About from './components/About/About';
// import Service from './components/Services/Service';
// <Service/>
import Surlgalt from './components/BuhSulrgalt/AllLearns';
// import Resume from './components/Resume/Resume';
// import Pricing from './components/Pricing/Pricing';
import Comment from './components/Comment/Comment';
import Learns from './components/Learns/Learns';
import Contact from './components/Contact/Contact';
// import Auth from './components/Auth/Auth';
import Auth from './components/Auth/Auth';
import { useSelector } from './redux/store';
import Admin from './components/Admin/Admin';
import AdminLearn from './components/Admin/Learn';
import Video from './components/Admin/Video';
import MyPage from './components/Suragch/MyPage';
import LearnMovie from './components/Suragch/LearnMovie';
import Schedule from './components/Suragch/Schedule';
import Teacher from './components/Admin/Teacher';
import Users from './components/Admin/Users';
import LearnChedule from './components/Admin/LearnSchedule';
import TeachStudent from './components/Suragch/TeachStudent';
function App() {
  Aos.init({
    duration:2000,
    offset:0,
  })
const {role}=useSelector((state)=>state.auth)
// console.log(role)
  return (
    <>
      <SideBar>
      <Routes>
   
    
        
        
        
        <Route  path='/' element={<Home/>}/>
        {
          !role && <>
          <Route path='/login' element={<Auth/>}/>
          <Route path='/ontsloh' element={<Learns/>}/>
          <Route path='/surgalt' element={<Surlgalt/>}/>
          <Route path='/comment' element={<Comment/>}/>
          <Route path='/contact' element={<Contact/>}/>
          </>
        }
        {
         role ==="user" && <>
          <Route path="/Mylearn" element={<MyPage/>}/>
          <Route path="/movie/:id" element={<LearnMovie/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
          <Route path='/ontsloh' element={<Learns/>}/>
          <Route path='/surgalt' element={<Surlgalt/>}/>
          <Route path='/comment' element={<Comment/>}/>
          <Route path='/contact' element={<Contact/>}/>
          </>
        }
        {
         role === "admin" &&  <>
            
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/teach" element={<Teacher/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/learnSchedule" element={<LearnChedule/>}/>
         
          </>
        }
        {
          role ==="teacher" &&<>
          <Route path="/new-learn" element={<Learns/>}/>
            <Route path="/learn" element={<AdminLearn/>}/>
            <Route path="/video" element={<Video/>}/>
            <Route path="/tstudent" element={<TeachStudent/>}/>
          </>
        }
   
        
       
      
   

  
      </Routes>
  
      
      </SideBar>


   
    </>
  );
}

export default App;
