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
      <Layout pageTitle="Bienvenue sur le site du G.A.M">
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

         
        </Row>
      <Row ms="2">
      <StaticImage
              alt="La Rotonde"
              src="../images/gasy-miray-aix.png"
              placeholder="blurred"
              layout="FULL_WIDTH"          
            />
      </Row>
      
        <Row>
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
                  voir le contenu restreint. Nous sommes heureux de vous
                  partager nos meilleurs moments ensemble
                </>
              )}
            </p>{" "}
          </Row>
          
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
