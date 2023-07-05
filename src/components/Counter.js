import React from 'react'
import { useState } from 'react';
export default function Counter() {
    const [number, setNumber] = useState(0);

    function handleClick(e){
        e.stopPropagation();
        setTimeout(()=>{
            setNumber(number=>number+1);
        },3000)
        console.log(number);
    }
  return (
    <>
    <h1 style={{color:'white'}}>{number}</h1>
    <button onClick={handleClick}>Counter</button>
    </>
  )
}
