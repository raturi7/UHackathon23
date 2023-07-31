import React from 'react'
import './Sponsor.css'
import img1 from './Images/Cognecto.png'

import Heading from '../Heading/Heading'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img2 from "./XR Couture.png"

const imgaes=[img1,img2];
function sponsorCard(img){
  return <div class="card p-4"><img class="card-img" src={img} alt="" /></div>
}
const settings = {
  dots: false,
  arrows:true,
  infinite: true,
  slidesToShow: 2,
  swipeToSlide: true,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 525,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};
const Sponsor = () => {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center flex-row flex-wrap sponsor-container two-margin-top pc-container">
        <Heading text="Sponsors" position="center" />
        {imgaes.map((element) => {
          return sponsorCard(element);
        })}
      </div>
      <div className="container mobile-container sponsor-container mobile-margin">
        <Heading text="Sponsors" position="center" />
        <div className="container">
          <Slider {...settings}>
            {imgaes.map((element) => {
              return sponsorCard(element);
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Sponsor
