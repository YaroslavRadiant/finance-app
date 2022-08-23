import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import sharesReducer from "./reducers/sharesReducer";
import checkboxReducer from "./reducers/checkboxReducer";
const rootReducer = combineReducers({
  shares: sharesReducer,
  sharesStatus: checkboxReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware())
);
