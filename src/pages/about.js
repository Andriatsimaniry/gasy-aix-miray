import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="Les Projets du  G.A.M">
      <p>G.A.M a été crée en janvier 2022</p>
      <StaticImage
        alt="La Rotonde"
        src="../images/gasy-miray-baobab.png"
        placeholder="blurred"
        layout="fullWidth"
      />
        <p>
      Les allées des baobab !
      </p>
    </Layout>
  
  );
};

export default AboutPage;
