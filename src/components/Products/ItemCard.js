import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Header } from "semantic-ui-react";

class itemCard extends React.Component {
  state = { itemImage: true };
  handleClick = (e) => {};

  render() {
    const { image1, name, price, id } = this.props.item;
    return (
      <Link to={`/itemshowpage/${id}`}>
        <Card>
          <Image
            src={image1}
            //   Toggle image based on synthetic event
            //   onMouseOver={this.toggleImage}
            as="a"
            size="medium"
          />
          <div>
            <Header as="h3" textAlign="center">
              {name}
              <br></br>${price}.00
            </Header>
          </div>
        </Card>
      </Link>
    );
  }
}
export default itemCard;
