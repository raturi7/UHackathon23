import React from "react";
import "./Timeline.css";
import Heading from "../Heading/Heading";


const Timeline = () => {

  return (
    <div className="container">
      <Heading text="Timeline" position="center" />
      <div className="row pt-5">
        <div className="col-md-12">
          <div className="main-timeline">
            <div className="timeline">
              <div className="timeline-content">
                <div className="timeline-year">27 June 2023</div>
                <h3 className="title">Official Website Live</h3>
                <p className="description">
                  Mark your calendars! The official website for our hackathon
                  will go live on 7th June 2023, providing all the essential
                  information, guidelines, and updates for participants. Get
                  ready to embark on an exciting hacking journey!
                </p>
              </div>
            </div>

            <div class="timeline">
              <a href="/" class="timeline-content">
                <div class="timeline-year">29 June 2023</div>
                <h3 class="title">Registrations Open</h3>
                <p class="description">
                  It's time to take the first step toward an incredible hacking
                  experience. Registrations for our hackathon are now open! Take
                  advantage of the opportunity to showcase your skills,
                  collaborate with fellow innovators, and compete for exciting
                  prizes. Sign up today and secure your spot in this thrilling
                  event.
                </p>
              </a>
            </div>
            <div class="timeline">
              <a href="/" class="timeline-content">
                <div class="timeline-year" style={{ right: "-25px" }}>
                  9 July 2023
                </div>
                <h3 class="title">Theme Reveal</h3>
                <p class="description">
                  The moment you've been waiting for has arrived! We are
                  thrilled to unveil the hackathon's theme. Let your creativity
                  flow as you brainstorm innovative ideas within this exciting
                  theme. Abstract submission officially begins, giving you a
                  platform to showcase your unique approach to problem-solving.
                </p>
              </a>
            </div>
            <div class="timeline">
              <a href="/" class="timeline-content">
                <div class="timeline-year">11 July 2023</div>
                <h3 class="title">Abstract Submission Starts</h3>
                <p class="description">
                  The anticipation is building! The results of the preliminary
                  round of the hackathon will be announced soon. Stay tuned to
                  find out if your team has reached the final stage. Prepare
                  yourself for the ultimate showdown in the upcoming Uhackathon
                  4.0 META finale.
                </p>
              </a>
            </div>
            <div class="timeline">
              <a href="/" class="timeline-content">
                <div class="timeline-year">31 July 2023</div>
                <h3 class="title">Registrations & Abstract Submission Ends</h3>
                <p class="description">
                  Hurry! The clock is ticking. Make sure you complete your
                  registration and submit your abstract before the deadline.
                  Don't miss out on the chance to demonstrate your skills,
                  tackle real-world challenges, and compete against top-notch
                  talent from around the globe. Submit your entry to be
                  considered for the preliminary round.
                </p>
              </a>
            </div>
            <div class="timeline">
              <a href="/" class="timeline-content">
                <div class="timeline-year">18 Aug. 2023</div>
                <h3 class="title">Result Announcement</h3>
                <p class="description">
                  The anticipation is building! The results of the preliminary
                  round of the hackathon will be announced soon. Stay tuned to
                  find out if your team has reached the final stage. Prepare
                  yourself for the ultimate showdown in the upcoming Uhackathon
                  4.0 META finale.
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
                  The grand finale of Uhackathon 4.0 META is here! Join us for
                  an electrifying event where the most innovative teams showcase
                  their cutting-edge solutions. Witness the brilliance and
                  ingenuity of participants as they compete for the top spot.
                  Get ready to celebrate the spirit of innovation and excellence
                  in this thrilling finale.
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
