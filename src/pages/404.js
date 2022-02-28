import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Non Trouvée</title>
      <h1 style={headingStyles}>Page non trouvée</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        Nous n'avons pas trouvé ce que vous cherchiez.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Essayez de créer une page dans{" "}
            <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <section>
          <h1>Non Trouvée</h1>
          <p>
            Vous venez de tomber sur une page qui n'existe pas... la tristesse.
          </p>
        </section>
        <Link to="/">Revenir à l'Acceuil</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
