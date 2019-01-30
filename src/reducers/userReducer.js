import * as types from "../constants/userActionsConstants";

const initialState = {
  name: "",
  last_name: "",
  avatar: "",
  vk_id: "",
  email: "",
  favorites_photos: [],
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
        vk_id: action.payload.id
      };
    case types.EMAIL_FETCHED_SUCCESS:
      return { ...state, email: action.payload.email };
    case types.EMAIL_FETCHED_FAILED:
      return { ...state, email: action.payload.error_type };
    default:
      return state;
  }
};
