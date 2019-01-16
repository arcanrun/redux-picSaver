import React from "react";
import PropTypes from "prop-types";

import "./style.css";
import "../../static/icons.css";

const PhotosItems = ({ urls, id, description }) => (
  <div className="photos__item">
    <div className="photos__item_warapper">
      <img
        id={id}
        className="photos__item_img"
        src={urls.small}
        alt={description}
      />
    </div>
    <div className="photos__item_footer">
      <span>
        {description !== null && description.length >= 20
          ? description.slice(0, 20) + "..."
          : description}
      </span>
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
