import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profil"
import GalleryPage from "./galerie"
import Login from "../components/login"



const App = () => (
  <Layout>
    <Router>
    <PrivateRoute path="/app/profile" component={ Profile } />
    <PrivateRoute path="/app/galerie" component={ GalleryPage } />
      <Login path="/app/login" />
    </Router>
    
  </Layout>
  
)

export default App