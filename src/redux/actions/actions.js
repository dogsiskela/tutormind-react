import axios from 'axios';
import * as actionTypes from './actionTypes';
import { persistor } from '../config/store';

export const loginAction = (payload) => async dispatch => {

  return axios.post("http://localhost:9091/api/user/login", {
    username: 'tesce',
    password: 'test'
  }).then(data => {
    dispatch({
      type: actionTypes.LOGIN,
      payload: data
    })

    persistor.flush();

  })
    .catch(e => console.log(e));

};

