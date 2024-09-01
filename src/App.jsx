import React, { useEffect, useRef } from 'react';
import CanvasContainer from '../Canvas/CanvasContainer';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Hero from '../components/Hero';

// gsap.registerPlugin(ScrollTrigger);

// import Scene from "./Scene"



function App() {
  return (
    <div className=' bg-black text-white'>
      <div className=' w-full h-[100vh]'>
        <CanvasContainer />
      </div>
      {/* <Hero/>
      <div className=' h-[100vh]'>2nd</div>
      <div className=' h-[100vh]'>3rd</div>
      <div className=' h-[100vh]'>4th</div> */}
     
    </div>
  )
}

export default App
