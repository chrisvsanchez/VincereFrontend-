import React from "react";
import Map from "./Maps";
import EventCards from "./EventCards";
import { Header } from "semantic-ui-react";

class EventContainer extends React.Component {
  render() {
    return (
      <div>
        <Header as="h1" textAlign="center">
          Vincere Cycling Events
        </Header>
        <div></div>
        <Map></Map>
        <EventCards currentUser={this.props.currentUser} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
export default EventContainer;
