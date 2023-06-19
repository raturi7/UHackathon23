import React from 'react';
import img1 from './Images/3d-model 1.svg';
import img2 from './Images/artificial-intelligence 1.svg';
import img3 from './Images/augmented-reality 1.svg';
import img4 from './Images/blockchain 1.svg';
import img5 from './Images/computer 1.svg';
import img6 from './Images/internet-of-things 1.svg';
import img7 from './Images/virtual-reality 1.svg';
import img8 from './Images/vr 1.svg';
import Heading from '../Heading/Heading';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const data = [
  [img1, "3D MODELING"],
  [img2, "Artificial Intelligence"],
  [img3, "Augmented Reality"],
  [img4, "Blockchain"],
  [img5, "Brain Computer Interface"],
  [img6, "Internet of Things"],
  [img7, "VIRTUAL Reality"],
  [img8, "Spatial / Edge computing"]
];

function themesCard(data) {
  return (
    <div className="card bg-transparent">
      <img src={data[0]} alt="" className="fill-white" />
      <div className="card-body text-uppercase">{data[1]}</div>
    </div>
  );
}

const OurThemes = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center flex-row flex-wrap">
      <Heading text="Our Themes" position="center" />
      {data.map((element) => {
        return themesCard(element);
      })}
    </div>
  );
};

export default OurThemes;
