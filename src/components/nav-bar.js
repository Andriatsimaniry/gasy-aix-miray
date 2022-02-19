import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"

export default function NavBar() {
  let greetingMessage = ""
  if (isLoggedIn()) {
    greetingMessage = `Bonjour ${getUser().name}`
  } else {
    greetingMessage = "Vous n'êtes pas connecté"
  }
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
      <span>{greetingMessage}</span>

      <nav>
        <Link to="/">Acceuil</Link>
        {` `}
        <Link to="/blog">Profil</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
            Déconnecter
          </a>
        ) : null}
      </nav>
    </div>
  )
}