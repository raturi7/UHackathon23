import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact flex flex-col">
      <div className="container pt-5 text-white flex flex-row">
        <div className="form pt-5">
          <h1 className="font-bold head">Get In Touch</h1>
          <form className="contact-form max-w-sm">
            <div className="form-group w-3 py-3 border-b">
              <input
                type="text"
                name="name"
                className="form-control appearance-none bg-transparent border-none py-3 w-full text-white mr-3 px-2 leading-tight focus:outline-none no-border"
                placeholder="Your Name*"
              />
              <input
                type="email"
                name="email"
                className="form-control appearance-none bg-transparent border-none py-3 w-full text-white mr-3 px-2 leading-tight focus:outline-none no-border"
                placeholder="Email Address*"
              />
              <input
                type="text"
                name="subject"
                className="form-control appearance-none bg-transparent border-none py-3 w-full text-white mr-3 px-2 leading-tight focus:outline-none no-border"
                placeholder="Your Subject*"
              />
              <input
                name="message"
                className="form-control appearance-none bg-transparent border-none py-3 w-full text-white mr-3 px-2 leading-tight focus:outline-none no-border"
                rows="5"
                placeholder="Write Message*"
              ></input>
              <button className="join-btn  py-2">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <div className="get text-left flex flex-col p-5">
        <div className="container text-white flex flex-row">
          <div className="flex flex-col pt-3">
            <h1 className="font-bold head p-5">Contact Us</h1>
            <div className="num flex flex-col">
              <div className="flex flex-row">
                <p className="font-light">+917004839585 </p>
                <p className="font-light">
                  For Accommodation & Travel Queries
                </p>
              </div>
              <div className="flex flex-row">
                <p className="font-light">+919101892272 </p>
                <p className="font-light">For Technical Queries </p>
              </div>
              <div className="flex flex-col">
                <p className="font-light">+918130912282 </p>
                <p className="font-light">For Other Queries </p>
              </div>

              <div>
                <p className="font-light">uhackathon@ddn.upes.ac.in </p>
              </div>
              <div>
                <p className="font-light">uhackathon@ddn.upes.ac.in </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
