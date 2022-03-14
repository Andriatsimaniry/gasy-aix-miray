import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { getUser, isLoggedIn } from "../services/auth";
import { Row, Container } from "react-bootstrap";



function IndexPage() {
  return (
    <Container fluid>
      <Layout pageTitle="Bienvenue sur le site du G.A.M (Gasy Aix En Provence Miray)">
        

        <Row>
          <div className="d-flex my-2">
            <div className="p-2 flex-fill">
              <div className="p-2">
                <StaticImage
                  alt="La Rotonde"
                  src="../images/Haut Plateau.PNG"
                  placeholder="blurred"
                  layout="fullWidth"
                />
              </div>
            </div>
            <div className="p-2 flex-fill">
              <div className="p-2  ">
                <StaticImage
                  alt="La Rotonde"
                  src="../images/Ifaty.PNG"
                  placeholder="blurred"
                  layout="fullWidth"
                />
              </div>
            </div>
            <div className="p-2 flex-fill">
              <div className="p-2  ">
                <StaticImage
                  alt="La Rotonde"
                  src="../images/gasy-miray-baobab.PNG"
                  placeholder="blurred"
                  layout="fullWidth"
                />
              </div>
            </div>
          </div>
        </Row>

        <Row>
          <div className="d-flex my-2">
            <div className="p-2 flex-fill">
              <div className="p-2  ">
                <StaticImage
                  alt="La Rotonde"
                  src="../images/gasy-miray-rotonde.png"
                  placeholder="blurred"
                  layout="fullWidth"
                />
              </div>
            </div>

            <div className="p-2 flex-fill">
              <div className="p-2  ">
                <StaticImage
                  alt="La Rotonde"
                  src="../images/gasy-miray-gam.png"
                  placeholder="blurred"
                  layout="fullWidth"
                />
              </div>
            </div>
          </div>
        </Row>

        <Row>
          
            <h5 className="d-inline-block align-top text-primary">
              Bonjour {isLoggedIn() ? getUser().name : "GAM"}!
            </h5>
          
        </Row>
        <p>
          {isLoggedIn() ? (
            <>
              Vous êtes connecté, alors vérifiez votre{" "}
              <Link to="/app/profile">profil</Link>
            </>
          ) : (
            <>
              Tu devrais <Link to="/app/login">Connecter{"  "}</Link>Pour voir
              le contenu restreint.
            </>
          )}
        </p>
      </Layout>
      ,
    </Container>
  );
}

export default IndexPage;
