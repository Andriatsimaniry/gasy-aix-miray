import React from "react"
import { Container } from "react-bootstrap"
import Gallery from "../components/gallery"


// import SEO from "../components/seo"

const Photo = () => {
  return (

    <Container>
      {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
      <h3>Photo (cliquez pour agrandir)</h3>
      
 <Gallery /> 
      
    </Container>
  )
}

export default Photo;











// import * as React from "react";
// import Layout from "../components/layout";
// import { Link } from "gatsby";
// import { getUser, isLoggedIn } from "../services/auth";
// import Gallery from "../components/gallery"



// const AboutPage = () => {
//   return (
//     <Layout pageTitle="Gallerie d'images">
            
            
          
//             <h5 className="d-inline-block align-top text-primary">
//               Bonjour {isLoggedIn() ? getUser().name : "GAM"}!
//             </h5>
          
      
//         <p>
//           {isLoggedIn() ? (
//             <>
//               Vous êtes connecté, alors vérifiez votre{" "}
//               <Link to="/app/profile">profil</Link>
//             </>
//           ) : (
//             <>
//               Tu devrais <Link to="/app/login">Connecter{"  "}</Link>Pour voir
//               le contenu restreint.
//             </>
//           )}
//         </p>
//     </Layout>
//   );
// };

// export default AboutPage;

