// import React from "react";
import { Link } from "gatsby";
// import { footer, clearfix, footerCopy,
//     menuFooter,
//     menuFooterWrapper,
//     copyright,
//     clear,
//     socialIcons,

// } from "./footer.module.scss"

// const Footer = (props) => (
//     <div className={[footer, clearfix].join(" ")}>
// 		<div className={ footerCopy }>
// 			<div className={ menuFooterWrapper }>
// 				<div>
//                     <div className={ menuFooter }>
//                         <div><Link to="/">Acceuil</Link></div>
//                         <div><Link to="/blog">Contact</Link></div>
//                         <div><Link to="/about">About</Link></div>
//                     </div>
//                 </div>
//             </div>
// 			<div className={ clear }></div>
// 			<p className={ copyright }>© {(new Date().getFullYear())} <Link to="/">{props.title}</Link> | {props.tagline}</p>
// 		</div>
// 		<div className={ socialIcons }></div>
// 	</div>
// )
import React from "react";
// import { Form } from "react-bootstrap";

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
// 2eme exemple footer

// import React from 'react'

// import Icon from '../components/icons'

// import styled from 'styled-components';

// export const Container = styled.div`
//   padding: 80px 60px;
//   background: radial-gradient(circle, rgba(92,39,251,1) 0%, rgba(112,71,247,1) 100%);

//   @media (max-width: 1000px) {
//     padding: 70px 30px;
//   }
// `;

// export const Wrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     max-width: 1000px;
//     margin: 0 auto;
//     /* background: red; */
// `

// export const Column = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: left;
//   margin-left: 60px;
// `;

// export const Row = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
//   grid-gap: 20px;

//   @media (max-width: 1000px) {
//     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   }
// `;

// export const Link = styled.a`
//   color: #fff;
//   margin-bottom: 20px;
//   font-size: 18px;
//   text-decoration: none;

//   &:hover {
//       color: #ff9c00;
//       transition: 200ms ease-in;
//   }
// `;

// export const Title = styled.p`
//   font-size: 24px;
//   color: #fff;
//   margin-bottom: 40px;
//   font-weight: bold;
// `;
