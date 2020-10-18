import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Image, Icon } from "semantic-ui-react";
import MyImage from "./Images/Vincerenycycling_2line_black.png";
class NavBar extends React.Component {
  render() {
    return (
      //  Men Women  Cycling Club logo  Account Cart

      <div
        class="ui menu"
        id="menu"
        style={{
          color: "black",
        }}
      >
        <a class="item">
          <Link
            to="/"
            style={{
              color: "black",
            }}
          >
            Home
          </Link>
        </a>
        <a class="item">
          <Link
            to="/shop"
            style={{
              color: "black",
            }}
          >
            Shop
          </Link>
        </a>
        <a
          class="item"
          style={{
            color: "black",
          }}
        >
          <Link
            to="/events"
            style={{
              color: "black",
            }}
          >
            Cycling Club Events
          </Link>
        </a>
        <a class="image">
          <Image class="image" size={"medium"} center src={MyImage} />
        </a>
        {this.props.currentUser === null ? (
          <>
            <a
              class="item"
              style={{
                color: "black",
              }}
            >
              <Link
                to="/signup"
                style={{
                  color: "black",
                }}
              >
                Sign up
              </Link>
            </a>

            <a
              class="item"
              style={{
                color: "black",
              }}
            >
              <Link
                to="/login"
                style={{
                  color: "black",
                }}
              >
                Login
              </Link>
            </a>
          </>
        ) : (
          <a
            class="item"
            style={{
              color: "black",
            }}
          >
            <Link
              to="/unknown"
              style={{
                color: "black",
              }}
            >
              Logout
            </Link>
          </a>
        )}
        {this.props.currentUser === null ? null : (
          <a class="item" style={{}}>
            <Link
              to="/settings"
              style={{
                color: "black",
              }}
            >
              Account
              <Icon color={"black"} size={"large"} name="setting" />
              <br></br>
            </Link>
          </a>
        )}
        <a
          class="item"
          // style={{
          //   position: "absolute",
          //   right: "0",
          // }}
        >
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
