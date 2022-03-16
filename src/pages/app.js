import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profil"
import AdherentPage from "./adherent"
import Login from "../components/login"
import Photo from "./photo"



const App = () => (
  <Layout>
    <Router>
    <PrivateRoute path="/app/photo" component={ Photo } />
     <PrivateRoute path="/app/profile" component={ Profile } /> 
    <PrivateRoute path="/app/adherent" component={ AdherentPage } />
      
      <Login path="/app/login" />
    </Router>
    
  </Layout>
  
)

export default App