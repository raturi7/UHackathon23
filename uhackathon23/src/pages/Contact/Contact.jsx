import React from "react";
import "./Contact.css";
import Heading from "../../Components/Heading/Heading";
import img from "./Contact.jpg";
import phone from '../../Components/Images/phone-call.png'
import email from '../../Components/Images/email.png'
import { useLocation } from 'react-router-dom';
const Contact = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(1, 1);
  }, [pathname]);
  return (
    <div className="contact flex flex-col two-margin-top">
      <div className="container d-flex justify-content-center align-items-center contact-container-box gap-5 text-white">
        <div className="container form">
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
        <div className="container text-white flex flex-row">
          <Heading text="Contact Us" position="left" />
          <div className="d-flex flex-row flex-wrap align-items-center justify-content-between contact-box">
            {" "}
            {/* Added align-items-start class */}
            <div
              className="num d-flex flex-column"
              style={{ textAlign: "left" }}
            >
              <div className="d-flex flex-row align-items-center gap-3 ">
                <img src={phone} alt="" className="ico" />
                <div className="d-flex flex-row num-row my-2 flex-wrap">
                  <p
                    className="font-light mb-0"
                    style={{ marginRight: "3rem", marginLeft: "0.5rem" }}
                  >
                    +917004839585
                  </p>
                  Convener
                </div>
              </div>
              <div className="d-flex flex-row num-row my-2 flex-wrap pl-2">
                <p className="font-light mx-5 mb-0">+919101892272</p>
                Hospitality Head (Travel & Transport)
              </div>
              <div className="d-flex flex-row num-row  my-2 flex-wrap">
                <p className="font-light mx-5 mb-0">+918130912282</p>
                Hospitality Head (Lodging & Stay)
              </div>

              <div className="d-flex flex-column justify-content-center mt-3 ">
                <div className="d-flex flex-row gap-3 ">
                  <img src={email} alt="" className="ico" />
                  <p className="font-light mx-2">uhackathon@ddn.upes.ac.in</p>
                </div>
              </div>
              
            </div>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.711120109902!2d77.9646479151239!3d30.415936981748608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d4890d7c1735%3A0x22d3ae324c238e3c!2sUPES!5e0!3m2!1sen!2sin!4v1687541261104!5m2!1sen!2sin"
              width="600"
              height="400"
              className="num-img"
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
