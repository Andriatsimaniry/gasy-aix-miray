import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"
import { Button, Navbar, Container } from 'react-bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css'
{/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>;
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>;
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>; */}

 


 export default function NavBar() {
//   let greetingMessage = ""
//   if (isLoggedIn()) {
//     greetingMessage = `Bonjour ${getUser().name}`
//   } else {
//     greetingMessage = "Vous n'êtes pas connecté"
//   }
  return (
//     <div
//       style={{
//         display: "flex",
//         flex: "1",
//         justifyContent: "space-between",
//         borderBottom: "1px solid #d1c1e0",
//       }}
//     >
//       <span>{greetingMessage}</span>
      
//   <Button  variant="primary">Button #1</Button>
//   <Button  variant="secondary" className="mx-3">Button #2</Button>
//   <Button  variant="success">Button #3</Button>


//       <nav>
//         <Link to="/">Acceuil</Link>
//         {` `}
//         <Link to="/blog">Profil</Link>
//         {` `}
//         {isLoggedIn() ? (
//           <a
//             href="/"
//             onClick={event => {
//               event.preventDefault()
//               logout(() => navigate(`/app/login`))
//             }}
//           >
//             Déconnecter
//           </a>
//         ) : null}
//       </nav>
//     </div>
//   )
// }
<>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/">Acceuil</Navbar.Brand>
    <Navbar.Brand href="/blog">Profil</Navbar.Brand>
    {isLoggedIn() ? (
          <Navbar.Brand
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
            Déconnecter
            </Navbar.Brand>
        ) : null
        
        }
        
    </Container>
  </Navbar>
  <br />
  
</>
  )}