import React from "react";
import PropTypes from "prop-types";

import "../../static/icons.css";
import "./style.css";
const Header = ({ onClick }) => (
  <header className="header">
    <i
      className="menu"
      style={{ position: "absolute", cursor: "pointer", left: "20px" }}
      onClick={onClick}
    />
    <p className="header__title">picSaver</p>
  </header>
);
Header.propTypes = {
  onClick: PropTypes.func.isRequired
};
export default Header;
