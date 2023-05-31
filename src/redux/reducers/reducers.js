import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';

export default (state, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_PROFILE:
            return { ...state, userProfile: action.payload }
        case actionTypes.GET_TUTORS:
            return { ...state, tutors: action.payload }
        default:
            return { ...state };
    }
};