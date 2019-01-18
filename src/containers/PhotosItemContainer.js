import React from "react";
import { connect } from "react-redux";

import PhotosItem from "../components/PhotosItem/index";
import { toggleLike } from "../actions/likeActions";

const mapDispatchToProps = dispatch => ({
  onClick: (id, urls) => dispatch(toggleLike(id, urls))
});

export const PhotosItemContainer = connect(
  null,
  mapDispatchToProps
)(PhotosItem);
