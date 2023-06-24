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
  [img3, "Augmented Reality (AR)"],
  [img2, "Artificial Intelligence"],
  [img7, "Internet of Things(IoT)"],
  [img4, "Blockchain"],
  [img8, "Virtual Reality (VR)"],

  [img1, "3D MODELING"],
  [img5, "Brain Computer Interface"],
  [img6, "Edge Computing"],
];

function themesCard(data) {
  return (
    <div className="card bg-transparent" style={{ border: "none" }}>
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
  );
}

const OurThemes = () => {
  return (
    <div className="container what-container two-margin-top">
      <Heading text="Our Themes" position="center" />
      <div className="row">
        {data.map((element) => {
          return (
            <div className="col-6 col-md-3 mb-4 py-5" key={element[1]}>
              {themesCard(element)}
            </div>
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
