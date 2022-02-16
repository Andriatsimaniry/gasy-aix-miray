import * as React from "react"
import { Link } from "gatsby"
import Video from "../components/video"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <section>
      <h1>NOT FOUND</h1>
      <p>You just hit a page that doesn't exist... the sadness.</p>
      <p>May I suggest a video instead?</p>
      <Video
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      />
    </section>
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

