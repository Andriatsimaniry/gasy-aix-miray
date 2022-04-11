import React from "react";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../services/auth";
import { Container, Card } from "react-bootstrap";
class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  };
  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(this.state);
  };
  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`);
    }
    return (
      <Container>
       <Card className="text-center">
         <Card.Title><h1 >Connexion</h1></Card.Title>
        
        <form
          method="post"
          onSubmit={(event) => {
          this.handleSubmit(event);
          navigate(`/app/adherent`);
          }}
        >
          <label>
            Nom
            <input  type="text" name="username" onChange={this.handleUpdate} />
          </label>
          <label>
            Mot de Passe
            <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </label>
          <button variant="Secondary" type="submit">
            Connecter
          </button>
        </form>
        </Card>
        </Container>
    );
  }
}

export default Login;

