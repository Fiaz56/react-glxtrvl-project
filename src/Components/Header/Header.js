import React from 'react';
import "./Header.css";
import headerImage from "../../Assets/earth-globe.jpg";

const Header = ({heading}) => {
  return (
    <section className="header" style={{background: `url(${headerImage})`, backgroundSize: "cover", backgroundPosition: "fixed"}}>
        <h1 className='heading-1'>{heading}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita nulla excepturi ut quia vel ab est optio quisquam culpa repellat.</p>
    </section>
  )
}

export default Header;