import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { getUser, isLoggedIn } from "../services/auth";
import DogVideo from "../assets/video.mp4";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = () => {
  return (
    <Container fluid>
      <Layout pageTitle="Page d'Acceuil G.A.M">
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <h1>Bienvenue</h1>
          </Col>
          <Col md="auto">
            <video controls>
              <source src={DogVideo} type="video/mp4" />
            </video>
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
                  Tu devrais<Link to="/app/login">Connecter</Link>Pour voir le
                  contenu restreint. Nous sommes heureux de vous partager les
                  moments
                </>
              )}
            </p>{" "}
          </Col>
          <Col md="auto">
            <StaticImage alt="La Rotonde" src="../images/Rotonde1.png" />
          </Col>
          <Col xs lg="2">
            <h5>Bonjour{isLoggedIn() ? getUser().name : "GAM"}!</h5>
          </Col>
        </Row>
      </Layout>
    </Container>
  );
};

export default IndexPage;
