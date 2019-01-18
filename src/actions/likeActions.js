import {
  SEND_LIKE_REQUEST,
  SEND_LIKE_SUCCES,
  SEND_LIKE_FAILURE
} from "../constants/likeConstants";
import { addLikeAPI, ADD_LIKE } from "../API/API_LIKE";

// const requestAddLike = (id, urls) => ({
//   type: SEND_LIKE_REQUEST,
//   isSending: true
// });

// const likesAddedSuccess = id => ({
//   type: SEND_LIKE_SUCCES,
//   isSending: false,
//   error: false,
//   error_message: "",
//   payload: {
//     id: id
//   }
// });

// const likeAddingFail = err => ({
//   type: SEND_LIKE_FAILURE,
//   isSending: false,
//   error: true,
//   error_message: new Error(err)
// });

// export const addLike = (id, urls) => {
//   console.log("--->", urls, id);
//   return dispatch => {
//     let sendData = {
//       id_photo: id,
//       urls,
//       id_user: "empty"
//     };
//     console.log(addLikeAPI(ADD_LIKE));

//     dispatch(requestAddLike());
//     fetch(addLikeAPI(ADD_LIKE), {
//       method: "POST",
//       // credentials: "include",
//       // mode: "no-cors",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         "X-CSRFToken": "csrftoken"
//       },
//       body: JSON.stringify(sendData)
//     })
//       .then(res => {
//         console.log(res);
//         return res.json();
//       })
//       .then(res => dispatch(likesAddedSuccess(res.LIKE_ID_PHOTO)))
//       .catch(err => dispatch(likeAddingFail(err)));
//   };
// };

const TOGGLE_LIKE = "TOGGLE_LIKE";
const TOGGLE_LIKE_REQUEST = "TOGGLE_LIKE_REQUEST";
const TOGGLE_LIKE_SUCCESS = "TOGGLE_LIKE_SUCCESS";
const TOGGLE_LIKE_FAILURE = "TOGGLE_LIKE_SUCCESS";

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
