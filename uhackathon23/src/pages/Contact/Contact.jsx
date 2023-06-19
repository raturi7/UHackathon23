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
            <Heading text="Contact Us" position="left" />
            <div className="d-flex flex-row flex-wrap align-items-center justify-content-between contact-box" > {/* Added align-items-start class */}
            <div className="num d-flex flex-column" style={{textAlign:"left"}}>
              <div className="d-flex flex-row num-row my-2 flex-wrap">
                <p className="font-light mb-0  mx-5">+917004839585</p>
                For Accommodation & Travel Queries
              
              </div>
              <div className="d-flex flex-row num-row  my-2 flex-wrap">
                <p className="font-light mx-5 mb-0">+919101892272</p>
             For Technical Queries
              </div>
              <div className="d-flex flex-row num-row  my-2 flex-wrap">
                <p className="font-light mx-5 mb-0">+918130912282</p>
               For Other Queries
              </div>
              <div className="d-flex flex-column mt-3 mx-5">
                <p className="font-light">uhackathon@ddn.upes.ac.in</p>
                <p className="font-light">uhackathon@ddn.upes.ac.in</p>
              </div>
            </div>
         
              <img className="num-img" src={img} alt="img" style={{borderRadius:"7px"}}/>
        

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
