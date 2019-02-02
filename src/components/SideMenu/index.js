import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./style.css";
import "../../static/icons.css";

const closeStyle = {
  position: "absolute",
  left: 0,
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
    const { isVisible, userName, avatar, lastName } = this.props;
    return (
      <div
        className={isVisible ? "sidemenu" : "sidemenu sidemenu_display_hidden"}
        onClick={this.handleToggle}
      >
        <i className="close" style={closeStyle} />

        <ul className="sidemenu__items">
          <li>
            <div className="sidemenu__avatar-block">
              <img src={avatar} alt="avatar" />
              <p>
                {userName} {lastName}
              </p>
            </div>
          </li>
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
