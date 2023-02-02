import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import About from './Components/About';
import Accordion from './Components/Accordion';
import CallToAction from './Components/CallToAction';
import Hero from './Components/Hero';
import Services from './Components/Services';
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About heading = "About-us"/>
      <Services/>
      <CallToAction/>
      <Accordion/>
      <Footer/>
    </div>
  )
}

export default Home;