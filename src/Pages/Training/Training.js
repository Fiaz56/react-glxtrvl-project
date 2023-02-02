import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import About from '../Home/Components/About';
import "./Training.css";

const Training = () => {
  return (
    <div>
      <Navbar/>
      <Header heading = "This is Training Page"/>
      <About heading = "Training"/>
      <Footer/>
    </div>
  )
}

export default Training;