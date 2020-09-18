import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import ItemShowPage from "./ItemShowPage";
class itemCard extends React.Component {
  state = { itemImage: true };
  handleClick = (e) => {};

  render() {
    const { image1, name, price, id } = this.props.item;
    return (
      <Card>
        <Image
          src={image1}
          //   Toggle image based on synthetic event
          //   onMouseOver={this.toggleImage}
          as="a"
          size="medium"
        />
        <div>
          <Link to={`/itemshowpage/${id}`}>
            <h3>{name}</h3>
            <h4>${price}.00</h4>
          </Link>
        </div>
      </Card>
    );
  }
}
export default itemCard;
