import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="container footer d-flex flex-column align-items-center justify-content-center">
        <div className="footer_text1  mt-5 mb-4">
          <p className="text-white text-uppercase text-xl mt-4 mb-0">
            Stay Up To Date with our News and Notifications
          </p>
        </div>
        <div className="footer_social flex flex-row mb-4">
          <motion.a
            href="https://www.instagram.com/upes_hackathon_/"
            target="_blank"
            rel="noreferrer"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/company/upes-hackathon/"
            target="_blank"
            rel="noreferrer"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://twitter.com/upes_hackathon_"
            target="_blank"
            rel="noreferrer"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/upeshackathon/?ref=page_internal"
            target="_blank"
            rel="noreferrer"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebook />
          </motion.a>
        </div>


        <div className="footer_copyright mb-5">

        <div className="footer_copyright">

          <p className="text-white text-uppercase">
            &copy; UHackathon 4.0 | All rights reserved
          </p>
        </div>



        <a href="https://docs.google.com/document/d/1QlqOQz5DDt7-TC6hYCD9my1kx4Ijci4E/edit?usp=sharing&ouid=102816347459032281062&rtpof=true&sd=true"  className="mb-5" style={{color:"#e4e4e4"}}>Terms & Conditions</a>

      </div>
    </footer>
  );
};

export default Footer;
