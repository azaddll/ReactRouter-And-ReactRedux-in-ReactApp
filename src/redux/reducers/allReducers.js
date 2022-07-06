import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { stylesReducer } from "./stylesReducer";
import { authReducer } from "./authReducer";

export const allReducers = combineReducers({
  user: userReducer,
  style:stylesReducer,
  auth:authReducer,
});
