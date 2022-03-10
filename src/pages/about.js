import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="Les membres du  G.A.M">
      <StaticImage
        alt="La Rotonde"
        src="../images/gasy-miray-eric.png"
        placeholder="blurred"
        layout="FULL_WIDTH"
        
      />
      <p>Président : RAKOTOZAFY Eric</p>

      <StaticImage
        alt="La Rotonde"
        src="../images/gasy-miray-jhon1.png"
        placeholder="blurred"
        layout="FULL_WIDTH"
   
      />
      <p>Vice Président : RANAIVOSOA Jaona</p>

      <StaticImage
        alt="La Rotonde"
        src="../images/gasy-miray-patou1.png"
        placeholder="blurred"
        layout="FULL_WIDTH"
       
      />
      <p>Premier Conseiller : RALAIMIHAOTRA Patrice</p>
      <StaticImage
        alt="La Rotonde"
        src="../images/gasy-miray-dolphe.jpg"
        placeholder="blurred"
        layout="FULL_WIDTH"
        
      />
      <p>Deuxième Conseiller: RAKOTOZANANY Alain Dolphe </p>

      <StaticImage
        alt="La Rotonde"
        src="../images/gasy-miray-niry.png"
        placeholder="blurred"
        layout="FULL_WIDTH"
        
      />
      <p>Troisième Conseiller: RANDRIAMBOLOLONTSOA NiryOmega </p>
     
      <StaticImage
        alt="La Rotonde"
        src="../images/gasy-miray-nirina.jpg"
        placeholder="blurred"
        layout="FULL_WIDTH"
        
      />
      <p>Secrétaire: RAMANGASON Nirina </p>
      {/* <div class="container">
        <div class="d-flex justify-content-start bg-warning m-2">
          <div className="p-2 border border-dark bg-info">Element flex1</div>
          <div class="p-2 border border-dark bg-info">Elément flex 2</div>
          <div class="p-2 border border-dark bg-info">Elément flex 3</div>
        </div>
        <div class="d-flex justify-content-between bg-warning m-2">
               <div class="p-2 border border-dark bg-info"><div class="p-2 border border-dark bg-info">   <StaticImage
              alt="La Rotonde"
              src="../images/Logoa.PNG"
              placeholder="blurred"
              layout="fixed" 
                       
            /></div></div>
               <div class="p-2 border border-dark bg-info">Elément flex 2</div>
               <div class="p-2 border border-dark bg-info">Elément flex 3</div>
             </div> */}
           {/* justify-content-center pour les petits écrans puis justify-content-between dès qu'on passe le breakpoint lg  */}
       {/* <div class="d-flex justify-content-center justify-content-lg-between bg-warning m-2">
               <div class="p-2 border border-dark bg-info">Elément flex 1</div>
               <div class="p-2 border border-dark bg-info">Elément flex 2</div>
               <div class="p-2 border border-dark bg-info">Elément flex 3</div>
             </div>
             <div class="d-flex flex-column align-items-stretch bg-warning my-2">
               <div class="p-2 bg-info border"><div class="p-2 border border-dark bg-info">   <StaticImage
              alt="La Rotonde"
              src="../images/Logoa.PNG"
              placeholder="blurred"
              layout="FULL-WIDTH" 
                       
            /></div></div>
               <div class="p-2 bg-info border">Flex élément 2</div>
               <div class="p-2 bg-info border">Flex élément 3</div>
             </div>
             <div class="d-flex my-2 bg-warning">
                <div class="p-2 flex-fill bg-info border"><div class="p-2 border border-dark bg-info">   <StaticImage
              alt="La Rotonde"
              src="../images/Logoa.PNG"
              placeholder="blurred"
              layout="FULL-WIDTH" 
                       
            /></div></div>
                <div class="p-2 flex-fill bg-info border"><div class="p-2 border border-dark bg-info">   <StaticImage
              alt="La Rotonde"
              src="../images/Logoz.PNG"
              placeholder="blurred"
              layout="FULL-WIDTH" 
                       
            /></div></div>
                <div class="p-2 flex-fill bg-info border"><div class="p-2 border border-dark bg-info">   <StaticImage
              alt="La Rotonde"
              src="../images/Logoa.PNG"
              placeholder="blurred"
              layout="FULL-WIDTH" 
                       
            /></div></div>
             </div>
        
      </div>  */}
    </Layout>
  );
};

export default AboutPage;
