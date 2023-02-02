import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Form from './Components/Form';
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Header heading = "This is Contact Page"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact;