import * as types from "../constants/userActionsConstants";
import { addLikeAPI, ADD_LIKE } from "../API/API_LIKE";

const requestToggleLike = () => ({
  type: types.TOGGLE_LIKE_REQUEST,
  payload: {
    isFetching: true
  }
});

const successToggleLikeRemove = id_photo => ({
  type: types.TOGGLE_LIKE_REMOVE_SUCCESS,
  payload: {
    id_photo,
    isFetching: false
  }
});

const successToggleLikeAdded = photo => ({
  type: types.TOGGLE_LIKE_ADDED_SUCCESS,
  payload: {
    photo,
    isFetching: false
  }
});

const errorToggleLike = err => ({
  type: types.TOGGLE_LIKE_FAIELD,
  payload: {
    error: true,
    error_message: new Error(err)
  }
});

export function toggleLike(id, urls, description, idUser) {
  return dispatch => {
    dispatch(requestToggleLike());

    let sendData = {
      id_photo: id,
      urls,
      description,
      id_user: idUser
    };
    fetch(addLikeAPI(ADD_LIKE), {
      method: "POST",
      body: JSON.stringify(sendData)
    })
      .then(res => res.json())
      .then(res => {
        if (res.STATUS === "removed") {
          let id = res.RESPONSE;
          dispatch(successToggleLikeRemove(id));
        } else if (res.STATUS === "added") {
          let photo = res.RESPONSE;
          dispatch(successToggleLikeAdded(photo));
        }
        return res;
      })
      .catch(err => {
        dispatch(errorToggleLike(err));
      });
  };
}
