import React from "react";
import PropTypes from "prop-types";

import "./style.css";
import PhotosItemContainer from "../../containers/PhotosItemContainer";
import PhotosItem from "../../components/PhotosItem";

const Favorites = ({ favPhotos, userName, send, favPhotosLength }) => (
  <div className="favorites">
    <div className="favorite__header">
      <h1>Favorites photos</h1>
      <p style={{ color: "#a5a5a5" }}>
        you liked <b style={{ color: "#000" }}>{favPhotosLength}</b> photos
      </p>
    </div>
    <div className="favorites__body">
      {favPhotos.map(el => {
        return (
          <PhotosItem
            key={el.id_photo}
            urls={el.urls}
            id={el.id_photo}
            description={el.description}
            isLiked
            toggleVisibility={true}
            userName={userName}
            send={send}
          />
        );
      })}
    </div>
  </div>
);

Favorites.propTypes = {
  favPhotos: PropTypes.array.isRequired,
  userName: PropTypes.string.isRequired,
  send: PropTypes.func.isRequired,
  favPhotosLength: PropTypes.number.isRequired
};

export default Favorites;
