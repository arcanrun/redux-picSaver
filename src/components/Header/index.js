import React from "react";

import "../../static/icons.css";
import "./style.css";
const Header = () => (
  <header className="header">
    <i className="menu" style={{ float: "left", cursour: "pointer" }} />
    <p className="header__title">picSaver</p>
  </header>
);

export default Header;
