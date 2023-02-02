import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import fb from "../../Assets/facebook.png";
import insta from "../../Assets/instagram.png";
import linkedin from "../../Assets/linkedin.png";
import twitter from "../../Assets/twitter.png";

const Footer = () => {
  let images = [fb, insta, linkedin, twitter];
  return (
    <div className="footer">
      <Link to="/"><h1>GLX TRVL</h1></Link>
      <div className="linksParent">
        <p>Useful Links</p>
        <div className="linksChild">
          <Link to="/">Home</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/training">Training</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="social">
        {images.map((img) => {
          return <img src={img} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Footer;
