import React from "react";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        const { user, token } = data;
        this.props.handleLogin(user);
        localStorage.token = token;
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <label>Email</label>
        <input
          type="text"
          name="email"
          autoComplete="off"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br></br>
        <br></br>
        <label>Password</label>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input type="submit" value="Login" />
      </form>
    );
  }
}
export default Login;
