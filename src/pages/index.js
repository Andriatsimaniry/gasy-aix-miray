import * as React from "react";
import Layout from "../components/layout";
// import { StaticImage } from "gatsby-plugin-image";
import { Container, Card, Row, Col, Image } from "react-bootstrap";

import ericImage from "../images/gasy-miray-eric1.png";
import patouImage from "../images/gasy-miray-patou.png";
import dolpheImage from "../images/gasy-miray-dolphe.png";
import niryImage from "../images/gasy-miray-niry.png";
import nirinaImage from "../images/gasy-miray-nirina.jpg";
import zoImage from "../images/gasy-miray-zo.jpg";
import tyxImage from "../images/gasy-miray-tyx.jpg";
import doglassImage from "../images/gasy-miray-douglas.jpg";
import rojoImage from "../images/gasy-miray-rojo.jpg";
import odetteImage from "../images/gasy-miray-odette.jpg";
import nathalieImage from "../images/gasy-miray-nathalie.jpg";
import totoloImage from "../images/gasy-miray-totolo.jpg";

function IndexPage() {
  return (
    <Container fluid pageTitle="Le Bureau du GAM">
      <Layout pageTitle="Bienvenue sur le site du G.A.M (Gasy Aix En Provence Miray)">
        <h3 className="text-center">Le Bureau du GAM</h3>

        {/* Eric sy Patou  */}
        <Row>
          <Col md={6}>
            <Container>
              <Card className="mb-3 w-100 h-100">
                <Image
                  src={ericImage}
                  className="mx-auto d-block"
                  alt="eric image"
                  fluid
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Président</h3>{" "}
                  </Card.Title>
                  <Card.Text>
                    <p>RAKOTOMANGA Patrick.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>

          <Col md={6}>
            <Container>
              <Card className="mb-3">
                <Image
                  src={patouImage}
                  className="card-img-top"
                  alt="patou image"
                  fluid
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Vice Président</h3>{" "}
                  </Card.Title>
                  <Card.Text>RALAIMIHAOTRA Patrice.</Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Row>

        {/* Deux autres membre */}
        {/* Niry sy Nirina  */}
        <Row>
          <Col md={6}>
            <Container>
              <Card className="mb-3">
                <Image
                  src={niryImage}
                  className="card-img-top"
                  alt="niry image"
                  fluid
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Vice Président</h3>{" "}
                  </Card.Title>
                  <Card.Text>RANDRIAMBOLOLONTSOA Andriatsimaniry.</Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>

          <Col md={6}>
            <Container>
              <Card className="mb-3">
                <Image
                  src={nirinaImage}
                  className="card-img-top"
                  alt="nirina image"
                  fluid
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Secrétaire</h3>
                  </Card.Title>
                  <Card.Text>RAMANGASON Nirina.</Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Row>

        {/* Deux autres membre */}
        {/* Nathalie sy Rojo  */}
        <Row>
          <Col md={6}>
            <Container>
              <Card className="mb-3">
                <Image
                  src={nathalieImage}
                  className="card-img-top"
                  alt="nathalie image"
                  fluid
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Secrétaire adjointe</h3>
                  </Card.Title>
                  <Card.Text>REMACLY Nathalie.</Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>

          <Col md={6}>
            <Container>
              <Card className="mb-3">
                <Image
                  src={rojoImage}
                  className="card-img-top"
                  alt="rojo image"
                  fluid
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Trésorière</h3>
                  </Card.Title>
                  <Card.Text>MAURICE Joro Rojo.</Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Row>

        {/* Deux autres membre */}
        {/* Rojo sy Odette  */}
        <Row>
          <Col md={6}>
            <Container>
              <Card className="mb-3">
                <Image
                  src={odetteImage}
                  className="card-img-top"
                  alt="odette image"
                  fluid
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Trésorière adjointe</h3>
                  </Card.Title>
                  <Card.Text>RAHAERISOA Odette.</Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>

          <Col md={6}>
            <Container>
              <Card className="mb-3">
                <Image
                  src={dolpheImage}
                  className="card-img-top"
                  alt="dolphe image"
                  fluid
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Conseiller</h3>
                  </Card.Title>
                  <Card.Text>RAKOTOZANANY Alain ADolphe</Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Row>

        {/* Deux autres membre */}
        {/* Zo  sy Tyx  */}
        <Row>
          <Col md={6}>
            <Container>
              <Card className="mb-3">
                <Image
                  src={zoImage}
                  className="card-img-top"
                  alt="zo image"
                  fluid
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Conseiller</h3>
                  </Card.Title>
                  <Card.Text>Andry Luc.</Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>

          <Col md={6}>
            <Container>
              <Card className="mb-3">
                <Image
                  src={tyxImage}
                  className="card-img-top"
                  alt="nirina image"
                  fluid
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Conseiller</h3>
                  </Card.Title>
                  <Card.Text>Andrianiriana Marc.</Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Row>
        {/* Deux autres membre */}
        {/* Doulas sy Patrice  */}

        <Row>
          <Col md={6}>
            <Container>
              <Card className="mb-3">
                <Image
                  src={doglassImage}
                  className="card-img-top"
                  alt="doglass image"
                  fluid
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Conseiller</h3>{" "}
                  </Card.Title>
                  <Card.Text>RABARISON Hervé.</Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>

          <Col md={6}>
            <Container>
              <Card className="mb-3">
                <Image
                  src={totoloImage}
                  className="card-img-top"
                  alt="totolo image"
                  fluid
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Conseiller</h3>{" "}
                  </Card.Title>
                  <Card.Text>TOTOLO Patrice.</Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Row>
      </Layout>
      ,
    </Container>
  );
}

export default IndexPage;

