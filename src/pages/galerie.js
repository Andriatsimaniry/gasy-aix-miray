import React from 'react'
import Frame from '../components/frame'

const GalleryPage = () => {
  return (
    <Frame>   
      <p>Cela sera transmis comme des enfants</p>
      <div class="container">
      <h1>Les Membres du GAM</h1>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Adhérent</th>
            <th>E-mail</th>
            <th>Téléphone</th>
            <th>Adresse</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RAKOTOMANGA</td>
            <td>Patrick</td>
            <td>Président</td>
            <td>eric.rakotozafy@gasyaixmiray.fr</td>
            <td>A completer</td>
            <td>A completer</td>
            <td>A completer</td>
          </tr>
          <tr>
            <td>RANAIVOSOA</td>
            <td>Jaona</td>
            <td>Vice Président</td>
            <td>j.ranaivosoa@gasyaixmiray.fr</td>
            <td>A completer</td>
            <td>A completer</td>
            <td>A completer</td>
          </tr>
          <tr>
            <td>RALAIMIHAOTRA</td>
            <td>Patrice</td>
            <td>1er Conseiller</td>
            <td>p.ralaimihaotra@gasyaixmiray.fr</td>
            <td>A completer</td>
            <td>A completer</td>
            <td>A completer</td>
          </tr>
          <tr>
            <td>RAKOTOZANANY</td>
            <td>Alain Dolphe</td>
            <td>2ème Conseiller</td>
            <td>a.rakotozanany@gasyaixmiray.fr</td>
            <td>A completer</td>
            <td>A completer</td>
            <td>A completer</td>
          </tr>
          <tr>
            <td>RANDRIAMBOLOLONTSOA</td>
            <td>NiryOmega</td>
            <td>3éme Conseiller</td>
            <td>niryomega@gasyaixmiray.fr</td>
            <td>A completer</td>
            <td>A completer</td>
            <td>A completer</td>
          </tr> 
          <tr>
            <td>RAMAGASON</td>
            <td>Nirina</td>
            <td>Secrétaire</td>
            <td>a.ramangason@gasyaixmiray.fr</td>
            <td>A completer</td>
            <td>A completer</td>
            <td>A completer</td>
          </tr>
        </tbody>
      </table>
      </div>
    </Frame>
  )
}

export default GalleryPage