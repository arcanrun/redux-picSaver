import React from "react";

import "./style.css";
import PhotosItem from "../PhotosItem";

class Favorites extends React.Component {
  state = {
    favPhotos: []
  };
  componentDidMount() {
    fetch("http://127.0.0.1:8000/get-likes/")
      .then(res => res.json())
      .then(
        res => this.setState({ favPhotos: res.data }, console.log(res.data)),
        res => console.log(res)
      )
      .catch(res => console.log(new Error(res)));
  }
  render() {
    const { favPhotos } = this.state;
    return (
      <div className="favorites">
        <div className="favorite__header">
          <h1>Favorites photos</h1>
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
  }
}
export default Favorites;
