import React from "react";
import { Segment, Card } from "semantic-ui-react";

class ItemContainer extends React.Component {
  render() {
    return (
      <>
        <h1>ItemContainer </h1>
        <Segment></Segment>
        <Card.Group centered itemsPerRow={4}>
          {this.props.turnToCard}
        </Card.Group>
        <br></br>
        <br></br>
      </>
    );
  }
}
export default ItemContainer;
