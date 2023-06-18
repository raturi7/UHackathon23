import React from 'react'
import img1 from './Images/3d-model1.png'
import img2 from './Images/artificial-intelligence1.png'
import img3 from './Images/augmented-reality1.png'
import img4 from './Images/blockchain1.png'
import img5 from './Images/computer1.png'
import img6 from './Images/internet-of-things1.png'
import img7 from './Images/virtual-reality1.png'
import img8 from './Images/vr1.png'
import Heading from '../Heading/Heading'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data=[[img1,"3D MODELING"],[img2,"Artificial Intelligence"],[img3,"Augmented Reality"],[img4,"Blockchain"],[img5,"Brain Computer Interface"],[img6,"Internet of Things"],[img7,"VIRTUAL Reality"],[img8,"Spatial / Edge computing"]];
function themesCard(data){
  return <div class="card"><img class="card-img" src={data[0]} alt="" /><div class="card-body text-uppercase">
 {data[1]}
</div></div>
}
const OurThemes = () => {
  return (
    <div className='container d-flex align-items-center justify-content-center flex-row flex-wrap'>
    <Heading text="Our Themes" position="center" />
       {
      data.map((element)=>{
        return themesCard(element)
      })
       }
  </div>
  )
}

export default OurThemes
