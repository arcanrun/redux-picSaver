import React from "react";
import { array } from "prop-types";

import PhotosItem from "../PhotosItem/index";
import ErrorBlock from "../ErrorBlock";
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
    const { photos, isFetching, error, error_message } = this.props;

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
              />
            );
          })
        )}
      </div>
    );
  }
}

export default Photos;
