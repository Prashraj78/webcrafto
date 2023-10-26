import React from 'react';
import './Hero.css';
import hero2 from '../../Assets/hero.png';
import e1 from '../../Assets/e1.png';
import e2 from '../../Assets/e2.png';
import e3 from '../../Assets/e3.png';

function Hero() {
  return (
    <div className="h-hero">
      <div className="sub-div">
        <div className="d-div">
          <h3>Mobile Application<br/> Development company</h3>
          <p>Lorem ipsum is a placeholder text commonly used to<br/> demonstrate the visual.</p>
        </div>
        <div className="image-container">
          <img src={e1} alt="e1" className="image" height='200px' width='250px' /> 
          <img src={e2} alt="e2" className="image" height='100px' width='200px'/>
          <img src={e3} alt="e3" className="image" height='100px' width='200px'/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
