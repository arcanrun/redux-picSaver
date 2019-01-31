import React from "react";
import PropTypes from "prop-types";

import "../../static/icons.css";
import "./style.css";

const menuStyle = {
  position: "absolute",
  cursor: "pointer",
  left: "20px",
  marginTop: "10px"
};

const Header = ({ onClick }) => (
  <header className="header">
    <i className="menu" style={menuStyle} onClick={onClick} />
    <p className="header__title">picSaver</p>
  </header>
);
Header.propTypes = {
  onClick: PropTypes.func.isRequired
};
export default Header;
