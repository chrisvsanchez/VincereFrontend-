import React from "react";
import { Button, Form, Grid, Segment, Header } from "semantic-ui-react";

class CheckoutTransaction extends React.Component {
  state = {
    cardName: "",
    cardNumber: "",
    expirationDate: "",
    cvc: "",
  };
  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    this.handleSubmit = (e) => {
      e.preventDefault();
      let cardInfo = {
        cardName: this.state.cardName,
        cardNumber: this.state.cardNumber,
        expirationDate: this.state.expirationDate,
        cvc: this.state.cvc,
      };
      return this.props.togglePaymentForm(cardInfo);
    };
  };
  render() {
    return (
      <>
        <Segment inverted>
          <Header as="h2">Payment</Header>
          <Form inverted>
            <Grid.Row>
              <Grid.Column>
                <Form.Group widths="equal">
                  <Form.Input
                    onChange={this.handleChange}
                    name="cardName"
                    value={this.state.cardName}
                    required
                    fluid
                    label="Card Holder's Name"
                    placeholder="Card Holder's Name"
                  />
                  <Form.Input
                    onChange={this.handleChange}
                    name="cardNumber"
                    value={this.state.cardNumber}
                    required
                    fluid
                    label="Card Number"
                    placeholder="Card Number"
                  />
                </Form.Group>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form.Group widths="equal">
                  <Form.Input
                    onChange={this.handleChange}
                    name="expirationDate"
                    value={this.state.expirationDate}
                    required
                    fluid
                    label="Expiration Date"
                    placeholder="Expiration Date"
                  />
                  <Form.Input
                    onChange={this.handleChange}
                    name="cvc"
                    value={this.state.cvc}
                    required
                    fluid
                    label="CVC/CV"
                    placeholder="CVC/CV"
                  />
                </Form.Group>
              </Grid.Column>
            </Grid.Row>
            {/* <Form.Checkbox label="I agree to the Terms and Conditions" /> */}
            <Form.Button
              onClick={this.handleSubmit}
              inverted
              type="submit"
              fluid
              color="green"
              disabled={
                !this.state.cardName ||
                !this.state.cardNumber ||
                !this.state.expirationDate ||
                !this.state.cvc
              }
            >
              Submit
            </Form.Button>
          </Form>
        </Segment>
      </>
    );
  }
}
export default CheckoutTransaction;
