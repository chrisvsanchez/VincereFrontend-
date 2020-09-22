import React from "react";
import { Grid, Segment, Image, Button } from "semantic-ui-react";
class ItemShowPage extends React.Component {
  state = {
    currentItem: [],
  };
  componentDidMount() {
    fetch(`http://localhost:3000/items/${this.props.match.params.id}`)
      .then((r) => r.json())
      .then((currentItemObj) => {
        // console.log("this", currentItemObj.image1);
        this.setState({
          currentItem: currentItemObj,
        });
      });
  }

  render() {
    console.log(this.state.currentItem);
    const { image1, name, id, description, price } = this.state.currentItem;
    return (
      <>
        <h1>Individual Item Page </h1>
        <Segment center style={{ backgroundColor: "black" }}>
          <div>
            <h1 style={{ color: "white" }}>{name}</h1>
            <Button
              floated="right"
              inverted
              onClick={() => this.props.addToCard(this.state.currentItem)}
            >
              ADD TO CART
            </Button>
          </div>
          <br></br>
          <br></br>
        </Segment>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Image size="large" src={image1} />
            </Grid.Column>
            <Grid.Column center>
              <h1>{name}</h1>

              <h2>${price}.00</h2>
            </Grid.Column>
          </Grid.Row>
          <h3>{description}</h3>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
      </>
    );
  }
}
export default ItemShowPage;
