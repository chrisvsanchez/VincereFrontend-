import React from "react";
import CheckoutItemCard from "./CheckoutItemCards";
import { Header, Button } from "semantic-ui-react";
class CheckoutContainer extends React.Component {
  turnToItemSection = () => {
    return this.props.cart.map((item) => (
      <CheckoutItemCard key={item.id} item={item} />
    ));
  };
  render() {
    return (
      <>
        <h1>CheckoutContainer</h1>
        <h1>Item Cards </h1>
        {this.turnToItemSection()}
        <Header
          style={{ backgroundColor: "black" }}
          inverted
          as="h1"
          textAlign="center"
        >
          <br></br>
          Total:
          <br></br>
          <Button inverted size="large">
            CHECK OUT
          </Button>
          <br></br>
          <br></br>
        </Header>
      </>
    );
  }
}
export default CheckoutContainer;
