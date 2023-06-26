import React from "react";
import "./Contact.css";
import Heading from "../../Components/Heading/Heading";
import img from "./Contact.jpg";
import phone from "../../Components/Images/phone-call.png";
import email from "../../Components/Images/email.png";
import { useLocation } from "react-router-dom";
import ulogo from "../../Components/Images/UPESLOGO.png";
const Contact = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    document.body.scrollTo(0, 0);
  }, [pathname]);

  const handleEmailClick = () => {
    window.location.href = "mailto:uhackathon@ddn.upes.ac.in";
  };

  return (
    <div className="  contact flex flex-col two-margin-top small-mobile3">
      <div className="container d-flex justify-content-center align-items-center contact-container-box gap-5 text-white">
        <div className="container form contact-heading">
          <Heading text="Get In Touch" position="left" />
          <form className="contact-form">
            <div className="form-group py-3 border-b">
              <input
                type="text"
                name="name"
                className="form-control appearance-none bg-transparent border-none py-3 text-white my-2 px-2 leading-tight focus:outline-none no-border"
                placeholder="Your Name*"
              />
              <input
                type="email"
                name="email"
                className="form-control appearance-none bg-transparent border-none py-3 text-white my-2 px-2 leading-tight focus:outline-none no-border"
                placeholder="Email Address*"
              />
              <input
                type="text"
                name="subject"
                className="form-control appearance-none bg-transparent border-none py-3 text-white my-2 px-2 leading-tight focus:outline-none no-border"
                placeholder="Your Subject*"
              />
              <input
                name="message"
                className="form-control appearance-none bg-transparent border-none py-3 text-white my-2 px-2 leading-tight focus:outline-none no-border"
                rows="5"
                placeholder="Write Message*"
              ></input>
              <button className="join-btn mt-5 py-2">Send Message</button>
            </div>
          </form>
        </div>
        <img
          className="num-img upes-img"
          src={img}
          alt="img"
          style={{ borderRadius: "7px" }}
        />
      </div>
      <div className="container text-left flex flex-col two-margin-top">
        <div className="container text-white flex flex-row contact-heading">
          <Heading text="Contact Us" position="left" />
          <div className="d-flex flex-row flex-wrap align-items-center justify-content-between contact-box">
            {" "}
            {/* Added align-items-start class */}
            <div
              className="num d-flex flex-column raghav-ansh-table"
              style={{ textAlign: "left" }}
            >
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td
                      className="hider"
                      style={{ width: "20px", paddingRight: "20px" }}
                    >
                      {" "}
                      <img
                        src={phone}
                        alt=""
                        className="ico"
                        style={{ maxWidth: "32px" }}
                      />
                    </td>
                    <td>+91 74139 33555</td>
                    <td>Devashish Sharma</td>
                    <td>Convener</td>
                  </tr>
                  <tr>
                    <td className="hider"></td>
                    <td>+91 93983 81263</td>
                    <td>Akshat Kembhavi</td>
                    <td>Travel & Transport</td>
                  </tr>
                  <tr>
                    <td className="hider"></td>
                    <td>+91 77029 46560</td>
                    <td>Vinay K</td>
                    <td>Lodging & Stay</td>
                  </tr>
                  <tr>
                    <td className="hider"></td>
                    <td>+91 81716 70271</td>
                    <td>Parth Nautiyal</td>
                    <td>For Registration Queries</td>
                  </tr>
                  <tr>
                    <td className="hider"></td>
                    <td>+91 93223 99818</td>
                    <td>Utkarsh Singh</td>
                    <td>For Registration Queries</td>
                  </tr>
                </tbody>
              </table>
              {/* <div className="d-flex flex-row align-items-center gap-3 ">
                <div className="d-flex flex-row num-row my-2 flex-wrap">
                  <p
                    className="font-light mb-0"
                    style={{ marginRight: "53px", marginLeft: "0.5rem" }}
                  >
                    +91 74139 33555
                  </p>
                  <b style={{ marginRight: "2rem" }}>Devashish Sharma</b>
                  Convener
                </div>
              </div>
              <div className="d-flex flex-row num-row my-2 flex-wrap pl-2">
                <p className="font-light mx-5 mb-0">+91 93983 81263</p>
                <b style={{ marginRight: "2rem" }}>Akshat Kembhavi</b> Travel &
                Transport
              </div>
              <div className="d-flex flex-row num-row  my-2 flex-wrap">
                <p className="font-light mx-5 mb-0">+91 77029 46560</p>
                <b style={{ marginRight: "2rem" }}>Vinay K</b> Lodging & Stay
              </div>
              */}

              <div className="d-flex flex-column justify-content-center mt-5 raghav-ansh">
                <div className="d-flex flex-row gap-3 ">
                  <img src={email} alt="" className="ico" />
                  {/* <p className="font-light mx-2">uhackathon@ddn.upes.ac.in</p> */}
                  <a
                    href="mailto:uhackathon@ddn.upes.ac.in"
                    className="font-light mx-2 text-white"
                  >
                    uhackathon@ddn.upes.ac.in
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className=" p-0 contact_address d-flex flex-column align-items-end w-50">
              <div className="logo d-flex justify-content-end flex-row pb-0 my-4">
                <img src={ulogo} alt="" className="ulogo" />
              </div>
              <div className="text-right">
                <h3
                  className="socs text-right font-bold capitalize"
                  style={{ textAlign: "right" }}
                >
                  SCHOOL OF COMPUTER SCIENCE
                </h3>
                <p className="upes-text">
                  University of Petroleum and Energy Studies, Energy Acres, PO
                  <br />
                  Bidholi via Prem Nagar, dehradun, 248007. Uttarakhand, India.
                </p>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25630.305720737346!2d77.9501413!3d30.400029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d4890d7c1735%3A0x22d3ae324c238e3c!2sUPES!5e1!3m2!1sen!2sin!4v1687631014232!5m2!1sen!2sin"
              width="1142px"
              height="400px"
              style={{ borderRadius: "10px" }}
              className="num-img"
              title="map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
