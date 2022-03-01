import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { getUser, isLoggedIn } from "../services/auth";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import slide01 from "../images/1.png";
import slide02 from "../images/9.png";
import slide03 from "../images/27.png";



const IndexPage = () => {
  return (
    <Container fluid>
      <Layout pageTitle="Page d'Acceuil G.A.M">
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <h1>Bienvenue</h1>
          </Col>
          <Col md="auto">
          <Carousel>
            <Carousel.Item>
              <img src={slide01} alt="image Gam" />
            </Carousel.Item>
            <Carousel.Item>
            <img src={slide02} alt="la rotonde" />

            </Carousel.Item>
            <Carousel.Item>
            <img src={slide03} alt="Sainte victoire" />

            </Carousel.Item>
          </Carousel>
          </Col>
          <Col xs lg="2">
            La Rotonde
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <p>
              {isLoggedIn() ? (
                <>
                  Vous êtes connecté, alors vérifiez votre{" "}
                  <Link to="/app/profile">profil</Link>
                </>
              ) : (
                <>
                  Tu devrais{" "}<Link to="/app/login">Connecter{"  "}</Link>Pour voir le
                  contenu restreint. Nous sommes heureux de vous partager nos meilleurs
                  moments ensemble
                </>
              )}
            </p>{" "}
          </Col>
          <Col md="auto">
            <StaticImage alt="La Rotonde" src="../assets/img/3Dauphin.png" />
          </Col>
          <Col xs lg="2">
            <h5>Bonjour{" "}{isLoggedIn() ? getUser().name : "GAM"}!</h5>
          </Col>
        </Row>
      </Layout>,
     
    </Container>
    
  );
};

export default IndexPage;
