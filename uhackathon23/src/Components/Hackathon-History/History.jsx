import React from "react";
import Heading from "../Heading/Heading";

const History = () => {
  return (
    <div className="container what-container two-margin-top">
      <Heading text="Our History" position="center" />
      <span className="container content">
        <p>
          UHackathon 3.0 took place on August 5th and 6th, 2022, with
          participation from SAARC Nations. The event received recognition and
          praise from the Honorable Prime Minister of India, Shri Narendra Modi,
          including a letter of acknowledgment.
          <br />
          <br />
          The inaugural edition,{" "}
          <a
            href="https://garhwalpost.in/44-teams-from-10-states-vie-for-u-hackathon-1-0-crown-at-upes/"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            UHackathon 1.0
          </a>
          , was organized in May 2019, attracting student participation from 10
          states across the country. This unique event featured problem
          statements from over 20 esteemed organizations in the government and
          private sectors. Participants also had the opportunity to secure
          internships with these organizations.
          <br />
          <br />
          Building on the success of{" "}
          <a
            href="https://garhwalpost.in/sjb-institute-of-technology-wins-u-hackathon-2-0-crown-at-upes/"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            UHackathon 1.0
          </a>
          ,{" "}
          <a
            href="https://upeshackathon.in/img/UHackathon%203.0.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            UHackathon 2.0
          </a>{" "}
          was held in February 2020. The grand finale saw the participation of
          over 50 teams from 11 states, and the winners received prizes worth
          INR 1 lakh. Three exceptional teams from the hackathon were selected
          to participate in the IEEE International Hackathon- YESIST held in
          Malaysia in 2020. Additionally, some participants secured internships
          with industry associates.
          <br />
          <br />
          Following the achievements of{" "}
          <a
            href="https://garhwalpost.in/44-teams-from-10-states-vie-for-u-hackathon-1-0-crown-at-upes/"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            UHackathon 1.0
          </a>
          ,{" "}
          <a
            href="https://garhwalpost.in/sjb-institute-of-technology-wins-u-hackathon-2-0-crown-at-upes/"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            UHackathon 2.0
          </a>
          , and{" "}
          <a
            href="https://upeshackathon.in/img/UHackathon%203.0.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            UHackathon 3.0
          </a>
          , the School of Computer Science proudly presents the fourth edition,
          UHackathon 4.0 META. Scheduled for September 1st and 2nd, 2023, this
          signature event promises to uphold the tradition of excellence
          established by UPES's flagship hackathon.
        </p>
      </span>
    </div>
  );
};

export default History;
