import React from "react";
import "./Contact.css";
import Heading from "../../Components/Heading/Heading";
import img from "./Contact.jpg";

const Contact = () => {
  return (
    <div className="contact flex flex-col two-margin-top">
      <div className="container d-flex justify-content-start text-white">
        <div className="container form">
          <Heading text="Get In Touch" position="left" />
          <form className="contact-form">
            <div className="form-group py-3 border-b">
              <input
                type="text"
                name="name"
                className="form-control appearance-none bg-transparent border-none py-3 w-50 text-white my-2 px-2 leading-tight focus:outline-none no-border"
                placeholder="Your Name*"
              />
              <input
                type="email"
                name="email"
                className="form-control appearance-none bg-transparent border-none py-3 w-50 text-white my-2 px-2 leading-tight focus:outline-none no-border"
                placeholder="Email Address*"
              />
              <input
                type="text"
                name="subject"
                className="form-control appearance-none bg-transparent border-none py-3 w-50 text-white my-2 px-2 leading-tight focus:outline-none no-border"
                placeholder="Your Subject*"
              />
              <input
                name="message"
                className="form-control appearance-none bg-transparent border-none py-3 w-50 text-white my-2 px-2 leading-tight focus:outline-none no-border"
                rows="5"
                placeholder="Write Message*"
              ></input>
              <button className="join-btn mt-5 py-2">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <div className="container text-left flex flex-col two-margin-top">
        <div className="container text-white flex flex-row">
          <div className="flex flex-row pt-3 align-items-start"> {/* Added align-items-start class */}
            <Heading text="Contact Us" position="left" />
            <div className="num flex flex-col mx-5">
              <div className="d-flex flex-column">
                <p className="font-light">+917004839585</p>
                <p className="font-light">
                  For Accommodation & Travel Queries
                </p>
              </div>
              <div className="d-flex flex-column">
                <p className="font-light">+919101892272</p>
                <p className="font-light">For Technical Queries</p>
              </div>
              <div className="d-flex flex-column">
                <p className="font-light">+918130912282</p>
                <p className="font-light">For Other Queries</p>
              </div>
              <div className="d-flex flex-column mt-3">
                <p className="font-light">uhackathon@ddn.upes.ac.in</p>
                <p className="font-light">uhackathon@ddn.upes.ac.in</p>
              </div>
            </div>
            <div>
              <img className="img" src={img} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
