import React from "react";
import {
  Grid,
  Segment,
  Image,
  Button,
  Dropdown,
  Header,
} from "semantic-ui-react";
class ItemShowPage extends React.Component {
  state = {
    currentItem: [],
    imageHover: false,
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
  changeImage = () => {
    this.setState({
      imageHover: !this.state.imageHover,
    });
  };
  render() {
    console.log(this.state.currentItem);
    let options = [{ key: 1, text: "One Size Fits All", value: 1 }];
    let howMany = [
      { key: 1, text: "1", value: 1 },
      { key: 2, text: "2", value: 2 },
      { key: 3, text: "3", value: 3 },
      { key: 4, text: "4", value: 4 },
      { key: 5, text: "5", value: 5 },
    ];
    const {
      image1,
      image2,
      name,
      id,
      description,
      price,
    } = this.state.currentItem;
    return (
      <>
        <br></br>
        <br></br>
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
              <div>
                <Image
                  onMouseEnter={this.changeImage}
                  onMouseLeave={this.changeImage}
                  size="large"
                  src={!this.state.imageHover ? image1 : image2}
                />
              </div>
            </Grid.Column>
            <Grid.Column center>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h1>{name}</h1>

              <Dropdown
                clearable
                options={options}
                selection
                placeholder="Size"
              />
              <h2>${price}.00</h2>
              {/* <Dropdown
                clearable
                options={howMany}
                selection
                placeholder="Quantity"
              /> */}
            </Grid.Column>
          </Grid.Row>
          {/* <Header as="h2">Product Description</Header> */}
          {/* <h3>{description}</h3> */}
          <div>
            <Header as="h2" attached="top">
              Product Description
            </Header>
            <Segment attached>{description}</Segment>
          </div>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </>
    );
  }
}
export default ItemShowPage;
