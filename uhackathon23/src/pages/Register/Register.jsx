import React from "react";
import "./Register.css";
import Heading from "../../Components/Heading/Heading";
const Register = () => {
  return (
    <div className="container two-margin-top">
      <div className="container text-white flex flex-col p-0">
        <div className="container p-0">
          <h6
            className="font-extrabold"
            style={{ fontWeight: "700", fontSize: "24px" }}
          >
            JOIN US AS A
          </h6>
       
           <Heading text="PARTICIPANT" position="center"/>
        
        </div>
        <div className="team pt-3 pb-0  flex !flex-row display-flex !justify-between">
          <div className="flex  ">
            <div>
              <h3>National</h3>
              <h4>Team</h4>
            </div>
            <div>
              <a>
                <button className="join-btn p-2">Register Here</button>
              </a>
            </div>
          </div>
          <div className="veryical-line" style={{width:"3px",height:"100vh",background:"white"}}>
        
          </div>
          <div>
            <div>
              <h3>International</h3>
              <h4>Team</h4>
            </div>
            <div>
              <a>
                <button className="join-btn p-2">Register Here</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
