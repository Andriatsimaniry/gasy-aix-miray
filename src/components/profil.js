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
          <Card.Title><h3>JOURNÉE RÉCRÉATIVE ORGANISEE PAR L'ASSOCIATION GAM<br/> 
          du 09 Avril 2022<br/>
            Adresse: Salle des Fêtes Eglise Saint Jean<br/>
            Avenue de l'Europe en Face Super U<br/>
            de 11H00 à 21H00<br/>
          </h3>
          </Card.Title>
         <h4>LISTE SAKAFO :</h4>   

<b>Rojo sy Tiana</b> :  Heineken, Desperados, Vin   . Desserts<br/>
<b>Nirina</b> : Voanjobory , Café, Sakay<br/>
<b>Zo</b> : Lasagne, Heineken, Coca<br/>
<b>Niry</b> : Chivas , frites ( aza adino ny mahandro azy), Poulet KFC), Friteuse éléctrique<br/>
<b>Fify ( Ratsivoson ) </b>: chipolatas , merguez, vary . Boissons : Coca Ice Tea , Orangina .<br/>
<b>Ndrina</b>  :  Charbon , sacs poubelles , chivas , Coca . <br/>
<b>Christophe (Tofa)</b>: samossa sy saucisses.<br/>
<b>Patrice</b>: Fatana Barbecue.<br/>
<b>Tyx, Nathalie, Dolphe</b>: gâteaux.<br/>


        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
);

export default Profile;
