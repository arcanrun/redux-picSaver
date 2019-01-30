import React from "react";
import { connect } from "react-redux";

import Photos from "../components/Photos/index";
import unsplashApi from "../API/API";

const mapStateToProps = state => ({
  photos: state.photos.photos,
  searchFor: state.photos.searchFor,
  userName: state.user.vk_id
});

// export const PhotosContainer = connect(mapStateToProps)(Photos);
class PhotosContainer extends React.Component {
  state = {
    photos: [],
    isFetching: false,
    error: false
  };
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

    this.setState({ isFetching: !this.state.isFetching }, () =>
      console.log("GET_PHOTOS_REQUEST", `isFetching: ${this.state.isFetching}`)
    );

    let photosArrayUnsplash = await fetch(unsplashApi(str))
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({ isFetching: !this.state.isFetching });
        return res.results;
      })
      .catch(err => {
        this.setState({ isFetching: !this.state.isFetching });
        console.log(new Error(err));
      });

    let ids = photosArrayUnsplash.map(el => el.id);

    let withCheckdLikes = await this.queryIsLike(ids);
    if (withCheckdLikes === undefined) withCheckdLikes = [];
    photosArrayUnsplash.map(el => {
      if (withCheckdLikes.includes(el.id)) {
        el.isLiked = true;
      } else {
        el.isLiked = false;
      }
      return el;
    });
    this.setState({ photos: photosArrayUnsplash });
  }
  queryIsLike(arr) {
    return fetch("http://127.0.0.1:8000/is-like/", {
      method: "POST",
      body: JSON.stringify(arr)
    })
      .then(res => res.json())
      .then(res => {
        return res.IS_LIKED;
      })
      .catch(err => console.log(new Error(err)));
  }
  render() {
    const { photos, isFetching, error } = this.state;

    return (
      <Photos
        photos={photos}
        isFetching={isFetching}
        error={error}
        userName={this.props.userName}
      />
    );
  }
}

export default connect(mapStateToProps)(PhotosContainer);
