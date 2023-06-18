import React from "react";

const Register = () => {
  return (
    <div className="pt-5">
      <div className="container text-white flex flex-col">
        <div>
          <h6 className="font-extrabold" style={{ fontWeight: "700", fontSize: "24px" }}>
            JOIN US AS A
          </h6>
          <h1 className="font-extrabold" style={{ fontWeight: "700", fontSize: "64px" }}>
            PARTICIPANT
          </h1>
        </div>
        <div className="pt-3 pb-0 flex flex-row display-flex">
          <div className="flex flex-row">
            <h3>National</h3>
            <h4>Team</h4>
          </div>
          <div className="ml-4">
            {/* Vertical line */}
            <svg width="6" height="686" viewBox="0 0 6 686" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 0L3.00003 686" stroke="white" strokeWidth="6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
