import React from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Settings from "./Settings";
import ProductsPage from "./Products/ProductPage";
import ItemShowPage from "./Products/ItemShowPage";
import CheckoutContainer from "./Checkout/CheckoutContainer";
import { Switch, Route } from "react-router-dom";
import { TransitionablePortal } from "semantic-ui-react";
class MainContainer extends React.Component {
  state = {
    products: [],
    search: "",
    cart: [],
    cartTotal: 0,
  };

  componentDidMount() {
    fetch("http://localhost:3000/items")
      .then((r) => r.json())
      .then((allItems) => {
        console.log("Main container", allItems);
        this.setState({
          products: allItems,
        });
      });
  }
  handleInput = (e) => {
    const userSearchInput = e.target.value;
    this.setState({ search: userSearchInput });
    // this.filterSearch(this.state.search);
  };

  filterSearch = (searchWord) => {
    searchWord = this.state.search;
    return this.state.products.filter((item) =>
      item.name.toUpperCase().includes(searchWord.toUpperCase())
    );
  };
  componentDidUpdate(prevProps, prevState) {
    // cartTotal = () => {
    if (prevState.cart !== this.state.cart) {
      let total = this.state.cart.reduce(
        (sum, product) => sum + product.price,
        0
      );

      this.setState({
        cartTotal: total,
      });
      console.log("prevState", prevState);
      console.log("State", this.state);
    }
    // };
  }
  addToCard = (currentItemObj) => {
    let addingObj = [currentItemObj, ...this.state.cart];
    this.setState((prevState) => ({ ...prevState, cart: addingObj }));
    // this.cartTotal();
  };

  removeItemFromCart = (itemObj) => {
    let updatedCart = this.state.cart.filter((item) => item !== itemObj);
    this.setState({
      cart: updatedCart,
    });
    // this.cartTotal();
  };
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <ProductsPage
              products={this.filterSearch()}
              handleSearch={this.handleInput}
              addToCard={this.addToCard}
              searchState={this.state.search}
              //   cartTotal={this.cartTotal}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/cart">
            <CheckoutContainer
              cart={this.state.cart}
              //   cart={this.state.cart}
              removeItem={this.removeItemFromCart}
              cartTotal={this.state.cartTotal}
            />
          </Route>
          <Route
            path="/itemshowpage/:id"
            render={(props) => (
              <ItemShowPage {...props} addToCard={this.addToCard} />
            )}
          />
        </Switch>
        <Footer />
      </>
    );
  }
}
export default MainContainer;
