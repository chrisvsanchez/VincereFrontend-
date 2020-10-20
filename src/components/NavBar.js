import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Image, Icon } from "semantic-ui-react";
import MyImage from "./Images/Vincerenycycling_2line_black.png";
class NavBar extends React.Component {
  render() {
    return (
      <div class="ui menu" id="menu">
        <a class="item">
          <Link to="/">
            <h3>Home</h3>
          </Link>
        </a>
        <a class="item">
          <Link to="/shop">
            <h3>Shop</h3>
          </Link>
        </a>
        <a class="item">
          <Link to="/events">
            <h3>Cycling Club Events</h3>
          </Link>
        </a>
        <a class="image">
          <Image class="image" size={"medium"} center src={MyImage} />
        </a>
        {this.props.currentUser === null ? (
          <>
            <a class="item">
              <Link to="/signup">
                <h3>Sign up</h3>
              </Link>
            </a>

            <a class="item">
              <Link to="/login">
                <h3>Login</h3>
              </Link>
            </a>
          </>
        ) : (
          <a class="item" onClick={this.props.handleLogout}>
            <Link to="/">
              <h3>Logout</h3>
            </Link>
          </a>
        )}
        {this.props.currentUser === null ? null : (
          <a class="item" style={{}}>
            <Link to="/settings">
              <h3>Account</h3>
              <Icon color={"black"} size={"large"} name="setting" />
              <br></br>
            </Link>
          </a>
        )}
        <a class="item">
          <Link to="/cart">
            <Icon size={"large"} color={"black"} name="shopping cart" />{" "}
            {this.props.cart.length === 0 ? null : this.props.cart.length}
          </Link>
        </a>
      </div>
    );
  }
}
export default NavBar;
