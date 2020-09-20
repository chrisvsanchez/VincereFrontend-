import React from "react";
import { Grid, Image, Header, Button } from "semantic-ui-react";
class CheckoutItemCards extends React.Component {
  state = {
    quantity: 1,
  };
  increase = (prevState) => {
    if (
      this.state.quantity >= 1 &&
      this.state.quantity <= this.props.item.quantity
    )
      this.setState((prevState) => {
        return { quantity: prevState.quantity + 1 };
      });
  };

  render() {
    const { image1, price, name, quantity } = this.props.item;
    return (
      <>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src={image1} />
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h3" textAlign="center">
                {name}
              </Header>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as="h3" textAlign="center">
                <Button floated="left">➖</Button>
                Quantity: {this.state.quantity}
                <Button floated="right" onClick={() => this.increase()}>
                  ➕
                </Button>
              </Header>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h3" textAlign="center">
                ${price}.00
              </Header>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h3" textAlign="center">
                Remove Item
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}
export default CheckoutItemCards;
