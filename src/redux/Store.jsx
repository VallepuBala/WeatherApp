import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import weatherReducer from "./reducer/weatherReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;