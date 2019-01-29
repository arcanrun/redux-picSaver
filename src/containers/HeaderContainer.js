import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header/index";
import { toggleMenu } from "../actions/menuActions";

const mapStateToProps = state => ({
  isVisible: state.menu.isVisible
});
// const mapDispatchToProps = dispatch => ({
//   onClick() {
//     dispatch(toggleMenu());
//   }
// }); ---> https://github.com/tayiorbeii/egghead.io_idiomatic_redux_course_notes/blob/master/09-Using_mapDispatchToProps_Shorthand_Notation.md

export const HeaderContainer = connect(
  mapStateToProps,
  { onClick: toggleMenu }
)(Header);
