import React from "react";
import { getUser } from "../services/auth";
// import { Contener } from "./layout.module.css";
import { Container, Card } from "react-bootstrap";

const Profile = () => (
  <Container>
  <div>
    <h1>Espace Adhérent</h1>
    <ul>
      <li>Nom: {getUser().name}</li>
      <li>E-mail: {getUser().email}</li>
    </ul>
  </div>,
  
    <Card>
      <Card.Body>
      <Card.Title><h3>Rapport réunion du  10/03/2022 Chez Nirina</h3></Card.Title>
        <Card.Text>Ny tonga nanatrika ny fivoriana :
        <ol>
            <li>Eric</li>
            <li>Nirina</li>
            <li>Dolphe</li>
            <li>Tyx</li>
            <li>Douglas</li>
            <li>Odette</li>
            <li>Rojo</li>
            <li>Niry</li>
            <li>Patrice</li>
            <li>Nathalie</li>
          </ol>
          <p>Ny tapaka tao : Ny fandoavana ny "adhésion" dia efa manomboka<br/>
            ka miangavy antsika izay tsy mbola nanantotosa izany hanantona<br/> 
            @ Rojo tél: 06.13.03.25.36 na <br/>
            @ Odette tél: 06.79.83.61.58<br/>
            Misy koa ny faniriana hanao T-shirt spécial GAM (Eric)<br/>
            Misaotra antsika rehetra!<br/>
            Nirina tél: 06.28.06.03.13
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
);

export default Profile;
