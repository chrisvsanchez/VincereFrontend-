import React from "react";
import { Button, Grid, Segment, Header } from "semantic-ui-react";
import Moment from "react-moment";
import "moment-timezone";
import CheckoutReceipt from "../Checkout/CheckoutReceipt";
class OrderSection extends React.Component {
  state = {
    currentUserObj: [],
  };
  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
      .then((r) => r.json())
      .then((UserObj) => {
        this.setState({
          currentUserObj: UserObj,
        });
      });
  }
  showAddress = () => {
    // this.state.currentUserObj;
    {
      console.log(this.state.currentUserObj.orders);
    }
    // eachOrder.items.map(items =>{
    //   <h3>{items.name}</h3>
    //   <h3>{items.quantity}</h3>
    return this.props.currentUser.orders.map((eachOrder) => (
      // <div>
      //   <h1>Order History</h1>
      //   <h1>{eachOrder.address}</h1>
      //   {eachOrder.items.map((item) => (
      //     <h3>{item.name} </h3>
      //   ))}
      // </div>
      <>
        <Grid columns="equal" divided inverted padded>
          <Grid.Row color="black" textAlign="center">
            <Grid.Column>
              <Segment color="black" inverted>
                <Header>Date</Header>
                <Moment>{eachOrder.created_at}</Moment>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="black" inverted>
                <Header>Order Number</Header>
                {eachOrder.orderNumber}
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="black" inverted>
                <Header>Number of Items Purchased:</Header>
                {eachOrder.items.length}
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="black" inverted>
                <Header>Order Number</Header>
                {"$" + eachOrder.total + ".00"}
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="black" inverted>
                <Button>Details</Button>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    ));
  };
  render() {
    return (
      <>
        <h1>yodifyusaodifsuafoiu</h1>
        {this.showAddress()}
      </>
    );
  }
}
export default OrderSection;
