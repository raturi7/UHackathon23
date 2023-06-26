
import React from 'react'
import './About.css'
import Heading from '../../Components/Heading/Heading';
import img1 from '../../Components/Images/Rectangle13-2.png'
import img2 from '../../Components/Images/Rectangle13-1.png'
import img3 from '../../Components/Images/Rectangle13.png'
import { useLocation } from 'react-router-dom';
import UPES from "../../Components/Images/UPES.jpg"
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
  const { pathname } = useLocation();
  React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, [pathname]);
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
      <div className="container-fluid small-mobile-hero p-0 about-container">
        <div className="container text-white pt-5 two-margin-top">
          <Heading text="UHackathon 4.0 &nbsp; META" position="left" />
          <section>
            <p>
              UHackathon 4.0 META is the fourth iteration of UPES's flagship
              event, UHackathon organized by the School of Computer Science,
              with this year’s theme being “Metaverse”. After the success of
              UHackathon 1.0, 2.0 & 3.0 School of Computer Science is back with
              the 4th edition of UPES’ s Flagship event UHackathon 4.0 META
              proposed to be held on 1st and 2nd September 2023. It’s a
              signature event of School Of Computer Science, listed in the Event
              Calendar. UHackathon 4.0 META is an initiative in sync with the
              vision of UPES, towards providing a mega platform to the
              programming community, technophiles and techpreneurs to address
              the critical challenges of the industry and society by building
              innovative solutions in form of prototypes leveraging technologies
              under the umbrella of Metaverse. A 24 hour coding marathon
              planning to invite participants from G20 Nations and our associate
              International Universities to come together and participate in
              developing solutions towards achieving UN SDG goals leveraging the
              emerging technologies and technologies of tomorrow i.e, Metaverse
              Technologies including AR (Augmented Reality), VR(Virtual
              Reality), Artificial Intelligence, IoT, Blockchain, Extended
              reality, 3D Modelling, Brain Computer Interface, Spatial / Edge
              computing. The broader areas of UHackathon 4.0 are focused, but
              not limited to the fields of, Disaster Management, Environmental
              Sustainability, EdTech solutions, Blockchain, Consumer Tech,
              Healthcare & Biomedical Devices, Retail, Women Welfare, Smart
              Communication Systems, Agriculture & Rural Development, Food
              Technology, Smart Vehicles, Robotics & Drones, and AI systems.
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
              The University of Petroleum and Energy Studies (UPES) is a private
              NAAC A accredited university in the state of Uttrakhand, Dehradun.
              Established in 2003 through the UPES Act, 2003 of the State
              Legislature of Uttarakhand, UPES is a UGC-recognized university.
              UPES ranked 46th for School of Business, 25th for School of Law,
              and 91st for the School of Engineering by National Institutional
              Ranking Framework in Year 2021.Two programs of UPES B Tech
              Chemical Engineering & B Tech Automotive Design Engineering of
              School of Engineering are accredited by National Board of
              Accreditation. The University has received 5-Stars on
              Employability (placements), Academic Development Program Strength
              and campus facilities and 4-Stars for overall teaching by QS
              Rating. UPES offers graduate and postgraduate programs through its
              eight schools: School of Engineering, School of Computer Science,
              School of Design, School of Law, School of Business, School of
              Health Sciences, School of Modern Media and School of Liberal
              Studies. UPES has collaboration with top-ranking universities
              across the globe to provide the best education experience to our
              students. With more than 50 partner universities across the globe
              and 7 active associations with international bodies. UPES Council
              for Innovation and Entrepreneurship launched Runway Incubator, an
              initiative to help budding entrepreneurs get through the stages of
              setting a start-up through the confluence of right mentorship,
              finance, and legal support. UPES is the first Indian university to
              achieve this coveted certification of “Great Place to work” in
              2019 and has continued to be so till present.{" "}
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