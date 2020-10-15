import React from "react";
import { Segment, Card } from "semantic-ui-react";
import Search from "../Search";
class ItemContainer extends React.Component {
  render() {
    return (
      <>
        <Segment>
          <Search
            handleSearch={this.props.handleSearch}
            searchState={this.props.searchState}
          />
        </Segment>
        <br></br>
        <Card.Group centered itemsPerRow={4}>
          {this.props.turnToCard()}
        </Card.Group>
        <br></br>
        <br></br>
      </>
    );
  }
}
export default ItemContainer;
