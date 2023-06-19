import React from "react";
import "./Footer.css";
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
        <div className="footer_text1  mt-5 mb-5">
          <p className="text-white text-uppercase text-xl mt-4 mb-0">
            Stay Up To Date with our News and Notifications
          </p>
        </div>
        <div className="footer_social flex flex-row mb-5">
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
        <div className="links flex flex-wrap justify-center"> {/* Added flex-wrap and justify-center class */}
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
          <a
            href="https://devbhoomicyberhackathon.in/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Devbhoomi Cyber Hackathon
          </a>
          <a
            href="https://www.upescsi.in/hackathon7.0/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            UPES-CSI Hackathon 7.0
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
        <div className="footer_copyright mb-5">
          <p className="text-white text-uppercase">
            &copy; UHackathon 4.0 | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
