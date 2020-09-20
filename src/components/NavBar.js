import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Image, Icon } from "semantic-ui-react";
import MyImage from "/Users/chrissanchez/Flatiron/code/mod5/VincereCC/vincere_frontend/src/Images/mainlogo.png";
class NavBar extends React.Component {
  render() {
    return (
      //  Men Women  Cycling Club logo  Account Cart

      <div class="ui menu" id="menu">
        <a class="item">
          <Link to="/">Home</Link>
        </a>
        <a class="item">
          <Link to="/shop">Shop</Link>
        </a>
        <a class="item">
          <Link to="/about">Cycling Club</Link>
        </a>
        <a class="image">
          <Image size={"tiny"} class="image" center src={MyImage} />
        </a>
        <a class="item">
          <Link to="/settings">
            Account
            <Icon color={"black"} size={"large"} name="setting" />
            <br></br>
          </Link>
        </a>
        <a class="item">
          <Link to="/cart">
            <Icon size={"large"} color={"black"} name="shopping cart" />
          </Link>
        </a>
      </div>
    );
  }
}
export default NavBar;
