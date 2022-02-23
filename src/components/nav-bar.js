import React from "react";
import { navigate } from "gatsby";
import { isLoggedIn, logout } from "../services/auth";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/img/3Dauphin.png";


export default function NavBar() {
  //   let greetingMessage = ""
  //   if (isLoggedIn()) {
  //     greetingMessage = `Bonjour ${getUser().name}`
  //   } else {
  //     greetingMessage = "Vous n'êtes pas connecté"
  //   }
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
        <Navbar.Brand href="/">
        <img
          alt=""
          src={Logo}
          width="80"
          height="40"
          className="d-inline-block align-top"
        />{' '}
        G.A.M
      </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Acceuil</Nav.Link>
            <Nav.Link href="/blog">Publication</Nav.Link>
            <Nav.Link href="/app/galerie">Galerie</Nav.Link>
            <Nav.Link href="/app/profile">Profile</Nav.Link>

            {isLoggedIn() ? (
              <Nav.Link
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  logout(() => navigate(`/app/login`));
                }}
              >
                Déconnecter
              </Nav.Link>
            ) : (
              <Nav.Link href="/app/login">AccesMembre</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
