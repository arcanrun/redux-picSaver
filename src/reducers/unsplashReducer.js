import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILURE
} from "../constants/requestsUnsplashActions";
import {
  TOGGLE_LIKE_SUCCESS,
  TOGGLE_LIKE_REQUEST,
  TOGGLE_LIKE_FAILURE
} from "../constants/likeConstants";

const initailState = {
  isFetching: false,
  isSendingLike: false,
  error_like_sending: false,
  error_like_sending_message: "",
  photos: [],
  error: false,
  error_message: ""
};

export function photos(state = initailState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, isFetching: action.payload.isFetching };

    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        photos: action.payload.photos
      };
    case GET_PHOTOS_FAILURE:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        error: action.payload.error,
        error_message: action.payload.error_message
      };
    case TOGGLE_LIKE_REQUEST:
      return { ...state, isSendingLike: action.isSendingLike };
    case TOGGLE_LIKE_SUCCESS:
      let newPhotos = state.photos.map(el => {
        if (el.id === action.payload.id) {
          el.isLiked = !el.isLiked;
        }
        return el;
      });
      return {
        ...state,
        photos: newPhotos,
        isSendingLike: action.isSendingLike
      };
    default:
      return state;
  }
}
