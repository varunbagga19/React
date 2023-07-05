import React from 'react'
import './PLayButton.css';
import { useState } from 'react';
export default function PlayButton({name,onPlay,onPause}) {
    
    const [playing, setPlaying] = useState(false);
    function handleClick(e){
        e.stopPropagation();
       setPlaying(!playing);
    }
  return (
    <button onClick = {handleClick}>{name} {playing ?  '>' : '||' }</button>
  )
}
