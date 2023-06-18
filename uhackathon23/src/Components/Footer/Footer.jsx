import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <div className="footer flex flex-col align-center text-center  px-6 pt-6">
        <div className="footer_text1  mt-5 px-6 pt-6">
          <p className="text-white  text-xl mt-4 text-center">
            Stay Up To Date with our News and Notifications
          </p>
        </div>
        <div className="footer_social flex flex-row text-center">
          <motion.a
            href="https://www.instagram.com/uhackathon/"
            target="_blank"
            rel="noreferrer"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebook />
          </motion.a>
        </div>
        <div className="footer_copyright">
          <p className="text-white">
          Copyright © UHackathon 4.0 | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
