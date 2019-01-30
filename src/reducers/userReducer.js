import * as types from "../constants/userActionsConstants";

const initialState = {
  name: "",
  last_name: "",
  avatar: "",
  vk_id: "",
  email: "",
  favorites_photos: {
    isFetching: false,
    error: false,
    error_message: false,
    toggleIsFetching: false,
    photos: []
  },
  isFetching: false,
  error: false,
  error_message: ""
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_FETCHED_SUCCESS:
      return {
        ...state,
        name: action.payload.first_name,
        last_name: action.payload.last_name,
        avatar: action.payload.photo_200,
        vk_id: "" + action.payload.id
      };
    case types.EMAIL_FETCHED_SUCCESS:
      return { ...state, email: action.payload.email };
    case types.EMAIL_FETCHED_FAILED:
      return { ...state, email: action.payload.error_type };
    case types.GET_FAVPHOTOS_REQUEST:
      return {
        ...state,
        favorites_photos: {
          ...state.favorites_photos,
          isFetching: action.payload.isFetching
        }
      };
    case types.GET_FAVPHOTOS_SUCCESS:
      return {
        ...state,
        favorites_photos: {
          ...state.favorites_photos,
          isFetching: action.payload.isFetching,
          photos: action.payload.photos
        }
      };
    case types.GET_FAVPHOTOS_FAIELD:
      return {
        ...state,
        favorites_photos: {
          ...state.favorites_photos,
          isFetching: action.payload.isFetching,
          error: action.payload.error,
          error_message: action.payload.error_message
        }
      };
    case types.TOGGLE_LIKE_REQUEST:
      return {
        ...state,
        favorites_photos: {
          ...state.favorites_photos,
          isFetching: action.payload.isFetching
        }
      };
    case types.TOGGLE_LIKE_REMOVE_SUCCESS:
      let idOnDelete = action.payload.id_photo;
      let prevPhotos = state.favorites_photos.photos;
      let nextPhotos = [];
      prevPhotos.forEach(el => {
        if (el.id_photo !== idOnDelete) {
          nextPhotos.push(el);
        }
      });
      return {
        ...state,
        favorites_photos: {
          ...state.favorites_photos,
          toggleIsFetching: action.payload.isFetching,
          photos: nextPhotos
        }
      };
    case types.TOGGLE_LIKE_ADDED_SUCCESS:
      return {
        ...state,
        favorites_photos: {
          ...state.favorites_photos,
          isFetching: action.payload.isFetching,
          photos: [...state.favorites_photos.photos, action.payload.photo]
        }
      };
    default:
      return state;
  }
};
