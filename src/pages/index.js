import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { getUser, isLoggedIn } from "../services/auth";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Img from "gatsby-image";
// import slide01 from "./../images/gasy-miray-aix.png";
// import slide02 from "./../images/gasy-miray-gam.png";
// import slide03 from "./../images/gasy-miray-baobab.png";

function IndexPage() {
  return (
    <Container fluid>
      <col>
      </col>
      <Layout pageTitle="Page d'Acceuil G.A.M">
        <Row className="justify-content-md-center">
          {/* Carousel */}

          {/* <Carousel>
            <Carousel.Item>
              <Img src={slide01} alt="Gam" />
            </Carousel.Item>
            <Carousel.Caption>
              <h1>This is a Heading</h1>
              <p>The first slide01</p>
            </Carousel.Caption> */}
          {/* <Carousel.Item>
              <Img src={slide02} alt="la rotonde" />
            </Carousel.Item>
            <Carousel.Item>
              <Img src={slide03} alt="Sainte victoire" />
            </Carousel.Item> */}
          {/* </Carousel> */}

          <Col xs lg="2">
            <h1>Bienvenue</h1>
          </Col>
          <Col md="auto"></Col>
         
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
                  Tu devrais <Link to="/app/login">Connecter{"  "}</Link>Pour
                  voir le contenu restreint. Nous sommes heureux de vous
                  partager nos meilleurs moments ensemble
                </>
              )}
            </p>{" "}
          </Col>
          <Col >
            <StaticImage
              alt="La Rotonde"
              src="../images/gasy-miray-baobab.png"
              placeholder="blurred"
              layout="fixed"
              width={800}
              height={600}
            />
          </Col>
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
