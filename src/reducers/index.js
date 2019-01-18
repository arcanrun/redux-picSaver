import { combineReducers } from "redux";
import { photos } from "./unsplashReducer";

export const rootReducer = combineReducers({
  photos
});
