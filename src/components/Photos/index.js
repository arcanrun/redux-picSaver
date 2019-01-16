import React from "react";
import { array } from "prop-types";

import PhotosItem from "../PhotosItem/index";
import "./style.css";
import Spinner from "../Spinner";

class Photos extends React.Component {
  static defaultProps = {
    photos: []
  };
  static propTypes = {
    photos: array.isRequired
  };
  render() {
    const { photos } = this.props;
    const { isFetching } = this.props;

    return (
      <div className="photos">
        {isFetching ? (
          <Spinner />
        ) : (
          photos.map(el => {
            return <PhotosItem key={el.id} urls={el.urls} />;
          })
        )}
      </div>
    );
  }
}

export default Photos;
