import React from "react";
import { navigate } from "gatsby";
import { isLoggedIn, logout } from "../services/auth";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/img/GAM1.svg";

export default function NavBar() {
  return (
    <>
      <Nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={Logo}
              width="80"
              height="40"
              className="d-inline-block align-top "
            />
            <h1 className="d-inline-block align-top text-dark">G.A.M</h1>
          </Navbar.Brand>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Acceuil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/blog/publication">
                  Publication
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/blog/calendrier">
                  Calendrier
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/app/profile">
                  Profil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/blog/liste-des-membres">
                  Membre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">
                  Projet
                </a>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Rechercher"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Rechercher
              </button>
            </form>
          </div>
        </div>
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
          <Nav.Link href="/app/login" className="text-dark">
            Espace Membre
          </Nav.Link>
        )}
      </Nav>
    </>
  );
}
