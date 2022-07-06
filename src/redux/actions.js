import {
  SETUSERNAME,
  SETUSERAGE,
  SETFONTSIZE,
  SETEMAIL,
  SETPASSWORD,
  SETAUTH,
} from "./actionTypes";

export const setUserName = (value) => {
  return {
    type: SETUSERNAME,
    payload: value,
  };
};

export const setUserAge = (value) => {
  return {
    type: SETUSERAGE,
    payload: value,
  };
};

export const setFontSize = (value) => {
  return {
    type: SETFONTSIZE,
    payload: value,
  };
};

export const setEmail = (value) => {
  return {
    type: SETEMAIL,
    payload: value,
  };
};

export const setPassword = (value) => {
  return {
    type: SETPASSWORD,
    payload: value,
  };
};

export const setAuth = (value) => {
    return {
      type: SETAUTH,
      payload: value,
    };
  };
  
