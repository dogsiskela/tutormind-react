import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';

export default (state, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return { ...state, login: action.payload }

        case actionTypes.REGISTER:
            return { ...state, register: action.payload }

        default:
            return null;
    }
};