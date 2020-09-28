import React from "react";
import { Grid, Image, Header, Button } from "semantic-ui-react";
class CheckoutItemCards extends React.Component {
  state = {
    quantity: 1,
  };
  increase = () => {
    this.setState((prevState) => {
      if (
        prevState.quantity >= 1 &&
        // Since the current cart refreshing once rendered it cannot grab the item's quantity
        // or does the item not have an item quanitity in the backend ?
        prevState.quantity < this.props.item.quantity
      ) {
        return { quantity: prevState.quantity + 1 };
      } else {
        return null;
      }
    }, this.props.updateCartQuantity(this.state.quantity));
  };
  decrease = () => {
    this.setState((prevState) => {
      if (prevState.quantity === 1) {
        // Since the current cart refreshing once rendered it cannot grab the item's quantity
        // or does the item not have an item quanitity in the backend ?
        return null;
      } else {
        return { quantity: prevState.quantity - 1 };
      }
    });
  };
  //   handleRemoveItem = () => {
  //     this.props.removeItem(this.props.item);
  //   };
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
                <Button floated="left" onClick={this.decrease}>
                  ➖
                </Button>
                Quantity: {this.state.quantity}
                <Button floated="right" onClick={this.increase}>
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
              <Header
                as="h3"
                onClick={() => this.props.removeItem(this.props.item)}
                textAlign="center"
              >
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
