import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import usersDuck from "./usersDucks";
import verifyNumberDucks from "./verifyNumberDucks";
import setProfileDucks from "./setProfileDucks";
import setSocketDucks from "./setSocketDucks";

const rootReducer = combineReducers({
  usersData: usersDuck,
  verifyNumberData: verifyNumberDucks,
  setProfileData: setProfileDucks,
  setSocketData: setSocketDucks,
});

export default function generateStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
