import React from "react";
import { connect } from "react-redux";

import { requestPhotos } from "../actions/index";
import Search from "../components/Search/index";

const mapDispatchToProps = dispatch => ({
  onChange: str => dispatch(requestPhotos(str))
});

export const SearchContainer = connect(
  null,
  mapDispatchToProps
)(Search);
