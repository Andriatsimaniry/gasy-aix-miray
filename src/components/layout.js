import * as React from "react";
import NavBar from "./nav-bar"
import { useStaticQuery, graphql } from "gatsby";

import {
  container,
  heading,
  // navLinks,
  // navLinkItem,
  // navLinkText,
  siteTitle,
} from "./layout.module.css";
import Footer from "./footer";


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
     
    <div className={container}>
      <NavBar />
      
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
     
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
<Footer />
      
    
      
    </div>
  );
};

export default Layout;
