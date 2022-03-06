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
      <div class="container">
        <div class="d-flex justify-content-start bg-warning m-2">
          <div class="p-2 border border-dark bg-info">Elément flex 1</div>
          <div class="p-2 border border-dark bg-info">Elément flex 2</div>
          <div class="p-2 border border-dark bg-info">Elément flex 3</div>
        </div>
        <div class="d-flex justify-content-between bg-warning m-2">
               <div class="p-2 border border-dark bg-info">Elément flex 1</div>
               <div class="p-2 border border-dark bg-info">Elément flex 2</div>
               <div class="p-2 border border-dark bg-info">Elément flex 3</div>
             </div>
             {/* justify-content-center pour les petits écrans puis justify-content-between dès qu'on passe le breakpoint lg */}
             <div class="d-flex justify-content-center justify-content-lg-between bg-warning m-2">
               <div class="p-2 border border-dark bg-info">Elément flex 1</div>
               <div class="p-2 border border-dark bg-info">Elément flex 2</div>
               <div class="p-2 border border-dark bg-info">Elément flex 3</div>
             </div>
             <div class="d-flex flex-column align-items-stretch bg-warning my-2">
               <div class="p-2 bg-info border">Flex élément 1</div>
               <div class="p-2 bg-info border">Flex élément 2</div>
               <div class="p-2 bg-info border">Flex élément 3</div>
             </div>
             <div class="d-flex my-2 bg-warning">
                <div class="p-2 flex-fill bg-info border">Elément flex 1</div>
                <div class="p-2 flex-fill bg-info border">Elément flex 2</div>
                <div class="p-2 flex-fill bg-info border">Elément flex 3</div>
             </div>
              
      </div>
    </Layout>
  );
};

export default AboutPage;
