import React from 'react';
import '../SCSS/Footer.css';
import budLogo from '../assets/Bud-logo.png'; 
import facebook from"../assets/Facebook.svg"
import Instagram from"../assets/Instagram.svg"
import YouTube from"../assets/YouTube.svg"
import twitter from"../assets/twitter.svg"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={budLogo} alt="BÜD KREATiVE Logo" className="footer-logo-img" />
          <div className="footer-subscribe">
        <input type="email" placeholder="Enter your email" />
        <button className="subscribe-button">Subscribe</button>
      </div>
        </div>
        <div className="footer-menu">
          <h3>Menu</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Our Work</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="footer-services">
          <h3>Services</h3>
          <ul>
            <li>Product Videos</li>
            <li>Brand Videos</li>
            <li>SM Videos</li>
            <li>Animations</li>
          </ul>
        </div>
        <div className="footer-address">
          <h3>Address</h3>
          <p>Batanai Gardens, First Floor Jason Moyo</p>
          <div className="footer-socials">
            <a href="#" className="social-icon"><img src={facebook} alt="" /></a>
            <a href="#" className="social-icon">
                <img src={Instagram} alt="" /></a>
            <a href="#" className="social-icon"><img src={twitter} alt="" /></a>
            <a href="#" className="social-icon"><img src={YouTube} alt="" /></a>
          </div>
        </div>
      </div>
   
    </footer>
  );
};

export default Footer;