import * as React from "react";
import NavBar from "./nav-bar";
import { useStaticQuery, graphql } from "gatsby";
import { Container, heading, siteTitle } from "./layout.module.css";
import { FooterContainer } from "../containers/footer";
import { Carousel } from "react-bootstrap";

import slide01 from "./../images/1.png";
import slide02 from "./../images/9.png";
import slide03 from "./../images/27.png";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={Container}>
      <NavBar />
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}>{data.site.siteMetadata.title}
      <Carousel>
            <Carousel.Item>
              <img src={slide01} alt="Gam" />
            </Carousel.Item>
            <Carousel.Item>
            <img src={slide02} alt="la rotonde" />

            </Carousel.Item>
            <Carousel.Item>
            <img src={slide03} alt="Sainte victoire" />

            </Carousel.Item>
          </Carousel>
      </header>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <FooterContainer />
    </div>
  );
};

export default Layout;
