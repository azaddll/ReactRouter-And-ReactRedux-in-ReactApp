import { SETUSERAGE, SETUSERNAME } from "../actionTypes";

const initialState = {
  userName: "",
  userAge: 0,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETUSERNAME:
      return { ...state, userName: action.payload };
    case SETUSERAGE:
      return { ...state, userAge: action.payload };

    default:
      return state;
  }
};
