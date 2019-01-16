import React from "react";
import { connect } from "react-redux";

import Photos from "../components/Photos/index";

const mapStateToProps = state => ({
  photos: state.photos
});

export const PhotosContainer = connect(mapStateToProps)(Photos);
