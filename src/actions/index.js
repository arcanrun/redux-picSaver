import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILURE
} from "../constants/requestsUnsplashActions";
import unsplashApi from "../API/API";

const requestPhotos = str => ({
  type: GET_PHOTOS_REQUEST,
  payload: {
    isFetching: true
  }
});

const recivePhotos = photos => {
  console.log("action___", photos);
  return {
    type: GET_PHOTOS_SUCCESS,
    payload: {
      photos: photos,
      isFetching: false
    }
  };
};

const errorPhotos = err => ({
  type: GET_PHOTOS_FAILURE,
  payload: {
    error: true,
    isFetching: false,
    error_message: new Error(err)
  }
});

export function fetchPhotos(str) {
  return async function(dispatch) {
    dispatch(requestPhotos());
    let photosArrayUnsplash = await fetch(unsplashApi(str))
      .then(res => {
        return res.json();
      })
      .then(res => res.results)
      .catch(err => dispatch(errorPhotos(err)));

    let ids = photosArrayUnsplash.map(el => el.id);

    let withCheckdLikes = await queryIsLike(ids);
    if (withCheckdLikes === undefined) withCheckdLikes = [];
    photosArrayUnsplash.map(el => {
      if (withCheckdLikes.includes(el.id)) {
        el.isLiked = true;
      } else {
        el.isLiked = false;
      }
      return el;
    });

    dispatch(recivePhotos(photosArrayUnsplash));
  };
}

function queryIsLike(arr) {
  return fetch("http://127.0.0.1:8000/is-like/", {
    method: "POST",
    body: JSON.stringify(arr)
  })
    .then(res => res.json())
    .then(res => {
      return res.IS_LIKED;
    })
    .catch(err => console.log(new Error(err)));
}
