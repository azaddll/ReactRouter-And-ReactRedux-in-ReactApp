import { SETAUTH, SETEMAIL, SETPASSWORD } from "../actionTypes";

const initialState = {
  email: "fff",
  password: "",
  auth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETEMAIL:
      return { ...state, email: action.payload };
    case SETPASSWORD:
      return { ...state, password: action.payload };
    case SETAUTH:
      return { ...state, auth: action.payload };
    default:
      return state;
  }
};
