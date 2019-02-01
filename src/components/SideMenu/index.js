import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./style.css";
import "../../static/icons.css";

const closeStyle = {
  position: "absolute",
  right: 0,
  margin: "20px",
  cursor: "pointer"
};
class SideMenu extends React.Component {
  handleToggle = e => {
    const target = e.target.nodeName;
    const allowTarget = ["A", "I"];
    if (allowTarget.includes(target)) {
      this.props.onClick();
    }
  };
  render() {
    const { isVisible, userName } = this.props;
    return (
      <div
        className={isVisible ? "sidemenu" : "sidemenu sidemenu_display_hidden"}
        onClick={this.handleToggle}
      >
        <i className="close" style={closeStyle} />
        <ul className="sidemenu__items">
          <li>
            <Link to="/redux-picSaver">Home</Link>
          </li>
          {userName === "" ? (
            ""
          ) : (
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

SideMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
export default SideMenu;
