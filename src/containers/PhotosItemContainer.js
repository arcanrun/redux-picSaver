import React from "react";

import PhotosItem from "../components/PhotosItem/index";
import { addLikeAPI, ADD_LIKE } from "../API/API_LIKE";

export class PhotosItemContainer extends React.Component {
  sendLike = (id, urls, toggleState) => {
    toggleState();

    let sendData = {
      id_photo: id,
      urls,
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
  render() {
    const externalProps = this.props;
    return <PhotosItem {...externalProps} send={this.sendLike} />;
  }
}
