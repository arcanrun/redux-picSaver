import React from "react";
import { array, bool, func } from "prop-types";

import WarningBlock from "../WarningBlock";
import "./style.css";
import Spinner from "../Spinner";
import PhotosItem from "../PhotosItem";
import Spinner2 from "../Spinner2";

class Photos extends React.Component {
  state = {
    page: 1
  };
  static defaultProps = {
    photos: []
  };
  static propTypes = {
    photos: array.isRequired,
    isFetching: bool.isRequired,
    error: bool.isRequired,
    showMore: func.isRequired
  };
  showMore = () => {
    console.log(this.props);
    this.setState({ page: this.state.page + 1 }, () =>
      this.props.showMore(this.props.searchFor, this.state.page)
    );
  };
  render() {
    const {
      photos,
      isFetching,
      error,
      userName,
      send,
      isSendingLike,
      isFetchingForMore
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
        {isFetchingForMore ? (
          <Spinner2 />
        ) : (
          <span onClick={this.showMore}>show more</span>
        )}
      </div>
    );
  }
}

export default Photos;
