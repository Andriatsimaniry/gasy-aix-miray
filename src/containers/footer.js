import React from "react";
import Footer from "../components/footer";
import { FaFacebook, FaHeart, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Copyright } from "./footer.module.css";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>A Propos </Footer.Title>
            <Footer.Link href="/about">Histoire</Footer.Link>
            <Footer.Link href="#">Membre</Footer.Link>
            <Footer.Link href="#">Projet</Footer.Link>
            <Footer.Link href="https://www.diplomatie.gov.mg/index.php/liens-utiles">Liens Utiles</Footer.Link>

          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Presses</Footer.Title>
            <Footer.Link href="https://www.midi-madagasikara.mg/">Midi madagascar</Footer.Link>
            <Footer.Link href="https://www.madagascar-tribune.com/">madagascar Tribune</Footer.Link>
            <Footer.Link href="https://www.orange.mg/">Orange madagascar</Footer.Link>
            <Footer.Link href="https://www.airmadagascar.com/">Air madagascar</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Nous contacter</Footer.Title>
            <Footer.Link href="#">E-mail</Footer.Link>
            <Footer.Link href="#">Adresse</Footer.Link>
            <Footer.Link href="#">Telephone</Footer.Link>
            <Footer.Link href="#">Support</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="https://www.Facebook.com/">
              <FaFacebook size="30" color="#ffF" /> Facebook
            </Footer.Link>
            <Footer.Link href="https://www.instagram.com/">
              <FaInstagram size="30" color="FFF" /> Instagram
            </Footer.Link>
            <Footer.Link href="https://www.youtube.com/">
              <FaYoutube size="30" color="#FFF" /> Youtube
            </Footer.Link>
            <Footer.Link href="https://www.twitter.com/">
              <FaTwitter size="30" color="#FFF" /> Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
      <p className={Copyright}>
     Copyright © {new Date().getFullYear()} <FaHeart color="#FFF" /> NiryOmega
      </p>
    </Footer>
  );
}
