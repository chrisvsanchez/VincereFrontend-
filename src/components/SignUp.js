import React from "react";
import { Form, Segment, Button, Grid } from "semantic-ui-react";
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
      .then((data) => {
        const { user, token } = data;
        this.props.handleLogin(user);
        localStorage.token = token;
      });
  };
  render() {
    const { email, name, address, password } = this.state;
    return (
      <Grid centered columns={3}>
        <Grid.Row centered columns={4}></Grid.Row>
        <Grid.Row centered columns={4}></Grid.Row>
        <Grid.Row centered columns={4}></Grid.Row>

        <Grid.Column>
          <Segment inverted>
            <Form
              size="medium"
              textAlign="center"
              inverted
              onSubmit={this.handleSubmit}
            >
              <h1>Sign Up</h1>
              <label>
                <h3>
                  <strong>Name</strong>
                </h3>
              </label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                value={name}
                onChange={this.handleChange}
                placeholder="First and last Name"
              />
              <label>
                <h3>
                  <strong>Address</strong>
                </h3>
              </label>
              <input
                type="text"
                name="address"
                autoComplete="off"
                value={address}
                onChange={this.handleChange}
                placeholder=""
              />

              <label>
                <h3>
                  <strong>Email</strong>
                </h3>
              </label>
              <input
                type="text"
                name="email"
                autoComplete="off"
                value={email}
                onChange={this.handleChange}
                placeholder="johndoe@gmail.com"
              />

              <label>
                <h3>
                  <strong>Password</strong>
                </h3>
              </label>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={this.handleChange}
              />
              <br></br>
              <br></br>
              {/* <input type="submit" value="Signup" /> */}
              <Button size="large" fluid inverted type="submit">
                Create Account
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
export default SignUp;
