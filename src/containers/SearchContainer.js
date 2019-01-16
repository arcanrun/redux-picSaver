import React from "react";
import { connect } from "react-redux";

import { fetchPhotos } from "../actions/index";
import Search from "../components/Search/index";

const mapDispatchToProps = dispatch => ({
  onChange: str => dispatch(fetchPhotos(str))
});

export const SearchContainer = connect(
  null,
  mapDispatchToProps
)(Search);
