import React from "react";
import { connect } from "react-redux";

import PhotosItem from "../components/PhotosItem/index";
import { toggleLike } from "../actions/likeActions";

const mapStateToProps = state => {
  return {
    isSendingLike: state.photos.isSendingLike,
    errorLikeSending: state.photos.error_like_sending
  };
};

const mapDispatchToProps = dispatch => ({
  onClick: (id, urls) => dispatch(toggleLike(id, urls))
});

export const PhotosItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosItem);
