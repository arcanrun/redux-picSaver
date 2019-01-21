import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILURE
} from "../constants/requestsUnsplashActions";

const initailState = {
  isFetching: false,
  photos: 0,
  error: false,
  error_message: "",
  searchFor: ""
};

export function photos(state = initailState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        searchFor: action.payload.searchFor
      };

    // case GET_PHOTOS_SUCCESS:
    //   return {
    //     ...state,
    //     isFetching: action.payload.isFetching,
    //     photos: action.payload.photos
    //   };
    // case GET_PHOTOS_FAILURE:
    //   return {
    //     ...state,
    //     isFetching: action.payload.isFetching,
    //     error: action.payload.error,
    //     error_message: action.payload.error_message
    //   };

    default:
      return state;
  }
}
