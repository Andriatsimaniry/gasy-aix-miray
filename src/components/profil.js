import React from "react"
import { getUser } from "../services/auth"
import { Container } from "./layout.module.css";


const Profile = () => (
  <div className={ Container }>
    <h1>Votre Profil</h1>
    <ul>
    <li>Nom: {getUser().name}</li>
      <li>E-mail: {getUser().email}</li>
    </ul>
  </div>
)

export default Profile