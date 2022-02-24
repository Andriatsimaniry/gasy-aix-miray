// import React from "react";
import { Link } from "gatsby";
import React from "react";

import { FaFacebook, FaHeart, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { footer, social, copyright, menuFooter } from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={social}>
        <a href="https://www.instagram.com/">
          <FaInstagram size="30" color="#fff" />
        </a>
        <a href="https://www.youtube.com/">
          <FaYoutube size="30" color="#fff" />
        </a>
        <a href="https://www.Facebook.com/">
          <FaFacebook size="30" color="#fff" />
        </a>
        <a href="https://www.twitter.com/">
          <FaTwitter size="30" color="#fff" />
        </a>
      </div>
      <div className={menuFooter}>
        <ul>
          <li>
            <Link to="/">Acceuil</Link>
          </li>
          <li>
            <Link to="/blog">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className={copyright}>
          © {new Date().getFullYear()} <FaHeart color="#B51942" /> NiryOmega{" "}
        </p>
      </div>
    </footer>
  );
};
export default Footer;

