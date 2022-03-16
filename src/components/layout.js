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

//   Exemple

/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

//  import React from "react"
//  import PropTypes from "prop-types"
//  import { StaticQuery, graphql } from "gatsby"
 
//  import Header from "./header"
//  import "./layout.module.css"
 
//  const Layout = ({ children }) => (
//    <StaticQuery
//      query={graphql`
//        query SiteTitleQuery {
//          site {
//            siteMetadata {
//              title
//            }
//          }
//        }
//      `}
//      render={data => (
//        <>
//          <Header siteTitle={data.site.siteMetadata.title} />
//          <div
//            style={{
//              margin: `0 auto`,
//              maxWidth: 960,
//              padding: `0px 1.0875rem 1.45rem`,
//              paddingTop: 0,
//            }}
//          >
//            <main>{children}</main>
//            <footer>
//              © {new Date().getFullYear()}, Built with
//              {` `}
//              <a href="https://www.gatsbyjs.org">Gatsby</a>
//            </footer>
//          </div>
//        </>
//      )}
//    />
//  )
 
//  Layout.propTypes = {
//    children: PropTypes.node.isRequired,
//  }
 
//  export default Layout
 
