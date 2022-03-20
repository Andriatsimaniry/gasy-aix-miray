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
            <Footer.Link href="https://www.rns-cen.com/category/rns/" rel="noopener noreferrer" target="_blank">RNS</Footer.Link>
            <Footer.Link href="/app/adherent">Adhérent</Footer.Link>
            <Footer.Link href="https://www.expat.com/fr/petites-annonces/afrique/madagascar/3/" rel="noopener noreferrer" target="_blank">
              Petites annonces Madagascar</Footer.Link>
            <Footer.Link href="https://www.diplomatie.gov.mg/index.php/liens-utiles" rel="noopener noreferrer" target="_blank">
              Liens Utiles
            </Footer.Link>
            </Footer.Column>
            
          
          <Footer.Column>
            <Footer.Title>Presses</Footer.Title>            
            <Footer.Link href="https://www.midi-madagasikara.mg/" rel="noopener noreferrer" target="_blank">
              Midi madagascar
            </Footer.Link>
            <Footer.Link href="https://www.madagascar-tribune.com/" rel="noopener noreferrer" target="_blank">
              madagascar Tribune
            </Footer.Link>
            <Footer.Link href="https://www.orange.mg/" rel="noopener noreferrer" target="_blank">
              Orange madagascar
            </Footer.Link>
            <Footer.Link href="https://www.airmadagascar.com/" rel="noopener noreferrer" target="_blank">
              Air madagascar
            </Footer.Link>
            {/* <span className={Vertical}></span> */}
            </Footer.Column>
            
          
          <Footer.Column>
        
            <Footer.Title>Nous contacter</Footer.Title>            
            <Footer.Link href="/blog/liste-des-membres">E-mail</Footer.Link>
            <Footer.Link href="/blog/liste-des-membres">Adresse</Footer.Link>
            <Footer.Link href="/blog/liste-des-membres">Telephone</Footer.Link>
            <Footer.Link href="/blog/liste-des-membres">Support</Footer.Link>
            {/* <span className={Vertical}></span> */}
            
          </Footer.Column>
          
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="https://www.Facebook.com/" rel="noopener noreferrer" target="_blank">
              <FaFacebook size="20" color="rgba(255, 255, 255, 0.5)" /> Facebook
            </Footer.Link>
            <Footer.Link href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">
              <FaInstagram size="20" color="rgba(255, 255, 255, 0.5)" /> Instagram
            </Footer.Link>
            <Footer.Link href="https://www.youtube.com/watch?v=Igihdg_uW9" rel="noopener noreferrer" target="_blank">
              <FaYoutube size="20" color="rgba(255, 255, 255, 0.5)" /> Youtube
            </Footer.Link>
            <Footer.Link href="https://twitter.com/Randria73775597" rel="noopener noreferrer" target="_blank">
              <FaTwitter size="20" color="rgba(255, 255, 255, 0.5)" /> Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
      {/* <p className={Copyright}> */}
      <Footer.Copyright>
      Copyright © {new Date().getFullYear()}, <FaHeart color="rgba(255, 255, 255, 0.5)" />.
        NiryOmega, Tous droits réservés. 
      </Footer.Copyright>
        
      
    </Footer>
  );
}
