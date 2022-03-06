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
      <StaticImage
              alt="La Rotonde"
              src="../images/gasy-miray-aix.png"
              placeholder="blurred"
              layout="fullWidth"          
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
                  voir le contenu restreint. Nous sommes heureux de te
                  partager nos meilleurs moments ensemble
                </>
              )}
            </p>{" "}
          </Row>
          <Row>
          <StaticImage
              alt="La Rotonde"
              src="../images/gasy-miray-gam.png"
              placeholder="blurred"
              layout="fullWidth"          
            />
      </Row>        
         <Row> 
          <Col xs lg="2">
            <h5>Bonjour {isLoggedIn() ? getUser().name : "GAM"}!</h5>
          </Col>
        </Row>
      </Layout>
      ,
    </Container>
  );
}

export default IndexPage;
