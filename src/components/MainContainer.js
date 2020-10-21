import React from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Settings from "./Settings/Settings";
import ProductsPage from "./Products/ProductPage";
import ItemShowPage from "./Products/ItemShowPage";
import CheckoutContainer from "./Checkout/CheckoutContainer";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import EventContainer from "./Event/EventContainer";
import SignUp from "./SignUp";
import Login from "./Login";

class MainContainer extends React.Component {
  state = {
    products: [],
    search: "",
    cart: [],
    cartTotal: 0,
    currentUser: null,
    itemQuantity: 1,
  };
  handleLogin = (currentUser) => {
    this.setState({ currentUser }, () => {
      this.props.history.push("/");
    });
  };
  purchaseComplete = () => {
    this.setState({
      cart: [],
    });
  };
  componentDidMount() {
    if (localStorage.token) {
      fetch(`http://localhost:3000/autologin`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((r) => r.json())
        .then((loggedInUser) => {
          // console.log(loggedInUser);
          this.handleLogin(loggedInUser);
        });
    }
    fetch("http://localhost:3000/items")
      .then((r) => r.json())
      .then((allItems) => {
        // console.log("Main container", allItems);
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
  handleLogout = () => {
    // localStorage.clear();
    localStorage.removeItem("token");
    this.setState(
      {
        currentUser: null,
      },
      () => this.props.history.push("/")
    );
  };

  render() {
    return (
      <>
        <NavBar
          cart={this.state.cart}
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
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
            {this.currentUser !== null ? (
              <Settings
                currentUserObj={this.state.currentUser}
                updateCurrentUserObj={this.updateCurrentUserObj}
                currentUser={this.state.currentUser}
              />
            ) : null}
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
          <Route path="/signup">
            <SignUp handleLogin={this.handleLogin} />
          </Route>
          <Route path="/login">
            <Login handleLogin={this.handleLogin} />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </>
    );
  }
}
export default withRouter(MainContainer);
