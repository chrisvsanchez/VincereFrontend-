import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Modal, Segment, Icon, Image } from "semantic-ui-react";
function CheckoutReceipt(props) {
  const [open, setOpen] = React.useState(false);
  //   let turnToRow = () => {
  //     return props.cart.map((item) => (
  //       <Grid.Row>
  //         <Image src={item.image1}></Image>
  //         {item.name}
  //         <Grid.Column>{item.quantity}</Grid.Column>
  //         <Grid.Column>{item.price}</Grid.Column>
  //       </Grid.Row>
  //     ));
  //   };
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
      <Grid>
        <Grid.Column>
          <Grid.Row textAlign="center">
            <h2>Shipping: Free 2-Day Shipping</h2>
            <h2>Subtotal: ${props.cartTotal}</h2>
            <h2>Taxes: ${0.08875 * props.cartTotal}</h2>
            <h1>Total: ${props.cartTotal + props.cartTotal * 0.08875}.00</h1>
          </Grid.Row>
        </Grid.Column>
      </Grid>
      <Modal.Actions>
        <Link to="/">
          <Button onClick={() => setOpen(false)}>Return Home</Button>
        </Link>
      </Modal.Actions>
    </Modal>
  );
}

export default CheckoutReceipt;
