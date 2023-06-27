import React, { useEffect } from "react";
import "./Timeline.css";
import Heading from "../Heading/Heading";
import AOS from "aos";
import "aos/dist/aos.css";

const Timeline = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="container">
      <Heading text="Timeline" position="center" />
      <div className="row">
        <div className="col-md-12">
          <div className="main-timeline">
            <div className="timeline" data-aos="">
              <a href="/" className="timeline-content">
                <div className="timeline-year">27 June 2023</div>
                <h3 className="title">Official Website Live</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer males uada tellus lorem, et condimentum neque commodo
                  Integer males uada tellus lorem, et condimentum neque commodo
                </p>
              </a>
            </div>
            <div className="timeline">
              <a href="/" className="timeline-content">
                <div className="timeline-year">29 June 2023</div>
                <h3 className="title">Registrations Open</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer males uada tellus lorem, et condimentum neque commodo
                  Integer males uada tellus lorem, et condimentum neque commodo
                </p>
              </a>
            </div>
            <div class="timeline">
              <a href="/" class="timeline-content">
                <div class="timeline-year">29 June 2023</div>
                <h3 class="title">Registrations Open</h3>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer males uada tellus lorem, et condimentum neque commodo
                  Integer males uada tellus lorem, et condimentum neque commodo
                </p>
              </a>
            </div>
            <div class="timeline">
              <a href="/" class="timeline-content">
                <div class="timeline-year" style={{ right: "-18px" }}>
                  9 July 2023
                </div>
                <h3 class="title">Theme Reveal</h3>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer males uada tellus lorem, et condimentum neque commodo
                  Integer males uada tellus lorem, et condimentum neque commodo
                </p>
              </a>
            </div>
            <div class="timeline">
              <a href="/" class="timeline-content">
                <div class="timeline-year">11 July 2023</div>
                <h3 class="title">Abstract Submission Starts</h3>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer males uada tellus lorem, et condimentum neque commodo
                  Integer males uada tellus lorem, et condimentum neque commodo
                </p>
              </a>
            </div>
            <div class="timeline">
              <a href="/" class="timeline-content">
                <div class="timeline-year">31 July 2023</div>
                <h3 class="title">Registrations & Abstract Submission Ends</h3>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer males uada tellus lorem, et condimentum neque commodo
                  Integer males uada tellus lorem, et condimentum neque commodo
                </p>
              </a>
            </div>
            <div class="timeline">
              <a href="/" class="timeline-content">
                <div class="timeline-year">18 Aug. 2023</div>
                <h3 class="title">Result Announcement</h3>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer males uada tellus lorem, et condimentum neque commodo
                  Integer males uada tellus lorem, et condimentum neque commodo
                </p>
              </a>
            </div>
            <div class="timeline">
              <a href="/" class="timeline-content">
                <div class="timeline-year" style={{ right: "-42px" }}>
                  1 & 2 Sept. 2023
                </div>
                <h3 class="title">UHackathon 4.0 Finale</h3>
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer males uada tellus lorem, et condimentum neque commodo
                  Integer males uada tellus lorem, et condimentum neque commodo
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
