import React, { useState,useReducer, useContext } from "react";
import './App.css';
import obj from './data/data.js';
import PlayButton from "./components/PlayButton";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";

function App(){
  const [editableVideo,setEditableVideo] = useState(null);

  function reducer(videos,action){
    switch(action.type){
      case 'ADD':
        return [...videos,{...action.payload,id:videos.length+1}]
      case 'DELETE':
        return (videos.filter((v)=>{
          return v.id!==action.payload
        }))
      case 'UPDATE':
        const index = videos.findIndex(v=>v.id===action.payload.id);
        const newVideos = [...videos]
        newVideos.splice(index,1,action.payload)
        setEditableVideo(null)
        return(newVideos)
      default:
        return videos
    }
  }
  
 const[videos,dispatch] = useReducer(reducer,obj);
 
function editVideo(id){
  console.log("h1",obj[id]);
  setEditableVideo(videos.find(v=>v.id===id));
  console.log("h2",editableVideo);
}

const themeContext = useContext(ThemeContext);

  return(
    <VideosContext.Provider value={videos}>
      <VideoDispatchContext.Provider value={dispatch}>
          <div className="App">
            <AddVideo  editableVideo={editableVideo}/>
            <VideoList  editVideo={editVideo} />  
            <PlayButton name="Play" onPlay ={()=>console.log('Play')}  onPause ={()=>console.log('Pause')} />
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>

  );

}

export default App;