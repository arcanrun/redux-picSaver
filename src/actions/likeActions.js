import {
  TOGGLE_LIKE_REQUEST,
  TOGGLE_LIKE_SUCCESS,
  TOGGLE_LIKE_FAILURE
} from "../constants/likeConstants";
import { addLikeAPI, ADD_LIKE } from "../API/API_LIKE";

const requestAddLike = () => ({
  type: TOGGLE_LIKE_REQUEST,
  isSending: true
});

const likesToggleSuccess = id => ({
  type: TOGGLE_LIKE_SUCCESS,
  isSending: false,
  error: false,
  error_message: "",
  payload: {
    id
  }
});

const likeAddingFail = err => ({
  type: TOGGLE_LIKE_FAILURE,
  isSending: false,
  error: true,
  error_message: new Error(err)
});

export const toggleLike = (id, urls) => {
  return dispatch => {
    let sendData = {
      id_photo: id,
      urls,
      id_user: "empty"
    };
    dispatch(requestAddLike());
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
      .then(res => dispatch(likesToggleSuccess(id)))
      .catch(err => dispatch(likeAddingFail(new Error(err))));
  };
};

// type: TOGGLE_LIKE,
//     payload: {
//       id,
//       urls
//     }
