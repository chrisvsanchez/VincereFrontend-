import React from "react";
// import { Card } from "semantic-ui-react";
import ItemContainer from "./ItemContainer";
import ItemCard from "./ItemCard";
class ProductPage extends React.Component {
  turnToCard = (props) => {
    return this.props.products.map((item) => (
      <ItemCard key={item.id} item={item} />
    ));
  };
  render() {
    return (
      <>
        <h1>Product Page</h1>
        <ItemContainer turnToCard={this.turnToCard()} />
      </>
    );
  }
}
export default ProductPage;
