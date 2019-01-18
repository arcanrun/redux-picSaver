import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILURE
} from "../constants/requestsUnsplashActions";

const initailState = {
  isFetching: false,
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

    case "TOGGLE_LIKE_SUCCESS":
      let newPhotos = state.photos.map(el => {
        if (el.id === action.payload.id) {
          el.isLiked = !el.isLiked;
        }
        return el;
      });
      return { ...state, photos: newPhotos };
    default:
      return state;
  }
}
