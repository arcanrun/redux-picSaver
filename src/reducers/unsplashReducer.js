import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILURE,
  SHOW_MORE_REQUEST,
  SHOW_MORE_SUCCESS
} from "../constants/requestsUnsplashActions";

const initailState = {
  isFetching: false,
  isFetchingForMore: false,
  photos: [],
  error: false,
  error_message: "",
  searchFor: ""
};

export function photos(state = initailState, action) {
  switch (action.type) {
    case SHOW_MORE_REQUEST:
      return {
        ...state,
        isFetchingForMore: action.payload.isFetching,
        searchFor: action.payload.searchFor
      };

    case SHOW_MORE_SUCCESS:
      return {
        ...state,
        isFetchingForMore: false,
        photos: [...state.photos, ...action.payload.photos],
        page: ++state.page
      };

    case GET_PHOTOS_REQUEST:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        searchFor: action.payload.searchFor
      };

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

    default:
      return state;
  }
}
