import React from "react";
import { connect } from "react-redux";

import Photos from "../components/Photos/index";

const mapStateToProps = state => ({
  photos: state.photos,
  isFetching: state.isFetching,
  error: state.error,
  error_message: state.error_message
});

export const PhotosContainer = connect(mapStateToProps)(Photos);
