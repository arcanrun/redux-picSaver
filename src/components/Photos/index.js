import React from "react";
import { array } from "prop-types";

import PhotosItem from "../PhotosItem/index";
import "./style.css";

class Photos extends React.Component {
  static defaultProps = {
    photos: []
  };
  static propTypes = {
    photos: array.isRequired
  };
  render() {
    const { photos } = this.props;

    return (
      <div className="photos">
        {photos.map(el => {
          return <PhotosItem key={el.id} urls={el.urls} />;
        })}
      </div>
    );
  }
}

export default Photos;
