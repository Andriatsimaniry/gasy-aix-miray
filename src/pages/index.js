import * as React from "react";
import Layout from "../components/layout";
// import { StaticImage } from "gatsby-plugin-image";
import { Container, Card, Row, Col, Image } from "react-bootstrap";

import ericImage from "../images/gasy-miray-eric.jpg";
import niryImage from "../images/gasy-miray-niry.jpg";
import nirinaImage from "../images/gasy-miray-nirina.jpg";
import zoImage from "../images/gasy-miray-zo.jpg";
import tyxImage from "../images/gasy-miray-tyx.jpg";
import doglassImage from "../images/gasy-miray-douglas.jpg";
import rojoImage from "../images/gasy-miray-rojo.jpg";
import odetteImage from "../images/gasy-miray-odette.jpg";
import nathalieImage from "../images/gasy-miray-nathalie.jpg";
import totoloImage from "../images/gasy-miray-totolo.jpg";
import christopheImage from "../images/gasy-miray-christophe.jpg";
import malalaImage from "../images/gasy-miray-malala.jpg";
import tahinaImage from "../images/gasy-miray-tahina.jpg";
import fifyImage from "../images/gasy-miray-fify.jpg";
import membreImage from "../images/gasy-miray-membre.jpg";

function IndexPage() {
  return (
    <Container fluid pageTitle="Le Bureau du GAM et Coseillers">
      <Layout pageTitle="Bienvenue sur le site du G.A.M (Gasy Aix En Provence Miray)">
        <h3 className="text-center">Bureau du GAM et Conseillers</h3>

        {/* Eric sy Patou  */}
        <Row>
          <Col md={12}>
            <Container>
              <Card className="mb-3 w-100 h-100">
                <Image
                  src={membreImage}
                  className="mx-auto d-block"
                  alt="membre image"
                  fluid
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Membre du Conseil d'Administration</h3>{" "}
                  </Card.Title>
                  <Card.Text>
                    <p>G.A.M</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>
</Row>
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
        </Row>

        {/* Deux autres membre */}
        {/* Niry sy Nirina  */}
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
                    <h3>Secrétaire</h3>{" "}
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
        {/* Nathalie sy Rojo  */}
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
        {/* Rojo sy Odette  */}
        <Row>
          <Col md={6}>
            <Container>
              <Card className="mb-3">
                <Image
                  src={tahinaImage}
                  className="card-img-top"
                  alt="tahina image"
                  fluid
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Conseiller</h3>
                  </Card.Title>
                  <Card.Text>RADAVIDRA Tahinaharifomba</Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>

          <Col md={6}>
            <Container>
              <Card className="mb-3">
                <Image
                  src={christopheImage}
                  className="card-img-top"
                  alt="christophe image"
                  fluid
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Conseiller</h3>
                  </Card.Title>
                  <Card.Text>ANDRIANASOLOARIJAONA Christophe</Card.Text>
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
        <Row>
          <Col md={6}>
            <Container>
              <Card className="mb-3">
                <Image
                  src={malalaImage}
                  className="card-img-top"
                  alt="malala image"
                  fluid
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Conseillère</h3>{" "}
                  </Card.Title>
                  <Card.Text>UBACH Haingotiana malala.</Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>

          <Col md={6}>
            <Container>
              <Card className="mb-3">
                <Image
                  src={fifyImage}
                  className="card-img-top"
                  alt="fify image"
                  fluid
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Conseillère</h3>{" "}
                  </Card.Title>
                  <Card.Text>RATSIVOSON Mamy Fiononana.</Card.Text>
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

