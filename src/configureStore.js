import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { photos } from "./reducers/index";
import { logger } from "redux-logger";

const middleware = [thunk, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  photos,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware))
);
