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
  [img1, "3D MODELING"],
  [img2, "Artificial Intelligence"],
  [img3, "Augmented Reality"],
  [img4, "Blockchain"],
  [img5, "Brain Computer Interface"],
  [img6, "Edge Computing"],
  [img7, "Internet of Things(IoT)"],
  [img8, "Virtual Reality"],
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
          The broader areas of UHackathon 4.0 are focused, but not limited to
          the fields of, Disaster Management, Environmental Sustainability,
          EdTech solutions, Blockchain, Consumer Tech, Healthcare & Biomedical
          Devices, Retail, Women Welfare, Smart Communication Systems,
          Agriculture & Rural Development, Food Technology, Smart Vehicles,
          Robotics & Drones, and AI systems.
        </p>
      </span>
    </div>
  );
};

export default OurThemes;
