import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILURE
} from "../constants/ActionType";
import unsplashApi from "../API/API";

const requestPhotos = str => ({
  type: GET_PHOTOS_REQUEST,
  payload: {
    isFetching: true
  }
});

const recivePhotos = photos => ({
  type: GET_PHOTOS_SUCCESS,
  payload: {
    photos: photos,
    isFetching: false
  }
});

const errorPhotos = err => ({
  type: GET_PHOTOS_FAILURE,
  payload: {
    error: true,
    isFetching: false,
    error_message: new Error(err)
  }
});

export const fetchPhotos = str => {
  return dispatch => {
    dispatch(requestPhotos());

    fetch(unsplashApi(str))
      .then(res => {
        return res.json();
      })
      .then(res => dispatch(recivePhotos(res.results)))
      .catch(err => dispatch(errorPhotos(err)));
  };
};
