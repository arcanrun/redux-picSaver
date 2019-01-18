import React from "react";
import { connect } from "react-redux";

import SideMenu from "../components/SideMenu/index";
import { toggleMenu } from "../actions/menuActions";

const mapStateToProps = state => ({
  isVisible: state.menu.isVisible
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(toggleMenu())
});

export const SideMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
