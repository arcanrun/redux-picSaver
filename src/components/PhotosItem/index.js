import React from "react";
import PropTypes from "prop-types";

import "./style.css";
import "../../static/icons.css";

const PhotosItems = ({ urls }) => (
  <div className="photos__item">
    <div className="photos__item_warapper">
      <img
        className="photos__item_img"
        src={urls.regular}
        alt={"photos_unsplash"}
      />
    </div>
    <div className="photos__item_footer">
      <span>Name</span>
      <span>
        <i className="heart_black" />
      </span>
    </div>
  </div>
);

// PhotosItems.propTypes = {
//     urls:
// }

export default PhotosItems;
