import React from "react";
import Search from "./Search";
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
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/cart">
            <CheckoutContainer />
          </Route>
          <Route path="/itemshowpage/:id" component={ItemShowPage} />
        </Switch>
        <Footer />
      </>
    );
  }
}
export default MainContainer;
