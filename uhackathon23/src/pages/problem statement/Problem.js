import React, { useRef ,useState} from "react";
import "./Problem.css";
import Heading from "../../Components/Heading/Heading";

import data from "./statement.json";

const Problem = () => {
  const {ps,setPs}=useState({})
  const modalRef = useRef(null);

  const openModal = () => {
    const modalElement = modalRef.current;
    modalElement.style.display = "flex";
  };

  const handleCloseModal = () => {
    const modalElement = modalRef.current;
    modalElement.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modalRef.current) {
      modalRef.current.style.display = "none";
    }
  };

  function psCard(data) {
    return (
      <div className="col-4 card-container">
        <button
          className="card d-flex flex-row align-items-center justify-content-start p-3 pl-4 gap-4 w-100"
          onClick={()=>{
            
            openModal()
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            viewBox="0 0 448 512"
          >
            <path d="M224 0c13.3 0 24 10.7 24 24V70.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-57 57v76.5l66.2-38.2 20.9-77.8c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4L373 142.2l37.1-21.4c11.5-6.6 26.2-2.7 32.8 8.8s2.7 26.2-8.8 32.8L397 183.8l31.5 8.4c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-77.8-20.9L272 256l66.2 38.2 77.8-20.9c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4L397 328.2l37.1 21.4c11.5 6.6 15.4 21.3 8.8 32.8s-21.3 15.4-32.8 8.8L373 369.8l8.4 31.5c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-20.9-77.8L248 297.6v76.5l57 57c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V441.9l-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57V297.6l-66.2 38.2-20.9 77.8c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4L75 369.8 37.9 391.2c-11.5 6.6-26.2 2.7-32.8-8.8s-2.7-26.2 8.8-32.8L51 328.2l-31.5-8.4c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l77.8 20.9L176 256l-66.2-38.2L31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4L51 183.8 13.9 162.4c-11.5-6.6-15.4-21.3-8.8-32.8s21.3-15.4 32.8-8.8L75 142.2l-8.4-31.5c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l20.9 77.8L200 214.4V137.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V24c0-13.3 10.7-24 24-24z" />
          </svg>
          <div className="card-content d-flex flex-column align-items-start justify-content-center">
            <h5
              style={{ fontWeight: "600", color: "#2E2545", textAlign: "left" }}
            >
              {data.title}
            </h5>
            <h6 style={{ fontWeight: "600", color: "#8585BD" }}>{data.id}</h6>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="container problem-statement-card two-margin-top">
      <div ref={modalRef} className="modal">
        {/* Modal content */}
        <div className="modal-content">
          <span className="close" onClick={handleCloseModal}>
            &times;
          </span>
          <section className="d-flex align-items-start justify-content-center p-4 flex-column" style={{textAlign:"left"}}>
            <h6 className="mb-4 ps-number" style={{ fontWeight: "600" }}>
              PS NUMBER: PSAIML001
            </h6>
            <p style={{marginBottom:"8px"}} className="blue-title"><b style={{color:"#0043ce"}}>Problem Statement:</b> <b>Analysis of Hinglish Content</b></p>
            <p style={{marginBottom:"8px"}}  className="blue-title"><b style={{color:"#0043ce"}}>Key:</b> <b>Lorem</b></p>
            <p style={{marginBottom:"8px"}} className="mb-4 blue-title"><b style={{color:"#0043ce"}}>Organisation:</b> <b>IIT Bombay</b></p>
            <span style={{ textAlign: "justify" }} className="mb-4">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                magni at, cupiditate quos consequatur corporis excepturi iste
                perspiciatis corrupti porro accusamus nulla officiis, ipsam
                alias sint ex laudantium debitis a? Aspernatur laborum, iure
                inventore, itaque repellat neque maxime qui quidem, vitae optio
                quis cumque exercitationem dolore temporibus consequatur.
                Ducimus sed velit magni, quo saepe cupiditate omnis molestias ad
                numquam aliquid. Obcaecati facilis voluptatibus quas natus
                cumque corporis magni delectus qui! Ipsam praesentium ratione
                exercitationem nemo, quod architecto magnam quibusdam
                voluptatum, deserunt tempore doloremque minima natus hic harum
                veniam culpa aspernatur. Ipsa cupiditate ipsum magni,
                consequatur aliquam blanditiis consectetur, fugiat eos alias
                reprehenderit assumenda odio quisquam ut rem expedita dolores
                itaque nemo ratione eum nam aperiam. Consequatur quisquam ad
                iste ab!0
              </p>
            </span>
            {/* <form
              action=""
              method="post"
              style={{ display: "grid", placeItems: "flex-start" }}
            >
              <div class="input-grou mb-3">
                <label class="label">Team Name</label>
                <input
                  autocomplete="off"
                  name="Email"
                  id="Email"
                  class="input"
                  type="text"
                />
                <div></div>
              </div>
              <div class="input-grou mb-4">
                <label class="label">Team ID</label>
                <input
                  autocomplete="off"
                  name="Email"
                  id="Email"
                  class="input"
                  type="text"
                />
                <div></div>
              </div>
              <button type="submit" className="join-btn p-2">
                Submit
              </button>
            </form> */}
          </section>
        </div>
      </div>

      <Heading text="Problem Statements" position="center"></Heading>

      <div className="d-flex flex-row ps-box">
        {data.map((element) => {
          return psCard(element);
        })}
      </div>
    </div>
  );
};

export default Problem;
