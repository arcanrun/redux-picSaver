import React from "react";
import { array, bool } from "prop-types";

import WarningBlock from "../WarningBlock";
import "./style.css";
import Spinner from "../Spinner";
import PhotosItem from "../PhotosItem";

class Photos extends React.Component {
  state = {
    page: 0
  };
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
          <WarningBlock title={"Error while fetching"} />
        ) : photos.length === 0 ? (
          <WarningBlock title={"Nothing found"} />
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
        <a href="#!">show more</a>
      </div>
    );
  }
}

export default Photos;
