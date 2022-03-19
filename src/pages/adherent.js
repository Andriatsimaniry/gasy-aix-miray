import React from "react";
import Frame from "../components/frame";
// import { Container, Card, Row, Col } from 'react-bootstrap'
const AdherentPage = () => {
  return (
    <Frame>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Adhérent</th>
              <th>Téléphone</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>RAKOTOMANGA</td>
              <td>Patrick</td>
              <td>Président</td>
              <td>06.66.69.37.50</td>
              <td>rakotozafy.eric@yahoo.fr</td>
            </tr>
            <tr>
              <td>RALAIMIHAOTRA</td>
              <td>Patrice</td>
              <td>Vice Président</td>
              <td>06.03.99.04.55</td>
              <td>A completer</td>
            </tr>
            <tr>
              <td>RANDRIAMBOLOLONTSOA</td>
              <td>NiryOmega</td>
              <td>Vice Président</td>
              <td>06.69.68.45.37</td>
              <td>niryomega@free.fr</td>
            </tr>
            <tr>
              <td>RAMANGASON</td>
              <td>Nirina</td>
              <td>Secrétaire</td>
              <td>06.28.06.03.13</td>
              <td>nramangason@yahoo.com</td>
            </tr>
            <tr>
              <td>REMACLY</td>
              <td>Nathalie</td>
              <td>Secrétaire adjointe</td>
              <td>07.69.33.00.65</td>
              <td>nathalie.remacly@yahoo.fr</td>
            </tr>
            <tr>
              <td>Maurice</td>
              <td>Joro Rojo</td>
              <td>Trésorière</td>
              <td>06.13.03.25.36</td>
              <td>A completer</td>
            </tr>
            <tr>
              <td>RAHAERISOA</td>
              <td>Odette</td>
              <td>Trésorière adjointe</td>
              <td>06.79.83.61.58</td>
              <td>A completer</td>
            </tr>
            <tr>
              <td>RAKOTOZANANY</td>
              <td>Alain ADolphe</td>
              <td>Conseiller</td>
              <td>07.83.12.60.45</td>
              <td>adolpherakotozanany4@gmail.com</td>
            </tr>
            <tr>
              <td>ANDRY</td>
              <td> Luc </td>
              <td>Conseiller</td>
              <td>06.21.32.57.72</td>
              <td>zo_andria@yahoo.com</td>
            </tr>
            <tr>
              <td>ANDRIANIRIANA</td>
              <td>Marc</td>
              <td>Conseiller</td>
              <td>06.45.48.40.67</td>
              <td>tyx13090@yahoo.fr</td>
            </tr>
            <tr>
              <td>RABARISON</td>
              <td>Hervé</td>
              <td>Conseiller</td>
              <td>06.09.21.44.73</td>
              <td>doug_rabarison@yahoo.fr</td>
            </tr>
            <tr>
              <td>TOTOLO</td>
              <td>Patrice</td>
              <td>Conseiller</td>
              <td>06.56.86.37.86</td>
              <td>patricet158@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Frame>
  );
};

export default AdherentPage;
