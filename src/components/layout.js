import * as React from "react";
import NavBar from "./nav-bar";
import { useStaticQuery, graphql } from "gatsby";
import {  heading } from "./layout.module.css";
import { FooterContainer } from "../containers/footer";
import "./layout.module.css";


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
    <div>
      <NavBar />
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      {/* <header className={siteTitle}>{data.site.siteMetadata.title}
      </header> */}
      <main>
        <h1 className={ heading }>{pageTitle}</h1>
        {children}
      </main>
      <footer>
      <FooterContainer />
      </footer>
      
    </div>
  );
};

export default Layout;

 
