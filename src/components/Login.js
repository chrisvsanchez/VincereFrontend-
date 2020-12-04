import React from "react";
import { Segment, Form, Button, Grid } from "semantic-ui-react";

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
        console.log(data, "yo");
        // console.log(data);
        // const { user, token } = data;
        this.props.handleLogin(data);
        localStorage.userId = data.id;
      });
  };
  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Row centered columns={4}></Grid.Row>
        <Grid.Row centered columns={4}></Grid.Row>
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
              <h1>Login</h1>
              <label>
                <h3>
                  <strong>Email</strong>
                </h3>
              </label>
              <input
                type="text"
                name="email"
                autoComplete="off"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <br></br>
              <br></br>
              <label>
                <h3>
                  <strong>Password</strong>
                </h3>
              </label>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <br></br>
              <br></br>
              {/* <input type="submit" value="Login" /> */}
              <Button size="large" fluid inverted type="submit">
                Login
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Row centered columns={4}></Grid.Row>
        <Grid.Row centered columns={4}></Grid.Row>
        <Grid.Row centered columns={4}></Grid.Row>
      </Grid>
    );
  }
}
export default Login;
