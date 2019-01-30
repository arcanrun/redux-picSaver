import * as VKConnect from "@vkontakte/vkui-connect";

import * as types from "../constants/userActionsConstants";
import { addLikeAPI, GET_LIKES } from "../API/API_LIKE";

export function fetchUser() {
  return () => {
    VKConnect.send("VKWebAppGetUserInfo", {});
  };
}

export function fetchEmail() {
  return () => {
    VKConnect.send("VKWebAppGetEmail", {});
  };
}

const requestFavPhotos = user => ({
  type: types.GET_FAVPHOTOS_REQUEST,
  payload: {
    isFetching: true
  }
});

const reciveFavPhotos = photos => ({
  type: types.GET_FAVPHOTOS_SUCCESS,
  payload: {
    photos,
    isFetching: false
  }
});

const errorFavPhotos = err => ({
  type: types.GET_FAVPHOTOS_FAIELD,
  payload: {
    error: true,
    error_message: new Error(err)
  }
});

export function fetchFavPhotos(user) {
  return dispatch => {
    const data = { vk_id: user };
    dispatch(requestFavPhotos());
    return fetch(addLikeAPI(GET_LIKES), {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        dispatch(reciveFavPhotos(res.RESPONSE));
        return res;
      })
      .catch(err => dispatch(errorFavPhotos(err)));
  };
}
