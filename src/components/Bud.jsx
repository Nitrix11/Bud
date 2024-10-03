import"../SCSS/Bud.css"
import backgroundVideo from '../assets/green.mp4';
import { useRef, useEffect } from 'react';
import { useState } from 'react';
import TypingText from "./TypingText"; ""

function Banner() {
    const videoRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const video = videoRef.current;
        const rect = video.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom < 0) {
          video.muted = true;
        } else {
          video.muted = false;
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (

    <div id="hero" className="banner-container">
      <video
         loop
         muted={false}
         autoPlay
         playsInline
         src={backgroundVideo}
         type="video/mp4"
         ref={videoRef}
      
      />
     
      {/* Your banner content here */}

  <div className="banner-content-wrapper flex">
    <div id="wrapper" className="flex flex-col items-center">
    <div id="text">
<h1 className="text-[#fff] text-[40px] mb-[15px]">Elevate Your Business With Dynamic <span><br /></span>Video Content</h1>
</div>
<div className="two">
<p className="text-[#fff] mb-[15px] w-[100%]"><TypingText/></p>
</div>
     


   
    <div id="play" className="flex">
    <button className="bg-[#000000BA] text-[#fff] text px-[25px] py-[1px] mt-[100px] text-[15px] rounded-[2px]" >
Schedule a call
</button>

  </div>

</div>
</div>

  
     

  


    </div>
  );
}
export default Banner;