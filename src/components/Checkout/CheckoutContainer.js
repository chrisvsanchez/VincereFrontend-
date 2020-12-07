import React from "react";
import CheckoutItemCard from "./CheckoutItemCards";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Segment,
  Header,
  Grid,
  Image,
} from "semantic-ui-react";
import CheckoutTransaction from "./CheckoutTransaction";
import CheckoutReceipt from "./CheckoutReceipt";

class CheckoutContainer extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    shipAddress: "",
    country: "",
    phoneNumber: "",
    shippingEmail: "",
    zipCode: "",
    currentOrderID: 0,
    orderObj: null,
    orderItemObj: null,
    addressForm: true,
    addressInput: false,
    paymentForm: true,
    paymentFormSubmitted: false,
    editAddressFormClicked: false,
    cardInfo: null,
  };

  turnToItemSection = () => {
    return this.props.cart.map((item) => (
      <CheckoutItemCard
        key={item.id}
        removeItem={this.props.removeItem}
        item={item}
        updateCartQuantity={this.props.updateCartQuantity}
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
      <Segment inverted>
        <Form inverted>
          <h2>Shipping Address</h2>
          <Form.Group widths="equal">
            <Form.Input
              required
              onChange={this.handleFormChange}
              id="form-input-control-first-name"
              control={Input}
              label="First Name"
              name="firstName"
              value={this.state.firstName}
              placeholder="First name"
            />
            <Form.Input
              required
              onChange={this.handleFormChange}
              id="form-input-control-last-name"
              control={Input}
              label="Last Name"
              name="lastName"
              value={this.state.lastName}
              placeholder="Last name"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              required
              onChange={this.handleFormChange}
              id="form-input-control-address"
              control={Input}
              label="Address"
              name="shipAddress"
              value={this.state.shipAddress}
              placeholder="Address"
            />

            <Form.Input
              required
              onChange={this.handleFormChange}
              id="form-input-control-zip-code"
              control={Input}
              label="Zip Code"
              name="zipCode"
              value={this.state.zipCode}
              placeholder="Zip Code"
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              required
              onChange={this.handleFormChange}
              id="form-textarea-control-phone-number"
              control={Input}
              label="Phone Number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              placeholder="Phone Number"
            />
            <Form.Input
              required
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
          <Form.Button
            onClick={this.createOrder}
            id="form-button-control-public"
            control={Button}
            content="Confirm"
            inverted
            color="green"
            fluid
            label=""
            disabled={
              !this.state.firstName ||
              !this.state.lastName ||
              !this.state.shipAddress ||
              !this.state.zipCode ||
              !this.state.phoneNumber ||
              !this.state.shippingEmail
            }
          />
        </Form>
      </Segment>
    );
  };
  createOrder = () => {
    let tax = this.props.cartTotal * 0.08875;
    let cartIDs = this.props.cart.map((item) => item.id);
    let orderInfo = {
      address: this.state.shipAddress + " " + this.state.zipCode,
      user_id: localStorage.token,
      subtotal: this.props.cartTotal,
      total: this.props.cartTotal + tax,
      tax: this.props.cartTotal * 0.08875,
      cart: cartIDs,
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
        console.log(orderObj.id, "CheckoutContainer");
        this.setState({
          currentOrderID: orderObj.id,
          orderObj: orderObj,
          addressForm: false,
        });
      });
  };

  createOrderItem = () => {
    let orderNumber = this.state.orderObj.id;
    this.props.cart.forEach((item) => {
      fetch(`http://localhost:3000/order_items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_id: orderNumber,
          item_id: item.id,
        }),
      })
        .then((r) => r.json())
        .then((newOrderItemObj) => {
          console.log("OrderNum", orderNumber);
          console.log("item.id", item.id);
          this.setState({
            orderItemObj: newOrderItemObj,
            addressForm: false,
            addressInput: !this.state.addressInput,
          });
        });
    });
  };

  renderOrderAddress = () => {
    return (
      <Segment>
        <h1>Shipping Address</h1>
        <Header as="h3">{this.state.shipAddress}</Header>
        <Button onClick={this.toggleEditAddressForm}>Edit</Button>
      </Segment>
    );
  };
  renderPaymentInfo = (cardObj) => {
    console.log(this.state.cardInfo);
    return (
      <>
        <Segment>
          <Header as="h3">Credit Card info</Header>
          <h3>Card Name:{this.state.cardInfo.cardName}</h3>
          <h3>Card Number:{this.state.cardInfo.cardNumber}</h3>
          <h3>Card Expiration Date:{this.state.cardInfo.expirationDate}</h3>
          <h3>CVC:{this.state.cardInfo.cvc}</h3>
          <Button onClick={() => this.togglePaymentFormToEdit()}>Edit</Button>
        </Segment>
      </>
    );
  };

  toggleEditAddressForm = () => {
    this.setState({
      editAddressFormClicked: !this.state.editAddressFormClicked,
    });
  };
  editOrderAddressForm = () => {
    return (
      <>
        <Segment inverted>
          <Form inverted>
            <h2> Edit Shipping Address</h2>
            <Form.Group widths="equal">
              <Form.Input
                required
                onChange={this.handleFormChange}
                id="form-input-control-first-name"
                control={Input}
                label="First Name"
                name="firstName"
                value={this.state.firstName}
                placeholder="First name"
              />
              <Form.Input
                required
                onChange={this.handleFormChange}
                id="form-input-control-last-name"
                control={Input}
                label="Last Name"
                name="lastName"
                value={this.state.lastName}
                placeholder="Last name"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                required
                onChange={this.handleFormChange}
                id="form-input-control-address"
                control={Input}
                label="Address"
                name="shipAddress"
                value={this.state.shipAddress}
                placeholder="Address"
              />

              <Form.Input
                required
                onChange={this.handleFormChange}
                id="form-input-control-zip-code"
                control={Input}
                label="Zip Code"
                name="zipCode"
                value={this.state.zipCode}
                placeholder="Zip Code"
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                required
                onChange={this.handleFormChange}
                id="form-textarea-control-phone-number"
                control={Input}
                label="Phone Number"
                name="phoneNumber"
                value={this.state.phoneNumber}
                placeholder="Phone Number"
              />
              <Form.Input
                required
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
              onClick={this.handleEditAddressFormButton}
              id="form-button-control-public"
              control={Button}
              content="Confirm"
              inverted
              label=""
            />
          </Form>
        </Segment>
      </>
    );
  };
  handleEditAddressFormButton = () => {
    this.toggleEditAddressForm();
    this.editOrderAddress();
  };
  editOrderAddress = () => {
    let orderInfo = {
      address: this.state.shipAddress,
      user_id: this.props.currentUser.id,
      total: this.props.cartTotal,
    };
    fetch(`http://localhost:3000/order/${this.state.orderObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderInfo }),
    })
      .then((r) => r.json())
      .then((updatedOrder) => {
        this.setState({
          orderitemObj: updatedOrder,
        });
      });
  };
  togglePaymentForm = (cardObj) => {
    this.setState(
      {
        paymentForm: !this.state.paymentForm,
        paymentFormSubmitted: !this.state.paymentFormSubmitted,
        cardInfo: cardObj,
      },
      () => {
        this.renderPaymentInfo();
      }
    );
  };
  togglePaymentFormToEdit = (cardObj) => {
    this.setState({
      paymentForm: !this.state.paymentForm,
      paymentFormSubmitted: !this.state.paymentFormSubmitted,
    });
  };
  turnToRow = () => {
    return this.props.cart.map((item) => (
      <Grid columns="equal" columns={3}>
        <Grid.Row textAlign="center">
          <Grid.Column centered>
            <Image size="tiny" src={item.image1}></Image>
            {item.name}
          </Grid.Column>
          <Grid.Column centered> {item.quantity}</Grid.Column>
          <Grid.Column centered>{item.price}</Grid.Column>
        </Grid.Row>
      </Grid>
    ));
  };
  render() {
    return (
      <>
        <Header textAlign="center" as="h1">
          CART
        </Header>
        <Link to="/shop">
          <Button color="grey" size={"big"} floated="right">
            Continue Shopping <i class="bicycle icon"></i>
          </Button>
        </Link>
        {this.props.cart.length === 0 ? (
          <Header as="h1" color="blue" textAlign="center">
            THERE ARE NO ITEMS IN YOUR CART 🤷🏽‍♂️
          </Header>
        ) : null}
        {this.turnToItemSection()}

        {this.state.addressInput ? this.renderOrderAddress() : null}
        {this.state.editAddressFormClicked ? this.editOrderAddressForm() : null}
        {this.state.addressForm && this.props.cart.length > 0
          ? this.handleAddressForm()
          : null}
        {this.props.cart.length !== 0 && this.state.paymentForm ? (
          <CheckoutTransaction
            togglePaymentForm={this.togglePaymentForm}
            renderPaymentInfo={this.renderPaymentInfo}
          />
        ) : null}
        {/* STRPE API COMPONENT */}
        {/* <CheckoutForm orderId={this.state.orderObj.id} /> */}
        {this.state.paymentFormSubmitted ? this.renderPaymentInfo() : null}
        {this.props.cart.length > 0 ? (
          <Button primary role="link">
            Checky outtie
          </Button>
        ) : null}
        {this.props.cart.length === 0 ? null : (
          <Segment inverted>
            <h2>Total:${this.props.cartTotal}</h2>
            <CheckoutReceipt
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              shipAddress={this.state.shipAddress}
              zipCode={this.state.zipCode}
              shippingEmail={this.state.shippingEmail}
              phoneNumber={this.state.phoneNumber}
              cardInfo={this.state.cardInfo}
              currentUser={this.props.currentUser}
              cartTotal={this.props.cartTotal}
              turnToRow={this.turnToRow}
              purchaseComplete={this.props.purchaseComplete}
            ></CheckoutReceipt>
          </Segment>
        )}
        <br></br>
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
export default CheckoutContainer;
