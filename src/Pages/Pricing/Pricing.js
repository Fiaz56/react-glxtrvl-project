import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Card from './Components/Card';
import "./Pricing.css";

const Pricing = () => {
  return (
    <div>
      <Navbar/>
      <Header heading = "This is Pricing Page"/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default Pricing;