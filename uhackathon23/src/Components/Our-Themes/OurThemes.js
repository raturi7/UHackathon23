import React from "react";
import img1 from "./Images/3D modelling.png";
import img2 from "./Images/Artificial Intelligence.png";
import img3 from "./Images/Augmented Reality.png";
import img4 from "./Images/Blockchain.png";
import img5 from "./Images/Brain Computing Interface.png";
import img6 from "./Images/Edge Computing.png";
import img7 from "./Images/Internet if Things.png";
import img8 from "./Images/Virtual Reality.png";
import Heading from "../Heading/Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  [img2, "Artificial Intelligence",img1, "3D MODELING"],
  [img7, "Internet of Things(IoT)",img5, "Brain Computer Interface"],
  [img4, "Blockchain",img6, "Edge/Cloud Computing"]
];

function themesCard(data) {
  return (
    <div className="col-6 col-md-3 py-5 d-flex flex-column justify-content-end">
      <div className="pb-5 d-flex flex-column jutify-content-between">
    <div className="card bg-transparent mb-5" style={{ border: "none" }}>
      <div className="text-center">
        {" "}
        {/* Added text-center class */}
        <img
          src={data[0]}
          alt=""
          style={{ width: "104px", height: "auto" }}
          className="filter-white theme"
        />
      </div>
      <div
        className="card-body justify-center text-uppercase text-white"
        style={{ height: "40px", overflowWrap: "break-word" }}
      >
        <div style={{ fontStyle: "normal", fontWeight: 600, fontSize: "18px" }}>
          {data[1]}
        </div>
      </div>{" "}
    </div>
    <div className="card bg-transparent mt-5" style={{ border: "none" }}>
    <div className="text-center">
      {" "}
      {/* Added text-center class */}
      <img
        src={data[2]}
        alt=""
        style={{ width: "104px", height: "auto" }}
        className="filter-white theme"
      />
    </div>
    <div
      className="card-body justify-center text-uppercase text-white"
      style={{ height: "40px", overflowWrap: "break-word" }}
    >
      <div style={{ fontStyle: "normal", fontWeight: 600, fontSize: "18px" }}>
        {data[3]}
      </div>
    </div>{" "}
  </div>
  </div>
  </div>
  );
}

const OurThemes = () => {
  return (
    <div className="container what-container two-margin-top">
      <Heading text="Our Themes" position="center" />
      <div className="d-flex flex-wrap flex-row">
        <div className="col-6 col-md-3 py-5 d-flex flex-column justify-contnet-end">
          <p style={{color:"#e4e4e4",fontSize:"17px"}}><b>EXTENDED REALITY (XR) </b><p>(SPATIAL COMPUTING)</p></p>
          <div
            className="container d-flex flex-column py-5"
            style={{ border: "1px solid #e4e4e4", borderRadius: "35px" }}
          >
            <div
              className="card bg-transparent mb-5"
              style={{ border: "none" }}
            >
              <div className="text-center">
                {" "}
                {/* Added text-center class */}
                <img
                  src={img3}
                  alt=""
                  style={{ width: "104px", height: "auto" }}
                  className="filter-white theme"
                />
              </div>
              <div
                className="card-body justify-center text-uppercase text-white"
                style={{ height: "40px", overflowWrap: "break-word" }}
              >
                <div
                  style={{
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "18px",
                  }}
                >
                  {"Augmented Reality (AR)"}
                </div>
              </div>{" "}
            </div>
            <div
              className="card bg-transparent mt-5"
              style={{ border: "none" }}
            >
              <div className="text-center">
                {" "}
                {/* Added text-center class */}
                <img
                  src={img8}
                  alt=""
                  style={{ width: "104px", height: "auto" }}
                  className="filter-white theme"
                />
              </div>
              <div
                className="card-body justify-center text-uppercase text-white"
                style={{ height: "40px", overflowWrap: "break-word" }}
              >
                <div
                  style={{
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "18px",
                  }}
                >
                  {"Virtual Reality (VR)"}
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
                {data.map((element) => {
          return ( themesCard(element)
         );
        })} 
      </div>
      <span className="container content">
        <p>
          In terms of technologies, UHackathon 4.0 META will leverage the
          emerging technologies and technologies of tomorrow, specifically in
          the realm of Metaverse. These themes and technologies provide a broad
          scope for participants to explore and develop innovative solutions
          that address real-world challenges in various domains.
        </p>
      </span>
    </div>
  );
};

export default OurThemes;
