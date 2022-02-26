import React from "react";
import { navigate } from "gatsby";
import { isLoggedIn, logout } from "../services/auth";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/img/GAM1.svg";

export default function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
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
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-2 mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Acceuil
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu Déroulant
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/blog">
                      Publication
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/app/galerie">
                      Galerie
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/app/profile">
                      Profil
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Rechercher"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
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
      </nav>
    </>
  );
}
