import React from "react";
import {
  Grid,
  Header,
  Segment,
  Image,
  Button,
  Card,
  Icon,
} from "semantic-ui-react";
import Bear from "../Images/Bear mountain.png";
import NorthCounty from "../Images/vancortland.png";
import Century from "../Images/century of the year.png";
// import Map from "./Map";
class EventCards extends React.Component {
  state = { events: [], createdSignUpObj: [], num: 1 };
  componentDidMount() {
    fetch("http://localhost:3000/events")
      .then((r) => r.json())
      .then((allEvents) => {
        this.setState({
          events: allEvents,
        });
      });
  }
  // this.setStat
  // componentDidUpdate(prevState, propsState) {
  //   if (prevState.createdSignUpObj !== this.state.createdSignUpObj) {
  //     fetch("http://localhost:3000/events")
  //       .then((r) => r.json())
  //       .then((allEvents) => {
  //         this.setState({
  //           events: allEvents,
  //         });
  //       });
  //   }
  // }
  registerUser = (eventID) => {
    let signUpObj = {
      user_id: this.props.currentUser.id,
      event_id: eventID,
    };

    fetch("http://localhost:3000/sign_up_for_events/", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(signUpObj),
    })
      .then((r) => r.json())
      .then((newlyCreatedSignUp) => {
        let updatedEvents = this.state.events.map((event) => {
          if (event.id === eventID) {
            let newlyUpdatedEvent = {
              ...event,
              users: [...event.users, newlyCreatedSignUp],
            };
            return newlyUpdatedEvent;
          } else {
            return event;
          }
        });
        this.setState({
          events: [...updatedEvents],
        });
      });
  };

  // turnEventToCard = () => {
  //   return this.state.events.map((event) => (
  //     <Segment>
  //       <Grid celled="internally">
  //         <Grid.Row>
  //           <Grid.Column width={4}>
  //             {/* { event.name === "Bear Mountain Climb 60k"?
  //               <Image src={"/vincere_frontend/src/components/Images/Bear mountain.png"} />
  //             } */}

  //             {event.name === "Bear Mountain Climb 60k" ? (
  //               <Image size="large" src={Bear} />
  //             ) : event.name === "North County Trailway 70k" ? (
  //               <Image size="large" src={NorthCounty} />
  //             ) : event.name === "Vincere's Annual Century Ride" ? (
  //               <Image size="large" src={Century} />
  //             ) : null}
  //           </Grid.Column>
  //           <Grid.Column width={5}>
  //             <Header>{event.name}</Header>
  //             <Header>{event.location_name}</Header>
  //             <Header>{event.event_time}</Header>
  //             <Header>{event.date}</Header>
  //             <Button onClick={this.registerEvent()}>Register</Button>
  //           </Grid.Column>
  //         </Grid.Row>
  //       </Grid>
  //     </Segment>
  //   ));
  // };
  turnEventToCard = () => {
    return this.state.events.map((event) => (
      <Card centered>
        {/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} /> */}
        {event.name === "Bear Mountain Climb 60k" ? (
          <Image size="large" src={Bear} />
        ) : event.name === "North County Trailway 70k" ? (
          <Image size="large" src={NorthCounty} />
        ) : event.name === "Vincere's Annual Century Ride" ? (
          <Image size="large" src={Century} />
        ) : null}
        <Card.Content>
          <Card.Header>{event.name}</Card.Header>
          <Card.Meta>
            <Button
              onClick={() => {
                this.registerUser(event.id);
              }}
            >
              Register
            </Button>
          </Card.Meta>
          <Card.Description></Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a textAlign="center">
            <Icon name="user" />
            {event.users.length} Participants
          </a>
        </Card.Content>
      </Card>
    ));
  };

  registerEvent = () => {};
  render() {
    return (
      <>
        {/* <Map></Map> */}
        <br></br>
        <br></br>

        <Header as="h1" textAlign="center" centered>
          Upcoming Events
        </Header>
        <br></br>
        <Card.Group columns={3}>{this.turnEventToCard()}</Card.Group>
        <br></br>
        <br></br>
        <br></br>
      </>
    );
  }
}

export default EventCards;
