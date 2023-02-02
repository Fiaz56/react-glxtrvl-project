import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const [color, setColor] = useState(false);

 const handleColor = () => {
    if(window.scrollY >= 180){
      setColor(true);
    }
    else{
      setColor(false);
    }
 }

 window.addEventListener("scroll", handleColor);
  return (
    <nav className={color ? "color" : ""}>
      <div className="logo">
        <Link to="/"><h1>GLX TRVL</h1></Link>
      </div>

      <div className={click ? "menu active" : "menu"}>
        <Link to="/">Home</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/training">Training</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="hamburger">
        {click ? (
          <FaTimes style={{ color: "white" }} size={25} onClick={handleClick} />
        ) : (
          <FaBars style={{ color: "white" }} size={25} onClick={handleClick} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
