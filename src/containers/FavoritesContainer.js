import React from "react";

import Favorites from "../components/Favorites";
import { API_LIKE, GET_LIKES, addLikeAPI, ADD_LIKE } from "../API/API_LIKE";

class FavoritesContainer extends React.Component {
  state = {
    favPhotos: []
  };

  componentDidMount() {
    fetch(API_LIKE + GET_LIKES)
      .then(res => res.json())
      .then(
        res => this.setState({ favPhotos: res.data }, console.log(res.data)),
        res => console.log(res)
      )
      .catch(res => console.log(new Error(res)));
  }
  render() {
    const { favPhotos } = this.state;

    return <Favorites favPhotos={favPhotos} send={this.sendLike} />;
  }
}

export default FavoritesContainer;
