import {
  SEND_LIKE_REQUEST,
  SEND_LIKE_SUCCES,
  SEND_LIKE_FAILURE
} from "../constants/likeConstants";

const initialState = {
  isSending: false,
  error: false,
  error_message: "",
  id_photo_which_liked: []
};
export function like(state = initialState, action) {
  switch (action.type) {
    case SEND_LIKE_REQUEST:
      return { ...state, isSending: action.isSending };
    case SEND_LIKE_SUCCES:
      let photos_ids = state.id_photo_which_liked;
      photos_ids.push(action.payload.id);

      return {
        ...state,
        isSending: action.isSending,
        id_photo_which_liked: photos_ids
      };
    case SEND_LIKE_FAILURE:
      return {
        ...state,
        isSending: action.isSending,
        error: action.error,
        error_message: action.error_message
      };
    default:
      return state;
  }
}
