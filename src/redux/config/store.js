import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { routerMiddleware } from 'react-router-redux';


const middleware = applyMiddleware(promise, thunk, routerMiddleware(createBrowserHistory()));

const persistConfig = {
    key: 'tutormind',
    storage,
    whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);



const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })) || compose;

const store = createStore(persistedReducer, composeEnhancers(middleware));
const persistor = persistStore(store);

export default store;
export { persistor };
