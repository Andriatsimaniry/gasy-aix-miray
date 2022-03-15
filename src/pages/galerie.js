import React from 'react'
import Frame from '../components/frame'
import { Container, Card } from 'react-bootstrap'
const GalleryPage = () => {
  return (
    <Frame>   
      <Container>
        <Card className="text-center">
          <Card.Text>     
      <div className="table-responsive table-bordered">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Adhérent</th>
            <th>Téléphone</th>            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RAKOTOMANGA</td>
            <td>Patrick</td>
            <td>Président</td>
            <td>06.66.69.37.50</td>            
          </tr>
          <tr>
            <td>RANAIVOSOA</td>
            <td>Jaona</td>
            <td>Vice Président</td>
            <td>A completer</td>            
          </tr>
          <tr>
            <td>RALAIMIHAOTRA</td>
            <td>Patrice</td>
            <td>Vice Président</td>
            <td>A completer</td>            
          </tr>     
          <tr>
            <td>RANDRIAMBOLOLONTSOA</td>
            <td>NiryOmega</td>
            <td>Vice Président</td>           
            <td>06.69.68.45.37</td>            
          </tr> 
          <tr>
            <td>RAMAGASON</td>
            <td>Nirina</td>
            <td>Secrétaire</td>        
            <td>06.28.06.03.13</td>           
          </tr>
          <tr>
            <td>REMACLY</td>
            <td>Nathalie</td>
            <td>Secrétaire adjointe</td>
            <td>A completer</td>          
          </tr>
          <tr>
            <td>Maurice</td>
            <td>Joro Rojo</td>
            <td>Trésorière</td>           
            <td>06.13.03.25.36</td>            
          </tr>
          <tr>
            <td>RAHAERISOA</td>
            <td>Odette</td>
            <td>Trésorière adjointe</td>            
            <td>06.79.83.61.58</td>            
          </tr>
          <tr>
            <td>RAKOTOZANANY</td>
            <td>Alain Dolphe</td>
            <td>Conseiller</td>
            <td>A completer</td>
          </tr>
          <tr>
            <td>ANDRIA</td>
            <td> Luc Zo</td>
            <td>Conseiller</td>         
            <td>A completer</td>            
          </tr>
          <tr>
            <td>ANDRIANIRIANA</td>
            <td>Tyx</td>
            <td>Conseiller</td> 
            <td>A completer</td>           
          </tr>
          <tr>
            <td>DOUGLAS</td>
            <td>Hervé</td>
            <td>Conseiller</td>
            <td>A completer</td>          
          </tr>
          <tr>
            <td>TOTOLO</td>
            <td>Patrice</td>
            <td>Conseiller</td>          
            <td>A completer</td>         
          </tr>
        </tbody>
      </div>
      </Card.Text>
      </Card>
      </Container>
    </Frame>
  )
}

export default GalleryPage