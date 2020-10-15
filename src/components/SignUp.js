import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";
class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    address: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((r) => r.json())
      .then((newUser) => {
        this.props.handleLogin(newUser);
      });
  };
  render() {
    const { email, name, address, password } = this.state;
    return (
      <Segment inverted>
        <Form inverted onSubmit={this.handleSubmit}>
          <h1>Sign Up</h1>
          <label>Name</label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            value={name}
            onChange={this.handleChange}
            placeholder="First and last Name"
          />
          <label>Address</label>
          <input
            type="text"
            name="address"
            autoComplete="off"
            value={address}
            onChange={this.handleChange}
            placeholder=""
          />

          <label>Email</label>
          <input
            type="text"
            name="email"
            autoComplete="off"
            value={email}
            onChange={this.handleChange}
          />

          <label>password</label>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={this.handleChange}
          />
          <br></br>
          <br></br>
          <input type="submit" value="Signup" />
        </Form>
      </Segment>
    );
  }
}
export default SignUp;
