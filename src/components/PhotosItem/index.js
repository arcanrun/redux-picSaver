import React from "react";
import PropTypes from "prop-types";

import "./style.css";
import "../../static/icons.css";

const PhotosItems = ({ urls, id, description, onClick, isLiked }) => (
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
        {isLiked ? (
          <i
            className="heart_red"
            style={{ cursor: "pointer" }}
            onClick={() => onClick(id, urls)}
          />
        ) : (
          <i
            className="heart_black"
            style={{ cursor: "pointer" }}
            onClick={() => onClick(id, urls)}
          />
        )}
      </span>
    </div>
  </div>
);

PhotosItems.propTypes = {
  urls: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default PhotosItems;
