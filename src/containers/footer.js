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
            <Footer.Link href="#">Histoire</Footer.Link>
            <Footer.Link href="#">Membre</Footer.Link>
            <Footer.Link href="#">Projet</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="/">Acceuil</Footer.Link>
            <Footer.Link href="/blog/publication">Publication</Footer.Link>
            <Footer.Link href="#">Galerie</Footer.Link>
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
        © {new Date().getFullYear()} <FaHeart color="#FFF" /> NiryOmega
      </p>
    </Footer>
  );
}
