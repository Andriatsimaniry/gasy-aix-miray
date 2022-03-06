import * as React from "react";
import NavBar from "./nav-bar";
import { useStaticQuery, graphql } from "gatsby";
import { Container, heading, siteTitle } from "./layout.module.css";
import { FooterContainer } from "../containers/footer";


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
    <div className={ Container }>
      <NavBar />
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}>{data.site.siteMetadata.title}
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
