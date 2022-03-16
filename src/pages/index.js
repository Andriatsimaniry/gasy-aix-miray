import * as React from "react";
import Layout from "../components/layout";
// import { StaticImage } from "gatsby-plugin-image";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import ericImage from "../images/gasy-miray-eric1.png";
import jaonaImage from "../images/gasy-miray-jaona.png";
import patouImage from "../images/gasy-miray-patou.png";
import dolpheImage from "../images/gasy-miray-dolphe3.png";
import niryImage from "../images/gasy-miray-niry.jpg";
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
      <h3 className="text-center" >Le Bureau du GAM</h3>
       {/* Eric sy Jaona  */}
      <Row >
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
                <Card.Text>RAKOTOMANGA Patrick.</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>
        <Col md={6}>
          <Container>
            <Card className="mb-3">
              <Image
                src={jaonaImage}
                className="card-img-top"
                alt="eric image"
                fluid
              />
              <Card.Body>
                <Card.Title>
                  <h3>Vice Président</h3>
                </Card.Title>
                <Card.Text>RANAIVOSOA Jaona</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>

      {/* Deux autres membre */}
      {/* Patou sy Niry */}

      <Row>
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
                <Card.Text>RALAIMIHAOTRA Patou.</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>
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
                <Card.Text>RANDRIAMBOLOLONTSOA NiryOmega.</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>

      {/* Deux autres membre */}
      {/* Nirina sy Nathalie  */}

      <Row>
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
      </Row>

      {/* Deux autres membre */}
      {/* Rojo sy Odette  */}

      <Row>
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
      </Row>
      {/* Deux autres membre */}
      {/* Dolphe sy Zo  */}
      <Row>
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
                <Card.Text>RAKOTOZANANY Alain Dolphe</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>

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
                <Card.Text>Andria Luc Zo.</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
      {/* Deux autres membre */}
      {/* Tyx sy Douglas  */}
      <Row>
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
                <Card.Text>Andrianiriana tyx.</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>

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
                <Card.Text>Douglas Hervé.</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row> 
      
      <Row>
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
