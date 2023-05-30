import axios from 'axios';
import * as actionTypes from './actionTypes';
import { persistor } from '../config/store';


export const registerAction = (payload) => async dispatch => {
  return axios.post("http://localhost:9091/api/user/register", payload).then(data => {
    dispatch({
      type: actionTypes.REGISTER,
      payload: data
    })

    persistor.flush();

  })
    .catch(e => console.log(e));
};


export const loginAction = (payload) => async dispatch => {
  return axios.post("http://localhost:9091/api/user/login", payload).then(data => {
    dispatch({
      type: actionTypes.LOGIN,
      payload: data
    })

    persistor.flush();
    dispatch(resetLoginAction());
  })
    .catch(e => console.log(e));
};

export const resetLoginAction = (payload) => async dispatch => {
  dispatch({
    type: actionTypes.LOGIN,
    payload: {}
  })
};

export const getUserAction = (username) => async dispatch => {
  return axios.get("http://localhost:9091/api/user/" + username).then(data => {
    dispatch({
      type: actionTypes.GET_USER_PROFILE,
      payload: data
    })

  })
    .catch(e => console.log(e));
}

