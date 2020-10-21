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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Map from "./Map";
class EventCards extends React.Component {
  state = { events: [], createdSignUpObj: [], num: 1 };
  notify = () =>
    toast.error(<h3>Please sign up or log in to register!</h3>, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  registeredAlready = (message) =>
    toast.error(<h3>{message}</h3>, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  componentDidMount() {
    fetch("http://localhost:3000/events")
      .then((r) => r.json())
      .then((allEvents) => {
        this.setState({
          events: allEvents,
        });
      });
  }

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
        // console.log(newlyCreatedSignUp);
        if (newlyCreatedSignUp.message) {
          this.registeredAlready(newlyCreatedSignUp.message);
        } else {
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
        }
      });
  };
  turnEventToCard = () => {
    return this.state.events.map((event) => (
      <Card inverted centered>
        {event.name === "Bear Mountain Climb 60k" ? (
          <Image size="large" src={Bear} />
        ) : event.name === "North County Trailway 70k" ? (
          <Image size="large" src={NorthCounty} />
        ) : event.name === "Vincere's Annual Century Ride" ? (
          <Image size="large" src={Century} />
        ) : null}
        <Card.Content>
          <Card.Header>{event.name}</Card.Header>
          <br></br>
          <Card.Meta>
            {this.props.currentUser ? (
              <Button
                fluid
                center
                secondary
                onClick={() => {
                  this.registerUser(event.id);
                }}
              >
                Register
              </Button>
            ) : (
              <Button fluid center secondary onClick={this.notify}>
                Register
              </Button>
            )}
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <br></br>
        <br></br>
        <br></br>
      </>
    );
  }
}

export default EventCards;
