import React from "react";
import img1 from "./Images/SOCS UPES.png";
import img2 from "./Images/Moretech Solutions Pvt. Ltd..png";
import img3 from "./Images/Good Good Piggy.png";
import img4 from "./Images/India Blockchain Alliance.png";
import img5 from "./Images/Cognecto.png";
import img6 from "./Images/XR Couture.png";
import img7 from "./Images/C4i4 labs.png";
import img8 from "./Images/Flugel SOFT.png";
import img9 from "./Images/Koshaa Foods.png";
import img10 from "./Images/DivIn Pro.png";
import img11 from "./Images/Hitech Saw.png";
import img12 from "./Images/Marsh McLennan.png";
import img13 from "./Images/Soran Kids Foundation.png";
import Heading from "../Heading/Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurCollaborators.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const imgaes = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,img12,img13];
function sponsorCard(img) {
  return (
    <div class="card p-4">
      <img class="card-img" src={img} alt="" />
    </div>
  );
}
const settings = {
  dots: false,
  arrows: true,
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
      },
    },
  ],
};
const OurCollaborators = () => {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center flex-row flex-wrap sponsor-container two-margin-top pc-container">
        <Heading text="Our Collaborators" position="center" />
        {imgaes.map((element) => {
          return sponsorCard(element);
        })}
      </div>
      <div className="container mobile-container sponsor-container mobile-margin">
        <Heading text="Our Collaborators" position="center" />
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
};

export default OurCollaborators;