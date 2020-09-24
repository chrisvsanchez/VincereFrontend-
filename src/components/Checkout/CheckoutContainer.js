import React from "react";
import CheckoutItemCard from "./CheckoutItemCards";
import { Form, Input, Button, Segment } from "semantic-ui-react";

class CheckoutContainer extends React.Component {
  state = {
    addressForm: false,
    firstName: "",
    lastName: "",
    shipAddress: "",
    country: "",
    phoneNumber: "",
    shippingEmail: "",
    zipCode: "",
    currentOrderID: 0,
  };
  turnToItemSection = () => {
    return this.props.cart.map((item) => (
      <CheckoutItemCard
        key={item.id}
        removeItem={this.props.removeItem}
        item={item}
      />
    ));
  };
  toggleClick = () => {
    this.setState({
      addressForm: !this.state.addressForm,
    });
  };
  handleFormChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  handleAddressForm = () => {
    return (
      <Segment>
        <Form>
          <h2>Shipping Address</h2>
          <Form.Group widths="equal">
            <Form.Input
              onChange={this.handleFormChange}
              id="form-input-control-first-name"
              control={Input}
              label="First Name"
              name="firstName"
              value={this.state.firstName}
              placeholder="First name"
            />
            <Form.Input
              onChange={this.handleFormChange}
              id="form-input-control-last-name"
              control={Input}
              label="Last Name"
              name="lastName"
              value={this.state.lastName}
              placeholder="Last name"
            />
            <Form.Input
              onChange={this.handleFormChange}
              id="form-input-control-address"
              control={Input}
              label="Address"
              name="shipAddress"
              value={this.state.shipAddress}
              placeholder="Address"
            />

            <Form.Input
              onChange={this.handleFormChange}
              id="form-input-control-zip-code"
              control={Input}
              label="Zip Code"
              name="zipCode"
              value={this.state.zipCode}
              placeholder="Zip Code"
            />
            <Form.Input
              onChange={this.handleFormChange}
              id="form-textarea-control-phone-number"
              control={Input}
              label="Phone Number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              placeholder="Phone Number"
            />
            <Form.Input
              onChange={this.handleFormChange}
              id="form-input-control-error-email"
              control={Input}
              label="Email"
              name="shippingEmail"
              placeholder="{joe@schmoe.com}"
              value={this.state.shippingEmail}
              error={{
                content: "Please enter a valid email address",
                pointing: "below",
              }}
            />
          </Form.Group>
          <Form.Input
            onClick={this.createOrder}
            id="form-button-control-public"
            control={Button}
            content="Confirm"
            label=""
          />
        </Form>
      </Segment>
    );
  };
  createOrder = () => {
    let orderInfo = {
      address: this.state.shipAddress,
      user_id: this.props.currentUser.id,
      total: this.props.cartTotal,
    };

    fetch(`http://localhost:3000/orders`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((r) => r.json())
      .then((orderObj) => {
        this.setState({
          currentOrderID: orderObj.id,
        });
      });
  };
  render() {
    return (
      <>
        <h1>My Order </h1>
        {this.turnToItemSection()}

        {this.state.addressForm ? this.handleAddressForm() : null}

        <Segment inverted>
          <h2>Total:${this.props.cartTotal}.00</h2>

          <Button onClick={this.toggleClick} inverted size="large">
            CHECK OUT
          </Button>
        </Segment>
        <br></br>
        <br></br>
      </>
    );
  }
}
export default CheckoutContainer;
