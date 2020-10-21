import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Image, Icon } from "semantic-ui-react";
import MyImage from "./Images/Vincerenycycling_2line_black.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class NavBar extends React.Component {
  render() {
    return (
      <div class="ui menu" id="menu">
        <a class="item">
          <Link to="/">
            <h4 class="nav-text">Home</h4>
          </Link>
        </a>
        <a class="item">
          <Link to="/shop">
            <h4 class="nav-text">Shop</h4>
          </Link>
        </a>
        <a class="item">
          <Link to="/events">
            <h4 class="nav-text">Cycling Club Events</h4>
          </Link>
        </a>
        <a class="image">
          <Image class="image" size={"medium"} center src={MyImage} />
        </a>
        {this.props.currentUser === null ? (
          <>
            <a class="item">
              <Link to="/signup">
                <h4 class="nav-text">Sign up</h4>
              </Link>
            </a>

            <a class="item">
              <Link to="/login">
                <h4 class="nav-text">Login</h4>
              </Link>
            </a>
          </>
        ) : (
          <a class="item" onClick={this.props.handleLogout}>
            <Link to="/">
              <h4 class="nav-text">Logout</h4>
            </Link>
          </a>
        )}
        {this.props.currentUser === null ? null : (
          <a class="item" style={{}}>
            <Link to="/settings">
              <h4 class="nav-text">Account</h4>
              <Icon color={"black"} size={"large"} name="setting" />
              <br></br>
            </Link>
          </a>
        )}
        <a class="item">
          <Link to="/cart">
            <Icon size={"large"} color={"black"} name="shopping cart" />
            {this.props.cart.length === 0 ? null : this.props.cart.length}
          </Link>
        </a>
      </div>
    );
  }
}
export default NavBar;
