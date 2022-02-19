import React from "react"
import { getUser } from "../services/auth"

const Profile = () => (
  <>
    <h1>Votre Profil</h1>
    <ul>
    <li>Nom: {getUser().name}</li>
      <li>E-mail: {getUser().email}</li>
    </ul>
  </>
)

export default Profile