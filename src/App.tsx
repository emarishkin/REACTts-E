import React, { useState } from 'react';


export default function App() {
  const [count,setCount]=useState(0)
  
  return (
    <div>
    <h1>hello React</h1>
    <button onClick={()=>setCount(count+1)} className='button'>click</button>
    <p>{count}</p>
    </div>
  );
}


