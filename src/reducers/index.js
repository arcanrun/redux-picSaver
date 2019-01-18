import { combineReducers } from "redux";
import { photos } from "./unsplashReducer";
import { menu } from "./menuReducer";
export const rootReducer = combineReducers({
  photos,
  menu
});
