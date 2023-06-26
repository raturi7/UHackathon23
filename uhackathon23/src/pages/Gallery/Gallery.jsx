import React, { useRef, useState } from "react";
import image from "../../Components/Images/Rectangle 13.png";
import "./Gallery.css";
import Heading from "../../Components/Heading/Heading";
import { useLocation } from "react-router-dom";
import img1 from "./IMAGES/Dance 4.png";
import img2 from "./IMAGES/Guests speech 1.png";
import img3 from "./IMAGES/guests speech 3.png";
import img4 from "./IMAGES/participants 2.png";
import img5 from "./IMAGES/IMG_0710.JPG";
import img6 from "./IMAGES/participants 3.png";
import img7 from "./IMAGES/IMG_0141.JPG";
import img8 from "./IMAGES/IMG_0254.JPG";
import img9 from "./IMAGES/IMG_0268.JPG";
import img10 from "./IMAGES/IMG_0364.JPG";
import img11 from "./IMAGES/IMG_0376.JPG";
import img12 from "./IMAGES/IMG_0388.JPG";
import img13 from "./IMAGES/IMG_0494.JPG";
import img14 from "./IMAGES/IMG_0545.JPG";
import img15 from "./IMAGES/IMG_0596.JPG";
import img16 from "./IMAGES/IMG_0610.JPG";
import img17 from "./IMAGES/IMG_0717.JPG";
import img18 from "./IMAGES/IMG_0720.JPG";
import img19 from "./IMAGES/IMG_0721.JPG";
import img20 from "./IMAGES/IMG_0740.JPG";

const Gallery = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, [pathname]);
  const ref1 = useRef();
  const modal = useRef();
  const [selectedImage, setSelectedImage] = useState(null); // Store the selected image

  let data = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    modal.current.style.filter = "blur(4px) brightness(20%)";
  };

  const closeModal = () => {
    setSelectedImage(null);
    modal.current.style.filter = "none";
  };

  return (
    <div className="gallery-container pt-5">
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={ref1}
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-xl modal-dialog-centered"
          style={{ height: "max-content" }}
        >
          <div className="modal-content d-flex flex-wrap flex-row gap-4 justify-content-center">
            {selectedImage && (
              <img
                src={selectedImage}
                className="modal-img"
                alt=""
                style={{ objectFit: "contain", maxHeight: "80vh" }}
              />
            )}
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            ></button>
            <div className="modal-body d-flex flex-column p-0">
              <div className="modal-header p-0" style={{ border: "none" }}>
                <Heading text="UHackathon 3.0 Winners" />
              </div>
              <p style={{ fontSize: "16px" }}>
                {
                  "XYZ Team won UHackathon 3.0. They created ABCD code for a problem statement offered by MNO Company."
                }
              </p>
              <p style={{ fontSize: "16px" }}>
                {
                  "This a picture of _names of members_ being awarded their PQR ny _name of the guest_."
                }
              </p>
              <p style={{ fontSize: "16px" }}>{"Date: DD/MM/YY"}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container pt-5 flex flex-col"
        style={{ display: "block" }}
      >
        <div
          className="d-flex flex-row gallery-box flex-wrap justify-content-center pt-5 px-3"
          ref={modal}
        >
          {data.map((element, index) => {
            return (
              <button
                type="button"
                onClick={() => openModal(element)}
                className="w-1/3 p-4"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                }}
                key={index}
              >
                <img src={element} alt="" className="gallery-image" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
