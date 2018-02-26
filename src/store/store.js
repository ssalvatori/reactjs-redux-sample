import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import reducers from '../reducers'

import thunk from 'redux-thunk';

const composeEnhancers =
    typeof window === "object" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(logger, thunk)
)

const store = createStore(reducers, {}, enhancer)

export default store