import React from 'react';
import '../SCSS/Newsletter.css';

const Newsletter = () => {
  return (
    <div>
    <div className="newsletter-container">
      <div className="newsletter-content">
        <div className="three">

        </div>
    
        <div className="two">
            <div className="three">
            <h2 className='text-[bold] text-[20px]'>Newsletter</h2>
            <p>Sign up for newsletter and get latest news and updates.</p>
            </div>
           
        
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-button">Subscribe</button>
        </div>
        </div>
       
      </div>
    </div>
    </div>
  );
};

export default Newsletter;