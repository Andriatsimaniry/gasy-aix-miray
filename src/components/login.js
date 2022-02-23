import React from "react";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../services/auth";
import { Button, Container, Form } from "react-bootstrap";

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
        <h1>Connection a la page Publication des GAM</h1>

        <Form>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            method="post"
            onSubmit={(event) => {
              this.handleSubmit(event);
              navigate(`/app/profile`);
            }}
          >
            <Form.Label>Adresse Email</Form.Label>
            <Form.Control type="email" placeholder="Entrer votre email" />
            <Form.Text
              className="text-muted"
              name="username"
              onChange={this.handleUpdate}
            >
              Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de Passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Mot de Passe"
              onChange={this.handleUpdate}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Enregistrer" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Connecter
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
