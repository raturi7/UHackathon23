import React from "react";
import "./Problem.css";
import logo from "./3D modelling.png"

const Problem = () => {
  return (
    <div>
      <section id="timeline">
        <div className="container">
          <div className="row">
            <div className="head-div" data-aos="fade-up">
              <h2 className="heading" style={{ paddingTop: 0, margin: 0 }}>
                <b>ROADMAP</b>
              </h2>
            </div>
          </div>

          <div className="row" style={{ paddingTop: 60 }}>
            <div className="col-lg-12">
              <ul className="list-group timeline">
                <li
                  data-aos="fade-up"
                  id="event1"
                  className="list-group-item"
                  style={{ overflow: "visible" }}
                >
                  <div
                    className="timeline-image"
                    style={{ overflow: "visible" }}
                  >
                    <img
                      className="img-fluid"
                      style={{ zIndex: 1 }}
                      src={logo}
                      alt="journey 1"
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>17th April, 2023</h4>
                      <h4 className="subheading">Registration Starts</h4>
                    </div>
                  </div>
                </li>
                <li
                  data-aos="fade-up"
                  className="list-group-item timeline-inverted"
                >
                  <div className="timeline-image">
                    <img
                      className="img-fluid"
                      style={{ transform: "scale(1.3)" }}
                      src="assets/img/timeline/casual-life-3d-girl-solving-problem-with-phone.avif"
                      alt="journey 2"
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>27 April, 2023</h4>
                      <h4 className="subheading">
                        Theme Reveal and Problem Statement Selection
                      </h4>
                    </div>
                  </div>
                </li>

                <li data-aos="fade-up" className="list-group-item">
                  <div className="timeline-image">
                    <img
                      className="img-fluid"
                      style={{ transform: "scale(1.5)", marginLeft: 10 }}
                      src="assets/img/timeline/3d-business-guy-working-on-a-computer.avif"
                      alt="journey 3"
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>28th April, 2023</h4>
                      <h4 className="subheading">
                        Inaugural Ceremony and Round 1 Evaluation
                      </h4>
                    </div>
                  </div>
                </li>
                <li
                  data-aos="fade-up"
                  className="list-group-item timeline-inverted"
                >
                  <div className="timeline-image">
                    <img
                      className="img-fluid"
                      style={{ marginTop: -10 }}
                      src="assets/img/timeline/business-3d-young-people-in-casual-clothes-standing.avif"
                      alt="journey 4"
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>29th April, 2023</h4>
                      <h4 className="subheading">Round 2 Evaluation</h4>
                    </div>
                  </div>
                </li>
                <li data-aos="fade-up" className="list-group-item">
                  <div className="timeline-image">
                    <img
                      className="img-fluid"
                      style={{ transform: "scale(0.9)", marginTop: -30 }}
                      src="assets/img/timeline/business-3d-businessman-generated-a-new-great-idea.avif"
                      alt="journey 3"
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>30th April, 2023</h4>
                      <h4 className="subheading">Final Round Evaluation</h4>
                    </div>
                  </div>
                </li>
                <li
                  data-aos="fade-up"
                  className="list-group-item timeline-inverted"
                >
                  <div className="timeline-image">
                    <img
                      className="img-fluid"
                      style={{ transform: "scale(1.4)" }}
                      id="winner"
                      src="assets/img/timeline/3d-casual-life-trophy-and-target.avif"
                      alt="journey 5"
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>30 April</h4>
                      <h4 className="subheading" id="winner-txt">
                        Closing Ceremony
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Problem;
