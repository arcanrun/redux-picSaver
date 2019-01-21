import React from "react";

import Favorites from "../components/Favorites";
import { API_LIKE, GET_LIKES, addLikeAPI, ADD_LIKE } from "../API/API_LIKE";

class FavoritesContainer extends React.Component {
  state = {
    favPhotos: []
  };
  sendLike = (id, urls, description, toggleState) => {
    toggleState();
    let sendData = {
      id_photo: id,
      urls,
      description,
      id_user: "empty"
    };
    console.log("TOGGLE_LIKE_REQUEST", sendData);
    fetch(addLikeAPI(ADD_LIKE), {
      method: "POST",
      // credentials: "include",
      // mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": "csrftoken"
      },
      body: JSON.stringify(sendData)
    })
      .then(res => {
        toggleState();
        console.log("TOGGLE_LIKE_SUCCESS", res);
        return res.json();
      })
      .catch(err => {
        toggleState();
        console.log(new Error(err));
      });
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
