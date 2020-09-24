import React from "react";
import SettingSideBar from "./SettingSideBar";
import { Form, Segment, Button, Grid } from "semantic-ui-react";
import OrderSection from "./orderSection";
class Settings extends React.Component {
  state = {
    email: false,
    password: false,
    confirmEmail: "",
    newEmail: "",
    orderHistory: false,
  };
  submitHandler = (e) => {
    e.preventDefault();

    if (this.state.newEmail !== this.state.confirmEmail) {
      alert("Emails do not match! Try again");
    } else {
      fetch(`http://localhost:3000/users/${this.props.currentUserObj.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email: this.state.newEmail }),
      })
        .then((r) => r.json())
        .then((updatedUserObj) => {
          console.log(updatedUserObj);
          this.props.updateCurrentUserObj(updatedUserObj);
          this.setState({
            newEmail: "",
            confirmEmail: "",
            email: false,
          });
        });
    }
  };
  showForm = () => {
    return (
      <Segment>
        <Form onSubmit={this.submitHandler}>
          <h1>{"Update Email"}</h1>
          <h3>
            <strong>Current Email: </strong> {this.props.currentUserObj.email}
          </h3>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="New Email"
              placeholder="newEmail"
              name="newEmail"
              value={this.state.newEmail}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Confirm New Email"
              placeholder=" Confirm New Email"
              name="confirmEmail"
              value={this.state.confirmEmail}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button.Group>
            <Form.Button>Submit</Form.Button>
            <Button onClick={this.updateEmail}>Cancel</Button>
          </Button.Group>
        </Form>
      </Segment>
    );
  };
  updateEmail = () => {
    this.setState({
      email: !this.state.email,
    });
  };
  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <h1>Welcome to Settings {this.props.currentUserObj.name}</h1>
        <Grid columns="equal" divided padded>
          <Grid.Row color="white" textAlign="left">
            <Grid.Column>
              <Segment color="white">
                <SettingSideBar updateEmail={this.updateEmail} />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="black" inverted>
                <h3>Name: {this.props.currentUserObj.name}</h3>
                <h3>Email: {this.props.currentUserObj.email}</h3>
                <h3>Address: {this.props.currentUserObj.address}</h3>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {/* <SettingSideBar updateEmail={this.updateEmail} /> */}
        {this.state.email ? this.showForm() : null}
        {this.state.orderHistory ? this.showOrderHistory() : null}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </>
    );
  }
}
export default Settings;
