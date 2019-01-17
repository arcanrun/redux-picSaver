import { combineReducers } from "redux";
import { photos } from "./unsplashReducer";
import { like } from "./likeReducer";

export const rootReducer = combineReducers({
  photos,
  like
});
