import React from "react";
// import { Card } from "semantic-ui-react";
import ItemContainer from "./ItemContainer";
import ItemCard from "./ItemCard";
import { Header } from "semantic-ui-react";
class ProductPage extends React.Component {
  turnToCard = (props) => {
    return this.props.products.map((item) => (
      <ItemCard
        key={item.id}
        item={item}
        addToCard={this.addToCard}

        // cartTotal={this.props.cartTotal}
      />
    ));
  };
  render() {
    return (
      <>
        <div>
          <Header as="h1" textAlign="center">
            CYCLING APPAREL
          </Header>
          <Header textAlign="center" as="p">
            {" "}
            Swap the tarmac for the trails with our range of technical adventure
            apparel and highly durable essentials designed for off-road riding.
          </Header>
        </div>
        <ItemContainer
          handleSearch={this.props.handleSearch}
          turnToCard={this.turnToCard}
          searchState={this.props.searchState}
          //   cartTotal={this.props.cartTotal}
        />
      </>
    );
  }
}
export default ProductPage;
