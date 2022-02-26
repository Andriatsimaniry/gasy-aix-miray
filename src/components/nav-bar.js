import React from "react";
import { navigate } from "gatsby";
import { isLoggedIn, logout } from "../services/auth";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/img/GAM1.svg";


export default function NavBar() {
  
  return (
    <>
      <Navbar bg="light" variant="dark"  expand="lg" >
        <Container>
        <Navbar.Brand href="/">
        <img
          alt=""
          src={Logo}
          width="80"
          height="40"
          className="d-inline-block align-top "
        /><h1 className="d-inline-block align-top text-dark">G.A.M</h1>
        
      </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-dark">Acceuil</Nav.Link>
            <Nav.Link href="/blog" className="text-dark">Publication</Nav.Link>
            <Nav.Link href="/app/galerie" className="text-dark">Galerie</Nav.Link>
            <Nav.Link href="/app/profile" className="text-dark" >Profile</Nav.Link>

            {isLoggedIn() ? (
              <Nav.Link
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  logout(() => navigate(`/app/login`));
                }}
                className="text-dark"
              >
                Déconnecter
              </Nav.Link>
            ) : (
              <Nav.Link href="/app/login" className="text-dark">Espace Membre</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
