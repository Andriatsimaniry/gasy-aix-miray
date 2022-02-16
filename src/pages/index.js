import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import DogVideo from "../assets/video.mp4"

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
      
      <video controls>
      <source src={DogVideo} type="video/mp4" />
    </video>
      
    </section>
        
    </Layout>
  )
}

export default IndexPage