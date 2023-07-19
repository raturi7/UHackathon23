import React from "react";
import img1 from "./Images/socs.png";
import img2 from "./Images/Moretech Solutions SA.png";
import img3 from "./Images/good good piggy.png";
import img4 from "./Images/India Blockchain Alliance.png";
import img5 from "./Images/Cognecto.png";
import img6 from "./Images/XR COTURE.png";
import img7 from "./Images/c4i4.png";
import img8 from "./Images/Flugel Soft.png";
import img9 from "./Images/Kosha Foods.png";
import img10 from "./Images/Divin Pro.png";
import img11 from "./Images/HiTech Saw.png";
import img12 from "./Images/MarshMcLennan.png";
import img13 from "./Images/Soran Kids Foundation.png";
import Heading from "../Heading/Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurCollaborators.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const imgaes = [img1];
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
};

export default OurCollaborators;