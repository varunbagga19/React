import React, { useContext } from 'react'
import Video from './Video'
import PlayButton from './PlayButton'
import VideosContext from '../context/VideosContext'

export default function VideoList({editVideo}) {
    const video = useContext(VideosContext);
    const listItem = video.map((ob,id)=>{
        return <Video 
                title={ob.title} 
                channel={ob.channel} 
                views={ob.views} 
                time = {ob.time}
                id={id}
                editVideo={editVideo}
                > 
            <PlayButton name="Play" onPlay ={()=>console.log('Play',)}  onPause ={()=>console.log('Pause')} />
        </Video>
       })
      
  return (
    <div> <ul>{listItem}</ul> </div>
  )
}
