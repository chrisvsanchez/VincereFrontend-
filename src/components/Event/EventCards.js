import React from "react";
import { Grid, Header, Segment, Image, Button } from "semantic-ui-react";
import Bear from "../Images/Bear mountain.png";
import NorthCounty from "../Images/vancortland.png";
import Century from "../Images/century of the year.png";
// import Map from "./Map";
class EventCards extends React.Component {
  state = { events: [] };
  componentDidMount() {
    fetch("http://localhost:3000/events")
      .then((r) => r.json())
      .then((allEvents) => {
        this.setState({
          events: allEvents,
        });
      });
  }
  turnEventToCard = () => {
    return this.state.events.map((event) => (
      <Segment>
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={4}>
              {/* { event.name === "Bear Mountain Climb 60k"?
                <Image src={"/vincere_frontend/src/components/Images/Bear mountain.png"} />
              } */}

              {event.name === "Bear Mountain Climb 60k" ? (
                <Image size="large" src={Bear} />
              ) : event.name === "North County Trailway 70k" ? (
                <Image size="large" src={NorthCounty} />
              ) : event.name === "Vincere's Annual Century Ride" ? (
                <Image size="large" src={Century} />
              ) : null}
            </Grid.Column>
            <Grid.Column width={5}>
              <Header>{event.name}</Header>
              <Header>{event.location_name}</Header>
              <Header>{event.event_time}</Header>
              <Header>{event.date}</Header>
              <Button onClick={this.registerEvent()}>Register</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    ));
  };
  registerEvent = () => {};
  render() {
    return (
      <>
        {/* <Map></Map> */}
        <h1>Event Cards</h1>
        {this.turnEventToCard()}
      </>
    );
  }
}

export default EventCards;
