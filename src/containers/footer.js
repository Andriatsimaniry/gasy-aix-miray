import React from "react";
import Footer from "../components/footer";
import { FaFacebook, FaHeart, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { Copyright } from "./footer.module.css";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
        
          <Footer.Column>
            <Footer.Title>A Propos </Footer.Title>          
            <Footer.Link href="/blog/calendrier/">Histoire</Footer.Link>
            <Footer.Link href="/blog/liste-des-membres/">Adhérent</Footer.Link>
            <Footer.Link href="/about">Projet</Footer.Link>
            <Footer.Link href="https://www.diplomatie.gov.mg/index.php/liens-utiles">
              Liens Utiles
            </Footer.Link>
            </Footer.Column>
            
          
          <Footer.Column>
            <Footer.Title>Presses</Footer.Title>            
            <Footer.Link href="https://www.midi-madagasikara.mg/">
              Midi madagascar
            </Footer.Link>
            <Footer.Link href="https://www.madagascar-tribune.com/">
              madagascar Tribune
            </Footer.Link>
            <Footer.Link href="https://www.orange.mg/">
              Orange madagascar
            </Footer.Link>
            <Footer.Link href="https://www.airmadagascar.com/">
              Air madagascar
            </Footer.Link>
            {/* <span className={Vertical}></span> */}
            </Footer.Column>
            
          
          <Footer.Column>
        
            <Footer.Title>Nous contacter</Footer.Title>            
            <Footer.Link href="#">E-mail</Footer.Link>
            <Footer.Link href="#">Adresse</Footer.Link>
            <Footer.Link href="#">Telephone</Footer.Link>
            <Footer.Link href="#">Support</Footer.Link>
            {/* <span className={Vertical}></span> */}
            
          </Footer.Column>
          
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="https://www.Facebook.com/">
              <FaFacebook size="20" color="rgba(255, 255, 255, 0.5)" /> Facebook
            </Footer.Link>
            <Footer.Link href="https://www.instagram.com/">
              <FaInstagram size="20" color="rgba(255, 255, 255, 0.5)" /> Instagram
            </Footer.Link>
            <Footer.Link href="https://www.youtube.com/watch?v=Igihdg_uW94">
              <FaYoutube size="20" color="rgba(255, 255, 255, 0.5)" /> Youtube
            </Footer.Link>
            <Footer.Link href="https://twitter.com/Randria73775597">
              <FaTwitter size="20" color="rgba(255, 255, 255, 0.5)" /> Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
      {/* <p className={Copyright}> */}
      <Footer.Copyright>
      Copyright © {new Date().getFullYear()}, <FaHeart color="rgba(255, 255, 255, 0.5)" />.
        NiryOmega, All rights reserved. 
      </Footer.Copyright>
        
      
    </Footer>
  );
}
