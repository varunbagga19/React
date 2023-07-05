import React, { useContext } from 'react'
import VideoDispatchContext from '../context/VideoDispatchContext';
import './Video.css';
export default function Video({title,id,channel,views,children,time,editVideo}) {

  const dispatch = useContext(VideoDispatchContext)
  return (
    <div className='container' onClick={()=>console.log("varun")}>
    <button className='close' onClick={()=> dispatch({type:'DELETE',payload:id})}>X</button>
    <button className='edit' onClick={()=> editVideo(id)}>Edit</button>
    <div className='pic'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hC80UPEJXDXIUGqeIFY8vXNs_pX9VzKQDQ&usqp=CAU'/>
    </div>
     <div className='title'>{title}</div>
     <div className='channel'>{channel}</div>
     <div className='views'>{views}<span>.</span> {time}</div>
     {children}
    </div>
   
  )
}
