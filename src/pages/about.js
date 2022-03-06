import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="Les membres du  G.A.M">
      <p>Président : RAKOTOZAFY Eric</p>
      <StaticImage
        alt="La Rotonde"
        src="../images/gasy-miray-eric.png"
        placeholder="blurred"
        layout="fullWidth"
      />
         <p>Vice Président : RANAIVOSOA Jaona</p>
      <StaticImage
        alt="La Rotonde"
        src="../images/gasy-miray-jhon.png"
        placeholder="blurred"
        layout="fullWidth"
      />
    
      <p>Conseiller Spécial : RALAIMIHAOTRA Patrice</p>
      <StaticImage
        alt="La Rotonde"
        src="../images/gasy-miray-patou.png"
        placeholder="blurred"
        layout="fullWidth"
      />
         <p>Conseiller Spécial: RAKOTOZANANY Alain </p>
      <StaticImage
        alt="La Rotonde"
        src="../images/gasy-miray-dolphe.png"
        placeholder="blurred"
        layout="fullWidth"
      />
    </Layout>
  
  );
};

export default AboutPage;
