import { SETFONTSIZE } from "../actionTypes";

const initialState = {
  fontSize: 0,
};

export const stylesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETFONTSIZE:
      return { ...state, fontSize: action.payload };
    default:
      return state;
  }
};
