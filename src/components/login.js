import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import { Button } from 'react-bootstrap'

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
        <h1>Connection a la page Publication</h1>
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
          <Button type="submit" variant="primary" className="mx-3">Connecter</Button>
          {/* <input type="submit" value="Connecter" /> */}
        </form>
      </>
    )
  }
}

export default Login