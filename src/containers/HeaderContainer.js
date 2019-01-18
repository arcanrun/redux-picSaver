import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header/index";
import { toggleMenu } from "../actions/menuActions";

const mapStateToProps = state => ({
  isVisible: state.menu.isVisible
});
const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(toggleMenu())
});

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
