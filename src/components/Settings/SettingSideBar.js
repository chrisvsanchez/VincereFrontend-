import React from "react";

import {
  Dropdown,
  Menu,
  Segment,
  Image,
  Form,
  Grid,
  Button,
} from "semantic-ui-react";
class SettingSideBar extends React.Component {
  state = { activeItem: "account", email: false, password: false };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <Menu secondary vertical>
          <Menu.Item
            name="account"
            active={activeItem === "account"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Order History"
            active={activeItem === "Order History"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Registered Events"
            active={activeItem === "Registered Events"}
            onClick={this.handleItemClick}
          />
          <Dropdown item text="Update Info">
            <Dropdown.Menu>
              {/* <Dropdown.Header>Text Size</Dropdown.Header> */}
              <Dropdown.Item onClick={this.props.updateEmail}>
                Email
              </Dropdown.Item>
              <Dropdown.Item>Password</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
        {this.state.email ? this.props.showForm : null}
      </>
    );
  }
}
export default SettingSideBar;
