import React, { useState, useEffect } from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";
import Sponsor from "../Sponsor/Sponsor";
import OurThemes from "../Our-Themes/OurThemes";
import WhatIsUhackathon from "../What-is-Uhackarhon/WhatIsUhackathon";
import History from "../Hackathon-History/History";
import Main from "./Main Poster.png";

import { Link } from "react-router-dom";
import Timeline from "../Timeline/Timeline";
import Partners from "../hackathon partners/hack_partners";
import Sponsor1 from "../Sponsor/Sponsor1";
import Problem from "../../pages/problem statement/Problem";
import OurCollaborators from "../Our-Colaborators/OurCollaborators";
const Hero = () => {


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
    const difference = +new Date("September 1, 2023") - +new Date();
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
    <div className="small-mobile-hero">
      <div
        className=" container d-flex justify-content-center hero-container"
        style={{ color: "#E4E4E4", textAlign: "left", height: "85vh" }}
      >
        <div className="container">
          <div className="d-flex flex-column content-text align-items-start justify-content-center">
            <h4
              className="text-uppercase h4"
              style={{ fontWeight: "600", fontSize: "200%" }}
            >
              School of Computer Science
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

            <h5 style={{ letterSpacing: "0.1rem" }} className="h5">
              <AnimatedText
                text="The 4th iteration of UPES Hackathon,"
                className="h5 pt-2 pb-0 leading-none flex"
              />
              <br />
              <AnimatedText
                text="UHackathon 4.0 META welcomes you!"
                className="h5 an-text flex leading-none"
              />
            </h5>
            <div>
              <Link
                to="https://uhackathon.devfolio.co/"
                style={{ textDecoration: "none" }}
                className="btn footer-link mt-5 mx-4"
              >
                Get Started
              </Link>
              <Link
                to="https://forms.gle/1xbfir19gK4acfqy7"
                style={{ textDecoration: "none" }}
                className="btn footer-link mt-5"
              >
                Abstract Submission
              </Link>
            </div>
            {/* <button className="btn footer-link mt-5">Get Started</button> */}

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
      <Timeline />
      <div className="two-margin-top">
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

      <WhatIsUhackathon />
      <OurThemes />

      <History />
      <Sponsor />
      <Sponsor1 />

      <Partners />
      <OurCollaborators />
    </div>
  );
};

export default Hero;
