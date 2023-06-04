
import React, { useEffect, useState } from 'react'
import axios from "../../axios";
import "./LearnMovie.css"
import ReactPlayer from "react-player"
import { useParams } from 'react-router-dom'
const LearnMovie = () => {
    const {id} =useParams()
    const [video,setVideo]=useState("");
    const [videPlayer,setPlayer]=useState("")
    useEffect(()=>{
        axios.get(`learn/videos/${id}`)
        .then((res)=>{
            console.log(res.data.data.LearnCode,"irlee shuu");
            setVideo(res.data.data);
            

        })
        .catch(err=>{
            console.log(err);
        })
    },[id])

    const handleClick =(path)=>{
console.log(path)
setPlayer(path);

    }
  return (
    <section className='container section'>
            <div className='movie'>
        <div className='movie-two'>
    
        <div className='moviedisplay'>
        {
            videPlayer && <> <ReactPlayer  width="640"
            height="900" controls={true}  url={videPlayer} />   
         </>
        }
        </div>
        <div className='learnList'>
        <div className='listsss'>
            {
               video && video.map((data,index)=>{
                    return(
                        <>
                        <div onClick={()=>handleClick(data.VideoPath)} className='videos'>
                        <div className='videoJus'>
                        <div className='videoList'>
                        <div>{index+1}</div>
                        <div>{data.VideoCode}</div>
                        </div>
                       
                        </div>
                    
                        </div>
                     
                        </>
                       
                    )
                })
            }
        </div>
        </div>
        </div>
      
          
        </div>
       
    </section>
  )
}

export default LearnMovie
