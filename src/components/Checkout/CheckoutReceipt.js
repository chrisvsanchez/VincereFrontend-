import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Modal, Segment, Icon, Image } from "semantic-ui-react";
function CheckoutReceipt(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={
        <Button
          inverted
          size="large"
          color="green"
          disabled={
            !props.firstName ||
            !props.lastName ||
            !props.shipAddress ||
            !props.zipCode ||
            !props.phoneNumber ||
            !props.shippingEmail ||
            !props.cardInfo
          }
        >
          CHECKOUT
        </Button>
      }
    >
      <Modal.Header>Order Confirmation!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <h4>Hello {props.firstName},</h4> <br></br>Thank you so much for
          supporting Vincere Cycling Club! If you are interested is seeing your
          order history, please go to your account page, where you'll see a{" "}
          <br></br>
          <br></br>
          <Icon color={"black"} size={"small"} name="setting" />.
          <Grid columns="equal" divided padded>
            <Grid.Row color="black" textAlign="center">
              <Grid.Column>
                <Segment color="black" inverted>
                  Product Name
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment color="black" inverted>
                  Quantity
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment color="black" inverted>
                  Price
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Description>
        {props.turnToRow()}
      </Modal.Content>
      <Segment inverted>
        <Grid centered columns={2}>
          <Grid.Row centered>
            <Grid.Column textAlign="right">
              <h4>Shipping</h4>
            </Grid.Column>
            <Grid.Column>
              <h4>Free 2-Day Shipping</h4>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column textAlign="right">
              <h4>Subtotal</h4>
            </Grid.Column>
            <Grid.Column>{<h4>${props.cartTotal.toFixed(2)}</h4>}</Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column textAlign="right">
              <h4>Tax</h4>
            </Grid.Column>
            <Grid.Column>
              <h4>${(0.08875 * props.cartTotal).toFixed(2)}</h4>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column textAlign="right">
              <h1>Total</h1>
            </Grid.Column>
            <Grid.Column>
              <h1>
                ${(props.cartTotal + props.cartTotal * 0.08875).toFixed(2)}
              </h1>
            </Grid.Column>
          </Grid.Row>
          {/* </Grid.Row> */}
        </Grid>
      </Segment>
      <Modal.Actions>
        <Link to="/">
          <Button
            onClick={() => {
              setOpen(false);
              props.purchaseComplete();
            }}
          >
            Return Home
          </Button>
        </Link>
      </Modal.Actions>
    </Modal>
  );
}

export default CheckoutReceipt;
