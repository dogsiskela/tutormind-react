import { combineReducers } from 'redux';
import reducers from './reducers';
import auth from './auth';


const appReducer = combineReducers({
    reducers: reducers,
    auth: auth,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
