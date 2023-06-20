import React, { useRef } from "react";
import image from "../../Components/Images/Rectangle 13.png";
import './Gallery.css'
import Heading from '../../Components/Heading/Heading'
import { useLocation } from 'react-router-dom';

const Gallery = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(1, 1);
  }, [pathname]);
  const ref1 = useRef();
  const modal = useRef();
  let data = [];
  for (let i = 0; i < 16; i++) {
    data.push(image);
  }
  React.useEffect(()=>{
    ref1.current.addEventListener('click',()=>{
      if( modal.current.style.filter === "blur(4px) brightness(20%)")
      modal.current.style.filter = "blur(4px) brightness(20%)"
    })
  },[])


  return (
    <div className="gallery-container pt-5">
      <div class="modal fade" id="exampleModal" tabindex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true" ref={ref1}>
        <div class="modal-dialog modal-dialog-scrollable modal-xl modal-dialog-centered"  style={{height:"max-content"}}>
          <div class="modal-content d-flex flex-wrap flex-row gap-4 justify-content-center">
            <img src={image} className="modal-img" alt="" />
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"  onClick={()=>{modal.current.style.filter="none"
    }}></button>
            <div class="modal-body d-flex flex-column p-0 " >
              <div class="modal-header p-0" style={{ border: "none" }}>
                <Heading text="UHackathon 3.0 Winners" />
              </div>
              <p style={{ fontSize: "16px" }}>
                {
                  "XYZ Team won UHackathon 3.0. They created ABCD code for a problem statement offered by MNO Company."
                }
              </p>
              <p style={{ fontSize: "16px" }}>
                {
                  "This a picture of _names of members_ being awarded their PQR ny _name of the guest_. "
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
          {data.map((element) => {
            return (
              <button
                type="button"
                onClick={() => {
                  modal.current.style.filter = "blur(4px) brightness(20%)";
                }}
                className="w-1/3 p-4"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{
                  border: "none",
                  borderRadius: "5px",
                  background: "transparent",
                }}
              >
                <img src={element} alt="" className="" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
