import React, { useContext, useEffect } from 'react'
import './AddVideo.css'
import { useState } from 'react';
import VideoDispatchContext from '../context/VideoDispatchContext';
import useVideoDispatch from '../Hooks/VideosDispatch';
function AddVideo({editableVideo}){

    const dispatch = useVideoDispatch();
    const [video, setVideo] = useState({ 
    channel:"Bagga Engineer",
    time:"9-12-23"
    });

    function handleSubmit(e){
        e.preventDefault()
        if(editableVideo){
          dispatch({type:"UPDATE",payload:video});
        }else{
          dispatch({type:'ADD',payload:video})
        }
        setVideo("");
    }

    function handleChange(e){
       setVideo({...video,[e.target.name]:e.target.value});
    }

    useEffect(()=>{
      if(editableVideo){
     setVideo(editableVideo)
      }
    },[editableVideo]);


 return (
   <form>

    <input 
    type="text" 
    name="title" 
    onChange={handleChange}
    value={video.title}
    placeholder='enter title'/>

    <br></br>

    <input 
    type="text"
    name="views" 
    onChange={handleChange} 
    value={video.views}
    placeholder='views'/>

    <br></br>

    <button onClick={handleSubmit} >{editableVideo ? 'Edit':'Add'} Video</button>

   </form>
  )
}

export default AddVideo