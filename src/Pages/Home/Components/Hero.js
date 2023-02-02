import React from 'react';
import video from "../../../Assets/pexelsVideo.mp4";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
        <video src={video} autoPlay loop muted></video>

        <div className="content">
          <h1>Galaxy - Travel!</h1>
          <p>World's First Civilian Space Travel.</p>
          <div className="buttons">
            <Link to="./training">Try Now!</Link>
            <Link to="./contact">Launch</Link>
          </div>
        </div>
    </div>
  )
}

export default Hero