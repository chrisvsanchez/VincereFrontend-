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
class MainContainer extends React.Component {
  state = {
    products: [],
    search: "",
    cart: [],
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
  addToCard = (currentItemObj) => {
    let addingObj = [currentItemObj, ...this.state.cart];
    this.setState({
      cart: addingObj,
    });
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
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/cart">
            <CheckoutContainer cart={this.state.cart} />
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
