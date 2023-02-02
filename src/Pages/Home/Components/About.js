import React from 'react'

const About = ({heading}) => {
  return (
    <>
    <h1 className="heading-1">{heading}</h1>
    <sectin className="about">
        <img src={require("../../../Assets/aboutImg.jpg")} alt="About-Img" />
        <div className="content">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <div className="p-content">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ducimus atque in iste! Perferendis odit corporis laborum sit, accusantium fugiat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ducimus atque in iste! Perferendis odit corporis laborum sit, accusantium fugiat. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </sectin>
    </>
  )
}

export default About