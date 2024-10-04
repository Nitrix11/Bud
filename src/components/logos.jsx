import React, { useState } from 'react';
import '../SCSS/logos.css';
import logo1 from"../assets/logo1.png"
import logo2 from"../assets/logo2.png"
import logo3 from"../assets/logo3.png"
import logo4 from"../assets/logo4.png"
import logo5 from"../assets/logo5.png"
import logo6 from"../assets/logo6.png"
import logo7 from"../assets/logo7.png"



const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleLogos = 4; // Number of logos to show at once
  
    const next = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + visibleLogos >= logos.length ? 0 : prevIndex + visibleLogos
      );
    };
  
    const prev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - visibleLogos < 0 ? logos.length - visibleLogos : prevIndex - visibleLogos
      );
    };
  
    return (
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prev}>❮</button>
        <div className="carousel-logos">
          {logos.slice(currentIndex, currentIndex + visibleLogos).map((logo, index) => (
            <div className="logo" key={index}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={next}>❯</button>
      </div>
    );
  };
  
  export default Carousel;