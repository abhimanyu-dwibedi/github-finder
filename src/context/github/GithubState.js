import React, { useReducer } from "react";
import axios from "axios";
import githubcontext from "./githubContext";
import githubreducers from "./githubreducer";
import {
  SERCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from "../type.js";
let githubclientid;
let githubclientsecret;
if (process.env.NODE_ENV !== "production") {
  githubclientid = process.env.REACT_APP_GITHUB_CLINT_ID;
  githubclientsecret = process.env.REACT_APP_GITHUB_CLINT_SECRET;
} else {
  githubclientid = process.env.GITHUB_CLINT_ID;
  githubclientsecret = process.env.GITHUB_CLINT_SECRET;
}
const GithubState = (props) => {
  const initialState = {
    Users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };
  const [state, dispatch] = useReducer(githubreducers, initialState);
  //    serch users
  const Searchusers = async (text) => {
    setloading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubclientid}&client_secret=${githubclientsecret}`
    );

    dispatch({
      type: SERCH_USERS,
      payload: res.data.items,
    });
  };
  const getUser = async (username) => {
    setloading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubclientid}&client_secret=${githubclientsecret}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };
  // get user

  // get repos
  const getUserRepo = async (username) => {
    setloading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${githubclientid}&client_secret=${githubclientsecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };
  // clear user
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  // set loading
  const setloading = () => dispatch({ type: SET_LOADING });
  //
  const setAlert = (msg, type) => {
    console.log("in the state context");
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };

  return (
    <githubcontext.Provider
      value={{
        Users: state.Users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        alert: state.alert,
        Searchusers,
        clearUsers,
        getUser,
        getUserRepo,
        setAlert,
      }}
    >
      {props.children}
    </githubcontext.Provider>
  );
};

export default GithubState;
