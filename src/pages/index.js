import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { getUser, isLoggedIn } from "../services/auth";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function IndexPage() {
  return (
    <Container fluid>
      <Layout pageTitle="Bienvenue sur le site du G.A.M (Gasy Aix En Provence Miray)">
        <Row className="justify-content-md-center">         
        </Row>

        <Row>
        <div className="d-flex my-2 bg-warning">
                <div className="p-2 flex-fill bg-info border"><div className="p-2 border border-dark bg-info">   <StaticImage
              alt="La Rotonde"
              src="../images/Logoa.PNG"
              placeholder="blurred"
              layout="FULL-WIDTH" 
                       
            /></div></div>
                <div className="p-2 flex-fill bg-info border"><div className="p-2 border border-dark bg-info">   <StaticImage
              alt="La Rotonde"
              src="../images/Logoz.PNG"
              placeholder="blurred"
              layout="FULL-WIDTH" 
                       
            /></div></div>
                <div className="p-2 flex-fill bg-info border"><div className="p-2 border border-dark bg-info">   <StaticImage
              alt="La Rotonde"
              src="../images/Logoa.PNG"
              placeholder="blurred"
              layout="FULL-WIDTH" 
                       
            /></div></div>
             </div>
      </Row> 

      <Row>
      <StaticImage
              alt="La Rotonde"
              src="../images/gasy-miray-rotonde.png"
              placeholder="blurred"
              layout="CONSTRAINED" 
              width="1900" 
              height="800"         
            />
      </Row>        
          <Row>
            {" "}
            <p>
              {isLoggedIn() ? (
                <>
                  Vous êtes connecté, alors vérifiez votre{" "}
                  <Link to="/app/profile">profil</Link>
                </>
              ) : (
                <>
                  Tu devrais <Link to="/app/login">Connecter{"  "}</Link>Pour
                  voir le contenu restreint. 
                </>
              )}
            </p>{" "}
          </Row>
          <Row>
          <StaticImage
              alt="La Rotonde"
              src="../images/gasy-miray-gam.png"
              placeholder="blurred"
              layout="CONSTRAINED" 
              width="1900" 
              height="800"         
            />
      </Row>  
         
         <Row> 
          <Col xs lg="2">
            <h5 className="d-inline-block align-top text-primary">Bonjour {isLoggedIn() ? getUser().name : "GAM"}!</h5>
          </Col>
        </Row>
      </Layout>
      ,
    </Container>
  );
}

export default IndexPage;
