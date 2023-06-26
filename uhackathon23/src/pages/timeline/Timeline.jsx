import React from "react";
import Heading from "../../Components/Heading/Heading";

const Timeline = () => {
  return (
    <div className="container what-container two-margin-top">
      <Heading text="Hackathon Timeline" position="center" />
      <div className="timeline">
        <div className="timeline-event">
          <div className="event-date">May 2019</div>
          <div className="event-description">
            <h3>Hackathon 1.0</h3>
            <p>
              Inaugural edition with participation from 10 states. Problem
              statements from 20 esteemed organizations. Internship
              opportunities for participants.
            </p>
          </div>
        </div>
        <div className="timeline-event">
          <div className="event-date">February 2020</div>
          <div className="event-description">
            <h3>UHackathon 2.0</h3>
            <p>
              Participation from 11 states. Grand finale with over 50 teams.
              Winners received prizes worth INR 1 lakh. Selected teams
              participated in IEEE International Hackathon- YESIST in Malaysia.
              Internship opportunities for participants.
            </p>
          </div>
        </div>
        <div className="timeline-event">
          <div className="event-date">August 2022</div>
          <div className="event-description">
            <h3>UHackathon 3.0</h3>
            <p>
              Participation from SAARC Nations. Recognition from Honorable Prime
              Minister of India. Internship opportunities for participants.
            </p>
          </div>
        </div>
        <div className="timeline-event">
          <div className="event-date">September 2023</div>
          <div className="event-description">
            <h3>UHackathon 4.0 META</h3>
            <p>
              Upcoming event scheduled for September 1st and 2nd, 2023. Fourth
              edition of the hackathon presented by the School of Computer
              Science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
