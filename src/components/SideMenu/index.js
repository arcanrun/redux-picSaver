import React from "react";
import PropTypes from "prop-types";

import "./style.css";
import "../../static/icons.css";
const closeStyle = {
  position: "absolute",
  right: 0,
  margin: "20px",
  cursor: "pointer"
};
const SideMenu = ({ isVisible, onClick }) => (
  <div className={isVisible ? "sidemenu" : "sidemenu sidemenu_display_hidden"}>
    <i className="close" style={closeStyle} onClick={onClick} />
    <ul className="sidemenu__items">
      <li>Home</li>
      <li>Favorites</li>
      <li>LogIn</li>
    </ul>
  </div>
);

SideMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
export default SideMenu;
