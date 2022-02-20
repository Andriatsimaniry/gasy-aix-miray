import React from "react";
import { navigate } from "gatsby";
import { isLoggedIn, logout } from "../services/auth";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  //   let greetingMessage = ""
  //   if (isLoggedIn()) {
  //     greetingMessage = `Bonjour ${getUser().name}`
  //   } else {
  //     greetingMessage = "Vous n'êtes pas connecté"
  //   }
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/logo">Logo</Navbar.Brand>
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
              <Nav.Link href="/app/login">Connecter</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
