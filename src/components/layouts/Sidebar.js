import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import "../../stylesheets/SideMenu.css";
export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { Sidebar: true };
  }

  handleSideBar = () => {
    this.setState({ Sidebar: !this.state.Sidebar });
  };

  render() {
    return (
      <div>
        <ProSidebar
          collapsed={this.state.Sidebar}
          breakPoint="md"
          className="fixedNav"
        >
          <Menu iconShape="circle">
            <div className="mycontainer">
              <input
                id="click"
                name="exit"
                type="checkbox"
                onClick={this.handleSideBar}
              />
              <label for="click">
                <span className="burger"></span>
              </label>
            </div>

            <MenuItem icon={<i className="fas fa-tachometer-alt"></i>}>
              Dashboard
              <Link to="/DashBoard/Home" />
            </MenuItem>

            <SubMenu
              icon={<i className="fas fa-tachometer-alt"></i>}
              title="Components"
            >
              <MenuItem>
                Component 1
                <Link to="/DashBoard/Pages" />
              </MenuItem>
              <MenuItem>Component 2</MenuItem>
              <SubMenu
                icon={<i className="fas fa-tachometer-alt"></i>}
                title="Components3"
              >
                <MenuItem>Component 4</MenuItem>
                <MenuItem>Component 5</MenuItem>
              </SubMenu>
            </SubMenu>
          </Menu>
        </ProSidebar>
      </div>
    );
  }
}
