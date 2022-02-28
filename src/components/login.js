import React from "react";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../services/auth";
import { Container } from "./layout.module.css";
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
      <div className={Container}>
        <h1>Connection</h1>
        <form
          method="post"
          onSubmit={(event) => {
            this.handleSubmit(event);
            navigate(`/app/profile`);
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
          <button variant="Secondary" type="submit">
            Connecter
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
