import './About.css';
import React from 'react';
import img from '../../Assets/aboutimg.png';
import svg1 from '../../Assets/absvg1.svg';
import svg2 from '../../Assets/absvg2.svg';

function About() {
  return (
    <div className='main'>
      <div className='imgdiv'>
        <img src={img} alt="About Image" className='about-image' />
      </div>
      <div className='info'>
        <div className='head-div'>
          <h4>About</h4>
          <p>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content.
          </p>
        </div>
        <div className='flex'>
          <div className="iconContainer">
            <img src={svg1} alt="Icon 1" className='iicon' />
          </div>
          <div className='sec-div'>
            <h6>Why us?</h6>
            <p>
              Lorem ipsum is a placeholder text commonly used to demonstrate
              the visual form of a document or a typeface without relying on
              meaningful content.
            </p>
          </div>
        </div>
        <div className='flex'>
          <div className="iconContainer">
            <img src={svg2} alt="" className='iicon' />
          </div>
          <div className='t-div'>
            <h6>Our Expert</h6>
            <p>
              Lorem ipsum is a placeholder text commonly used to demonstrate
              the visual form of a document or a typeface without relying on
              meaningful content.
            </p>
          </div>
        </div>
        <div className='btn-div'>

        <button className="center-button">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
