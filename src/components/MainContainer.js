import React from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Settings from "./Settings/Settings";
import ProductsPage from "./Products/ProductPage";
import ItemShowPage from "./Products/ItemShowPage";
import CheckoutContainer from "./Checkout/CheckoutContainer";
import { Switch, Route } from "react-router-dom";
import EventContainer from "./Event/EventContainer";

class MainContainer extends React.Component {
  state = {
    products: [],
    search: "",
    cart: [],
    cartTotal: 0,
    currentUser: 1,
    itemQuantity: 1,
  };
  purchaseComplete = () => {
    this.setState({
      cart: [],
    });
  };
  componentDidMount() {
    fetch("http://localhost:3000/items")
      .then((r) => r.json())
      .then((allItems) => {
        // console.log("Main container", allItems);
        this.setState({
          products: allItems,
        });
      });
    fetch(`http://localhost:3000/users/${this.state.currentUser}`)
      .then((r) => r.json())
      .then((UserObj) => {
        this.setState({
          currentUser: UserObj,
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
    if (
      prevState.cart !== this.state.cart ||
      prevState.itemQuantity !== this.state.itemQuantity
    ) {
      let total = this.state.cart.reduce(
        (sum, product) => sum + (product.price *= this.state.itemQuantity),
        0
      );
      this.setState({
        cartTotal: total,
        // itemQuantity: 0,
      });
      console.log("prevState", prevState);
      console.log("State", this.state);
    }
    // };
  }
  updateCurrentUserObj = (updatedCurrentUser) => {
    this.setState({
      currentUserObj: updatedCurrentUser,
    });
  };
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
  updateCartQuantity = (quantityupdate) => {
    this.setState((prevState) => ({
      itemQuantity: prevState.itemQuantity + 1,
    }));
  };
  render() {
    return (
      <>
        <NavBar cart={this.state.cart} />
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
          <Route path="/events">
            <EventContainer currentUser={this.state.currentUser} />
          </Route>
          <Route path="/settings">
            <Settings
              currentUserObj={this.state.currentUser}
              updateCurrentUserObj={this.updateCurrentUserObj}
              currentUser={this.state.currentUser}
            />
          </Route>
          <Route path="/cart">
            <CheckoutContainer
              cart={this.state.cart}
              removeItem={this.removeItemFromCart}
              cartTotal={this.state.cartTotal}
              currentUser={this.state.currentUser}
              updateCartQuantity={this.updateCartQuantity}
              purchaseComplete={this.purchaseComplete}
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
