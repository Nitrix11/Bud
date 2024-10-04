import React from 'react';
import Ellipse from"../assets/Ellipse 13.png"
import '../SCSS/Testimonial.css';

const testimonials = [
  {
    name: '"Mike Chris',
    title: 'CEO of Nash Paint',
    quote: '"I was blown away by Bud Kreative’s creativity and expertise. They truly understood our target audience and crafted campaigns that resonated with them. Our sales have skyrocketed since partnering with them."',
  },
  {
    name: 'Keisha Bayley',
    title: 'Founder of Simbisa Brands',
    quote: '"Bud Kreative is more than just an advertising agency – they’re a strategic partner. Their dedication to delivering top-notch service and results-driven campaigns has earned them a permanent spot on our team."',
  },
];

const Testimonials = () => {
  return (
    <div className='circle'>
    
    <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <h3 className='.h3 text-[22px]'><strong>{testimonial.name}</strong></h3>
          <h4 className='h4'>{testimonial.title}</h4>
          <p className='p'>{testimonial.quote}</p>
        </div>
      ))}
      <button className="quote-button">Get A Quote</button>
      <img className='ellipse' src={Ellipse}alt="" />
    </div>
    </div>
  );
};

export default Testimonials;