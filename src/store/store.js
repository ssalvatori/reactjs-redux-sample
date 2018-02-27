import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import reducers from '../reducers'

import thunkMiddleware from 'redux-thunk'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import promiseMiddleware from 'redux-promise-middleware'

const composeEnhancers =
    typeof window === "object" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware, promiseMiddleware(), logger, loadingBarMiddleware())
)

const store = createStore(reducers, {}, enhancer)

export default store