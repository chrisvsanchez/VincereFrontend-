import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import Settings from "./Settings";
import ProductsPage from "./Products/ProductPage";
import ItemShowPage from "./Products/ItemShowPage";
import CheckoutContainer from "./Checkout/CheckoutContainer";
import { Switch, Route } from "react-router-dom";
class MainContainer extends React.Component {
  state = {
    products: [],
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
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <ProductsPage products={this.state.products} />
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
