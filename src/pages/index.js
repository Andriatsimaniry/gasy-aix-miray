import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Page d'Acceuil G.A.M">
      <p>Bienvenue sur la page d'Acceuil du G.A.M.</p>
      <StaticImage
        alt="La Rotonde"
        src="../images/Rotonde1.png" />
    </Layout>
  )
}

export default IndexPage