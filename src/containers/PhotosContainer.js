import React from "react";
import { connect } from "react-redux";

import Photos from "../components/Photos/index";
import { toggleLike } from "../actions/likesActions";
import { fetchPhotos, showMore } from "../actions/index";

class PhotosContainer extends React.Component {
  async componentDidMount() {
    this.fetcher();
  }
  componentDidUpdate(prevProps) {
    if (this.props.searchFor !== prevProps.searchFor) {
      this.fetcher();
    }
  }
  async fetcher() {
    const str = this.props.searchFor;
    this.props.fetchPhotos(str);
  }
  render() {
    const {
      photos,
      userName,
      toggleLike,
      isFetching,
      error,
      showMore,
      searchFor,
      isFetchingForMore
    } = this.props;

    return (
      <Photos
        photos={photos}
        isFetching={isFetching}
        isFetchingForMore={isFetchingForMore}
        error={error}
        userName={userName}
        send={toggleLike}
        showMore={showMore}
        searchFor={searchFor}
      />
    );
  }
}
const mapStateToProps = state => ({
  searchFor: state.photos.searchFor,
  userName: state.user.vk_id,
  photos: state.photos.photos,
  isFetching: state.photos.isFetching,
  error: state.photos.error,
  isFetchingForMore: state.photos.isFetchingForMore
});

export default connect(
  mapStateToProps,
  { toggleLike, fetchPhotos, showMore }
)(PhotosContainer);
