import React from "react";
import { array, bool } from "prop-types";

import ErrorBlock from "../ErrorBlock";
import "./style.css";
import Spinner from "../Spinner";
import PhotosItem from "../PhotosItem";

class Photos extends React.Component {
  static defaultProps = {
    photos: []
  };
  static propTypes = {
    photos: array.isRequired,
    isFetching: bool.isRequired,
    error: bool.isRequired
  };
  render() {
    const {
      photos,
      isFetching,
      error,
      userName,
      send,
      isSendingLike
    } = this.props;

    return (
      <div className="photos">
        {isFetching ? (
          <Spinner />
        ) : error ? (
          <ErrorBlock title={"Error while fetching"} />
        ) : photos.length === 0 ? (
          <ErrorBlock title={"Nothing found"} />
        ) : (
          photos.map(el => {
            return (
              <PhotosItem
                key={el.id}
                urls={el.urls}
                id={el.id}
                description={el.description}
                isLiked={el.isLiked}
                toggleVisibility={false}
                userName={userName}
                send={send}
                isSendingLike={isSendingLike}
              />
            );
          })
        )}
      </div>
    );
  }
}

export default Photos;
