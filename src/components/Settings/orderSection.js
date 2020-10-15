import React from "react";
import { Button, Grid, Segment, Header } from "semantic-ui-react";
import Moment from "react-moment";
import "moment-timezone";
import CheckoutReceipt from "../Checkout/CheckoutReceipt";
class OrderSection extends React.Component {
  // state = {
  //   currentUserObj: [],
  // };
  // componentDidMount() {
  //   fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
  //     .then((r) => r.json())
  //     .then((UserObj) => {
  //       this.setState({
  //         currentUserObj: UserObj,
  //       });
  //     });
  // }
  showAddress = () => {
    // let reversedOrders = this.props.currentUser.orders.reverse;
    return this.props.currentUser.orders.reverse().map((eachOrder) => (
      // return this.state.currentUserObj.orders.map((eachOrder) => (
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
                {eachOrder.confirmation}
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="black" inverted>
                <Header>Number of Items Purchased:</Header>
                {console.log(eachOrder)}
                {eachOrder.items.length}
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="black" inverted>
                <Header>Total</Header>
                {eachOrder.total}
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
    return <>{this.showAddress()}</>;
  }
}
export default OrderSection;
