import { combineReducers } from "redux";
import { photos } from "./unsplashReducer";
import { menu } from "./menuReducer";
import { user } from "./userReducer";

export const rootReducer = combineReducers({
  photos,
  menu,
  user
});
