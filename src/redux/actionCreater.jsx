import {
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  REMOVE_TODO_REQUEST,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  EDIT_TODO_REQUEST,
  EDIT_TODO_SUCCESS,
  EDIT_TODO_FAILURE,
  INCREMATE,
  DECREMATE,
} from "./actionType";

export const INC = (payload) => {
  return {
    type: INCREMATE,
    payload,
  };
};

export const DEC = (payload) => {
  return {
    type: DECREMATE,
    payload,
  };
};

export const GTR = (payload) => {
  return {
    type: GET_TODO_REQUEST,
    payload,
  };
};

export const GTS = (payload) => {
  return {
    type: GET_TODO_SUCCESS,
    payload,
  };
};

export const GTF = (payload) => {
  return {
    type: GET_TODO_FAILURE,
    payload,
  };
};

export const ATR = (payload) => {
  return {
    type: ADD_TODO_REQUEST,
    payload,
  };
};

export const ATS = (payload) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload,
  };
};

export const ATF = (payload) => {
  return {
    type: ADD_TODO_FAILURE,
    payload,
  };
};

export const RTR = (payload) => {
  return {
    type: REMOVE_TODO_REQUEST,
    payload,
  };
};

export const RTS = (payload) => {
  return {
    type: REMOVE_TODO_SUCCESS,
    payload,
  };
};

export const RTF = (payload) => {
  return {
    type: REMOVE_TODO_FAILURE,
    payload,
  };
};

export const UTR = (payload) => {
  return {
    type: UPDATE_TODO_REQUEST,
    payload,
  };
};

export const UTS = (payload) => {
  return {
    type: UPDATE_TODO_SUCCESS,
    payload,
  };
};

export const UTF = (payload) => {
  return {
    type: UPDATE_TODO_FAILURE,
    payload,
  };
};

export const ETR = (payload) => {
  return {
    type: EDIT_TODO_REQUEST,
    payload,
  };
};

export const ETS = (payload) => {
  return {
    type: EDIT_TODO_SUCCESS,
    payload,
  };
};

export const ETF = (payload) => {
  return {
    type: EDIT_TODO_FAILURE,
    payload,
  };
};
