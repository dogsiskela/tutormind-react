import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';

export default (state, action) => {
    switch (action.type) {
        // case actionTypes.LOGIN:
        //     console.log(state, action)
        //     return { ...state, login: action.payload }

        default:
            return null;
    }
};