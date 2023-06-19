import React, { useState, useEffect } from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";
import Sponsor from "../Sponsor/Sponsor";
import OurThemes from "../Our-Themes/OurThemes";
import WhatIsUhackathon from "../What-is-Uhackarhon/WhatIsUhackathon";
import History from "../Hackathon-History/History";
import Main from "./Main Poster.png";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const textVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  const calculateTimeLeft = () => {
    const difference = +new Date("September 2, 2023") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div
        className="container d-flex justify-content-center hero-container"
        style={{ color: "#E4E4E4", textAlign: "left",height:"85vh" }}
      >
        <div className="container">
          <div className="d-flex flex-column content-text align-items-start justify-content-center">
            <h4 className="text-uppercase h4" style={{ fontWeight: "600" }}>
              Upes School of Computer Science
            </h4>
            <h5 style={{ letterSpacing: "0.1rem" }} className="h5">
              PRESENTS
            </h5>
            <h1 className="title my-3">
              <motion.span
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                UHackathon 4.0 <br />
                Meta Edition
              </motion.span>
            </h1>

            <h5
              style={{ letterSpacing: "0.1rem", lineHeight: "30px" }}
              className="h5"
            >
              <AnimatedText
                text="The 4th iteration of UPES Hackathon,
              UHackathon 4.0 META welcomes you!"
                className="h5 flex"
              />
            </h5>
            <button className="btn join-btn mt-5">Get Started</button>
          </div>
        </div>
        <div className="container vr-timer d-flex align-items-center justify-content-center flex-column">
          <h1 className="timer">
            {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:
            {timeLeft.seconds}
          </h1>
          <ul className="list-group list-group-horizontal mb-4">
            <li className="list-group-item">DAYS</li>
            <li className="list-group-item">HOURS</li>
            <li className="list-group-item">MINUTES</li>
            <li className="list-group-item">SECONDS</li>
          </ul>
        </div>
      </div>
      <div className="">
  <motion.img
    className=" px-4"
    src={Main}
    alt="Main Poster"
    style={{
      width: "100%",
      maxWidth: "800px",
      height: "auto",
      borderRadius: "8px",
      filter: "brightness(90%)",
    }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  />
</div>
      <Sponsor />
      <WhatIsUhackathon />
      <OurThemes />

      <History />
    </div>
  );
};

export default Hero;
