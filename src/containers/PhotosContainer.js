import React from "react";
import { connect } from "react-redux";

import Photos from "../components/Photos/index";

const mapStateToProps = state => ({
  photos: state.photos.photos,
  isFetching: state.photos.isFetching,
  error: state.photos.error,
  error_message: state.photos.error_message
});

export const PhotosContainer = connect(mapStateToProps)(Photos);
