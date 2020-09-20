import React from "react";
import { Segment, Card } from "semantic-ui-react";
import Search from "/Users/chrissanchez/Flatiron/code/mod5/VincereCC/vincere_frontend/src/components/Search.js";
class ItemContainer extends React.Component {
  render() {
    return (
      <>
        <h1>ItemContainer </h1>
        <Segment>
          <Search
            handleSearch={this.props.handleSearch}
            searchState={this.props.searchState}
          />
        </Segment>
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
