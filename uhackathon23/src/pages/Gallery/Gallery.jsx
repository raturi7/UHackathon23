import React from "react";
import image from "../../Components/Images/Rectangle 13.png";

const Gallery = () => {
  return (
    <div className="image_gallery pt-5">
      <div className="container pt-5 flex flex-col">
        <div className="flex flex-row justify-center pt-5 px-3">
          <img
            src={image}
            alt="image"
            className="w-1/3 p-4 hover:scale-105 transition-transform duration-300"
          />
          <img
            src={image}
            alt="image"
            className="w-1/3 p-4 hover:scale-105 transition-transform duration-300"
          />
          <img
            src={image}
            alt="image"
            className="w-1/3 p-4 hover:scale-105 transition-transform duration-300"
          />
          <img
            src={image}
            alt="image"
            className="w-1/3 p-4 hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-row justify-center px-3">
          <img
            src={image}
            alt="image"
            className="w-1/3 p-4 hover:scale-105 transition-transform duration-300"
          />
          <img
            src={image}
            alt="image"
            className="w-1/3 p-4 hover:scale-105 transition-transform duration-300"
          />
          <img
            src={image}
            alt="image"
            className="w-1/3 p-4 hover:scale-105 transition-transform duration-300"
          />
          <img
            src={image}
            alt="image"
            className="w-1/3 p-4 hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-row justify-center">
          <img
            src={image}
            alt="image"
            className="w-1/3 p-4 hover:scale-105 transition-transform duration-300"
          />
          <img
            src={image}
            alt="image"
            className="w-1/3 p-4 hover:scale-105 transition-transform duration-300"
          />
          <img
            src={image}
            alt="image"
            className="w-1/3 p-4 hover:scale-105 transition-transform duration-300"
          />
          <img
            src={image}
            alt="image"
            className="w-1/3 p-4 hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-row justify-center">
          <img
            src={image}
            alt="image"
            className="w-1/3 p-4 hover:scale-105 transition-transform duration-300"
          />
          <img
            src={image}
            alt="image"
            className="w-1/3 p-4 hover:scale-105 transition-transform duration-300"
          />
          <img
            src={image}
            alt="image"
            className="w-1/3 p-4 hover:scale-105 transition-transform duration-300"
          />
          <img
            src={image}
            alt="image"
            className="w-1/3 p-4 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
