import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import img1 from "../../../Assets/img1.jpg";
import img2 from "../../../Assets/img2.jpg";
import img3 from "../../../Assets/img3.jpg";
import img4 from "../../../Assets/img4.jpg";
import img5 from "../../../Assets/img5.jpg";
import img6 from "../../../Assets/img6.jpg";
import img7 from "../../../Assets/img7.jpg";

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  let images = [img1, img2, img3, img4, img5, img6, img7];
  return (
    <div>
      <h1 className="heading-1">Services</h1>
      <section className="services">
        <Slider {...settings}>
        {
            images.map((image) => {
                return(
                    <div key={image}>
                        <img src={image} alt="List of Images" />
                    </div>
                )
            })
        }
          {/* <div>
            <img src={require("../../../Assets/img1.jpg")} alt="Img1" />
          </div>
          <div>
          <img src={require("../../../Assets/img2.jpg")} alt="Img2" />
          </div>
          <div>
          <img src={require("../../../Assets/img3.jpg")} alt="Img3" />
          </div>
          <div>
          <img src={require("../../../Assets/img4.jpg")} alt="Img4" />
          </div>
          <div>
          <img src={require("../../../Assets/img5.jpg")} alt="Img5" />
          </div>
          <div>
          <img src={require("../../../Assets/img6.jpg")} alt="Img6" />
          </div>
          <div>
          <img src={require("../../../Assets/img7.jpg")} alt="Img7" />
          </div> */}
        </Slider>
      </section>
    </div>
  );
};

export default Services;
