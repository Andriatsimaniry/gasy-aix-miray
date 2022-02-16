import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Video from "../components/video"

const IndexPage = () => {
  return (
    <Layout pageTitle="Page d'Acceuil G.A.M">
      <p>Bienvenue sur la page d'Acceuil du G.A.M.</p>
      <StaticImage
        alt="La Rotonde"
        src="../images/Rotonde1.png" />
         <section>
      <h1>Bienvenue sur le Site du G.A.M</h1>
      <p>Juste une petite video pour commencer !</p>
      
      <Video
        videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
        videoTitle="Official Music Video on YouTube"
      />
    </section>
        
    </Layout>
  )
}

export default IndexPage