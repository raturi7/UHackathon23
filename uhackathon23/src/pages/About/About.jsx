
import React from 'react'
import './About.css'
import Heading from '../../Components/Heading/Heading';
import imgddn1 from "./images/img1 (1).avif"
import imgddn2 from "./images/img1 (2).avif"
import imgddn3 from "./images/img1 (3).avif"
import imgupes1 from "./images/imgupes1 (1).avif"
import imgupes2 from "./images/imgupes1 (2).avif"
import imgupes3 from "./images/imgupes1 (3).avif"
import uhack1 from "./images/img.avif"
import uhack2 from "./images/img(17).avif"
import uhack3 from "./images/img(3).avif"

const About = () => {

  function uhack(){
    return (
      <div className="container-fluid rounded-tr-lg flex-row d-flex align-items-center img-scale justify-content-center p-0 images-container two-margin-top">
        <div
          className="col lg-4 rounded-tl-lg img-scalel

"
        >
          <img src={uhack1} alt="" />
        </div>
        <div className="col lg-4">
          <img src={uhack2} alt="" />
        </div>
        <div className="col lg-4 img-scaler">
          <img src={uhack3} alt="" />
        </div>
      </div>
    );
  }
  function upes() {
    return (
      <div className="container-fluid  flex-row d-flex align-items-center img-scale  justify-content-center p-0 images-container two-margin-top">
        <div className="col lg-4 img-scalel">
          <img src={imgupes3} alt="" />
        </div>
        <div className="col lg-4">
          <img src={imgupes2} alt="" />
        </div>
        <div className="col lg-4 img-scaler">
          <img src={imgupes1} alt="" />
        </div>
      </div>
    );
  }
  function dehradun() {
    return (
      <div className="container-fluid flex-row d-flex align-items-center img-scale justify-content-center p-0 images-container two-margin-top">
        <div className="col lg-4">
          <img src={imgddn3} alt="" className="img-scalel" />
        </div>
        <div className="col lg-4">
          <img src={imgddn2} alt="" />
        </div>
        <div className="col lg-4">
          <img src={imgddn1} alt="" className="img-scaler" />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="container-fluid  p-0 about-container">
        <div className="container text-white pt-5 two-margin-top">
          <Heading text="UHackathon 4.0 &nbsp; META" position="left" />
          <section>
            <p>
              UHackathon 4.0 META is the fourth iteration of UPES's flagship
              event, UHackathon, organized by the School of Computer Science.
              This year's theme is "Metaverse". <br />
              <br /> UHackathon 4.0 META aligns with UPES's vision of providing
              a mega platform for the programming community, technophiles, and
              techpreneurs to address critical challenges in the industry and
              society. Participants are encouraged to build innovative prototype
              solutions leveraging technologies under the umbrella of the
              Metaverse.
              <br />
              <br /> UHackathon 4.0 is a 24-hour coding marathon that aims to
              invite participants from G20 Nations and our associate
              International Universities. The event brings together talented
              individuals to collaborate and develop solutions towards achieving
              the United Nations Sustainable Development Goals (UN SDGs) by
              leveraging emerging technologies, specifically focusing on
              Metaverse Technologies.
            </p>
          </section>
        </div>
        <div className="container links d-flex flex-column flex-wrap justify-content-center gap-4 mt-5">
          <div className="container d-flex flex-wrap justify-content-center gap-4 mt-5">
            <a
              href="https://garhwalpost.in/44-teams-from-10-states-vie-for-u-hackathon-1-0-crown-at-upes/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              UHackathon 1.0
            </a>
            <a
              href="https://garhwalpost.in/sjb-institute-of-technology-wins-u-hackathon-2-0-crown-at-upes/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              UHackathon 2.0
            </a>
            <a
              href="https://upeshackathon.in/img/UHackathon%203.0.pdf"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              UHackathon 3.0
            </a>
          </div>
          <div className="container d-flex p-0 flex-wrap justify-content-center gap-4">
            <a
              href="https://www.upescsi.in/hackathon7.0/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              UPES-CSI Hackathon 7.0
            </a>
            <a
              href="https://devbhoomicyberhackathon.in/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Devbhoomi Cyber Hackathon
            </a>
            <a
              href="https://upeshackathon.in/img/pmletter.pdf"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Letter From Honorable Prime Minister
            </a>
          </div>
        </div>
        {uhack()}
        <div className="container two-margin-top">
          <Heading text="About UPES" position="left" />
          <section id="aboutupes">
            <p>
              UPES, a private university established under the UPES Act, 2003 by
              the State Legislature of Uttarakhand, holds a prominent position
              in the educational landscape. It has gained recognition from the
              University Grants Commission (UGC) and ranks among the top
              universities in India. According to the 2023 National
              Institutional Ranking Framework (NIRF) released by the Ministry of
              Education, UPES holds the 52nd position overall, with the 54th
              rank in engineering and the 39th rank in management. Moreover, the
              QS World Rankings 2023 placed UPES at 243rd in Asia and ranked it
              as the third-best private university in India. Accredited by the
              National Assessment and Accreditation Council (NAAC) with an 'A'
              grade, UPES has achieved an impressive track record in placements,
              receiving a 5-star rating for employability by QS Rating. Over the
              past few years, the university has consistently recorded over 90%
              placements.<br/><br/> UPES offers graduate and postgraduate programs through
              its eight schools: School of Advanced Engineering, School of
              Computer Science, School of Design, School of Law, School of
              Business, School of Health Sciences & Technology, School of Modern
              Media, and School of Liberal Studies with about 13,000 students
              and 1500+ faculty and staff members.{" "}
            </p>
          </section>
          <div className="trigger d-flex justify-content-start mx-3">
            <a
              href="https://www.upes.ac.in"
              className="footer-link p-2 mt-4"
              style={{ textDecoration: "none" }}
            >
              Know More
            </a>
          </div>
        </div>
        {upes()}
        <div className="container two-margin-top">
          <Heading text="About Dehradun" position="left" />
          <section id="aboutupes">
            <p>
              The picturesque Valley of Dehradun is the winter capital along
              with being the largest, as well as, the most populated city in
              Uttarakhand. It is the administrative headquarters of the
              eponymous district and is governed by the Dehradun Municipal
              Corporation. The city’s cosmopolitan aura amalgamated seamlessly
              with it’s unparalleled natural beauty. As per the legends, the
              great guru Drona of Mahabharata, lived here with his wife Kripi.
              Traditionally part of the Garhwal region, Dehradun lies along
              National Highway 7 at a distance of 248 km (154 mi) north of
              India's capital New Delhi and is well-connected through road, rail
              and air with rest of the country. With numerous premier schools
              and centers of higher education, Dehradun has emerged out as one
              of the prominent education hubs in India. Haridwar, the “Gateway
              to Gods” and Rishikesh, the "Yoga Capital of the World" are just
              an hour’s drive from Dehradun. Moreover, it is among the number of
              cities selected by Government of India, as part of its smart city
              project. It is the third largest city in the Himalayas after
              Kathmandu and Srinagar. Know more about Uttarakhand & Dehradun.
            </p>
          </section>
          <div className="trigger d-flex justify-content-start mx-3">
            <a
              href="https://uttarakhandtourism.gov.in"
              className="footer-link p-2 mt-4"
              style={{ textDecoration: "none" }}
            >
              Know More
            </a>
          </div>
        </div>
        {dehradun()}
      </div>
    </>
  );


}

export default About