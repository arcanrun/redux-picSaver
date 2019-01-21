import React from "react";

import "./style.css";
import PhotosItem from "../PhotosItem";

const Favorites = ({ favPhotos }) => (
  <div className="favorites">
    <div className="favorite__header">
      <h1>Favorites photos</h1>
      <p style={{ color: "#a5a5a5" }}>
        you liked <b style={{ color: "#000" }}>{favPhotos.length}</b> photos
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
            send={() => console.log("EMPTY")}
          />
        );
      })}
    </div>
  </div>
);

export default Favorites;
