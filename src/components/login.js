// import React from "react";
// import { navigate } from "gatsby";
// import { handleLogin, isLoggedIn } from "../services/auth";
// import { Button, Container, Form } from "react-bootstrap";

// class Login extends React.Component {
//   state = {
//     username: ``,
//     password: ``,
//   };

//   handleUpdate = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     handleLogin(this.state);
//   };

//   render() {
//     if (isLoggedIn()) {
//       navigate(`/app/profile`);
//     }

//     return (
//       <Container>
//         <h1>Connection a la page Publication des GAM</h1>

//         <Form>
//           <Form.Group
//             className="mb-3"
//             method="post"
//             onSubmit={(event) => {
//               this.handleSubmit(event);
//               navigate(`/app/profile`);
//             }}
//           >
//             <Form.Label>Entrer votre Nom
//             <Form.Control type="text"  
                      
//               name="username"
//               onChange={this.handleUpdate}
//             />
//               Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
//               </Form.Label>
//           </Form.Group>

//           <Form.Group className="mb-3" >
//             <Form.Label>Mot de Passe
//             <Form.Control
//               type="password"
//               placeholder="Mot de Passe"
//               onChange={this.handleUpdate}
//             />
//             </Form.Label>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Check type="checkbox" label="Enregistrer" />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Connecter
//           </Button>
//         </Form>
//       </Container>
//     );
//   }
// }

// export default Login;
import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"


class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <>
        <h1>Connection</h1>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/app/profile`)
          }}
        >
          <label>
            Nom
            <input type="text" name="username" onChange={this.handleUpdate} />
          </label>
          <label>
            Mot de Passe
            <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </label>
          <button variant="Secondary" type="submit" >Connecter</button>
        </form>
      </>
    )
  }
}

export default Login