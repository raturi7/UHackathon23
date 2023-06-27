import React from 'react'
import './Sponsor.css'
import img1 from './Images/90a2c3b80d4b7a7599788bfeb9b848ce-removebg-preview 1.png'
import img2 from './Images/539f3ffbecad044276726c01-removebg-preview 1.png'
import img3 from './Images/google-1-removebg-preview 1.png'
import img4 from './Images/image25.png'
import img9 from './Images/image27.png'
import img6 from './Images/kisspng-logo-brand-walmart-desktop-wallpaper-image-walmart-to-offer-low-cost-checking-accounts-5b63eaa32fa612 1.png'
import img7 from './Images/new-Microsoft-logo-removebg-preview 1.png'
import img8 from './Images/taskade-circle-logo-full-black.png'
import Heading from '../Heading/Heading'
import img5 from './Images/Good Good Piggy.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const imgaes=[img8,img2,img3,img4,img5,img6,img7,img1];
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
    <div className='container d-flex align-items-center justify-content-center flex-row flex-wrap sponsor-container two-margin-top pc-container'>
      <Heading text="Industry Associates" position="center" />
         {
        imgaes.map((element)=>{
          return sponsorCard(element)
        })
         }
    </div>
   <div className="container mobile-container sponsor-container mobile-margin">

   <Heading text="Meet Our Sponsors" position="center" />
   <div className="container">
   <Slider {...settings}>
   {
        imgaes.map((element)=>{
          return sponsorCard(element)
        })
         }
        </Slider>
        </div>
   </div>
    </>
  )
}

export default Sponsor
