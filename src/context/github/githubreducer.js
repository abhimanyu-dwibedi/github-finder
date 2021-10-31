// import { Switch } from "react-router";
import {
  SERCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from "../type.js";

export default (state, action) => {
  switch (action.type) {
    case SERCH_USERS:
      return {
        ...state,
        Users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_USERS:
      return {
        ...state,
        Users: [],
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };

    case REMOVE_ALERT:
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
};
